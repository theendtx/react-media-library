import { useState } from "react"

function AddMediaForm({ onAddItem }) {
  const [title, setTitle] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    const trimmedTitle = title.trim()
    if (!trimmedTitle) return

    onAddItem({
      id: Date.now(),
      title: trimmedTitle
    })
    setTitle("")
  }

  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  )
}

export default AddMediaForm
