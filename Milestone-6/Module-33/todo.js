function loadTodo() {
    let url = "https://jsonplaceholder.typicode.com/todos";
    fetch(url)
        .then(response => response.json())
        .then(todoData => todoList(todoData))
}

function todoList(todoData) {
    let todoContainer = document.querySelector("#todo-container");
    for (toDos of todoData) {
        let todoDiv = document.createElement("div");
        todoContainer.appendChild(todoDiv);
        let h3 = document.createElement("h3");
        h3.innerHTML = `User ID:${toDos.id}`;
        todoDiv.appendChild(h3);
        let p = document.createElement("p");
        p.innerHTML = `Work Name: ${toDos.title}`;
        todoDiv.appendChild(p);
        let status = document.createElement("p");
        status.innerHTML = `Status: ${toDos.completed}`;
        todoDiv.appendChild(status);
        todoDiv.classList.add("box-styling")
    }
}

loadTodo();