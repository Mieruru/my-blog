const blogSpace = document.querySelector("main");

function getPosts() {
  // retrieve array of posts from localstorage
  let posts = JSON.parse(localStorage.getItem("posts"));

  // for each object in the array:
  posts.forEach((post) => {
    console.log(post);

    // generate a new div inside of the body.main
    const postCard = document.createElement("div");
    const postTitle = document.createElement("h4");
    const postContent = document.createElement("p");
    const postAuthor = document.createElement("p");

    // populate the div with the data from the object
    postCard.append(postTitle, postContent, postAuthor);

    // a title section
    postTitle.textContent = post.title;

    // the content of the post
    postContent.textContent = post.content;

    // the author of the post
    postAuthor.textContent = post.name;

    // puts the post in the blogSpace
    blogSpace.appendChild(postCard);

    // add style to the post
    postCard.classList.add("postcard");
  });
}

// call the getPosts function
getPosts();
