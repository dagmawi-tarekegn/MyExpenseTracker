let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

const titleInput = document.getElementById("title");
const amountInput = document.getElementById("amount");
const typeSelect = document.getElementById("type");
const list = document.getElementById("list");
const incomeEl = document.getElementById("income");
const expenseEl = document.getElementById("expense");
const balanceEl = document.getElementById("balance");
const addBtn = document.getElementById("addBtn");
