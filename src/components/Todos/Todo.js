import { useState } from 'react'
import Styles from './Todo.module.css'

const deleteTask = () => {}

function Todo(props) {
	const [isComplete, setIsComplete] = useState(false)
	const { text, id, deleteTask } = props
	return (
		<div
			className={`${Styles.task} ${
				isComplete ? Styles.complete : Styles.incomplete
			}`}
			onClick={() => (isComplete ? setIsComplete(false) : setIsComplete(true))}
			onDoubleClick={deleteTask}
		>
			{text}
		</div>
	)
}

export default Todo
