const blogSpace = document.body.main

const postCard = createElement('article')
const postTitle = this.createElement('h4')
const postContent = this.createElement('p')
const postAuthor = this.createElement('p')

function getPosts() {
    // retrieve array of posts from localstorage
    let posts = JSON.parse(localStorage.getItem('posts'))

    // for each object in the array:

        // generate a new div inside of the body.main        

        // populate the div with the data from the object

            // a title section

            // the content of the post

            // the author of the post

}

// call the getPosts function
getPosts()