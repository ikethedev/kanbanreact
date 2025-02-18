import React, { useContext } from "react";
import { AppState } from "../../AppState";
import "./deleteBoardModule.css"

export default function DeleteBoardModal({ selectedBoard }) {
    const { appState, setAppState } = useContext(AppState);

    const toggleDeleteModal = () => {
        setAppState(prevState => ({
            ...prevState,
            deleteBoardModal: !prevState.deleteBoardModal
        })
        )
    }

    const deleteBoard = () => {
       console.log(appState.boards)
        setAppState(prevState => {
            const updatedBoards = prevState.boards.filter(board => board.id !== appState.activeBoard);

            return {
                ...prevState,
                boards: prevState.boards.filter(board => board.id !== appState.activeBoard),
                activeBoard: prevState.boards.length > 1 ? prevState.boards[0].id : null,
                deleteBoardModal: false
            };
        });

        console.log(appState.boards);
    };



  return (
    <div className="modal">
      <div className="overlay hidden"></div>
      <div id="modal__delete-task" className="modal__delete-task">
        <h2 className="modal__delete-task-header">Delete this board?</h2>
        <p className="modal__delete-task-text">
          Are you sure you want to delete the board? This action will remove all columns and tasks and cannot be reversed.
        </p>
        <div className="modal__delete-task-btns">
          <button onClick={deleteBoard} className="btn btn__danger">Delete</button>
          <button onClick={toggleDeleteModal} className="btn btn__cancel">Cancel</button>
        </div>
      </div>
    </div>
  );
}