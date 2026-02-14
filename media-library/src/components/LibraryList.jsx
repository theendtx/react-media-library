import LibraryItem from "./LibraryItem"

function LibraryList({ items }) {
  return (
    <ul className="libraryList">
      {items.map(item => (
        <LibraryItem key={item.id} item={item} />
      ))}
    </ul>
  )
}

export default LibraryList
