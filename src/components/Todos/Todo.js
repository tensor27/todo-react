import { BiSolidNotepad } from 'react-icons/bi'
import { FaDeleteLeft } from 'react-icons/fa6'
import { MdDoneAll } from 'react-icons/md'
import Styles from './Todo.module.css'

function Todo({ todo, deleteTodo, toggleTodo }) {
	return (
		<div
			className={`${Styles.task} ${
				todo.isCompleted ? Styles.complete : Styles.incomplete
			}`}
		>
			<BiSolidNotepad className={Styles.todoIco} />
			<p className={Styles.taskText}>{todo.text}</p>
			<FaDeleteLeft
				className={`${Styles.todoIco} ${Styles.deleteIco}`}
				onClick={() => {
					deleteTodo(todo.id)
				}}
			/>
			<MdDoneAll
				className={`${Styles.todoIco} ${Styles.doneIco}`}
				onClick={() => toggleTodo(todo.id)}
			/>
		</div>
	)
}

export default Todo
