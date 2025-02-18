export default function SideMenuItem(props) {
    const { id, title, handleClick } = props

    return(
        <li onClick={handleClick} className="sidemenu__list-item">
            <img src="./src/assets/board.svg" alt="Board Icon" />
            <p className="sidemenu__add-item">{title}</p>
        </li>
    
    )
}