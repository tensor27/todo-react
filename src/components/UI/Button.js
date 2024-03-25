import Styles from './Button.module.css'

const Button = props => {
	const { onClick, children, title, disabled = false } = props
	return (
		<button
			className={Styles.buttonAction}
			{...props}
			title={title}
			disabled={disabled}
			onClick={onClick}
		>
			{children}
		</button>
	)
}

export default Button
