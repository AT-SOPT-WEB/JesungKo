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
        tr.draggable = true;
        tr.innerHTML = `
            <th><input type="checkbox" class="table-${todo.id}"></th>
            <th>${todo.priority}</th>
            <th>${todo.completed ? '완료' : '미완료'}</th>
            <th>${todo.title}</th>
        `;
        table.appendChild(tr);

        // 드래그 시작할 때 발생하는 이벤트, todo.id 값을 항목에 저장
        tr.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', todo.id);
        });
        // 테이블에서 각 tr들이 드롭을 받을 수 있음을 명시해주는 이벤트!
        // dragover는 드래그중인 요소가 다른 요소 위에 있을 때 발동되는 이벤트이고
        // `e.preventDefault()`로 다른 요소가 드롭을 할 수 있도록 허용해주는 것(원래는 안된다 함)
        tr.addEventListener('dragover', (e) => {
            e.preventDefault();
        });
        // 드래그 중이던 항목을 다른 곳에 놓았을 때 발생하는 이벤트, 전달받은 todo.id 값 사용!
        tr.addEventListener('drop', (e) => {
            e.preventDefault();
            const draggedId = parseInt(e.dataTransfer.getData('text/plain'));
            if (draggedId !== todo.id) {
                moveTodoItem(draggedId, todo.id);
            }
        });

        const checkbox = tr.querySelector(`.table-${todo.id}`);
        checkbox.addEventListener('change', checkAll);
    });
}

// 드래그해서 옮긴 항목 순서 바꿔서 재정렬하고 localStorage에 다시 저장
function moveTodoItem(draggedId, targetId) {
    const draggedIndex = myTodoList.findIndex((todo) => todo.id === draggedId);
    const targetIndex = myTodoList.findIndex((todo) => todo.id === targetId);

    // draggedIndex에서부터 1개의 요소 지우기(드래그 중인 거 지우고)
    const [draggedItem] = myTodoList.splice(draggedIndex, 1);
    // -> 구조 분해 할당 안 쓰면 []로 묶인 배열 자체가 저장되어서 값을 바로 불러올 수 없음

    // targetIndex부터 0개의 요소 지우고 draggedItem 삽입
    myTodoList.splice(targetIndex, 0, draggedItem);

    localStorage.setItem('todoList', JSON.stringify(myTodoList));
    renderTodoList();
}

// 모든 항목 체크되어 있으면 상단 체크박스도 체크
const checkAll = () => {
    const nonCheckedList = filteredList.filter((todo) => {
        const tableCheckBox = document.querySelector(`.table-${todo.id}`);
        return !tableCheckBox.checked;
    });
    if (nonCheckedList.length === 0) {
        allCheckBox.checked = true;
    } else {
        allCheckBox.checked = false;
    }
};

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
