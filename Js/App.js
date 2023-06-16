import Counter from './Counter.js'

// create variables for displaying the dynamic data and to get the input from textarea
let textarea = document.querySelector('.textbox')
let result = document.querySelector('.result')

// create a new instance of the class by passing in the textarea element
new Counter(textarea)

// create a render method to change the text of div with the class 'result' and grab the data from the custom event created in class
let render = (e) => {
    result.innerHTML = `<p>Total words are <span class="numColor">${e.detail.totalWords}</span> and Total characters are <span class="numColor">${e.detail.totalChars}</span>`
}
// add listener to the textarea element
textarea.addEventListener('count', render)