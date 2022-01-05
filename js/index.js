// GET request
const URL = 'http://localhost:3000/books'

document.addEventListener("DOMContentLoaded", () => {
fetch(URL)
    .then(response => response.json())
    .then(bookArray => bookArray.forEach(displayBooks))
})

// CALLED functions

// Create li for each book
function displayBooks(bookDetails) {

    const li = document.createElement('li')
    li.innerText = bookDetails.title
    console.log(bookDetails.title)

    // Add each li to the ul#list element
    document.getElementById('list').append(li)
    
// CLICK and show book details in div#show-panel element
    li.addEventListener('click', () => {

        // Display book thumbnails
        const bookImg = document.createElement('img')
        bookImg.src = bookDetails.img_url
        document.getElementById('show-panel').append(bookImg)

        // NOTE: Information below appears with clicked, but formatting is terrible!
        // Display title, subtitle, author
        const bookTitle = document.createElement('p')
        bookTitle.innerText = bookDetails.title
        document.getElementById('show-panel').append(bookTitle)

        const bookSubtitle = document.createElement('p')
        bookSubtitle.innerText = bookDetails.subtitle
        document.getElementById('show-panel').append(bookSubtitle)

        const bookAuthor = document.createElement('p')
        bookAuthor.innerText = bookDetails.author
        document.getElementById('show-panel').append(bookAuthor)
        
        // Display book description
        const bookDescription = document.createElement('p')
        bookDescription.innerText = bookDetails.description 
        document.getElementById('show-panel').append(bookDescription)
        
        // Display list of users who have liked the book
        bookDetails.users.forEach((user) => { 
            const userLikes = document.createElement('ul')
            userLikes.innerText = user.username
            document.getElementById('show-panel').append(userLikes)

        // document.getElementById('show-panel').append(user.username) 
            // console.log(user.username)

        // Display a LIKE button along with the book details. CLICK button and send PATCH request
        /*const likeButton = document.createElement('button')
        likeButton.innerText = 'Like'
        document.getElementById('show-panel').append(likeButton)

        likeButton.addEventListener('click', () => {
            console.log('like')

            })*/

        })
    }) 
}