// // ES 5 < 2015
// // TypeScript -> convert to ES5
"use strict"
// var x =55
//
//
// // ES 6 >= 2015
// // ES 6 = ES2020 -> convert to ES5
// const PI_VALUE = 3.14
// let nn = 88
//
// nn = 50
//
// const userFullName = 'Ahmed Elnemr';
// // console.log(userFullName)
// // const message = 'Welcome ' + userFullName
// const message = `Welcome ${userFullName}`
// let age = "d5.3"
// console.log(age + 2)
// console.log(Number(age) + 2)

const app = document.getElementById('app'),
    newTask = document.getElementById('task'),
    taskList = document.getElementById('task-list'),
    btnAddNewTask = document.getElementById('btn-add-new-task');


btnAddNewTask.addEventListener('click', function (event) {
    taskList.innerHTML += `<li>${newTask.value} <button>Edit</button></li>`;
    newTask.value = '';
    // console.log(event.target)
    // alert('done')
})



// app.innerText = 'Added value from js';
// app.addEventListener('click', function () {
//     app.classList.add('app');
// })
// console.log(app)