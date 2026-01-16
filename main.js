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

    renderTransactions();

}


function renderTransactions() {
    list.innerHTML = "";

    let income = 0;
    let expense = 0;

    transactions.forEach(t => {
        const li = document.createElement("li");
        li.classList.add(t.type);

        li.innerHTML = `
            ${t.title} - ${t.amount}
            <span class="delete" onclick="deleteTransaction(${t.id})">Delete</span>
        `;

        list.appendChild(li);

        if (t.type === "income") {
            income += t.amount;
        } else {
            expense += t.amount;
        }
    });

    incomeEl.textContent = income;
    expenseEl.textContent = expense;
    balanceEl.textContent = income - expense;
}


function deleteTransaction(id) {
    transactions = transactions.filter(t => t.id !== id);
    localStorage.setItem("transactions", JSON.stringify(transactions));
    renderTransactions();
}

renderTransactions();