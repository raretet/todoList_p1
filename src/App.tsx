import React from 'react';

import { Header } from './components/Header/Header';
import { TodoPanel } from './components/TodoPanel/TodoPanel';

import s from './App.module.css';
import { TodoList } from './components/TodoList/TodoList';

const DEFAULT_TODO_LIST = [
  {
    id: 1,
    name: 'task 1',
    description: 'description 1',
    checked: false
  },

  {
    id: 2,
    name: 'task 2',
    description: 'description 1',
    checked: false
  },

  {
    id: 3,
    name: 'task 3',
    description: 'description 3 so long so long so long so long so long so long so long so long so long so long so long',
    checked: true
  }
]
 
export const App = () => {

  const [todos, setTodos] = React.useState(DEFAULT_TODO_LIST);

  const addTodo = ({name, description}: Omit<Todo, 'checked' | 'id'>) => {
    setTodos([...todos, {id: todos[todos.length - 1].id +1, description, name, checked: false}])
  }

  const checkTodo = (id: Todo['id']) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return {...todo, checked: !todo.checked}
      }
      return todo
    }))
  }

  const deleteTodo = (id: Todo['id']) => {
    setTodos(todos.filter((todo) => todo.id !== id)) 
  }

  return (
    <div className={s.app_container}>
      <div className={s.container}>
        <Header todoCount={todos.length}/>
        <TodoPanel addTodo={addTodo}/>
        <TodoList todos={todos} checkTodo={checkTodo} deleteTodo={deleteTodo}/>
      </div>
    </div>
  );
}

