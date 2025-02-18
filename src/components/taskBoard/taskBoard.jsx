import "./taskBoard.css"
import { useContext } from "react";
import TaskBoardColumn from "./taskBoardColumn";
import { AppState } from "../../AppState";

export function TaskBoard(props){
  // selectboard is set in the app.jsx file
  const { selectedBoard } = useContext(AppState)

  //   return <p>Loading... or No active board selected</p>;
  // }

  //  data becomes undefined the rerender when the edit board modal saves changes

  function TaskBoardColumns(){
   return selectedBoard.columns.map(column => (
       < TaskBoardColumn  title={column.title} key={column.id} taskCards={column.tasks} />
      ))
  }
  return(
        <div className="task__container">
          <TaskBoardColumns />
      </div>
  )
  
}


