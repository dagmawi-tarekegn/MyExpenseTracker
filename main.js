let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

const titleInput = document.getElementById("title");
const amountInput = document.getElementById("amount");
const typeSelect = document.getElementById("type");
const list = document.getElementById("list");
const incomeEl = document.getElementById("income");
const expenseEl = document.getElementById("expense");
const balanceEl = document.getElementById("balance");
const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", addTransaction);

function addTransaction() {
    const title = titleInput.value;
    const amount = amountInput.value;
    const type = typeSelect.value;

    if (title === "" || amount === "") {
        alert("You Forgot To Fill All The Fields");
        return;
    }

    const transaction = {
        id: Date.now(),
        title,
        amount: Number(amount),
        type
    };

    transactions.push(transaction);
    localStorage.setItem("transactions", JSON.stringify(transactions));

    titleInput.value = "";
    amountInput.value = "";

    
}