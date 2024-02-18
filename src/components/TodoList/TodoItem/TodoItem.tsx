import React from "react";

import s from './TodoItem.module.css'
import { Button } from "../../Button/Button";

interface TodoItemProps {
    todo: Todo
    checkTodo: (id: Todo['id']) => void
}

export const TodoItem: React.FC<TodoItemProps> = ({todo, checkTodo}) => {
    return (
        <div className={s.todo_item_container}>
            <div>
                <div aria-hidden
                style={{
                    opacity: todo.checked ? 0.5 : 1,
                    textDecoration: todo.checked ? 'line-through' : 'none'
                }}
                onClick={() => checkTodo(todo.id)}
                className={s.todo_item_title}>
                    {todo.name}
                </div>
                <div aria-hidden
                style={{
                    opacity: todo.checked ? 0.5 : 1,
                    textDecoration: todo.checked ? 'line-through' : 'none'
                }}
                className={s.todo_item_description}>
                    {todo.description}
                </div>
                <div className={s.todo_item_button_container}>
                    <Button buttonText="DELETE"/>
                    <Button buttonText="EDIT"/>
                </div>
            </div>
        </div>
    )
}