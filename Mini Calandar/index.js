// const monthNameEl = document.getElementById("month-name");
// const dayNameEl = document.getElementById("day-name");
// const dayNumEl = document.getElementById("day-number");
// const yearEl = document.getElementById('year');


// const date = new Date();
// const month = date.getMonth()
// monthNameEl.innerText = date.toLocaleDateString("en", {
//     month: "long"})

// dayNameEl.innerText = date.toLocaleTimeString('en', {
//     weekday: "long"
// })

// dayNumEl.innerText = date.getDate()

// yearEl.innerText = date.getFullYear();

const monthNameEl = document.getElementById("month-name");
const dayNameEl = document.getElementById("day-name");
const dayNumEl = document.getElementById("day-number");

const date = new Date();
const month  = date.getMonth();
monthNameEl.innerText = date.toLocaleDateString('en', {
    month: "long"})
    dayNameEl.innerText = date.toLocaleDateString('en', {
        weekday: "long"
    })
    dayNumEl.innerText = date.getDate();

    yearEl.innerText = date.getFullYear();