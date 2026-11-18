
/* ==========================================
   KHARCHA — SHARED APPLICATION ENGINE
   Multilingual Edition
   ========================================== */

const Kharcha = (() => {

  const KEYS = {
    expenses: "kharcha_expenses",
    budgets: "kharcha_budgets",
    oldBudget: "kharcha_budget",
    language: "kharcha_language"
  };

  /* THREE COMPLETE LANGUAGE DICTIONARIES */

  const translations = {

    en: {
      dashboard: "Dashboard",
      workspace: "Workspace",
      preferences: "Preferences",
      expenses: "Expenses",
      budgets: "Budgets",
      analytics: "Analytics",
      reports: "Reports",
      settings: "Settings",
      welcome: "Take control of your money.",
      welcomeText: "Track your spending, manage your budget, and make better financial decisions.",
      addExpense: "Add an expense",
      monthlyBudget: "Monthly Budget",
      totalSpent: "Total Spent",
      remaining: "Remaining Balance",
      budgetNote: "Your planned monthly spending limit",
      spentNote: "transactions this month",
      remainingNote: "Money left from your monthly budget",
      budgetOverview: "Budget Overview",
      budgetDescription: "Monitor how much of your budget you've used.",
      budgetUsed: "of your budget used",
      spent: "spent",
      limit: "limit",
      setBudget: "Set Monthly Budget",
      quickAdd: "Quick Add Expense",
      quickDescription: "Record a purchase in seconds.",
      description: "Description",
      amount: "Amount (PKR)",
      category: "Category",
      date: "Date",
      saveExpense: "Save Expense",
      spendingCategory: "Spending by Category",
      categoryDescription: "Understand where your money goes.",
      recentTransactions: "Recent Transactions",
      viewAll: "View all",
      noSpending: "No spending yet",
      categoryEmpty: "Your category breakdown will appear here.",
      noTransactions: "No transactions recorded.",
      food: "Food",
      transport: "Transport",
      shopping: "Shopping",
      bills: "Bills",
      health: "Health",
      entertainment: "Entertainment",
      education: "Education",
      other: "Other",
      setBudgetMessage: "Set a monthly budget to start monitoring your spending.",
      exceededMessage: "You have reached or exceeded your monthly budget.",
      warningMessage: "You've used most of your budget. Keep an eye on spending.",
      withinBudgetMessage: "Your spending is currently within your monthly budget.",
      budgetPrompt: "Enter your monthly budget in PKR:",
      invalidBudget: "Please enter a valid budget amount.",
      saved: "Expense saved successfully.",
      completeFields: "Complete all expense fields.",
      invalidAmount: "Enter a valid expense amount.",
      storageError: "Could not save your expense.",
      edit: "Edit",
      delete: "Delete",
      cancel: "Cancel",
      currency: "PKR"
    },

    ur: {
      dashboard: "ڈیش بورڈ",
      workspace: "ورک اسپیس",
      preferences: "ترجیحات",
      expenses: "اخراجات",
      budgets: "بجٹ",
      analytics: "تجزیات",
      reports: "رپورٹس",
      settings: "ترتیبات",
      welcome: "اپنے پیسوں کا کنٹرول سنبھالیں۔",
      welcomeText: "اپنے اخراجات کا حساب رکھیں، بجٹ سنبھالیں اور بہتر مالی فیصلے کریں۔",
      addExpense: "خرچ شامل کریں",
      monthlyBudget: "ماہانہ بجٹ",
      totalSpent: "کل خرچ",
      remaining: "باقی رقم",
      budgetNote: "آپ کی ماہانہ خرچ کی مقررہ حد",
      spentNote: "اس مہینے کے لین دین",
      remainingNote: "ماہانہ بجٹ میں باقی رقم",
      budgetOverview: "بجٹ کا جائزہ",
      budgetDescription: "دیکھیں کہ آپ نے اپنے بجٹ کا کتنا حصہ استعمال کیا ہے۔",
      budgetUsed: "بجٹ استعمال ہو چکا ہے",
      spent: "خرچ",
      limit: "حد",
      setBudget: "ماہانہ بجٹ مقرر کریں",
      quickAdd: "فوری خرچ شامل کریں",
      quickDescription: "چند سیکنڈ میں اپنا خرچ درج کریں۔",
      description: "تفصیل",
      amount: "رقم (روپے)",
      category: "قسم",
      date: "تاریخ",
      saveExpense: "خرچ محفوظ کریں",
      spendingCategory: "قسم کے مطابق اخراجات",
      categoryDescription: "جانیں کہ آپ کے پیسے کہاں خرچ ہوتے ہیں۔",
      recentTransactions: "حالیہ لین دین",
      viewAll: "سب دیکھیں",
      noSpending: "ابھی کوئی خرچ نہیں",
      categoryEmpty: "آپ کے اخراجات کی تفصیل یہاں نظر آئے گی۔",
      noTransactions: "ابھی کوئی لین دین درج نہیں۔",
      food: "کھانا",
      transport: "سفر",
      shopping: "خریداری",
      bills: "بل",
      health: "صحت",
      entertainment: "تفریح",
      education: "تعلیم",
      other: "دیگر",
      setBudgetMessage: "اپنے اخراجات پر نظر رکھنے کے لیے ماہانہ بجٹ مقرر کریں۔",
      exceededMessage: "آپ کا ماہانہ بجٹ پورا ہو چکا ہے یا اس سے بڑھ گیا ہے۔",
      warningMessage: "آپ نے اپنے بجٹ کا زیادہ حصہ استعمال کر لیا ہے۔",
      withinBudgetMessage: "آپ کے اخراجات فی الحال ماہانہ بجٹ کے اندر ہیں۔",
      budgetPrompt: "ماہانہ بجٹ کی رقم درج کریں:",
      invalidBudget: "براہ کرم بجٹ کی درست رقم درج کریں۔",
      saved: "خرچ کامیابی سے محفوظ ہو گیا۔",
      completeFields: "تمام خانے پُر کریں۔",
      invalidAmount: "خرچ کی درست رقم درج کریں۔",
      storageError: "خرچ محفوظ نہیں ہو سکا۔",
      edit: "ترمیم",
      delete: "حذف کریں",
      cancel: "منسوخ کریں",
      currency: "روپے"
    },

    roman: {
      dashboard: "Dashboard",
      workspace: "Workspace",
      preferences: "Tarjeehat",
      expenses: "Kharchay",
      budgets: "Budget",
      analytics: "Tajziya",
      reports: "Reports",
      settings: "Settings",
      welcome: "Apne paison ka control sambhalein.",
      welcomeText: "Apne kharchon ka record rakhein, budget manage karein aur behtar faislay karein.",
      addExpense: "Kharcha Shamil Karein",
      monthlyBudget: "Mahina Budget",
      totalSpent: "Kul Kharch",
      remaining: "Baqi Raqam",
      budgetNote: "Aapki mahana kharch ki limit",
      spentNote: "Is mahine ke transactions",
      remainingNote: "Budget mein baqi raqam",
      budgetOverview: "Budget ka Jaiza",
      budgetDescription: "Dekhein aapne apne budget ka kitna hissa istemal kiya.",
      budgetUsed: "budget istemal ho chuka hai",
      spent: "kharch",
      limit: "limit",
      setBudget: "Mahina Budget Set Karein",
      quickAdd: "Fori Kharcha Shamil Karein",
      quickDescription: "Chand seconds mein apna kharcha darj karein.",
      description: "Tafseel",
      amount: "Raqam (PKR)",
      category: "Qism",
      date: "Tareekh",
      saveExpense: "Kharcha Save Karein",
      spendingCategory: "Qism ke Mutabiq Kharchay",
      categoryDescription: "Dekhein aapke paisay kahan kharch hote hain.",
      recentTransactions: "Haliya Transactions",
      viewAll: "Sab Dekhein",
      noSpending: "Abhi koi kharcha nahi",
      categoryEmpty: "Aapke kharchon ki tafseel yahan nazar ayegi.",
      noTransactions: "Abhi koi transaction darj nahi.",
      food: "Khana",
      transport: "Safar",
      shopping: "Shopping",
      bills: "Bills",
      health: "Sehat",
      entertainment: "Tafreeh",
      education: "Taleem",
      other: "Dusre",
      setBudgetMessage: "Kharchon par nazar rakhne ke liye mahana budget set karein.",
      exceededMessage: "Aapka mahana budget poora ho gaya hai ya us se barh gaya hai.",
      warningMessage: "Aapne apne budget ka zyada hissa istemal kar liya hai.",
      withinBudgetMessage: "Aapke kharchay filhal budget ke andar hain.",
      budgetPrompt: "Apna mahana budget PKR mein darj karein:",
      invalidBudget: "Barah-e-karam budget ki durust raqam darj karein.",
      saved: "Kharcha kamyabi se save ho gaya.",
      completeFields: "Tamam fields mukammal karein.",
      invalidAmount: "Kharchay ki durust raqam darj karein.",
      storageError: "Kharcha save nahi ho saka.",
      edit: "Edit",
      delete: "Delete",
      cancel: "Cancel",
      currency: "PKR"
    }
  };

  /* STORAGE */

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

  /* EXPENSES */

  function getExpenses() {
    const expenses = read(KEYS.expenses, []);
    return Array.isArray(expenses) ? expenses : [];
  }

  function saveExpenses(expenses) {
    return write(KEYS.expenses, expenses);
  }

  /* BUDGETS */

  function getCurrentMonth() {
    const now = new Date();
    return `${now.getFullYear()}-${String(
      now.getMonth() + 1
    ).padStart(2, "0")}`;
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

  function getMonthlyBudget(month = getCurrentMonth()) {
    return Number(getBudgets()[month] || 0);
  }

  function setMonthlyBudget(amount, month = getCurrentMonth()) {
    amount = Number(amount);

    if (!Number.isFinite(amount) || amount < 0) return false;

    const budgets = getBudgets();
    budgets[month] = amount;

    return saveBudgets(budgets);
  }

  /* EXPENSE MANAGEMENT */

  function getMonthExpenses(month = getCurrentMonth()) {
    return getExpenses().filter(expense =>
      String(expense.date || "").startsWith(month)
    );
  }

  function getTotalSpent(month = getCurrentMonth()) {
    return getMonthExpenses(month).reduce(
      (total, expense) => total + Number(expense.amount || 0), 0
    );
  }

  function getRemaining(month = getCurrentMonth()) {
    return getMonthlyBudget(month) - getTotalSpent(month);
  }

  function addExpense(data) {
    const amount = Number(data.amount);

    if (!Number.isFinite(amount) || amount <= 0) {
      throw new Error(translate("invalidAmount"));
    }

    if (!data.description || !data.date || !data.category) {
      throw new Error(translate("completeFields"));
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
      throw new Error(translate("storageError"));
    }

    return expense;
  }

  function updateExpense(id, updates) {
    const expenses = getExpenses();
    const index = expenses.findIndex(
      expense => String(expense.id) === String(id)
    );

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
    const remaining = getExpenses().filter(
      expense => !String(expense.date || "").startsWith(month)
    );

    return saveExpenses(remaining);
  }

  /* LANGUAGE SYSTEM */

  function getLanguage() {
    const language = localStorage.getItem(KEYS.language);
    return translations[language] ? language : "en";
  }

  function translate(key) {
    const language = getLanguage();
    return translations[language][key] || translations.en[key] || key;
  }

  function setLanguage(language) {
    if (!translations[language]) return false;

    localStorage.setItem(KEYS.language, language);
    applyTranslations();

    return true;
  }

  function applyTranslations() {
    const language = getLanguage();
    const isUrdu = language === "ur";

    document.documentElement.lang = isUrdu ? "ur" : "en";
    document.documentElement.dir = isUrdu ? "rtl" : "ltr";

    document.querySelectorAll("[data-i18n]").forEach(element => {
      const key = element.getAttribute("data-i18n");
      element.textContent = translate(key);
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
      const key = element.getAttribute("data-i18n-placeholder");
      element.placeholder = translate(key);
    });

    document.querySelectorAll("[data-i18n-title]").forEach(element => {
      const key = element.getAttribute("data-i18n-title");
      element.title = translate(key);
    });

    document.querySelectorAll("[data-i18n-value]").forEach(element => {
      const key = element.getAttribute("data-i18n-value");
      element.value = translate(key);
    });
  }

  /* CATEGORY AND SUMMARY DATA */

  function getCategoryTotals(month = getCurrentMonth()) {
    const totals = {};

    getMonthExpenses(month).forEach(expense => {
      const category = expense.category || "other";
      totals[category] = (totals[category] || 0) +
        Number(expense.amount || 0);
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

  function formatCurrency(amount) {
    return new Intl.NumberFormat("en-PK", {
      style: "currency",
      currency: "PKR",
      maximumFractionDigits: 0
    }).format(Number(amount) || 0);
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
    applyTranslations,
    formatCurrency,
    getCategoryTotals,
    getMonthlySummary,
    translations
  };

})();

window.Kharcha = Kharcha;

