import { todos } from './DEFAULTTODO.js';

const DEFAULT = todos; // 기본으로 주어진 local storage 내용
const modal = document.querySelector('.modal-section'); // modal 요소 가져오기
const input = document.querySelector('.input-section input'); // 할 일 입력하는 input
const addBtn = document.querySelector('.add-todo'); // Todo 추가 버튼
const table = document.querySelector('.table-section table'); // 할 일 table 가져오기
const allFilterBtn = document.querySelector('.all-filter'); // 모든 할 일 필터링 버튼
const completeFilterBtn = document.querySelector('.complete-filter'); // 완료된 할 일 필터링 버튼
const nonCompleteFilterBtn = document.querySelector('.non-complete-filter'); // 완료 안 된 할 일 필터링 버튼
const importanceFilterBtn = document.querySelector('.importance-filter');
const p_1FilterBtn = document.querySelector('.priority-1');
const p_2FilterBtn = document.querySelector('.priority-2');
const p_3FilterBtn = document.querySelector('.priority-3');
const dropdownMenu = document.querySelector('.dropdown-menu');
const addTodoPriority = document.querySelector('.select-priority button'); // 새로운 todo 입력할 때의 중요도
const prioritySection = document.querySelector('.select-priority-section');
const p_1AddBtn = document.querySelector('.priority-2-1');
const p_2AddBtn = document.querySelector('.priority-2-2');
const p_3AddBtn = document.querySelector('.priority-2-3');
const addTodoPriorityBtn = document.querySelector('.select-priority-addBtn');
const allCheckBox = document.querySelector('.select-all-input'); // 테이블에서 모든 항목 선택할 때 쓸 인풋
const deleteBtn = document.querySelector('.delete-button'); // 할 일 삭제 버튼
const completeBtn = document.querySelector('.complete-button'); // 할 일 완료 버튼
const closeModalBtn = document.querySelector('.close-modal'); // 모달 닫기 버튼

let myTodoList;
const tmpTodoList = JSON.parse(localStorage.getItem('todoList'));

if (tmpTodoList) {
    myTodoList = tmpTodoList;
} else {
    localStorage.setItem('todoList', JSON.stringify(DEFAULT)); // 값 넣어두고 시작
    myTodoList = DEFAULT;
}

let filterMode = 'all'; // completed | non-completed | priority로 나누기
let addPriority = '중요도 선택'; // default = 중요도 선택 | 1 | 2 | 3으로 나누기

// input 핸들러
input.addEventListener('input', () => {
    console.log(input.value);
});

// 할 일 추가 시 중요도 선택할 때 드롭다운 토글 핸들러
addTodoPriority.addEventListener('click', () => {
    prioritySection.classList.toggle('show');
});

p_1AddBtn.addEventListener('click', () => {
    addPriority = 1;
    addTodoPriorityBtn.innerHTML = '1';
});
p_2AddBtn.addEventListener('click', () => {
    addPriority = 2;
    addTodoPriorityBtn.innerHTML = '2';
});
p_3AddBtn.addEventListener('click', () => {
    addPriority = 3;
    addTodoPriorityBtn.innerHTML = '3';
});

// 할 일 추가 버튼 핸들러
addBtn.addEventListener('click', () => {
    if (input.value === '' || addPriority === '중요도 선택') {
        alert('할 일과 중요도를 모두 지정해주세요');
    } else {
        const maxId = Math.max(...myTodoList.map((todo) => todo.id));

        const newTodo = {
            id: maxId + 1,
            title: input.value,
            completed: false,
            priority: addPriority,
        };

        myTodoList.push(newTodo); // 새로운 todo 리스트에 추가

        localStorage.setItem('todoList', JSON.stringify(myTodoList)); // 추가한 리스트 localStorage에 다시 넣기(이거 기반으로 다시 렌더링)

        // 입력, 중요도 다시 초기화
        input.value = '';
        addPriority = '0';

        // 테이블 다시 렌더링
        renderTodoList();
    }
});

// 중요도 버튼(필터링) 핸들러
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

let filteredList = [];

// 테이블 내용 렌더링하는 함수 -> 렌더링 초기, 버튼 누를 때마다 호출
function renderTodoList() {
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }

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
            <th><input type="checkbox" class="table-${todo.id}"></th>
            <th>${todo.priority}</th>
            <th>${todo.completed ? '완료' : '미완료'}</th>
            <th>${todo.title}</th>
        `;
        table.appendChild(tr);
    });
}

// 테이블 항목 전체 체크하기
allCheckBox.addEventListener('change', () => {
    if (allCheckBox.checked) {
        filteredList.forEach((todo) => {
            const tableCheckBox = document.querySelector(`.table-${todo.id}`);
            tableCheckBox.checked = true;
        });
    } else {
        filteredList.forEach((todo) => {
            const tableCheckBox = document.querySelector(`.table-${todo.id}`);
            tableCheckBox.checked = false;
        });
    }
});

// 완료 버튼 기능
completeBtn.addEventListener('click', () => {
    const checkedList = filteredList.filter((todo) => {
        const tableCheckBox = document.querySelector(`.table-${todo.id}`);
        return tableCheckBox.checked;
    });

    const alreadyCompletedItem = checkedList.some((todo) => todo.completed);

    if (alreadyCompletedItem) {
        modal.classList.add('show');
        return;
    }

    myTodoList.forEach((todo) => {
        const isChecked = checkedList.some((item) => item.id === todo.id);
        if (isChecked) {
            todo.completed = true;
        }
    });

    localStorage.setItem('todoList', JSON.stringify(myTodoList));
    renderTodoList();
});

// 삭제 버튼 기능
deleteBtn.addEventListener('click', () => {
    const checkedList = filteredList.filter((todo) => {
        const tableCheckBox = document.querySelector(`.table-${todo.id}`);
        return tableCheckBox && tableCheckBox.checked;
    });

    const checkedIds = checkedList.map((item) => item.id);

    myTodoList = myTodoList.filter((todo) => !checkedIds.includes(todo.id));

    localStorage.setItem('todoList', JSON.stringify(myTodoList));
    renderTodoList();
});

closeModalBtn.addEventListener('click', () => {
    modal.classList.toggle('show');
});

// addBtn.addEventListener('click', () => {
//     modal.classList.add('show');
// });

renderTodoList();
