import { AppState } from "../../AppState";
import ColumnListItem from "./columnListItem"
import { useContext } from "react";
export default function ColumnList() {
    const { appState } = useContext(AppState)
    const {  } = appState

  return (
    <ul className="form__columns-list">
        <ColumnListItem title={title}/> 
    </ul>
  );
}
