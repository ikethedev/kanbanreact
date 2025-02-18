// To create this module go to the topbar component
import { useContext, useState } from "react"
import { AppState } from "../../AppState"
import StatusListItem from "./StatusListItem"
import "./addTaskModule.css"

export default function AddTaskModule({ addTaskToBoard, toggleTaskModule, setAppState, }) {
const { appState } = useContext(AppState)
const { activeBoard } = appState
const [toggleColumn, setToggleColumn] = useState(false)
const [selectedStatus, setSelectedStatus] = useState("Select a Status")
const [showColumnOptions, setShowColumnsOptions] = useState(false)
const [activeId, setActiveId] = useState("")

function handleSelectStatus(status) {
  setSelectedStatus(() => status); // Ensure state updates correctly
  setToggleColumn(false);
  showColumns()
}

function getActiveColumnId(id) {
  setActiveId(id)
}

  const handleSubmit = (e) => {
    e.preventDefault();
    const taskTitle = document.querySelector("#form__title").value;
    const description = document.querySelector(".form__description-value").value;
    // Get the active status 
    // Find the correct column ID
    const selectedColumnId = activeId
 
    if (!selectedColumnId) {
      return;
    }

    toggleTaskModule()
    addTaskToBoard(activeBoard, selectedColumnId, taskTitle, description);
    
  }

  function showColumns(){
    setShowColumnsOptions(!showColumnOptions)
  }

  //grabs the current board with the most updated state
  const selectedBoard = appState.boards.find(board => board.id === appState.activeBoard)
  return(
    <section className="add__task-modal">
    <form className="form">
      <h2 className="form__header">Add New Task</h2>
      <div className="form__inputs">
        <div className="form__input-title">
          <label className="form__heading">Title</label>
          <input id="form__title" className="form__column-input title" placeholder="e.g. Take coffee break" />
        </div>
        <div  className="form__description">
          <label className="form__heading">Description</label>
          <textarea id="description" className="form__description-value" rows="4" cols="50" placeholder="Describe yourself here...">

  </textarea>
        </div>
      </div>

      <div className="form__status">
        <div className="form__current-status">
          <h3 className="form__current-heading">Current Status</h3>
          {/* Add function to remove the hidden className */}
          <div onClick={showColumns} className="form__current-status-state">
            <p data-id={activeId} className="form__current-active-status">{selectedStatus}</p>
            <svg className="form__current-icon" width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.79834 1.54863L5.49682 6.24711L10.1953 1.54863" stroke="#635FC7" stroke-width="2" />
            </svg>
          </div>
         {showColumnOptions ? <ul className="form__status-options">
            {/* Map through the current board columns and populate the form status */}
            {/* these are the same as the column title */}
             {selectedBoard.columns.map((column) => {
              return <StatusListItem id={column.id} title={column.title} selectStatus={handleSelectStatus} activeId={getActiveColumnId} /> }
            )}
            
          </ul> : null}
        </div>
        <button onClick={handleSubmit} className="primary-btn btn create-task-btn">Create Task</button>
      </div>
    </form>
  </section>
  )
}
