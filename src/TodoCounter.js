import './assets/templates/css/TodoCounter.css';

function TodoCounter({ total, completed }) {
  return (
    <h1 className='TodoCounter'>
      Tasks Completed: <span>{completed}</span> of <span>{total}</span>
    </h1>
  );
}

export {TodoCounter};