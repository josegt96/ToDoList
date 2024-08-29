import "./assets/templates/css/CreateTodoButton.css";

function CreateTodoButton() {
  return (
    <button
      className="CreateTodoButton"
      onClick={
        (event) => {
        console.log("le diste click")
        console.log(event) }
      }
    >
      Add new Task
    </button>
  );
}

export { CreateTodoButton };
