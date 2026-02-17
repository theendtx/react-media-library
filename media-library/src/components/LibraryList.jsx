import LibraryItem from "./LibraryItem"

function LibraryList({ items, onDelete }) {
  return (
    <ul className="libraryList">
      {items.map(item => (
        <LibraryItem 
        key={item.id} 
        item={item}
        onDelete={onDelete}
        />
      ))}
    </ul>
  )
}

export default LibraryList
