import { useState, useContext, act } from "react";
import { AppState } from "../../AppState";
import StatusListItem from "../addTaskModule./StatusListItem";
import "./editTaskModule.css";

export default function EditTaskModal({
  currentTask,
  currentStatus,
  changeTaskColumn,
}) {
  const { appState, toggleEditTaskModule, addTaskToBoard } =
    useContext(AppState);
  const [toggleColumn, setToggleColumn] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState(currentStatus);
  const [showColumnOptions, setShowColumnsOptions] = useState(false);

  if (!currentTask) {
    alert("No task found"); // Prevent rendering errors
  }

  // the current status id should be the default active state
  // when the modal is made and only updated when the user selects a different status
  const [activeId, setActiveId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    toggleEditTaskModule();
    if (activeId && activeId !== currentStatus) {
      changeTaskColumn(currentTask.id, activeId);
    }
  };

  function handleSelectStatus(status) {
    setSelectedStatus(status); // Store the selected column title
    setActiveId(id); // Store the selected column ID
    setToggleColumn(false);
    setShowColumnsOptions(false);
  }

  function getActiveColumnId(id) {
    setActiveId(id);
    console.log(activeId);
  }

  function showColumns() {
    setShowColumnsOptions(!showColumnOptions);
  }

  const selectedBoard = appState.boards.find(
    (board) => board.id === appState.activeBoard
  );
  return (
    <section className="edit__task-modal">
      <form className="form">
        <h2 className="form__header">Edit Task</h2>
        <div className="form__inputs">
          <div className="form__input-title">
            <label className="form__heading">Title</label>
            <h3 className="form__task-name">{currentTask.title}</h3>
          </div>
          <div className="form__description">
            <label className="form__heading">Description</label>
            <textarea
              className="form__description-value"
              rows="4"
              cols="50"
              placeholder="Describe yourself here..."
              value={currentTask.description}
            />
          </div>
        </div>
        <div className="form__columns">
          {/* <label className="form__heading"> Subtask </label> */}
          {/* <ul className="form__columns-list">

          </ul> */}
          {/* <button type="button" className="secondary-btn btn add-subtask-btn">
            + Add New Subtask
          </button> */}
        </div>
        <div className="form__status">
          <div className="form__current-status">
            <h3 className="form__current-heading">Current Status</h3>
            {/* Add function to remove the hidden className */}
            <div onClick={showColumns} className="form__current-status-state">
              <p data-id={activeId} className="form__current-active-status">
                {selectedStatus}
              </p>
              <svg
                className="form__current-icon"
                width="11"
                height="8"
                viewBox="0 0 11 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.79834 1.54863L5.49682 6.24711L10.1953 1.54863"
                  stroke="#635FC7"
                  stroke-width="2"
                />
              </svg>
            </div>
            {showColumnOptions ? (
              <ul className="form__status-options">
                {/* Map through the current board columns and populate the form status */}
                {/* these are the same as the column title */}
                {selectedBoard.columns.map((column) => {
                  return (
                    <StatusListItem
                      key={column.id}
                      id={column.id}
                      title={column.title}
                      selectStatus={() =>
                        handleSelectStatus(column.title, column.id)
                      }
                      activeId={getActiveColumnId}
                    />
                  );
                })}
              </ul>
            ) : null}
          </div>
          <button
            onClick={handleSubmit}
            className="primary-btn btn create-task-btn"
          >
            Create Task
          </button>
        </div>
      </form>
    </section>
  );
}
