import { todos } from './DEFAULTTODO.js';

const DEFAULT_TODO = todos;
const modal = document.querySelector('.modal-section'); // modal 요소 가져오기
const addBtn = document.querySelector('.input-section button'); // Todo 추가 버튼

localStorage.setItem('todoList', JSON.stringify(DEFAULT_TODO));

addBtn.addEventListener('click', () => {
    modal.classList.add('show');
});
