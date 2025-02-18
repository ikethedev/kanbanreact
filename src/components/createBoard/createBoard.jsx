import { useContext, useState } from "react";
import "./createBoard.css";
import { AppState } from "../../AppState";

export function CreateBoard({ closeModule }) {
  const [title, setTitle] = useState("");
  const [columns, setColumns] = useState([]);
  const { appState, addBoard, closeCreateModule, setAppState } =
    useContext(AppState);

    const handleSubmit = (e) => {
      e.preventDefault();
    
      // Check if the board title is empty
      if (title.trim() === "") {
        alert("Please enter a board name.");
        return;
      }
    // Check if columns array is empty
    if (columns.length === 0) {
      alert("Please add at least one column.");
      return;
    }

    // Check if any column has an empty title
    if (columns.some((column) => column.title.trim() === "")) {
      alert("All columns must have a name.");
      return;
    }
    addBoard(title, columns);
    removeBoardMenu();
    closeCreateModule();
  };

  const handleAddColumn = (e) => {
    e.preventDefault();
    // add new column to columns array and spreads the columns state
    setColumns([...columns, { id: Date.now(), title: "", tasks: [] }]);
  };

  const removeBoardMenu = () => {
    if (window.innerWidth <= 768) {
      // Adjust breakpoint as needed
      setAppState((prevState) => ({
        ...prevState,
        showSideMenu: false,
      }));
    }
  };

  const handleColumnChange = (index, val) => {
    // creates a new by spreading the existing columns array
    const newColumns = [...columns];
    // spreads all existing properties of the column at the given index
    // and sets the title property to the new value
    newColumns[index] = { ...newColumns[index], title: val };
    //
    setColumns(newColumns);
  };

  return (
    <section className="add__task-modal">
      <form className="form">
        <h2 className="form__header">Add New Board</h2>
        <div className="form__input">
          <label className="form__heading">Name</label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            className="form__board-name"
            value={title}
            placeholder="e.g. Web Design"
          />
        </div>
        <div className="form__columns">
          <label className="form__heading">Board Columns</label>
          {columns.map((column, index) => (
            <div key={column.id} className="column-input-group">
              <input
                type="text"
                value={column.title}
                onChange={(e) => handleColumnChange(index, e.target.value)}
                className="form__column-name"
                placeholder="Enter column name"
                required
              />
              <button
                type="button"
                onClick={() => handleRemoveColumn(index)}
                className="remove-column-btn"
              >
                ×
              </button>
            </div>
          ))}
        </div>

        <div className="form__btns">
          <button
            onClick={handleAddColumn}
            className="secondary-btn btn create-column"
          >
            + Add New Column
          </button>
          <button
            onClick={handleSubmit}
            className="primary-btn btn create-board"
          >
            Save Changes
          </button>
        </div>
      </form>
    </section>
  );
}
