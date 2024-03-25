import { useEffect, useState } from 'react'
import Button from '../UI/Button'
import Styles from './TodoForm.module.css'

function TodoForm({ setTodos }) {
	const [text, setText] = useState('')

	useEffect(() => {
		document.querySelector(`.${Styles.input}`).focus()
	}, [text])

	const handleInput = e => {
		setText(e.target.value)
	}
	const handleSubmit = e => {
		e.preventDefault()
		setTodos(text)
		setText('')
	}

	return (
		<div className={Styles.taskForm}>
			<h1>todo</h1>

			<form onSubmit={handleSubmit}>
				<label>
					<input
						className={Styles.input}
						placeholder='Enter the task'
						value={text}
						onChange={handleInput}
						required={true}
						autoFocus
					/>
				</label>
				<Button
					className={Styles.submitButton}
					type='submit'
					title='Submit task'
				>
					Add
				</Button>
			</form>
		</div>
	)
}

export default TodoForm
