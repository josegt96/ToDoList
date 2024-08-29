import "./assets/templates/css/CreateTodoButton.css";

function CreateTodoButton({onAdd}) {
  return (
    <button className="CreateTodoButton" onClick={onAdd}>
      Add new Task
    </button>
  );
}

export { CreateTodoButton };
