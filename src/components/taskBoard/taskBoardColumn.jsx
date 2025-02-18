import { useContext } from "react"
import { AppState } from "../../AppState"
import Card from "./card"


export default function TaskBoardColumn({ title, key, taskCards }) {
  console.log(title)
    const { appState, selectedBoard} = useContext(AppState)
    console.log(selectedBoard)
    console.log(taskCards)

    return(
        <section className="columns" id={key}>
        <div className="columns__header">
          <h3 className="columns__header-heading">{title}</h3>
        </div>
        <div className="column__cards">
         {
          taskCards.map((task) => {
            return <Card key={task.id} task={task} />
          })
        }
         
        </div>
      </section>
    )
}