import { useContext, useState, useEffect } from "react";
import { AppState } from "../../AppState";
export default function SideMenuCreateBoard() {
  const {
    appState,
    setAppState,
    openCreateModule
  } = useContext(AppState);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showModal, setShowModal] = useState(true); // Controls modal visibility

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const btnStyle = {
    backgroundColor: "#646cff", 
    color: "#ffffff", 
    width: "90%",

  };
  
  const desktopStyle={
    color:  "#635fc7",
  }



 const handleCreate = () => {
  setAppState((prevState) => ({
    ...prevState,
    showSideMenu: isMobile ? false : prevState.showSideMenu, // Only close on mobile
    showCreateModule: true, // Open create board modal
  }));
  openCreateModule();
};

  return (
    <>
      {isMobile ? (
        showModal && (
            <div className="modal">
              <button style={btnStyle} onClick={handleCreate}>+ Create New Board</button>
            </div>
        )
      ) : (
        <>
          <img src="./src/assets/board.svg" alt="Board Icon" />
          <p style={desktopStyle} onClick={handleCreate} className="sidemenu__add-item sidemenu__list-item platform__create-new">
            + Create New Board
          </p>
        </>
      )}
    </>
  );
}
