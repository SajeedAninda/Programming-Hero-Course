document.querySelector(".submitBtn").addEventListener("click", function () {
    let txtArea = document.querySelector("#txtarea");
    let txtAreaValue = txtArea.value;
    let commentsDiv = document.querySelector(".comments-div");
    let comments = document.createElement("p");
    comments.innerText = txtAreaValue;
    commentsDiv.appendChild(comments);
    txtArea.value = "";
})
