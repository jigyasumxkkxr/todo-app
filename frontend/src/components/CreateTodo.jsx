import { useState } from "react";

export function CreateTodo() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div>
            <input
                style={{ padding: 10, margin: 10 }}
                type="text"
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
            />
            <br />
            <input
                style={{ padding: 10, margin: 10 }}
                type="text"
                placeholder="Description"
                onChange={(e) => setDescription(e.target.value)}
            />
            <br />
            <button
                onClick={() => {
                    fetch("http://localhost:3000/todo", {
                        method: "POST",
                        body: JSON.stringify({
                            title: title,
                            description: description
                        }),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    })
                    .then(async (response) => {
                        if (response.ok) {
                            const json = await response.json();
                            alert("Todo added");
                        } else {
                            alert("Failed to add Todo");
                        }
                    })
                    .catch((error) => {
                        alert("Error: " + error.message);
                    });
                }}
                style={{ padding: 10, margin: 10 }}
            >
                Add a Todo
            </button>
        </div>
    );
}
