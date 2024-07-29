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
        return
    }

    // saves the three fields in an object
    const post = {
        name: postName.value,
        title: postTitle.value,
        content: postContent.value,
    }

    // passes the post object to localstorage
    localStorage.setItem('post', JSON.stringify(post))

    // url redirect to blog page
    window.location = './blog.html'
})