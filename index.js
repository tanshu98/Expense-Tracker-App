// Variables Defination -

let balance;
let income;
let expense;

let count = 1000;
let srCount = 1;

let container = document.querySelector(".container");
// Salary Add Money and Salary Form Data -
const addMoneyButton = document.querySelector(".add-money-btn");

// let totalSalary = addMoneyButton.innerHTML;
const addSalaryForm = document.querySelector("#add-salary");
const salaryCloseButton = document.querySelector(".salary-close-btn");

// * Transaction Form Data
const addTransactionForm = document.querySelector("#add-transaction");
const enterTransaction = document.querySelector(".enter-transaction");
const enterTransactionDetails = document.querySelector(
  ".enter-transaction-details"
);

const transactionCloseButton = document.querySelector(".btn-close");
const ExpenseTrackerBtn = document.querySelector(".expense-tracker-btn");

const salaryCredited = document.querySelector(".salary-credited");
const salaryDiscredited = document.querySelector(".salary-discredited");

// ! Add Money Modal -
// When the user clicks on addMoneyButton, open the modal
addMoneyButton.addEventListener("click", function () {
  addSalaryForm.style.display = "flex";
  document.querySelector("input").value = "";
});

// When the user clicks on salaryCloseButton, close the modal
salaryCloseButton.addEventListener("click", (e) => {
  e.preventDefault();
  addSalaryForm.style.display = "none";
});

// ! Expense Tracker -

// Open transaction form
ExpenseTrackerBtn.addEventListener("click", function () {
  addTransactionForm.style.display = "flex";
});

// Close transaction form -

transactionCloseButton.addEventListener("click", function (e) {
  e.preventDefault();
  addTransactionForm.style.display = "none";
});

// Add Money Logic and store it

addSalaryForm.addEventListener("submit", function (e) {
  e.preventDefault();
  srCount++;

  // Function for creating salary Div 

  createSalaryCreditedDiv();

  // getting the input value from input filed
  let inputValue = Number(document.querySelector("input").value);

  if (!balance) {
    addMoneyButton.innerHTML = inputValue;
    balance = Number(addMoneyButton.innerHTML); // Storing the value as global variable
    income = balance;
  } else if (balance > 0) {
    income = inputValue;
    balance = balance + income;
    addMoneyButton.innerHTML = balance;
  } else {
    alert("Pls enter a valid money amount 😁");
  }

  // Adding the total value in inner html..and displaying it as salary credited div
  document.querySelector(`#salary-span-${srCount}`).innerHTML = 'Salary';
  document.querySelector(`#salary-amount-${srCount}`).innerHTML = income;

  // Show and hide the forms
  ExpenseTrackerBtn.style.display = "block"; // Show the plus icon
  addSalaryForm.style.display = "none";
  document.querySelector(`#id-${srCount}`).style.display = "flex";

  inputValue = "";
});


addTransactionForm.addEventListener("submit", function (e) {
  e.preventDefault();
  count ++;

  // Call the createSalaryDiscreditedDiv() everytime user submits the addTransactionForm..
  createSalaryDiscreditedDiv();
  // getting the input value from input filed
  let transactionValue = enterTransaction.value;
  let transactionDetailsValue = enterTransactionDetails.value;

  // Subtracting the balance amount with the expense amount

  balance = balance - transactionValue;
  addMoneyButton.innerHTML = balance;
  // Adding the input value to innerHTML

  document.querySelector(`#paid-item-${count}`).innerHTML = transactionDetailsValue;
  document.querySelector(`#paid-amount-${count}`).innerHTML = transactionValue;

  // Making the input values null
  enterTransaction.value = "";
  enterTransactionDetails.value = "";

  // Display hide or show
  document.querySelector(`#id-${count}`).style.display = "flex";
  addTransactionForm.style.display = "none";
});

// Create SalaryDiscreditedDiv and add class, span tags etc to it..

const createSalaryDiscreditedDiv = function () {
  let salaryDiscreditedDiv = document.createElement("div");
  salaryDiscreditedDiv.setAttribute("class", "salary-discredited");
  salaryDiscreditedDiv.setAttribute("id", `id-${count}`);
  document.querySelector(".container").appendChild(salaryDiscreditedDiv);

  let paidItemSpan = document.createElement("span");
  paidItemSpan.setAttribute("id", `paid-item-${count}`);
  document.querySelector(`#id-${count}`).appendChild(paidItemSpan);
  let drSpan = document.createElement("span");
  drSpan.innerHTML = "dr";
  document.querySelector(`#id-${count}`).appendChild(drSpan);
  let paidAmountSpan = document.createElement("span");
  paidAmountSpan.setAttribute("id", `paid-amount-${count}`);
  document.querySelector(`#id-${count}`).appendChild(paidAmountSpan);
};


// Create SalaryDiscreditedDiv and add class, span tags etc to it..

const createSalaryCreditedDiv = function() {
  let salaryCreditedDiv = document.createElement("div");
  salaryCreditedDiv.setAttribute("class", "salary-credited");
  salaryCreditedDiv.setAttribute("id", `id-${srCount}`);
  document.querySelector(".container").appendChild(salaryCreditedDiv);

  let salarySpan = document.createElement("span");
  salarySpan.setAttribute("id", `salary-span-${srCount}`);
  document.querySelector(`#id-${srCount}`).appendChild(salarySpan);
  let crSpan = document.createElement("span");
  crSpan.innerHTML = "cr";
  document.querySelector(`#id-${srCount}`).appendChild(crSpan);
  let salaryAmountSpan = document.createElement("span");
  salaryAmountSpan.setAttribute("id", `salary-amount-${srCount}`);
  document.querySelector(`#id-${srCount}`).appendChild(salaryAmountSpan);
}
