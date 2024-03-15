import { useEffect, useState } from 'react'
import Styles from './TodoForm.module.css'
function TodoForm(props) {
	const [task, setTask] = useState('')
	const [tasks, setTasks] = useState([])

	useEffect(() => {
		document.querySelector(`.${Styles.input}`).focus()
	}, [tasks])

	const handleInput = e => {
		setTask(e.target.value)
	}
	const handleSubmit = e => {
		e.preventDefault()
		console.log(tasks)
		setTasks([...tasks, { id: Date.now(), taskText: task }])
		setTask('')
	}

	return (
		<>
			<form className={Styles.taskForm} onSubmit={handleSubmit}>
				<label>
					<input
						className={Styles.input}
						type='text'
						placeholder='Enter the task'
						name='todo'
						value={task}
						onChange={handleInput}
						required={true}
						autoFocus
					/>
				</label>
				<button className={Styles.submitButton}>Set task</button>
			</form>
			<ul>
				{tasks.map((item, index) => (
					<li key={index}>{item.taskText}</li>
				))}
			</ul>
		</>
	)
}

export default TodoForm
