import React from 'react'
import s from './Button.module.css'

interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
    buttonText: string
}

export const Button: React.FC<ButtonProps> = ({buttonText, onClick}) => {
    return (
        <div>
            <button className={s.panel_button} onClick={onClick}>{buttonText}</button>
        </div>
    )
}