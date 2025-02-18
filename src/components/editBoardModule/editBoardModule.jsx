import { useContext, useState } from "react";
import { AppState } from "../../AppState";
import "./editBoardModule.css"

const editBoardTemplate = document.createElement("template");
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'Src/components/editBoardModule/editBoardModule.css'; 

export default function EditBoardModule({ selectedBoard, saveColumns, toggleEditBoardModule }){
  const { setAppState, updateBoard, } = useContext(AppState);
  const [columns, setColumns] = useState(selectedBoard.columns || []);
  const [newColumnName, setNewColumnName] = useState("");
console.log(selectedBoard)
  console.log(saveColumns)
  
  const handleAddColumn = () => {
    setColumns([...columns, { id: Date.now(), title: "", tasks:[] }]); // Adds a new empty column
  };

  const handleColumnChange = (index, value) => {
    const updatedColumns = [...columns];
    setColumns(columns.map((column, i) => 
      i === index ? { ...column, title: value } : column
    ));

    // updateBoard(selectedBoard.id, (board) => ({
    //   ...board,
    //   columns: updatedColumns
    // }))
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(selectedBoard)
    // the issue is how I am trying to render the board
    // if I try to add a column it cannot read the property of id on the current task
    // but I am not concerned about that right now
    // I am attemping to render the board with the new column
    // the task should remain in the same columns
    setAppState(prevState => ({
      ...prevState,
      boards: prevState.boards.map(board =>
        board.id === selectedBoard.id ? { ...board, columns: columns } : board
      ),
    }));
    // updateBoard(selectedBoard.id, (board) => {
    //   console.log(board)
    //   return {
    //     ...board,
    //     columns: columns
    //   }
    // })
    console.log(selectedBoard)
    console.log(selectedBoard.id, columns)
    //  saveColumns(selectedBoard.id, columns); // Send updated columns to App.jsx
      toggleEditBoardModule(); // Close modal
  };

  

  return (
    <section className="edit__modal">
  <form className="form">
    <h2 className="form__header">Edit Board</h2>

    <div className="form__input">
      <label className="form__heading">Board Name</label>
      <h2>{selectedBoard.name}</h2>
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
      <button type="button" className="secondary-btn btn" onClick={handleAddColumn}>
        + Add New Column
      </button>
      <button onClick={handleSubmit} type="submit" className="primary-btn btn">
        Save Changes
      </button>
    </div>
  </form>
</section>

  )
}
