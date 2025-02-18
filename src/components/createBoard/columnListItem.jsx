export default function ColumnListItem({ title }) {
    // add logic to remove column here 

  return (
    <div className="form__columns-category">
      <li className="form__column--name">{title}</li>
      <img
        src="Src/assets/remove.svg"
        className="remove-column"
        alt="remove column"
      />
    </div>
  );
}
