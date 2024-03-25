import Todo from './Todo'
import Styles from './TodoList.module.css'

function TodoList({ todos, deleteTodo, toggleTodo }) {
	console.log(todos)
	return (
		<div className={Styles.todosContainer}>
			<div className={Styles.todo}>
				{!todos.length ? (
					<p className={Styles.listEmpty}>Список дел пуст</p>
				) : (
					todos.map(todo => (
						<Todo
							key={todo.id}
							todo={todo}
							deleteTodo={deleteTodo}
							toggleTodo={toggleTodo}
						/>
					))
				)}
			</div>
		</div>
	)
}

export default TodoList
