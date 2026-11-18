
/* =========================================================
   KHARCHA — SHARED APPLICATION ENGINE
   Languages: English, Urdu, Roman Urdu
   Storage: Browser Local Storage
========================================================= */

(function () {
  "use strict";

  const STORAGE = {
    expenses: "kharcha_expenses",
    budget: "kharcha_budget",
    budgets: "kharcha_budgets",
    language: "kharcha_language",
    currency: "kharcha_currency"
  };

  const SUPPORTED_LANGUAGES = ["en", "ur", "roman"];

  /* =========================================================
     1. TRANSLATIONS
  ========================================================= */

  const translations = {

    en: {
      dashboard: "Dashboard",
      workspace: "WORKSPACE",
      preferences: "PREFERENCES",
      expenses: "Expenses",
      budgets: "Budgets",
      analytics: "Analytics",
      reports: "Reports",
      settings: "Settings",

      welcome: "Welcome to Kharcha",
      welcomeText: "Take control of your money, one expense at a time.",
      dashboardSubtitle: "Your personal financial overview.",
      descriptionPlaceholder: "e.g. Grocery shopping",

      addExpense: "Add Expense",
      monthlyBudget: "Monthly Budget",
      totalSpent: "Total Spent",
      remaining: "Remaining",
      budgetNote: "Your monthly spending limit",
      spentNote: "Your expenses this month",
      remainingNote: "Available budget",
      budgetOverview: "Budget Overview",
      budgetDescription: "Track your spending against your monthly limit.",
      budgetUsed: "Budget Used",
      spent: "Spent",
      limit: "Limit",
      setBudget: "Set Budget",
      quickAdd: "Quick Add Expense",
      quickDescription: "Record a new expense.",
      description: "Description",
      amount: "Amount",
      category: "Category",
      date: "Date",
      saveExpense: "Save Expense",
      spendingCategory: "Spending by Category",
      categoryDescription: "See where your money goes.",
      recentTransactions: "Recent Transactions",
      viewAll: "View All",
      noSpending: "No spending recorded yet.",
      categoryEmpty: "Your category breakdown will appear here.",
      noTransactions: "No transactions yet.",

      food: "Food",
      transport: "Transport",
      shopping: "Shopping",
      bills: "Bills",
      health: "Health",
      entertainment: "Entertainment",
      education: "Education",
      other: "Other",

      setBudgetMessage: "Your budget has been saved.",
      exceededMessage: "You have exceeded your monthly budget.",
      warningMessage: "You are getting close to your budget limit.",
      withinBudgetMessage: "You are within your budget.",
      budgetPrompt: "Please enter your monthly budget.",
      invalidBudget: "Please enter a valid budget amount.",
      saved: "Saved successfully.",
      completeFields: "Please complete all required fields.",
      invalidAmount: "Please enter a valid amount.",
      storageError: "Unable to save your data.",
      edit: "Edit",
      delete: "Delete",
      cancel: "Cancel",
      currency: "Currency",

      expensesSubtitle: "Keep track of every expense.",
      selectedMonthTotal: "Selected Month Total",
      transactions: "Transactions",
      recordedExpenses: "Recorded expenses",
      averageExpense: "Average Expense",
      perTransaction: "Average per transaction",
      allExpenses: "All Expenses",
      expensesDescription: "Search, filter and manage your spending.",
      searchExpenses: "Search expenses...",
      allCategories: "All Categories",
      actions: "Actions",
      resultsFound: "Results found",
      confirmDelete: "Are you sure you want to delete this expense?",

      budgetsSubtitle: "Plan your spending and stay in control.",
      selectedMonthBudget: "Monthly Budget",
      selectedMonthSpending: "Monthly Spending",
      availableBudget: "Available Budget",
      budgetOverviewDescription: "See how your spending compares with your limit.",
      manageBudget: "Manage Budget",
      manageBudgetDescription: "Set or update your budget for a selected month.",
      selectMonth: "Select Month",
      budgetAmount: "Budget Amount",
      saveBudget: "Save Budget",
      budgetHistory: "Budget History",
      budgetHistoryDescription: "Review your previous monthly budgets.",
      month: "Month",
      status: "Status",
      noBudgetHistory: "No budget history available.",
      withinBudget: "Within Budget",
      overBudget: "Over Budget",
      nearLimit: "Near Limit",
      budgetSaved: "Budget saved successfully.",

      analyticsSubtitle: "Understand where your money goes.",
      financialOverview: "Financial Overview",
      financialOverviewDescription: "A closer look at your monthly spending.",
      monthlySpending: "Monthly Spending",
      totalExpensesThisMonth: "Total expenses this month",
      dailyAverage: "Daily Average",
      averageDailySpending: "Average spending per day",
      highestExpense: "Highest Expense",
      spendingTrend: "Spending Trend",
      sixMonthTrend: "Your spending over the last six months",
      categoryBreakdown: "Category Breakdown",
      categoryBreakdownDescription: "See which categories take the largest share.",
      spendingInsights: "Spending Insights",
      spendingInsightsDescription: "A quick summary of your financial activity.",
      insightLoading: "Your insights will appear here.",
      noTrendData: "Add expenses to see your spending trend.",
      noCategoryData: "No category data available yet.",
      insightNoExpenses: "No expenses recorded for this month.",
      insightTotal: "Your total spending is",
      insightTopCategory: "Your highest spending category is",
      insightOverBudget: "You are over budget by",
      insightRemaining: "You have this much budget remaining:",
      insightSetBudget: "Set a monthly budget to track your spending limit.",

      reportsSubtitle: "A clear picture of your financial activity.",
      monthlyReport: "Monthly Report",
      monthlyReportDescription: "Review your monthly expenses and budget activity.",
      reportTotalSpent: "Total Spent",
      monthlyExpenses: "Expenses recorded for this month",
      reportBudget: "Monthly Budget",
      assignedBudget: "Your assigned spending limit",
      reportRemaining: "Remaining",
      budgetAfterExpenses: "Budget remaining after expenses",
      reportTransactions: "Transactions",
      totalRecorded: "Total recorded transactions",
      budgetPerformance: "Budget Performance",
      budgetPerformanceDescription: "How much of your monthly budget has been used.",
      categorySummary: "Category Summary",
      categorySummaryDescription: "Spending grouped by category.",
      expenseDetails: "Expense Details",
      expenseDetailsDescription: "A complete list of expenses for the selected month.",
      noReportExpenses: "No expenses found for this month.",
      printReport: "Print Report",
      downloadCSV: "Download CSV",
      reportNoBudget: "No budget set for this month.",
      reportOverBudget: "You have exceeded your budget.",
      reportNearLimit: "You are approaching your budget limit.",
      reportWithinBudget: "You are within your budget.",

      settingsSubtitle: "Manage your Kharcha experience.",
      settingsPageDescription: "Personalize how Kharcha works for you.",
      languageSettings: "Language",
      languageSettingsDescription: "Choose the language used throughout the application.",
      appLanguage: "App Language",
      appLanguageDescription: "Select your preferred language.",
      currencySettings: "Currency",
      currencySettingsDescription: "Choose how your amounts are displayed.",
      displayCurrency: "Display Currency",
      displayCurrencyDescription: "Select your preferred currency.",
      currencyNote: "Changing the currency changes how amounts are displayed. It does not convert existing amounts using exchange rates.",
      dataManagement: "Data Management",
      dataManagementDescription: "Keep a copy of your expense records or reset your local data.",
      exportData: "Export Your Data",
      exportDataDescription: "Download your expenses and budgets as a JSON file.",
      exportDataButton: "Export Data",
      resetData: "Reset Application Data",
      resetDataDescription: "Delete your locally stored expenses and budgets.",
      resetDataButton: "Reset Data",
      localStorageNote: "Your current records are stored in this browser. They are not automatically synchronized across devices.",
      aboutKharcha: "About Kharcha",
      aboutKharchaDescription: "A simple way to understand and manage your everyday spending.",
      versionNumber: "Version 1.0",
      privacyNote: "Your financial records remain in your browser unless you choose to export them.",
      currencySaved: "Currency preference saved.",
      exportSuccess: "Your backup has been downloaded.",
      confirmReset: "Are you sure you want to delete all expenses and budgets from this browser? This cannot be undone.",
      resetSuccess: "Your expense and budget data has been reset."
    },

    ur: {
      dashboard: "ڈیش بورڈ",
      workspace: "ورک اسپیس",
      preferences: "ترجیحات",
      expenses: "اخراجات",
      budgets: "بجٹ",
      analytics: "تجزیہ",
      reports: "رپورٹس",
      settings: "ترتیبات",

      welcome: "خرچہ میں خوش آمدید",
      welcomeText: "ہر خرچے کو سمجھیں اور اپنے پیسوں پر قابو رکھیں۔",
      dashboardSubtitle: "آپ کی ذاتی مالی صورتحال کا جائزہ۔",
      descriptionPlaceholder: "مثلاً: گھر کا سودا",

      addExpense: "خرچہ شامل کریں",
      monthlyBudget: "ماہانہ بجٹ",
      totalSpent: "کل خرچ",
      remaining: "باقی رقم",
      budgetNote: "آپ کی ماہانہ خرچ کی حد",
      spentNote: "اس ماہ کے اخراجات",
      remainingNote: "دستیاب بجٹ",
      budgetOverview: "بجٹ کا جائزہ",
      budgetDescription: "اپنے اخراجات کا ماہانہ بجٹ سے موازنہ کریں۔",
      budgetUsed: "استعمال شدہ بجٹ",
      spent: "خرچ",
      limit: "حد",
      setBudget: "بجٹ مقرر کریں",
      quickAdd: "فوری خرچہ شامل کریں",
      quickDescription: "نیا خرچہ درج کریں۔",
      description: "تفصیل",
      amount: "رقم",
      category: "قسم",
      date: "تاریخ",
      saveExpense: "خرچہ محفوظ کریں",
      spendingCategory: "مختلف اقسام کے اخراجات",
      categoryDescription: "دیکھیں آپ کے پیسے کہاں خرچ ہوتے ہیں۔",
      recentTransactions: "حالیہ لین دین",
      viewAll: "سب دیکھیں",
      noSpending: "ابھی کوئی خرچہ درج نہیں کیا گیا۔",
      categoryEmpty: "اخراجات کی تفصیل یہاں نظر آئے گی۔",
      noTransactions: "ابھی کوئی لین دین موجود نہیں۔",

      food: "کھانا",
      transport: "سفر",
      shopping: "خریداری",
      bills: "بل",
      health: "صحت",
      entertainment: "تفریح",
      education: "تعلیم",
      other: "دیگر",

      setBudgetMessage: "آپ کا بجٹ محفوظ ہو گیا ہے۔",
      exceededMessage: "آپ کا خرچ ماہانہ بجٹ سے بڑھ گیا ہے۔",
      warningMessage: "آپ بجٹ کی حد کے قریب پہنچ رہے ہیں۔",
      withinBudgetMessage: "آپ اپنے بجٹ کے اندر ہیں۔",
      budgetPrompt: "براہ کرم ماہانہ بجٹ درج کریں۔",
      invalidBudget: "درست بجٹ کی رقم درج کریں۔",
      saved: "کامیابی سے محفوظ ہو گیا۔",
      completeFields: "براہ کرم تمام ضروری خانے پُر کریں۔",
      invalidAmount: "درست رقم درج کریں۔",
      storageError: "آپ کا ڈیٹا محفوظ نہیں ہو سکا۔",
      edit: "ترمیم",
      delete: "حذف کریں",
      cancel: "منسوخ",
      currency: "کرنسی",

      expensesSubtitle: "اپنے ہر خرچے کا ریکارڈ رکھیں۔",
      selectedMonthTotal: "منتخب مہینے کا کل خرچ",
      transactions: "لین دین",
      recordedExpenses: "درج شدہ اخراجات",
      averageExpense: "اوسط خرچ",
      perTransaction: "فی لین دین اوسط",
      allExpenses: "تمام اخراجات",
      expensesDescription: "اپنے اخراجات تلاش کریں اور ترتیب دیں۔",
      searchExpenses: "اخراجات تلاش کریں...",
      allCategories: "تمام اقسام",
      actions: "کارروائی",
      resultsFound: "نتائج",
      confirmDelete: "کیا آپ واقعی یہ خرچہ حذف کرنا چاہتے ہیں؟",

      budgetsSubtitle: "اپنے اخراجات کی منصوبہ بندی کریں۔",
      selectedMonthBudget: "ماہانہ بجٹ",
      selectedMonthSpending: "ماہانہ خرچ",
      availableBudget: "باقی دستیاب بجٹ",
      budgetOverviewDescription: "اپنے خرچ کا بجٹ سے موازنہ کریں۔",
      manageBudget: "بجٹ کا انتظام",
      manageBudgetDescription: "منتخب مہینے کا بجٹ مقرر یا تبدیل کریں۔",
      selectMonth: "مہینہ منتخب کریں",
      budgetAmount: "بجٹ کی رقم",
      saveBudget: "بجٹ محفوظ کریں",
      budgetHistory: "بجٹ کی تاریخ",
      budgetHistoryDescription: "پچھلے مہینوں کے بجٹ دیکھیں۔",
      month: "مہینہ",
      status: "حالت",
      noBudgetHistory: "ابھی بجٹ کی کوئی تاریخ موجود نہیں۔",
      withinBudget: "بجٹ کے اندر",
      overBudget: "بجٹ سے زیادہ",
      nearLimit: "بجٹ کی حد کے قریب",
      budgetSaved: "بجٹ کامیابی سے محفوظ ہو گیا۔",

      analyticsSubtitle: "جانیں آپ کے پیسے کہاں خرچ ہوتے ہیں۔",
      financialOverview: "مالی جائزہ",
      financialOverviewDescription: "آپ کے ماہانہ اخراجات کی تفصیل۔",
      monthlySpending: "ماہانہ خرچ",
      totalExpensesThisMonth: "اس مہینے کے کل اخراجات",
      dailyAverage: "روزانہ اوسط",
      averageDailySpending: "روزانہ اوسط خرچ",
      highestExpense: "سب سے بڑا خرچ",
      spendingTrend: "اخراجات کا رجحان",
      sixMonthTrend: "گزشتہ چھ مہینوں کے اخراجات",
      categoryBreakdown: "اقسام کے لحاظ سے خرچ",
      categoryBreakdownDescription: "دیکھیں سب سے زیادہ خرچ کس چیز پر ہوا۔",
      spendingInsights: "اخراجات کی معلومات",
      spendingInsightsDescription: "آپ کی مالی سرگرمی کا مختصر جائزہ۔",
      insightLoading: "آپ کی معلومات یہاں نظر آئیں گی۔",
      noTrendData: "اخراجات کا رجحان دیکھنے کے لیے خرچے شامل کریں۔",
      noCategoryData: "ابھی کوئی معلومات دستیاب نہیں۔",
      insightNoExpenses: "اس مہینے کوئی خرچہ درج نہیں کیا گیا۔",
      insightTotal: "آپ کا کل خرچ ہے",
      insightTopCategory: "سب سے زیادہ خرچ اس قسم پر ہوا",
      insightOverBudget: "آپ کا بجٹ اس رقم سے بڑھ گیا ہے",
      insightRemaining: "آپ کے بجٹ میں باقی رقم:",
      insightSetBudget: "اپنے اخراجات کی حد جاننے کے لیے ماہانہ بجٹ مقرر کریں۔",

      reportsSubtitle: "آپ کی مالی سرگرمی کی مکمل تصویر۔",
      monthlyReport: "ماہانہ رپورٹ",
      monthlyReportDescription: "ماہانہ اخراجات اور بجٹ کا جائزہ لیں۔",
      reportTotalSpent: "کل خرچ",
      monthlyExpenses: "اس ماہ کے درج شدہ اخراجات",
      reportBudget: "ماہانہ بجٹ",
      assignedBudget: "آپ کی مقرر کردہ خرچ کی حد",
      reportRemaining: "باقی رقم",
      budgetAfterExpenses: "اخراجات کے بعد باقی بجٹ",
      reportTransactions: "لین دین",
      totalRecorded: "کل درج شدہ لین دین",
      budgetPerformance: "بجٹ کی کارکردگی",
      budgetPerformanceDescription: "آپ کے ماہانہ بجٹ کا کتنا حصہ استعمال ہوا۔",
      categorySummary: "اقسام کا خلاصہ",
      categorySummaryDescription: "قسم کے لحاظ سے اخراجات۔",
      expenseDetails: "اخراجات کی تفصیل",
      expenseDetailsDescription: "منتخب مہینے کے تمام اخراجات۔",
      noReportExpenses: "اس مہینے کوئی خرچہ موجود نہیں۔",
      printReport: "رپورٹ پرنٹ کریں",
      downloadCSV: "CSV ڈاؤن لوڈ کریں",
      reportNoBudget: "اس مہینے کوئی بجٹ مقرر نہیں۔",
      reportOverBudget: "آپ کا خرچ بجٹ سے بڑھ گیا ہے۔",
      reportNearLimit: "آپ بجٹ کی حد کے قریب ہیں۔",
      reportWithinBudget: "آپ اپنے بجٹ کے اندر ہیں۔",

      settingsSubtitle: "خرچہ کی ترتیبات کا انتظام کریں۔",
      settingsPageDescription: "اپنی پسند کے مطابق خرچہ استعمال کریں۔",
      languageSettings: "زبان",
      languageSettingsDescription: "ایپلی کیشن کی زبان منتخب کریں۔",
      appLanguage: "ایپ کی زبان",
      appLanguageDescription: "اپنی پسندیدہ زبان منتخب کریں۔",
      currencySettings: "کرنسی",
      currencySettingsDescription: "رقم دکھانے کا طریقہ منتخب کریں۔",
      displayCurrency: "دکھائی جانے والی کرنسی",
      displayCurrencyDescription: "اپنی پسندیدہ کرنسی منتخب کریں۔",
      currencyNote: "کرنسی تبدیل کرنے سے صرف رقم دکھانے کا انداز بدلے گا۔ پرانی رقوم خودکار طور پر تبدیل نہیں ہوں گی۔",
      dataManagement: "ڈیٹا کا انتظام",
      dataManagementDescription: "اپنے اخراجات کا بیک اپ بنائیں یا مقامی ڈیٹا صاف کریں۔",
      exportData: "اپنا ڈیٹا ایکسپورٹ کریں",
      exportDataDescription: "اپنے اخراجات اور بجٹ JSON فائل میں ڈاؤن لوڈ کریں۔",
      exportDataButton: "ڈیٹا ایکسپورٹ کریں",
      resetData: "ایپ کا ڈیٹا ری سیٹ کریں",
      resetDataDescription: "اپنے براؤزر میں محفوظ اخراجات اور بجٹ حذف کریں۔",
      resetDataButton: "ڈیٹا ری سیٹ کریں",
      localStorageNote: "آپ کا موجودہ ڈیٹا اسی براؤزر میں محفوظ ہے۔ یہ خودکار طور پر دوسرے آلات پر منتقل نہیں ہوتا۔",
      aboutKharcha: "خرچہ کے بارے میں",
      aboutKharchaDescription: "روزمرہ کے اخراجات سمجھنے اور سنبھالنے کا آسان طریقہ۔",
      versionNumber: "ورژن 1.0",
      privacyNote: "آپ کا مالی ریکارڈ براؤزر میں رہتا ہے، جب تک آپ اسے ایکسپورٹ نہ کریں۔",
      currencySaved: "کرنسی کی ترجیح محفوظ ہو گئی۔",
      exportSuccess: "آپ کا بیک اپ ڈاؤن لوڈ ہو گیا۔",
      confirmReset: "کیا آپ واقعی اس براؤزر سے تمام اخراجات اور بجٹ حذف کرنا چاہتے ہیں؟ یہ عمل واپس نہیں ہو سکتا۔",
      resetSuccess: "آپ کا اخراجات اور بجٹ کا ڈیٹا ری سیٹ ہو گیا۔"
    },

    roman: {
      dashboard: "Dashboard",
      workspace: "WORKSPACE",
      preferences: "PREFERENCES",
      expenses: "Kharchay",
      budgets: "Budgets",
      analytics: "Tajziya",
      reports: "Reports",
      settings: "Settings",

      welcome: "Kharcha mein khush aamdeed",
      welcomeText: "Har kharchay ko samjhein aur apne paison par qaboo rakhein.",
      dashboardSubtitle: "Aapki zaati mali surat-e-haal ka jaiza.",
      descriptionPlaceholder: "Misal: Ghar ka rashan",

      addExpense: "Kharcha shamil karein",
      monthlyBudget: "Mahawari Budget",
      totalSpent: "Kul Kharcha",
      remaining: "Baqi Raqam",
      budgetNote: "Aapki mahana kharch ki had",
      spentNote: "Is mahine ke kharchay",
      remainingNote: "Dastiyab budget",
      budgetOverview: "Budget ka Jaiza",
      budgetDescription: "Apne kharchon ka mahana budget se muqabla karein.",
      budgetUsed: "Istemaal Shuda Budget",
      spent: "Kharch",
      limit: "Had",
      setBudget: "Budget Muqarrar Karein",
      quickAdd: "Fori Kharcha Shamil Karein",
      quickDescription: "Naya kharcha darj karein.",
      description: "Tafseel",
      amount: "Raqam",
      category: "Qisam",
      date: "Tareekh",
      saveExpense: "Kharcha Mehfooz Karein",
      spendingCategory: "Mukhtalif Qisam ke Kharchay",
      categoryDescription: "Dekhein aapke paisay kahan kharch hotay hain.",
      recentTransactions: "Haliya Len Den",
      viewAll: "Sab Dekhein",
      noSpending: "Abhi koi kharcha darj nahi hua.",
      categoryEmpty: "Kharchon ki tafseel yahan nazar aaye gi.",
      noTransactions: "Abhi koi len den nahi hai.",

      food: "Khana",
      transport: "Safar",
      shopping: "Shopping",
      bills: "Bills",
      health: "Sehat",
      entertainment: "Tafreeh",
      education: "Taleem",
      other: "Doosray",

      setBudgetMessage: "Aapka budget mehfooz ho gaya hai.",
      exceededMessage: "Aapka kharcha mahana budget se barh gaya hai.",
      warningMessage: "Aap budget ki had ke qareeb hain.",
      withinBudgetMessage: "Aap apne budget ke andar hain.",
      budgetPrompt: "Barah-e-karam mahana budget darj karein.",
      invalidBudget: "Durust budget ki raqam darj karein.",
      saved: "Kamiyabi se mehfooz ho gaya.",
      completeFields: "Barah-e-karam tamam zaroori khanay pur karein.",
      invalidAmount: "Durust raqam darj karein.",
      storageError: "Aapka data mehfooz nahi ho saka.",
      edit: "Tabdeel Karein",
      delete: "Delete Karein",
      cancel: "Cancel",
      currency: "Currency",

      expensesSubtitle: "Apne har kharchay ka record rakhein.",
      selectedMonthTotal: "Muntakhib Mahine ka Kul Kharcha",
      transactions: "Len Den",
      recordedExpenses: "Darj Shuda Kharchay",
      averageExpense: "Ausat Kharcha",
      perTransaction: "Har len den ka ausat",
      allExpenses: "Tamam Kharchay",
      expensesDescription: "Apne kharchay talash aur manage karein.",
      searchExpenses: "Kharchay talash karein...",
      allCategories: "Tamam Qisamain",
      actions: "Karwai",
      resultsFound: "Natayij",
      confirmDelete: "Kya aap waqai yeh kharcha delete karna chahtay hain?",

      budgetsSubtitle: "Apne kharchon ki mansooba bandi karein.",
      selectedMonthBudget: "Mahana Budget",
      selectedMonthSpending: "Mahana Kharcha",
      availableBudget: "Baqi Dastiyab Budget",
      budgetOverviewDescription: "Apne kharchay ka budget se muqabla karein.",
      manageBudget: "Budget ka Intizam",
      manageBudgetDescription: "Muntakhib mahine ka budget muqarrar ya tabdeel karein.",
      selectMonth: "Mahina Muntakhib Karein",
      budgetAmount: "Budget ki Raqam",
      saveBudget: "Budget Mehfooz Karein",
      budgetHistory: "Budget ki Tareekh",
      budgetHistoryDescription: "Pichlay mahino ke budgets dekhein.",
      month: "Mahina",
      status: "Haalat",
      noBudgetHistory: "Abhi budget ki koi history nahi.",
      withinBudget: "Budget ke Andar",
      overBudget: "Budget se Zyada",
      nearLimit: "Budget ki Had ke Qareeb",
      budgetSaved: "Budget kamiyabi se mehfooz ho gaya.",

      analyticsSubtitle: "Janiye aapke paisay kahan kharch hotay hain.",
      financialOverview: "Mali Jaiza",
      financialOverviewDescription: "Aapke mahana kharchon ki tafseel.",
      monthlySpending: "Mahana Kharcha",
      totalExpensesThisMonth: "Is mahine ke kul kharchay",
      dailyAverage: "Rozana Ausat",
      averageDailySpending: "Rozana ausat kharcha",
      highestExpense: "Sab se Bara Kharcha",
      spendingTrend: "Kharchon ka Rujhan",
      sixMonthTrend: "Pichlay chay mahino ke kharchay",
      categoryBreakdown: "Qisam ke Hisab se Kharcha",
      categoryBreakdownDescription: "Dekhein sab se zyada kharcha kis cheez par hua.",
      spendingInsights: "Kharchon ki Maloomat",
      spendingInsightsDescription: "Aapki mali sargarmiyon ka mukhtasar jaiza.",
      insightLoading: "Aapki maloomat yahan nazar aaye gi.",
      noTrendData: "Kharchon ka rujhan dekhne ke liye kharchay shamil karein.",
      noCategoryData: "Abhi koi maloomat dastiyab nahi.",
      insightNoExpenses: "Is mahine koi kharcha darj nahi hua.",
      insightTotal: "Aapka kul kharcha hai",
      insightTopCategory: "Sab se zyada kharcha is qisam par hua",
      insightOverBudget: "Aapka budget is raqam se barh gaya hai",
      insightRemaining: "Aapke budget mein baqi raqam:",
      insightSetBudget: "Apne kharchon ki had jaanne ke liye mahana budget muqarrar karein.",

      reportsSubtitle: "Aapki mali sargarmiyon ki mukammal tasveer.",
      monthlyReport: "Mahana Report",
      monthlyReportDescription: "Mahana kharchon aur budget ka jaiza lein.",
      reportTotalSpent: "Kul Kharcha",
      monthlyExpenses: "Is mahine ke darj shuda kharchay",
      reportBudget: "Mahana Budget",
      assignedBudget: "Aapki muqarrar karda kharch ki had",
      reportRemaining: "Baqi Raqam",
      budgetAfterExpenses: "Kharchon ke baad baqi budget",
      reportTransactions: "Len Den",
      totalRecorded: "Kul darj shuda len den",
      budgetPerformance: "Budget ki Karkardagi",
      budgetPerformanceDescription: "Aapke mahana budget ka kitna hissa istemaal hua.",
      categorySummary: "Qisamon ka Khulasa",
      categorySummaryDescription: "Qisam ke hisab se kharchay.",
      expenseDetails: "Kharchon ki Tafseel",
      expenseDetailsDescription: "Muntakhib mahine ke tamam kharchay.",
      noReportExpenses: "Is mahine koi kharcha mojood nahi.",
      printReport: "Report Print Karein",
      downloadCSV: "CSV Download Karein",
      reportNoBudget: "Is mahine koi budget muqarrar nahi.",
      reportOverBudget: "Aapka kharcha budget se barh gaya hai.",
      reportNearLimit: "Aap budget ki had ke qareeb hain.",
      reportWithinBudget: "Aap apne budget ke andar hain.",

      settingsSubtitle: "Kharcha ki settings ka intizam karein.",
      settingsPageDescription: "Kharcha ko apni pasand ke mutabiq istemaal karein.",
      languageSettings: "Zaban",
      languageSettingsDescription: "Application ki zaban muntakhib karein.",
      appLanguage: "App ki Zaban",
      appLanguageDescription: "Apni pasandeeda zaban muntakhib karein.",
      currencySettings: "Currency",
      currencySettingsDescription: "Raqam dikhane ka tareeqa muntakhib karein.",
      displayCurrency: "Dikhayi Jane Wali Currency",
      displayCurrencyDescription: "Apni pasandeeda currency muntakhib karein.",
      currencyNote: "Currency tabdeel karne se sirf raqam dikhane ka andaaz badlay ga. Purani raqamain khudkar tabdeel nahi hongi.",
      dataManagement: "Data ka Intizam",
      dataManagementDescription: "Apne kharchon ka backup banayein ya local data saaf karein.",
      exportData: "Apna Data Export Karein",
      exportDataDescription: "Apne kharchay aur budgets JSON file mein download karein.",
      exportDataButton: "Data Export Karein",
      resetData: "Application Data Reset Karein",
      resetDataDescription: "Apne browser mein mehfooz kharchay aur budgets delete karein.",
      resetDataButton: "Data Reset Karein",
      localStorageNote: "Aapka mojooda data isi browser mein mehfooz hai. Yeh khudkar doosray devices par transfer nahi hota.",
      aboutKharcha: "Kharcha ke Baray Mein",
      aboutKharchaDescription: "Rozmarra ke kharchay samajhne aur sambhalne ka asaan tareeqa.",
      versionNumber: "Version 1.0",
      privacyNote: "Aapka mali record browser mein rehta hai jab tak aap use export na karein.",
      currencySaved: "Currency ki pasand mehfooz ho gayi.",
      exportSuccess: "Aapka backup download ho gaya.",
      confirmReset: "Kya aap waqai is browser se tamam kharchay aur budgets delete karna chahtay hain? Yeh amal wapas nahi ho sakta.",
      resetSuccess: "Aapka kharchon aur budget ka data reset ho gaya."
    }
  };

  /* =========================================================
     2. STORAGE HELPERS
  ========================================================= */

  function readStorage(key, fallback) {
    try {
      const value = localStorage.getItem(key);
      return value === null ? fallback : JSON.parse(value);
    } catch (error) {
      console.error("Kharcha storage read error:", error);
      return fallback;
    }
  }

  function writeStorage(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch (error) {
      console.error("Kharcha storage write error:", error);
      return false;
    }
  }

  function getCurrentMonth() {
    const now = new Date();
    return [
      now.getFullYear(),
      String(now.getMonth() + 1).padStart(2, "0")
    ].join("-");
  }

  function getExpenses() {
    const expenses = readStorage(STORAGE.expenses, []);
    return Array.isArray(expenses) ? expenses : [];
  }

  function saveExpenses(expenses) {
    return writeStorage(STORAGE.expenses, expenses);
  }

  /* =========================================================
     3. LANGUAGE SYSTEM
  ========================================================= */

  function getLanguage() {
    const saved = localStorage.getItem(STORAGE.language);
    return SUPPORTED_LANGUAGES.includes(saved) ? saved : "en";
  }

  function setLanguage(language) {
    if (!SUPPORTED_LANGUAGES.includes(language)) {
      language = "en";
    }

    try {
      localStorage.setItem(STORAGE.language, language);
    } catch (error) {
      console.error("Unable to save language preference:", error);
    }

    applyTranslations();
    return language;
  }

  function translate(key) {
    const language = getLanguage();

    return (
      translations[language]?.[key] ??
      translations.en[key] ??
      key
    );
  }

  function applyTranslations() {
    const language = getLanguage();
    const direction = language === "ur" ? "rtl" : "ltr";

    document.documentElement.lang =
      language === "ur" ? "ur" :
      language === "roman" ? "en" : "en";

    document.documentElement.dir = direction;
    document.body.dir = direction;

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

    document.querySelectorAll("[data-language-select]").forEach(element => {
      element.value = language;
    });

    return language;
  }

  /* =========================================================
     4. CURRENCY SYSTEM
  ========================================================= */

  function getCurrency() {
    const allowed = ["PKR", "USD", "INR", "AED", "GBP", "EUR"];
    const saved = localStorage.getItem(STORAGE.currency);

    return allowed.includes(saved) ? saved : "PKR";
  }

  function setCurrency(currency) {
    const allowed = ["PKR", "USD", "INR", "AED", "GBP", "EUR"];

    if (!allowed.includes(currency)) {
      return false;
    }

    try {
      localStorage.setItem(STORAGE.currency, currency);
      return true;
    } catch (error) {
      console.error("Unable to save currency:", error);
      return false;
    }
  }

  function formatCurrency(amount) {
    const currency = getCurrency();
    const value = Number(amount) || 0;

    const locale = getLanguage() === "ur" ? "ur-PK" : "en-US";

    try {
      return new Intl.NumberFormat(locale, {
        style: "currency",
        currency: currency,
        maximumFractionDigits: 2
      }).format(value);
    } catch (error) {
      return currency + " " + value.toFixed(2);
    }
  }

  /* =========================================================
     5. EXPENSE MANAGEMENT
  ========================================================= */

  function addExpense(expense) {
    if (!expense) {
      return false;
    }

    const description = String(expense.description || "").trim();
    const amount = Number(expense.amount);
    const category = String(expense.category || "other");
    const date = String(expense.date || new Date().toISOString().slice(0, 10));

    if (!description || !Number.isFinite(amount) || amount <= 0) {
      return false;
    }

    const expenses = getExpenses();

    const newExpense = {
      id: Date.now().toString() + Math.random().toString(36).slice(2, 7),
      description,
      amount,
      category,
      date,
      createdAt: new Date().toISOString()
    };

    expenses.push(newExpense);

    return saveExpenses(expenses) ? newExpense : false;
  }

  function deleteExpense(id) {
    const expenses = getExpenses();
    const updated = expenses.filter(expense =>
      String(expense.id) !== String(id)
    );

    if (updated.length === expenses.length) {
      return false;
    }

    return saveExpenses(updated);
  }

  function updateExpense(id, changes) {
    const expenses = getExpenses();
    const index = expenses.findIndex(expense =>
      String(expense.id) === String(id)
    );

    if (index === -1 || !changes) {
      return false;
    }

    const updated = {
      ...expenses[index],
      ...changes,
      id: expenses[index].id
    };

    if (
      !String(updated.description || "").trim() ||
      !Number.isFinite(Number(updated.amount)) ||
      Number(updated.amount) <= 0
    ) {
      return false;
    }

    updated.description = String(updated.description).trim();
    updated.amount = Number(updated.amount);

    expenses[index] = updated;

    return saveExpenses(expenses);
  }

  function getMonthExpenses(month) {
    const selectedMonth = month || getCurrentMonth();

    return getExpenses().filter(expense =>
      String(expense.date || "").slice(0, 7) === selectedMonth
    );
  }

  /* =========================================================
     6. BUDGET MANAGEMENT
  ========================================================= */

  function getBudgets() {
    const budgets = readStorage(STORAGE.budgets, {});

    return budgets && typeof budgets === "object" && !Array.isArray(budgets)
      ? budgets
      : {};
  }

  function getMonthlyBudget(month) {
    const selectedMonth = month || getCurrentMonth();
    const budgets = getBudgets();

    if (budgets[selectedMonth] !== undefined) {
      return Number(budgets[selectedMonth]) || 0;
    }

    // Support the original single-budget storage key.
    if (selectedMonth === getCurrentMonth()) {
      const legacyBudget = Number(
        readStorage(STORAGE.budget, 0)
      ) || 0;

      return legacyBudget;
    }

    return 0;
  }

  function setMonthlyBudget(amount, month) {
    const value = Number(amount);
    const selectedMonth = month || getCurrentMonth();

    if (
      !Number.isFinite(value) ||
      value <= 0 ||
      !/^\d{4}-\d{2}$/.test(selectedMonth)
    ) {
      return false;
    }

    const budgets = getBudgets();
    budgets[selectedMonth] = value;

    const saved = writeStorage(STORAGE.budgets, budgets);

    if (saved && selectedMonth === getCurrentMonth()) {
      writeStorage(STORAGE.budget, value);
    }

    return saved;
  }

  /* =========================================================
     7. FINANCIAL SUMMARIES
  ========================================================= */

  function getMonthlySummary(month) {
    const selectedMonth = month || getCurrentMonth();
    const expenses = getMonthExpenses(selectedMonth);

    const spent = expenses.reduce(
      (total, expense) => total + (Number(expense.amount) || 0),
      0
    );

    const budget = getMonthlyBudget(selectedMonth);
    const remaining = budget - spent;
    const percentage = budget > 0 ? (spent / budget) * 100 : 0;

    return {
      month: selectedMonth,
      budget,
      spent,
      remaining,
      percentage,
      transactionCount: expenses.length
    };
  }

  function getCategoryTotals(month) {
    const expenses = getMonthExpenses(month);
    const totals = {};

    expenses.forEach(expense => {
      const category = expense.category || "other";

      totals[category] =
        (totals[category] || 0) +
        (Number(expense.amount) || 0);
    });

    return totals;
  }

  /* =========================================================
     8. PUBLIC KHARCHA API
  ========================================================= */

  window.Kharcha = {

    // Storage
    getExpenses,
    saveExpenses,

    // Expenses
    addExpense,
    deleteExpense,
    updateExpense,
    getMonthExpenses,

    // Budgets
    getBudgets,
    getMonthlyBudget,
    setMonthlyBudget,

    // Financial summaries
    getMonthlySummary,
    getCategoryTotals,

    // Date
    getCurrentMonth,

    // Language
    getLanguage,
    setLanguage,
    translate,
    applyTranslations,

    // Currency
    getCurrency,
    setCurrency,
    formatCurrency,

    // Translations
    translations,

    // App information
    version: "1.0.0"
  };

  /* =========================================================
     9. INITIALIZATION
  ========================================================= */

  function initializeKharcha() {
    applyTranslations();

    document.querySelectorAll("[data-language-select]").forEach(element => {
      element.value = getLanguage();

      element.addEventListener("change", () => {
        setLanguage(element.value);
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeKharcha);
  } else {
    initializeKharcha();
  }

})();



