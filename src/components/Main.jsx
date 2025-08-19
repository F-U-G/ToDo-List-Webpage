export default function Main() {
  function addItem(formData) {
    //const taskName = formData.get("taskName")
    //const description = formData.get("description")
    //const key = *key gen here*
  }

  return (
    <>
      <div className="container">
        <form action={addItem}>
          <label htmlFor="taskName">Task Name:</label>
          <input type="text" id="taskName" name="taskName"/>
          <label htmlFor="desc"></label>
          <input />
        </form>
      </div>
      <div className="container">
      </div>
    </>
  )
}
