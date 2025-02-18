import { useContext, useState } from "react";
import "./sideMenu.css";
import { CreateBoard } from "../createBoard/createBoard";
import { AppState } from "../../AppState";
import { SideMenuLogo } from "./sideMenLogo";
import { SideMenuList } from "./sideMenuList";
import SideMenuCreateBoard from "./sideMenuCreateBoard";

export function SideMenu({ boards }) {
  const {appState, openCreateModule, closeCreateModule, toggleSideMenu, setAppState} = useContext(AppState);
   const { showSideMenu } = appState
   const createBoardStyle = {
    paddingLeft: '0',
 }

   function SideMenuToggle(){
    if(showSideMenu){
    return (
      <div className="sidemenu__toggle-hide">
          <svg
            width="18"
            height="16"
            viewBox="0 0 18 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.7923 8.76153C16.7538 10.5238 15.1854 11.941 13.3062 12.8081L14.8099 14.9563C14.9286 15.1259 14.8874 15.3598 14.7177 15.4785L14.0697 15.9322C13.9 16.051 13.6662 16.0097 13.5474 15.84L3.19013 1.04373C3.07135 0.874074 3.11263 0.64023 3.28229 0.521481L3.93032 0.067825C4.09998 -0.050956 4.33382 -0.00967486 4.45257 0.159981L6.18775 2.63888C7.08163 2.38573 8.02525 2.25001 9 2.25001C12.7456 2.25001 16.0311 4.24982 17.7923 7.23847C18.0692 7.7084 18.0692 8.2916 17.7923 8.76153ZM1.50001 8C2.99714 10.5406 5.79513 12.25 9 12.25C9.07946 12.2499 9.15892 12.2487 9.23834 12.2465L10.239 13.676C9.82784 13.7253 9.4141 13.75 9 13.75C5.25438 13.75 1.96889 11.7502 0.207702 8.76156C-0.069234 8.29163 -0.069234 7.7084 0.207702 7.23847C0.997544 5.89816 2.09379 4.75732 3.4001 3.90623L4.26076 5.13569C3.12813 5.86432 2.17986 6.84635 1.50001 8ZM8.52194 11.2231C6.00685 10.9415 4.26532 8.50791 4.86788 6.00303L8.52194 11.2231ZM9.74494 3.78104C12.6351 4.02282 15.1201 5.65835 16.5 8C15.5721 9.57456 14.1446 10.8297 12.4302 11.5566L11.596 10.3649C13.2731 9.06931 13.7072 6.7886 12.75 4.99869L12.75 5C12.75 5.9665 11.9665 6.75 11 6.75C10.0335 6.75 9.25 5.9665 9.25 5C9.25 4.52594 9.43881 4.09619 9.74494 3.78104Z"
              fill="#828FA3"
            />
          </svg>
          <p onClick={toggleSideMenu}>Hide Sidebar</p>
        </div> 
    )
     } else {
        return null;
     }
   }

  return (
    <>
       { appState.showCreateModule ? < CreateBoard closeModule={closeCreateModule}/> : null } 
   
      <div className="modal-container">
      <SideMenuLogo />
      <div className="sidemenu__platform">

       
        <SideMenuList />
        <SideMenuToggle />

        </div>
      </div>
        
   
    </>
  );
}

