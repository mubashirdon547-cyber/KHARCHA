
/* ==========================================
   KHARCHA — SHARED APPLICATION ENGINE
   ========================================== */

const Kharcha = (() => {
  const KEYS = {
    expenses: "kharcha_expenses",
    budgets: "kharcha_budgets",
    oldBudget: "kharcha_budget",
    language: "kharcha_language"
  };

  const translations = {
    en: {
      dashboard: "Dashboard",
      expenses: "Expenses",
      budgets: "Budgets",
      analytics: "Analytics",
      reports: "Reports",
      settings: "Settings",
      totalSpent: "Total Spent",
      remaining: "Remaining",
      monthlyBudget: "Monthly Budget",
      addExpense: "Add Expense",
      amount: "Amount",
      description: "Description",
      category: "Category",
      date: "Date",
      save: "Save",
      cancel: "Cancel",
      delete: "Delete",
      edit: "Edit",
      food: "Food",
      transport: "Transport",
      shopping: "Shopping",
      bills: "Bills",
      health: "Health",
      entertainment: "Entertainment",
      education: "Education",
      other: "Other"
    },
    ur: {
      dashboard: "ڈیش بورڈ",
      expenses: "اخراجات",
      budgets: "بجٹ",
      analytics: "تجزیات",
      reports: "رپورٹس",
      settings: "ترتیبات",
      totalSpent: "کل خرچ",
      remaining: "باقی رقم",
      monthlyBudget: "ماہانہ بجٹ",
      addExpense: "خرچ شامل کریں",
      amount: "رقم",
      description: "تفصیل",
      category: "قسم",
      date: "تاریخ",
      save: "محفوظ کریں",
      cancel: "منسوخ کریں",
      delete: "حذف کریں",
      edit: "ترمیم",
      food: "کھانا",
      transport: "سفر",
      shopping: "خریداری",
      bills: "بل",
      health: "صحت",
      entertainment: "تفریح",
      education: "تعلیم",
      other: "دیگر"
    },
    roman: {
      dashboard: "Dashboard",
      expenses: "Kharchay",
      budgets: "Budget",
      analytics: "Tajziya",
      reports: "Reports",
      settings: "Settings",
      totalSpent: "Kul Kharch",
      remaining: "Baqi Raqam",
      monthlyBudget: "Mahina Budget",
      addExpense: "Kharcha Shamil Karein",
      amount: "Raqam",
      description: "Tafseel",
      category: "Qism",
      date: "Tareekh",
      save: "Save Karein",
      cancel: "Cancel",
      delete: "Delete",
      edit: "Edit",
      food: "Khana",
      transport: "Safar",
      shopping: "Shopping",
      bills: "Bills",
      health: "Sehat",
      entertainment: "Tafreeh",
      education: "Taleem",
      other: "Dusre"
    }
  };

  function read(key, fallback) {
    try {
      const value = localStorage.getItem(key);
      return value === null ? fallback : JSON.parse(value);
    } catch (error) {
      console.error("Kharcha storage error:", error);
      return fallback;
    }
  }

  function write(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.error("Kharcha could not save data:", error);
      return false;
    }
  }

  function getExpenses() {
    const expenses = read(KEYS.expenses, []);
    return Array.isArray(expenses) ? expenses : [];
  }

  function saveExpenses(expenses) {
    return write(KEYS.expenses, expenses);
  }

  function getBudgets() {
    let budgets = read(KEYS.budgets, null);

    if (!budgets || typeof budgets !== "object" || Array.isArray(budgets)) {
      const oldBudget = Number(
        localStorage.getItem(KEYS.oldBudget) || 0
      );

      budgets = {};

      if (oldBudget > 0) {
        budgets[getCurrentMonth()] = oldBudget;
      }

      write(KEYS.budgets, budgets);
    }

    return budgets;
  }

  function saveBudgets(budgets) {
    return write(KEYS.budgets, budgets);
  }

  function getCurrentMonth() {
    const now = new Date();
    return `${now.getFullYear()}-${String(
      now.getMonth() + 1
    ).padStart(2, "0")}`;
  }

  function getMonthExpenses(month = getCurrentMonth()) {
    return getExpenses().filter(expense => {
      return String(expense.date || "").startsWith(month);
    });
  }

  function getMonthlyBudget(month = getCurrentMonth()) {
    const budgets = getBudgets();
    return Number(budgets[month] || 0);
  }

  function setMonthlyBudget(amount, month = getCurrentMonth()) {
    amount = Number(amount);

    if (!Number.isFinite(amount) || amount < 0) {
      return false;
    }

    const budgets = getBudgets();
    budgets[month] = amount;

    return saveBudgets(budgets);
  }

  function getTotalSpent(month = getCurrentMonth()) {
    return getMonthExpenses(month).reduce((total, expense) => {
      return total + Number(expense.amount || 0);
    }, 0);
  }

  function getRemaining(month = getCurrentMonth()) {
    return getMonthlyBudget(month) - getTotalSpent(month);
  }

  function addExpense(data) {
    const amount = Number(data.amount);

    if (!Number.isFinite(amount) || amount <= 0) {
      throw new Error("Enter a valid expense amount.");
    }

    if (!data.description || !data.date || !data.category) {
      throw new Error("Complete all expense fields.");
    }

    const expenses = getExpenses();

    const expense = {
      id: Date.now().toString() + Math.random().toString(36).slice(2, 7),
      description: String(data.description).trim(),
      amount,
      category: String(data.category),
      date: String(data.date)
    };

    expenses.push(expense);

    if (!saveExpenses(expenses)) {
      throw new Error("Could not save your expense.");
    }

    return expense;
  }

  function updateExpense(id, updates) {
    const expenses = getExpenses();
    const index = expenses.findIndex(expense => String(expense.id) === String(id));

    if (index === -1) return false;

    const amount = Number(updates.amount);

    if (!Number.isFinite(amount) || amount <= 0) return false;

    expenses[index] = {
      ...expenses[index],
      ...updates,
      amount,
      id: expenses[index].id
    };

    return saveExpenses(expenses);
  }

  function deleteExpense(id) {
    const expenses = getExpenses();
    const updated = expenses.filter(
      expense => String(expense.id) !== String(id)
    );

    return updated.length !== expenses.length && saveExpenses(updated);
  }

  function resetMonth(month = getCurrentMonth()) {
    const remainingExpenses = getExpenses().filter(expense => {
      return !String(expense.date || "").startsWith(month);
    });

    return saveExpenses(remainingExpenses);
  }

  function getLanguage() {
    const language = localStorage.getItem(KEYS.language);
    return translations[language] ? language : "en";
  }

  function setLanguage(language) {
    if (!translations[language]) return false;

    localStorage.setItem(KEYS.language, language);
    return true;
  }

  function translate(key) {
    const language = getLanguage();
    return translations[language][key] || translations.en[key] || key;
  }

  function formatCurrency(amount) {
    return new Intl.NumberFormat("en-PK", {
      style: "currency",
      currency: "PKR",
      maximumFractionDigits: 0
    }).format(Number(amount) || 0);
  }

  function getCategoryTotals(month = getCurrentMonth()) {
    const totals = {};

    getMonthExpenses(month).forEach(expense => {
      const category = expense.category || "other";
      totals[category] = (totals[category] || 0) + Number(expense.amount || 0);
    });

    return totals;
  }

  function getMonthlySummary(month = getCurrentMonth()) {
    const budget = getMonthlyBudget(month);
    const spent = getTotalSpent(month);

    return {
      month,
      budget,
      spent,
      remaining: budget - spent,
      percentage: budget > 0 ? (spent / budget) * 100 : 0,
      transactionCount: getMonthExpenses(month).length,
      categories: getCategoryTotals(month)
    };
  }

  return {
    getExpenses,
    saveExpenses,
    getBudgets,
    saveBudgets,
    getCurrentMonth,
    getMonthExpenses,
    getMonthlyBudget,
    setMonthlyBudget,
    getTotalSpent,
    getRemaining,
    addExpense,
    updateExpense,
    deleteExpense,
    resetMonth,
    getLanguage,
    setLanguage,
    translate,
    formatCurrency,
    getCategoryTotals,
    getMonthlySummary,
    translations
  };
})();

/* Make the application available to all pages. */
window.Kharcha = Kharcha;

