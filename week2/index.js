const input = document.getElementById('inputId');
const addBtn = document.getElementById('button');
const ul = document.getElementById('ul');

let todos = JSON.parse(localStorage.getItem('todos')) || [];

todos.forEach((todo) => {
    const li = document.createElement('li');
    li.textContent = todo;
    ul.appendChild(li);
});

addBtn.onclick = () => {
    const value = input.value;

    if (!value) {
        return null;
    }

    const li = document.createElement('li');
    li.textContent = value;
    ul.appendChild(li);

    todos.push(value);
    localStorage.setItem('todos', JSON.stringify(todos));

    input.value = null;
};

// let list = [];

// const button = document.getElementById('button');
// button.onclick = () => {
//     addTodo();
//     const li = document.createElement('li');

//     ul.innerHTML = list;
// };

// const addTodo = () => {
//     let input = document.getElementById('inputId').value;
//     list.push(input);
//     console.log(list);
//     input = null;
//     console.log(null);
// };

// const ul = document.getElementById('ul');

// list.forEach((todo) => {
//     li.textContent = todo;
// });

// ul.innerHTML = list;
