import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './App.css'
import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'
import TodosActions from './components/Todos/TodosActions'

function App() {
	const [todos, setTodos] = useState([])
	const setTodoHandler = text => {
		setTodos([...todos, { text, id: uuidv4(), isCompleted: false }])
	}
	const deleteTodoHandler = id => {
		setTodos(todos.filter(todo => todo.id !== id))
	}

	const toggleTodoHandler = id => {
		setTodos(
			todos.map(todo => {
				return todo.id === id
					? { ...todo, isCompleted: !todo.isCompleted }
					: { ...todo }
			})
		)
	}

	const clearAllTodos = () => {
		setTodos([])
	}

	const clearCompletedTodos = () => {
		setTodos(todos.filter(todo => todo.isCompleted === false))
	}

	const completedTodosCount = todos.filter(todo => todo.isCompleted).length

	return (
		<div className='App'>
			<TodoForm setTodos={setTodoHandler} />
			{!!todos.length && (
				<TodosActions
					clearAllTodos={clearAllTodos}
					clearCompletedTodos={clearCompletedTodos}
					todos={todos}
					completedTodosCount={!!completedTodosCount}
				/>
			)}
			<TodoList
				todos={todos}
				deleteTodo={deleteTodoHandler}
				toggleTodo={toggleTodoHandler}
			/>
			{completedTodosCount > 0 && (
				<h3>
					You have compled {completedTodosCount}{' '}
					{completedTodosCount > 1 ? 'todos' : 'todo'}
				</h3>
			)}
		</div>
	)
}

export default App
