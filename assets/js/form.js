// grabbing elements from the page and saving them as variables
const postName = document.getElementById('postName')
const postTitle = document.getElementById('postTitle')
const postContent = document.getElementById('postContent')
const submitBtn = document.getElementById('submit')

// submit button functionality
submitBtn.addEventListener('click', function () {

    // checks that all three fields are filled, throws an alert prompt otherwise
    if ( postName.value == '' || postTitle.value == '' || postContent.value == '' ) {
        alert('Please fill in all fields to continue.')
    }

    // saves the three fields in an object
    const newPost = {
        name: postName.value,
        title: postTitle.value,
        content: postContent.value,
    }
    
    // passes the post object to localstorage
    localStorage.setItem('newPost', JSON.stringify(newPost))

    // retrieves the array of all saved posts or creates a new one if empty
    let posts = JSON.parse(localStorage.getItem('posts')) || []

    // pushes the new post into the posts array
    posts.push(newPost)

    // saves the posts array back into localstorage
    localStorage.setItem('posts', JSON.stringify(posts))

    // url redirect to blog page
    window.location = './blog.html'
})
