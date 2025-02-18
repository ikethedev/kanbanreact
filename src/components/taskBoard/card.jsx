import { useContext } from "react"
import EditTaskModal from "../editTaskModule/editTaskModule"
import { AppState } from "../../AppState"

export default function Card(props) {
    const { toggleEditTaskModule, handleTaskClick } = useContext(AppState)
    const handleClick = () => {
        handleTaskClick(props.task.id)
        console.log(props.task.id)
    }

    return (
        <div onClick={handleClick} className="card">   
          <p>{props.task.title}</p>
        </div>
    )
}

