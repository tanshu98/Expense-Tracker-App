// Variables Defination -

let balance;
let income;
let expense;


let container = document.querySelector('.container');
// Salary Add Money and Salary Form Data -
const addMoneyButton = document.querySelector(".add-money-btn");

// let totalSalary = addMoneyButton.innerHTML;
// console.log(totalSalary);
const addSalaryForm = document.querySelector("#add-salary");
const salaryCloseButton = document.querySelector(".salary-close-btn");

// * Transaction Form Data
const addTransactionForm = document.querySelector("#add-transaction");
const enterTransaction = document.querySelector(".enter-transaction");
const enterTransactionDetails = document.querySelector(
  ".enter-transaction-details"
);
// let paidItem = document.querySelector('#paid-item').innerHTML;
// let paidAmount = document.querySelector('#paid-amount').innerHTML;
// console.log(paidItem, paidAmount);
const transactionCloseButton = document.querySelector(".btn-close");
const ExpenseTrackerBtn = document.querySelector(".expense-tracker-btn");

const salaryCredited = document.querySelector(".salary-credited");
console.log(salaryCredited);
const salaryDiscredited = document.querySelector(".salary-discredited");
console.log(salaryDiscredited);

// const paidItemValue = document.querySelector('#paid-item').innerHTML;
// console.log(paidItemValue);
// const paidAmountValue = document.querySelector('#paid-amount').innerHTML;
// // console.log(paidAmountValue);

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
  // getting the input value from input filed
  let inputValue = Number(document.querySelector("input").value);
  console.log(inputValue);

  // Adding the input value to inner html
  // console.log( balance.length);

  if (!balance) {
    console.log("inside this if block");
    addMoneyButton.innerHTML = inputValue;
    console.log("inputValue", typeof inputValue);
    balance = Number(addMoneyButton.innerHTML); // Storing the value as global variable
    console.log(typeof balance);
    income = balance;
    console.log("income", income);
  } else if (balance > 0) {
    console.log("inside this else block");
    console.log("input", inputValue);
    income = inputValue;
    console.log("income", income);
    balance = balance + income;
    console.log(balance);
    addMoneyButton.innerHTML = balance;
  } else {
    alert("Pls enter a valid money amount 😁");
  }

  // Adding the total value in inner html..and displaying it as salary credited div
  createSalaryCreditedDiv();
  // document.querySelector("#amount-added").innerHTML = income;

  // Show and hide the forms
  ExpenseTrackerBtn.style.display = "block"; // Show the plus icon
  addSalaryForm.style.display = "none";
  salaryCredited.style.display = "flex";
  inputValue = "";
  console.log(inputValue);
});

const createSalaryCreditedDiv = function() {
  let salaryCreditedDiv = `
  <div class="salary-credited">
            <span>salary</span>
            <span>cr</span>
            <span id="amount-added">${income}</span>
        </div>`; 
  // salaryCreditedDiv.style.display = 'flex';
        console.log('salaryCreditedDiv', salaryCreditedDiv);
        document.querySelector(".container").appendChild(salaryCreditedDiv);
}

addTransactionForm.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("Inside addTransactionForm submit event listener");

  // Call the createSalaryDiscreditedDiv() everytime user submits the addTransactionForm..
  createSalaryDiscreditedDiv();
  console.log("After the createSalaryDiscredited!");
  // getting the input value from input filed
  let transactionValue = enterTransaction.value;
  let transactionDetailsValue = enterTransactionDetails.value;
  console.log(transactionValue, transactionDetailsValue);

  // Subtracting the balance amount with the expense amount

  balance = balance - transactionValue;
  addMoneyButton.innerHTML = balance;
  // Adding the input value to innerHTML

  if (document.querySelector(`#paid-item`).innerHTML === "") {
    document.querySelector(`#paid-item`).innerHTML = transactionDetailsValue;
    document.querySelector(`#paid-amount`).innerHTML = transactionValue;
  } else {
    document.querySelector(
      `#paid-item-${
        document.querySelector(".salary-discredited").children.length
      }`
    ).innerHTML = transactionDetailsValue;
    document.querySelector(
      `#paid-amount-${
        document.querySelector(".salary-discredited").children.length
      }`
    ).innerHTML = transactionValue;
    document.querySelector(
      `#paid-item-${
        document.querySelector(".salary-discredited").children.length
      }`
    ).parentElement.style.display = "flex";
    console.log(
      "inside paid-item-id",
      document.querySelector(
        `#paid-item-${
          document.querySelector(".salary-discredited").children.length
        }`
      )
    );
  }

  // Making the input values null
  enterTransaction.value = "";
  enterTransactionDetails.value = "";
  // Display hide or show
  // salaryDiscredited.style.setProperty('display', 'flex');
  // addTransactionForm.style.setProperty('display', 'none');
  // console.log(salaryDiscredited);
  document.querySelector(".salary-discredited").style.display = "flex";

  addTransactionForm.style.display = "none";
  document.querySelector(".salary-discredited").children+ 1;
});

// Create SalaryDiscreditedDiv and add class, span tags etc to it..
const createSalaryDiscreditedDiv = function () {
  console.log("We are inside the createSalaryDiscreditedDiv function!");
  let salaryDiscreditedDiv = document.createElement("div");
  console.log("salaryDiscreditedDiv is credited");
  salaryDiscreditedDiv.setAttribute("class", "salary-discredited");
  document.querySelector(".container").appendChild(salaryDiscreditedDiv);

  // Logic for looping through - 

  // for(let i =0; i< )

  // Logic for appending children in correct salaryDiscreditedDiv -

  if (document.querySelector(".salary-discredited").children.length === 0) {
    salaryDiscreditedDiv.setAttribute(
      "id",
      `id-${document.querySelector(".salary-discredited").children.length}`
    );
    let paidItemSpan = document.createElement("span");
    paidItemSpan.setAttribute("id", `paid-item`);
    // paidItemSpan.innerHTML = 'paid'
    document.querySelector(".salary-discredited").appendChild(paidItemSpan);
    console.log("Added paid item span");
    let drSpan = document.createElement("span");
    drSpan.innerHTML = "dr";
    document.querySelector(".salary-discredited").appendChild(drSpan);
    console.log("Added dr span");
    let paidAmountSpan = document.createElement("span");
    // paidAmountSpan.innerHTML = '0'
    paidAmountSpan.setAttribute("id", `paid-amount`);
    document.querySelector(".salary-discredited").appendChild(paidAmountSpan);
  } else if (
    document.querySelector(".salary-discredited").children.length > 0
  ) {
    salaryDiscreditedDiv.setAttribute(
      "id",
      `id-${document.querySelector(".salary-discredited").children.length}`
    );
    let paidItemSpan = document.createElement("span");
    paidItemSpan.setAttribute(
      "id",
      `paid-item-${
        document.querySelector(".salary-discredited").children.length
      }`
    );

    // paidItemSpan.innerHTML = 'paid'
    document
      .querySelector(
        `#id-${document.querySelector(".salary-discredited").children.length}`
      )
      .appendChild(paidItemSpan);
    console.log("Added paid item span");
    let drSpan = document.createElement("span");
    drSpan.innerHTML = "dr";
    document
      .querySelector(
        `#id-${document.querySelector(".salary-discredited").children.length}`
      )
      .appendChild(drSpan);
    console.log("Added dr span");
    let paidAmountSpan = document.createElement("span");
    // paidAmountSpan.innerHTML = '0'
    paidAmountSpan.setAttribute(
      "id",
      `paid-amount-${
        document.querySelector(".salary-discredited").children.length
      }`
    );

    document
      .querySelector(
        `#id-${document.querySelector(".salary-discredited").children.length}`
      )
      .appendChild(paidAmountSpan);
  }

  // for(let i =0; document.querySelector('.salary-discredited').children.length; i++ ) {
  // salaryDiscreditedDiv.setAttribute("id", `id-${document.querySelector('.salary-discredited').children.length}`);
  //   console.log('Inside the legendary for loop');
  // }

  // let paidItemSpan = document.createElement("span");
  // paidItemSpan.setAttribute("id", "paid-item");
  // // paidItemSpan.innerHTML = 'paid'
  // document.querySelector(".salary-discredited").appendChild(paidItemSpan);
  // console.log('Added paid item span');
  // let drSpan = document.createElement("span");
  // drSpan.innerHTML = "dr";
  // document.querySelector(".salary-discredited").appendChild(drSpan);
  // console.log('Added dr span');
  // let paidAmountSpan = document.createElement("span");
  // // paidAmountSpan.innerHTML = '0'
  // paidAmountSpan.setAttribute("id", "paid-amount");
  // document.querySelector(".salary-discredited").appendChild(paidAmountSpan);
  //   console.log('paid amount span');
  //   console.log(salaryDiscreditedDiv.children.length);
  //   console.log(salaryDiscreditedDiv)
};
