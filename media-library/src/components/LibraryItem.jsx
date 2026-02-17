function LibraryItem({ item, onDelete }) {
  return (
    <li className="libraryItem">
      {item.title}
      <button onClick={() => onDelete(item.id)}>
        Delete
      </button>
    </li>
  )
}

export default LibraryItem
