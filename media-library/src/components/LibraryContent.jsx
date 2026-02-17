import LibraryList from "./LibraryList"

function LibraryContent({ items, filteredItems, onDelete }) {
  if (items.length === 0) {
    return <p>Your library is empty</p>
  }

  if (filteredItems.length === 0) {
    return <p>No results found</p>
  }

  return <LibraryList items={filteredItems} onDelete={onDelete} />
}

export default LibraryContent
