// Модули, каждый отвечает за свою часть. МОжно просто вырезать часть кода и
// и перенести его в любую другую программу. One thing independently
// Модули standalone они даже не знают друг о друге
// acces to var. because of closures
//BUDGET CONTROLLER
let budgetController = (function () {
  let Expense = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  let Income = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };
  // Global data structure
  let data = {
    allItems: {
      exp: [],
      inc: [],
    },
    totals: {
      exp: 0,
      inc: 0,
    },
    budget: 0,
    percentage: -1,
  };

  let calculateTotal = function (type) {
    let sum = 0;
    data.allItems[type].forEach(function (cur) {
      sum += cur.value;
    });
    data.totals[type] = sum;
  };
  // Public methods of BUDGET_CONTOLLER
  return {
    addItem: function (type, des, val) {
      let newItem;
      if (data.allItems[type].length > 0) {
        ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
      } else {
        ID = 0;
      }
      // Create new item based on type
      if (type === "exp") {
        newItem = new Expense(ID, des, val);
      } else if (type === "inc") {
        newItem = new Income(ID, des, val);
      }
      // Push into the data structure
      data.allItems[type].push(newItem);
      // return the new element
      return newItem;
    },
    testing: function () {
      console.log(data);
    },
    calculateBudget: function () {
      // calc total income and expenses
      calculateTotal("exp");
      calculateTotal("inc");

      // cal the budget: income - expenses
      data.budget = data.totals.inc - data.totals.exp;

      // calc the percentage of spented income
      if (data.totals.inc > 0) {
        data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
      } else {
        data.percentage = -1;
      }
    },
    getbudget: function () {
      return {
        budget: data.budget,
        totalInc: data.totals.inc,
        totalExp: data.totals.exp,
        percentage: data.percentage,
      };
    },
    deleteItem: function (type, id) {
      let ids, index;

      ids = data.allItems[type].map(function (current) {
        return current.id;
      });

      index = ids.indexOf(id);
      if (index !== -1) {
        data.allItems[type].splice(index, 1);
      }
    },
  };
})();

// UI CONTROLLER //////////////////////////////////////////////////////
let UIcontroller = (function () {
  let DOMstrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    inputBtn: ".add__btn",
    incomeContainer: ".income__list",
    expensesContainer: ".expenses__list",
    budgetLabel: ".budget__value",
    incomeLabel: ".budget__income--value",
    expensesLabel: ".budget__expenses--value",
    percentageLabel: ".budget__expenses--percentage",
    container: ".container",
  };

  // Public if object.methods returns
  return {
    getInput: function () {
      return {
        type: document.querySelector(DOMstrings.inputType).value, // inc or exp
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: parseFloat(document.querySelector(DOMstrings.inputValue).value),
      };
    },
    // update the UI with NEw object
    addListItem: function (obj, type) {
      let html, newHtml, element;

      if (type === "inc") {
        element = DOMstrings.incomeContainer;
        html = `<div class="item clearfix" id="inc-%id%">
        <div class="item__description">%description%</div>
        <div class="right clearfix">
        <div class="item__value">%value%</div>
        <div class="item__delete">
        <button class="item__delete--btn">
        <i class="ion-ios-close-outline"></i>
        </button>
        </div>
        </div>
        </div>`;
      } else if (type === "exp") {
        element = DOMstrings.expensesContainer;

        html = `<div class="item clearfix" id="exp-%id%">
        <div class="item__description">%description%</div>
        <div class="right clearfix">
        <div class="item__value">%value%</div>
        <div class="item__delete">
        <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
        </div>
        </div>
        </div>`;
      }
      newHtml = html.replace("%id%", obj.id);
      newHtml = newHtml.replace("%description%", obj.description);
      newHtml = newHtml.replace("%value%", obj.value);

      document.querySelector(element).insertAdjacentHTML("beforeend", newHtml);
    },

    deleteListItem: function (selectorID) {
      let el = document.getElementById(selectorID);
      el.parentNode.removeChild(el);
    },

    clearFields: function () {
      let fields, fieldsArray;

      fields = document.querySelectorAll(
        DOMstrings.inputDescription + ", " + DOMstrings.inputValue
      );

      fieldsArray = Array.prototype.slice.call(fields);

      fieldsArray.forEach(function (current, index, array) {
        current.value = "";
      });

      fieldsArray[0].focus();
    },

    displayBudget: function (obj) {
      document.querySelector(DOMstrings.budgetLabel).textContent = obj.budget;
      document.querySelector(DOMstrings.incomeLabel).textContent = obj.totalInc;
      document.querySelector(DOMstrings.expensesLabel).textContent =
        obj.totalExp;
      document.querySelector(DOMstrings.percentageLabel).textContent =
        obj.percentage;

      if (obj.percentage > 0) {
        document.querySelector(DOMstrings.percentageLabel).textContent =
          obj.percentage + "%";
      } else {
        document.querySelector(DOMstrings.percentageLabel).textContent = "-";
      }
    },

    getDOMstrings: function () {
      return DOMstrings;
    },
    displayMonth: function () {
      let now = new Date()
    }
  };
})();

// Это модуль будет взаимодействовать с другими. И сможет использовать их код//////////////
let controller = (function (budgetCtrl, UIcntrl) {
  let setupEventListeners = function () {
    let DOM = UIcntrl.getDOMstrings();
    document.querySelector(DOM.inputBtn).addEventListener("click", ctrlAddItem);

    // keyPress happens on the whole webpage not the specific el.
    document.addEventListener("keypress", function (event) {
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });

    document
      .querySelector(DOM.container)
      .addEventListener("click", ctrlDeleteItem);
  };

  let updateBudget = function () {
    // 1. Caclulate budget
    budgetCtrl.calculateBudget();
    // 2. Return the budget
    let budget = budgetCtrl.getbudget();
    // 3. Display the budget on the UI
    UIcntrl.displayBudget(budget);
  };

  let ctrlAddItem = function () {
    // 1. Get the field input data
    let inp, newItem;

    inp = UIcntrl.getInput();
    console.log(inp);
    if (inp.description !== "" && !isNaN(inp.value) && inp.value > 0) {
      // 2. Add the item to the budget controller
      newItem = budgetController.addItem(inp.type, inp.description, inp.value); // New object

      // 3. add the item to UI
      UIcntrl.addListItem(newItem, inp.type);
      // 3.1 Clear the fields
      UIcntrl.clearFields();

      // 5. Calc and update budget
      updateBudget();
    }
  };

  let ctrlDeleteItem = function (event) {
    let itemID, splitID, type, ID;

    itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
    if (itemID) {
      splitID = itemID.split("-");
      type = splitID[0];
      ID = parseInt(splitID[1]);

      // 1. Delete the item from the data structure
      budgetCtrl.deleteItem(type, ID);

      // 2. delet the item from the UI
      UIcntrl.deleteListItem(itemID);

      // 3. Update and show the new BUDGET
      updateBudget();
    }
  };

  return {
    init: function () {
      console.log("app is running");
      UIcntrl.displayBudget({
        budget: 0,
        totalInc: 0,
        totalExp: 0,
        percentage: 0,
      });
      setupEventListeners();
    },
  };
})(budgetController, UIcontroller);

controller.init();
