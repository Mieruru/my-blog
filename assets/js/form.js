// grabbing elements from the page and saving them as variables
const postName = document.getElementById('postName')
const postTitle = document.getElementById('postTitle')
const postContent = document.getElementById('postContent')
const submitBtn = document.getElementById('submit')

const date = new Date()

// submit button functionality
submitBtn.addEventListener('click', function () {
  // checks that all three fields are filled, throws an alert prompt otherwise
  if (
    postName.value == '' ||
    postTitle.value == '' ||
    postContent.value == ''
  ) {
    alert('Please fill in all fields to continue.')
    return
  }

  // saves the three fields in an object
  const newPost = {
    // there's some extra stuff going on here to add the date and time of the post to the post author
    name: `${postName.value} posted on ${date.getMonth()}/${date.getDate()}/${date.getFullYear()} at ${date.getHours()}:${date.getMinutes()}.`,
    title: postTitle.value,
    content: postContent.value,
  }

  // passes the post object to localstorage
  localStorage.setItem('newPost', JSON.stringify(newPost))

  // retrieves the array of all saved posts or creates a new one if empty
  let posts = JSON.parse(localStorage.getItem('posts')) || []

  // pushes the new post to the beginning of the posts array; newer blog posts appear closer to the top of the screen, pushing older ones further down.
  posts.unshift(newPost)

  // saves the posts array back into localstorage
  localStorage.setItem('posts', JSON.stringify(posts))

  // url redirect to blog page
  window.location = './blog.html'
})
