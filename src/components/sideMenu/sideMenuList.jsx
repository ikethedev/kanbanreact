import { useContext, useState } from "react";
import SideMenuCreateBoard from "./sideMenuCreateBoard";
import SideMenuItem from "./sideMenuItem";
import { AppState } from "../../AppState";

export function SideMenuList(props) {
  const { closeCreateModule, appState, handleBoardClick, toggleSideMenu } = useContext(AppState);
  const { boards, activeBoard } = appState;

  const handleClick = (boardId) => {
    handleBoardClick(boardId);

    if(isMobile){
      toggleSideMenu()
    }
  
  } 

  if (!Array.isArray(boards) || boards.length === 0) {
    return (
      <ul className="sidemenu__list">
        <SideMenuCreateBoard />
      </ul>
    );
  }

  return (
    <div className="sidemenu__platform-container">
      <header className="sidemenu__platform-header">
        <h2 className="sidemenu__platform-heading">ALL BOARDS</h2>
      </header>
      <ul className="sidemenu__list">
        {boards.map((board) => (
          <SideMenuItem key={board.id} title={board.name} handleClick={() => handleClick(board.id)} closeCreateModule={closeCreateModule}/>
        ))}
      </ul>
      <SideMenuCreateBoard />

    </div>
  );
}
