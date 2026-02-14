import { useState, useEffect } from "react"
import AddMediaForm from "./AddMediaForm"
import LibraryList from "./LibraryList"

function Main() {
  // 🔹 real state
  const [items, setItems] = useState(() => {
  const saved = localStorage.getItem("mediaItems")
  return saved ? JSON.parse(saved) : []
})
  const [search, setSearch] = useState("")

  useEffect(() => {
    localStorage.setItem("mediaItems", JSON.stringify(items))
  }, [items]) 

  // 🔹 derived state
  const filteredItems = items.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <main className="main page container">
      <section className="mainSection addSection">
        <h2>Add new item</h2>
        <AddMediaForm setItems={setItems} />
      </section>

      <section className="mainSection listSection">
        <h2>My items</h2>

        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        {items.length === 0 ? (
  <p>Your library is empty</p>
) : filteredItems.length === 0 ? (
  <p>No results found</p>
) : (
  <LibraryList items={filteredItems} />
)}

      </section>
    </main>
  )
}

export default Main
