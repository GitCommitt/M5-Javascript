const days = document.querySelector(".days");
const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");
const dateTitle = document.querySelector("#date");

let currentDate = new Date(2025, 8);

function renderMonth(){
    const lastDayOfMonth = new Date(currentDate.getFullYear(),currentDate.getMonth() + 1, 0);
    const numberOfDays = lastDayOfMonth.getDate();
    let firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    if (firstDayOfMonth == 0) firstDayOfMonth = 7;

    days.innerHTML = "";

    for (let i = 0; i < firstDayOfMonth - 1; i++) {
        const emptyDay = document.createElement("li");
        emptyDay.classList.add("empty");
        days.appendChild(emptyDay);
    }

    for (let i = 1; i <= numberOfDays; i++) {
        const day = document.createElement("li");
        day.classList.add("day");
        day.textContent = i;
        days.appendChild(day);
    }

    const options = { year: "numeric", month: "short" };
    dateTitle.textContent = currentDate.toLocaleDateString("nl-nl", options);
}

function nextMonth() {
    days.innerHTML = "";
    currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1);
    renderMonth();
}

function prevMonth() {
    days.innerHTML = "";
    currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1);
    renderMonth();
}

nextButton.addEventListener("click", nextMonth);
prevButton.addEventListener("click", prevMonth);

renderMonth();
