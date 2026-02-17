import { useState, useEffect } from "react"
import AddMediaForm from "./AddMediaForm"
import LibraryContent from "./LibraryContent"

function Main() {
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem("mediaItems")
    if (!saved) return []

    try {
      return JSON.parse(saved)
    } catch {
      return []
    }
  })
  const [search, setSearch] = useState("")

  const handleAddItem = (newItem) => {
    setItems((prev) => [...prev, newItem])
  }

  const handleDelete = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }

  useEffect(() => {
    localStorage.setItem("mediaItems", JSON.stringify(items))
  }, [items])

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <main className="main page container">
      <section className="mainSection addSection">
        <h2>Add new item</h2>
        <AddMediaForm onAddItem={handleAddItem} />
      </section>

      <section className="mainSection listSection">
        <h2>My items</h2>

        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <LibraryContent
          items={items}
          filteredItems={filteredItems}
          onDelete={handleDelete}
        />
      </section>
    </main>
  )
}

export default Main
