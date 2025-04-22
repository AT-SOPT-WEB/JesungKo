import { todos } from './DEFAULTTODO.js';

const DEFAULT_TODO = todos;

localStorage.setItem('todoList', JSON.stringify(DEFAULT_TODO));
