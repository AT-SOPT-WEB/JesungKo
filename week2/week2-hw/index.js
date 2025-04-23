import { todos } from './DEFAULTTODO.js';

const DEFAULT = todos; // 기본으로 주어진 local storage 내용
const modal = document.querySelector('.modal-section'); // modal 요소 가져오기
const input = document.querySelector('.input-section input'); // 할 일 입력하는 input
const addBtn = document.querySelector('.input-section button'); // Todo 추가 버튼
const table = document.querySelector('.table-section table'); // 할 일 table 가져오기
const allFilterBtn = document.querySelector('.all-filter'); // 모든 할 일 필터링 버튼
const completeFilterBtn = document.querySelector('.complete-filter'); // 완료된 할 일 필터링 버튼
const nonCompleteFilterBtn = document.querySelector('.non-complete-filter'); // 완료 안 된 할 일 필터링 버튼
const importanceFilterBtn = document.querySelector('.importance-filter');
const p_1FilterBtn = document.querySelector('.priority-1');
const p_2FilterBtn = document.querySelector('.priority-2');
const p_3FilterBtn = document.querySelector('.priority-3');
const dropdownMenu = document.querySelector('.dropdown-menu');

localStorage.setItem('todoList', JSON.stringify(DEFAULT)); // 값 넣어두고 시작
const myTodoList = JSON.parse(localStorage.getItem('todoList')); // 내부적으로 사용할 변수에 담기

let filterMode = 'all'; // completed | non-completed | priority로 나누기

// input 핸들러
input.addEventListener('input', () => {
    console.log(input.value);
});

// 중요도 버튼 핸들러
importanceFilterBtn.addEventListener('click', () => {
    dropdownMenu.classList.toggle('show'); // toggle 메서드로 class가 있/없에 따라서 사라지고 나타나게
});

// 필터링 버튼별로 핸들링
allFilterBtn.addEventListener('click', () => {
    filterMode = 'all';
    renderTodoList();
});
completeFilterBtn.addEventListener('click', () => {
    filterMode = 'completed';
    renderTodoList();
});
nonCompleteFilterBtn.addEventListener('click', () => {
    filterMode = 'non-completed';
    renderTodoList();
});
p_1FilterBtn.addEventListener('click', () => {
    filterMode = 'priority-1';
    renderTodoList();
});
p_2FilterBtn.addEventListener('click', () => {
    filterMode = 'priority-2';
    renderTodoList();
});
p_3FilterBtn.addEventListener('click', () => {
    filterMode = 'priority-3';
    renderTodoList();
});

// 테이블 내용 렌더링하는 함수 -> 렌더링 초기, 버튼 누를 때마다 호출
function renderTodoList() {
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }

    let filteredList = [];

    if (filterMode === 'all') {
        // 전체
        filteredList = myTodoList;
    } else if (filterMode === 'non-completed') {
        // 완료 안 된 것만
        filteredList = myTodoList.filter((todo) => todo.completed === false);
    } else if (filterMode === 'completed') {
        // 완료된 것만
        filteredList = myTodoList.filter((todo) => todo.completed === true);
    } else if (filterMode === 'priority-1') {
        // 중요도별로 정렬
        filteredList = myTodoList.filter((todo) => todo.priority === 1);
    } else if (filterMode === 'priority-2') {
        // 중요도별로 정렬
        filteredList = myTodoList.filter((todo) => todo.priority === 2);
    } else if (filterMode === 'priority-3') {
        // 중요도별로 정렬
        filteredList = myTodoList.filter((todo) => todo.priority === 3);
    }

    filteredList.forEach((todo) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <th><input type="checkbox" ${todo.completed ? 'checked' : ''}></th>
            <th>${todo.priority}</th>
            <th>${todo.completed ? '완료' : '미완료'}</th>
            <th>${todo.title}</th>
        `;
        table.appendChild(tr);
    });
}

addBtn.addEventListener('click', () => {
    modal.classList.add('show');
});

renderTodoList();
