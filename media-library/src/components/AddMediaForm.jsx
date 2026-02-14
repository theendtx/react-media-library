import { useState } from "react"

function AddMediaForm({ setItems }) {
  const [title, setTitle] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!title.trim()) return

    const newItem = {
      id: Date.now(),
      title: title
    }

    setItems(prev => [...prev, newItem])
    setTitle("")
  }

  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  )
}

export default AddMediaForm
