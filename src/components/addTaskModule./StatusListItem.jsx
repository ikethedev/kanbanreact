export default function StatusListItem({id, title, selectStatus, activeId, showColumns}) {
    function handleClick(e){
        showColumns()
        activeId(id)
        selectStatus(e.target.textContent)
    }

  return (
    <div data-id={id} onClick={handleClick} className="status-list-item">
      <label>{title}</label>
    </div>
  );
}