import './index.scss';

const Button = ({ type, children, onClick }) => {
  const buttonStyle = type === 'success' 
    ? 'button button__success' 
    : 'button button__remove';
  return (
    <button 
        className={buttonStyle}
        onClick={onClick}
      >
        {children}
      </button>
  )
}

export default Button;
