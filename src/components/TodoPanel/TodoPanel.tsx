import React from 'react'
import s from './TodoPanel.module.css'
import { Button } from '../Button/Button';

const DEFAULT_TODO = {
    name: '',
    description: ''
}

interface TodoPanelProps {
    addTodo: ({name, description}: Omit<Todo, 'checked' | 'id'>) => void
}

export const TodoPanel: React.FC<TodoPanelProps> = ({addTodo}) => {

    const [todo, setTodo] = React.useState(DEFAULT_TODO);

    const todoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target
        setTodo({...todo, [name]: value})
    }

    const onClick = () => {
        addTodo({name: todo.name, description: todo.description})
        setTodo(DEFAULT_TODO)

    }

    return (
        <div className={s.todo_panel_container}>
            <div className={s.fields_container}>
            <div className={s.field_container}>
                <label htmlFor="name">
                    <div>Name</div>
                    <input type="text" id='name' value={todo.name} name='name' onChange={todoChange} placeholder='First task'/>
                </label>
                <div className={s.field_container}>
                <label htmlFor="description">
                    <div>Description</div>
                    <input type="text" id='description' value={todo.description} name='description' onChange={todoChange} placeholder='Eat breakfast...'/>
                </label>
                </div>
            </div>
            </div>
            <div className={s.button_container}>
                <Button buttonText='ADD' onClick={onClick}/>
            </div>
        </div>
    )
}