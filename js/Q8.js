class Blog {
    constructor(name, email, title, content) {
        this.name = name;
        this.email = email;
        this.title = title;
        this.content = content;
        let tstamp = new Date().toString();
        this.timestamp = tstamp.slice(4,10)+', '+tstamp.slice(11,15);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    const posts = document.getElementById("posts");
    $('.summernote').summernote();


    form.addEventListener("submit", function (event) {

        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const postTitle = document.getElementById("postTitle").value;
        const postContent = $('.summernote').summernote('code'); 

        const newPost = new Blog(name, email, postTitle, postContent);

        const listItem = document.createElement("li");
        listItem.className = "list-group-item";
        listItem.innerHTML = `
            <p><span class="glyphicon glyphicon-user"></span> ${newPost.name} &nbsp; <span class="glyphicon glyphicon-time"></span> ${newPost.timestamp}</p>
            <h3>${newPost.title}</h3>
            <p>${newPost.content}</p>
        `;

        posts.appendChild(listItem);
        form.reset();
        $('.summernote').summernote('code', ''); 
    });
});