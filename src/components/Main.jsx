export default function Main() {
  function addItem(formData) {
    //const taskName = formData.get("taskName")
    //const description = formData.get("description")
    //const key = *key gen here*
  }

  return (
    <div className="container">
      <div className="todo-form">
        <form action={addItem}>
          <div>
            <label htmlFor="taskName">Task Name:</label>
            <input type="text" id="taskName" name="taskName"/>
          </div>
          <div>
            <label htmlFor="desc">Task Description:</label>
            <input type="text" id="taskDesc" name="taskDesc"/>
          </div>
          <button>Add</button>
        </form>
      </div>
      <div className="todo-list">
        <div className="todo-item">
          <h4>Test Task</h4>
          <div className="remove-item" id="0">X</div>
          <p>
            This is a description of what needs to be done for this task. 
            Maybe could be a list option for the user as well? 
            Im not sure you could do a lot with this element and have a radio button to select the type.
          </p>
        </div>
      </div>
    </div>
  )
}
