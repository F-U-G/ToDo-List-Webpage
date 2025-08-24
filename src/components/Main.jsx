import { useState } from 'react'

let nextID = 0 // id will be used for key later

export default function Main() {
  const [items, setItems] = useState([])

  function addItem(formData) { // function uses set function to add the form data to the items array
    const taskName = formData.get("taskName")
    const taskDesc = formData.get("taskDesc")
    setItems([...items, { id: nextID++, name: taskName, description: taskDesc}])
    console.log(nextID)
  }

  // map data for rendering
  const itemList = items.map(item => {
    return (
      <li key={`${item.id}`} className="todo-item">
        <h4>{item.name}</h4>
        <div className="remove-item">X</div>
        <p>{item.description}</p>
      </li>
    )
  })


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
      <div>
        <ul className="todo-list">
          {itemList}
          {/*<li className="todo-item">
            <h4>Test Task</h4>
            <div className="remove-item" id="999">X</div>
            <p>
              This is a description of what needs to be done for this task. 
              Maybe could be a list option for the user as well? 
              Im not sure you could do a lot with this element and have a radio button to select the type.
            </p>
          </li>*/}
        </ul>
      </div>
    </div>
  )
}
