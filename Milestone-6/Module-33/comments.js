function commentsData() {
    let url = "https://jsonplaceholder.typicode.com/comments";
    fetch(url)
        .then(res => res.json())
        .then(datas => showComments(datas))
}

function showComments(datas) {
    let commentsContainer = document.querySelector(".comments-container");
    for (let data of datas) {
        let div = document.createElement("div");
        div.innerHTML = `
        <h3>Commentor Group ID:${data.postId}</h3>
        <h4>Commentor ID:${data.id}</h4> <br>
        <h4>Commentor Name:</h4>${data.name}<br>
        <h4>Commentor Email:</h4>${data.email}<br>
        <h4>Main Comment:</h4>${data.body}
        `
        div.classList.add("comments-box")
        commentsContainer.appendChild(div);
    }
}

commentsData();