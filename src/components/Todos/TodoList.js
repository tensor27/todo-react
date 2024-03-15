import { useEffect, useState } from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'

function TodoList(props) {
	const [tasks, setTasks] = useState([])

	useEffect(() => {
		setTasks([
			{ id: 1, text: 'Task one' },
			{ id: 2, text: 'Task two' },
			{ id: 3, text: 'Task three' },
			{ id: 4, text: 'Task four' },
			{ id: 5, text: 'Task five' },
		])
	}, [])

	const handleDeleteTask = id => {
		setTasks(tasks.filter(task => task.id !== id))
	}

	return (
		<div>
			<TodoForm />
			{tasks.map(task => (
				<Todo
					key={task.id}
					text={task.text}
					deleteTask={() => {
						handleDeleteTask(task.id)
					}}
				/>
			))}
		</div>
	)
}

export default TodoList
