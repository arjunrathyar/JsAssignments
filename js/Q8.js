class Blog {                                                                       //class
    constructor(name, email, title, content) {                                     //constructor
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
    $('.summernote').summernote();                                                //summernote


    form.addEventListener("submit", function (event) {

        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const postTitle = document.getElementById("postTitle").value;
        const postContent = $('.summernote').summernote('code'); 

        const newPost = new Blog(name, email, postTitle, postContent);            //object of class getting initialized with values passed after clicking submit button

        const listItem = document.createElement("li");                            //adding those values to list which is then displayed as an unordered list
        listItem.className = "list-group-item";
        listItem.innerHTML = `
            <p><span class="glyphicon glyphicon-user"></span> ${newPost.name} &nbsp; <span class="glyphicon glyphicon-time"></span> ${newPost.timestamp}</p>
            <h3>${newPost.title}</h3>
            <p>${newPost.content}</p>
        `;

        posts.appendChild(listItem);                                              //adding the list items to unordered list
        form.reset();                                                             //reseting form and summernote
        $('.summernote').summernote('code', ''); 
    });
});