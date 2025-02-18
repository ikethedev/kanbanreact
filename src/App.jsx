import { createContext, useState, useEffect } from "react";
import {
  mainPageContentContainer,
  mainPageContainer,
  mainPageSideBar,
} from "./App.module.css";

import { SideMenu } from "./components/sideMenu/sideMenu.jsx";
import { TopBar } from "./components/topBar/topBar.jsx";
import { TaskBoard } from "./components/taskBoard/taskBoard.jsx";
import { AppState } from "./AppState.jsx";
import AddTaskModule from "./components/addTaskModule./addTaskModule.jsx";
import EditTaskModal from "./components/editTaskModule/editTaskModule.jsx";
import EditBoardModule from "./components/editBoardModule/editBoardModule.jsx";
import DeleteBoardModal from "./components/deleteBoardModule/deleteBoardModule.jsx";
import { CreateBoard } from "./components/createBoard/createBoard.jsx";

function App() {
  const [appState, setAppState] = useState({
    showCreateModule: false,
    showSideMenu: true,
    showBoard: false,
    showAddTaskModule: false,
    showEditTaskModule: false,
    showEditBoardModule: false,
    deleteBoardModal: false, 
    editBoardModal: false,
    boards: [],
    activeBoard: null,
    activeTask: null,
    task: "todo"
  })

  useEffect(() => {
    if (appState.boards.length > 0 && !appState.activeBoard) {
      setAppState(prev => ({ ...prev, activeBoard: prev.boards[0] }));
    }
    const isMobile = window.innerWidth < 768
    if(isMobile){
      setAppState(prevState => ({
        ...prevState, 
        showSideMenu: false,
      }))
    }
  }, [appState.boards]); 
 
  function handleBoardClick(boardId){
    setAppState((prevState) => ({
      ...prevState,
      showBoard: true,
      //active board is found through the board id
      activeBoard: boardId
    }))
  }

  function handleTaskClick(taskId){
    setAppState((prevState) => ({
      ...prevState,
      showEditTaskModule: true,
      //active task is found through the task id
      activeTask: taskId
    }))
    console.log(appState.activeTask)
  }


  function saveColumns(boardId, newColumns) {
    setAppState(prevState => ({
      ...prevState,
      boards: prevState.boards.map(board => 
        board.id === boardId ? { ...board, columns: newColumns } : board
      ),
    }));
  }

  function openCreateModule() {
    setAppState((prevState) => ({
      ...prevState,
      showCreateModule: !appState.showCreateModule,
    }));
  }

  function openCreateModuleMobile() {
    setAppState((prevState) => ({
      ...prevState,
      showCreateModule: true,
    }));
    console.log(appState.showCreateModule)
  }


  function closeCreateModule() {
    setAppState((prevState) => ({
      ...prevState,
      showCreateModule: false,
    }));
  }

  // Function to add one board at a time
  
  function addBoard(title = `Board ${appState.boards.length + 1}`, columns = []) {
    const newBoard = { 
      id: Date.now(), 
      name: title, 
      columns: columns 
    };
  
    setAppState((prevState) => {
      const updatedBoards = [...prevState.boards, newBoard];
      return {
        ...prevState,
        boards: updatedBoards,
        activeBoard: newBoard.id,  // Ensure activeBoard is set to the newest board ID
        showBoard: true,  // Ensure the UI reflects the new board
      };
    });
  }


  function updateBoard(boardId, updateCallback){
    setAppState(prevState => ({
      ...prevState, 
      boards: prevState.boards.map(board => 
        board.id === boardId ? updateCallback(board) : board
      )
    }))
 }

  function addTaskToBoard(boardId, columnId, taskTitle, description) {
   updateBoard(boardId, board => ({
    ...board,
    columns: board.columns.map(column =>
      column.id === columnId
        ? { ...column, tasks: [...column.tasks, { id: Date.now(), title: taskTitle, description:description}] }
        : column
    ),
   }))

  }
  function changeTaskColumn(taskId, newColumnId) {
    updateBoard(appState.activeBoard, board => {
      let movedTask;
      let currentColumnId;
  
      // Step 1: Find the task and determine its current column
      const updatedColumns = board.columns.map(column => {
        if (column.tasks.some(task => task.id === taskId)) {
          movedTask = column.tasks.find(task => task.id === taskId);
          currentColumnId = column.id; // Store the current column ID
          return {
            ...column,
            tasks: column.tasks.filter(task => task.id !== taskId), // Remove task
          };
        }
        return column;
      });
  
      // Step 2: If the task wasn't found or the column hasn't changed, return the board unchanged
      if (!movedTask || currentColumnId === newColumnId) {
        return board;
      }
  
      // Step 3: Move the task to the new column
      return {
        ...board,
        columns: updatedColumns.map(column => {
          if (column.id === newColumnId) {
            return {
              ...column,
              tasks: [...column.tasks, { ...movedTask, status: column.title }],
            };
          }
          return column;
        }),
      };
    });
  }
  
  function toggleSideMenu() {
    setAppState(prevState => ({
      ...prevState,
      showSideMenu: !prevState.showSideMenu,
    }));
  }

  const toggleTaskModule = () => {
    // prevent being able to add a task if no board is presence
    // add error message to UI 
    if(appState.activeBoard === null) return 

    setAppState(prevState => (
      {
        ...prevState, 
        showAddTaskModule: !prevState.showAddTaskModule,
      }
    ))
  }

 const toggleEditTaskModule = () => {
    setAppState(prevState => (
      {
        ...prevState, 
        showEditTaskModule: !prevState.showEditTaskModule,
      }
    ))
  }

  const toggleEditBoardModule = () => {
    setAppState(prevState => (
      {
        ...prevState, 
        editBoardModal: !prevState.editBoardModal,
      }
    )
    )

  }

  // the selectBoard finds the new activeboard and set it to the newest activeBoard state
  const selectedBoard = appState.boards.find(board => board.id === appState.activeBoard)
  const boardColumns = selectedBoard ? selectedBoard.columns : []

  const currentTask =
  boardColumns.flatMap((column) => column.tasks).find((task) => task.id === appState.activeTask) || null;
  
  // this needs to passed to the edit task module 
  // the title needs to be 
  return (
    <AppState.Provider
      value={{ appState, openCreateModule, closeCreateModule, addBoard, handleBoardClick, toggleSideMenu, toggleEditTaskModule, handleTaskClick, selectedBoard, addTaskToBoard, setAppState, updateBoard, openCreateModuleMobile}}
    >
      <main className={mainPageContainer}>
        <div className={mainPageContentContainer}>
          <TopBar toggleTaskModule={toggleTaskModule}  />
          {appState.showCreateModule ? <CreateBoard />: null}
          {appState.showAddTaskModule ? <AddTaskModule addTaskToBoard={addTaskToBoard} toggleTaskModule={toggleTaskModule} setAppState={setAppState} /> : null}
          {appState.showEditTaskModule ? <EditTaskModal toggleEditTaskModule={toggleEditTaskModule} appState={appState} changeTaskColumn={changeTaskColumn} currentTask={currentTask} />  : null}
          {appState.editBoardModal ? <EditBoardModule selectedBoard={selectedBoard} saveColumns={saveColumns} toggleEditBoardModule={toggleEditBoardModule}  /> : null}
          {appState.deleteBoardModal ? <DeleteBoardModal selectedBoard={selectedBoard} /> : null}
          {selectedBoard ? <TaskBoard activeBoard={selectedBoard} /> : <p className="default__board">No active board selected</p>}
        </div>
       {appState.showSideMenu ? <SideMenu className={mainPageSideBar} boards={appState.boards} /> : null}
      </main>
    </AppState.Provider>
  );
}

export default App;
