import { todos } from './DEFAULTTODO.js';

const DEFAULT = todos; // 기본으로 주어진 local storage 내용
const modal = document.querySelector('.modal-section'); // modal 요소 가져오기
const input = document.querySelector('.input-section input'); // 할 일 입력하는 input
const addBtn = document.querySelector('.input-section button'); // Todo 추가 버튼
const table = document.querySelector('.table-section table'); // 할 일 table 가져오기

localStorage.setItem('todoList', JSON.stringify(DEFAULT)); // 값 넣어두고 시작
const myTodoList = JSON.parse(localStorage.getItem('todoList')); // 내부적으로 사용할 변수에 담기

// input 핸들러
input.addEventListener('input', () => {
    console.log(input.value);
});

console.log(myTodoList);

myTodoList.forEach((todo) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<th>${todo.completed}</th><th>${todo.priority}</th><th>${todo.completed}</th><th>${todo.title}</th>`;
    table.appendChild(tr);
});

addBtn.addEventListener('click', () => {
    modal.classList.add('show');
});
