import React, { useState } from "react";

export function CreateTodo({ addTodo }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleAddTodo = () => {
        fetch("http://localhost:3000/todo", {
          method: "POST",
          body: JSON.stringify({ title, description }),
          headers: { "Content-Type": "application/json" }
        })
          .then(async (response) => {
            if (response.ok) {
              const newTodo = await response.json();
              addTodo(newTodo); 
              alert("Todo added");
              setTitle(""); 
              setDescription("");
            } else {
              alert("Failed to add Todo");
            }
          })
          .catch((error) => {
            alert("Error: " + error.message);
          });
      };
      

    return (
        <div>
            <input
                style={{ padding: 10, margin: 10 }}
                type="text"
                value={title}
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
            />
            <br />
            <input
                style={{ padding: 10, margin: 10 }}
                type="text"
                value={description}
                placeholder="Description"
                onChange={(e) => setDescription(e.target.value)}
            />
            <br />
            <button
                onClick={handleAddTodo}
                style={{ padding: 10, margin: 10 }}
            >
                Add a Todo
            </button>
        </div>
    );
}
