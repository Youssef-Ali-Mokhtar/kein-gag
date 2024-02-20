import Classes from './FloatingButton.module.css';

const FloatingButton = ({ onClick }) => {
    return ( <button
        className={Classes['floating-button']}
        onClick={ onClick }
        >
        +
    </button> );
}
 
export default FloatingButton;