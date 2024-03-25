import { BiReset } from 'react-icons/bi'
import { TbHttpDelete } from 'react-icons/tb'
import Button from '../UI/Button'
import Styles from "./TodosActions.module.css"

function TodosActions({
	clearAllTodos,
	todos,
	clearCompletedTodos,
	completedTodosCount,
}) {
	return (
		<div className={Styles.todoActionsContainer}>
			<Button
				title='Clear all Todos'
				onClick={clearAllTodos}
				disabled={!todos.length ? true : false}
			>
				<TbHttpDelete />
			</Button>

			<Button
				title='Clear completed Todos'
				onClick={clearCompletedTodos}
				disabled={!completedTodosCount}
			>
				<BiReset />
			</Button>
		</div>
	)
}

export default TodosActions
