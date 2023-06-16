export default class Counter {
    // pass textarea element to constructor
    constructor(textarea) {
        this.textarea = textarea
        // add listener for input, which is to update on every character change instead of onBlur and call Counting everytime
        textarea.addEventListener('input', () => this.counting())
    }
    // class method to capture the data and pass it to custom event. Trim for any spaces
    counting() {
        let resultObj = this.countWords(this.textarea.value.trim())
        this.customEvent(resultObj)
    }
 //custom event to pass the calculated data through event and use it in count event handler
 customEvent(resultObj) {
    let customEvent = new CustomEvent('count', {
        bubbles: true,
        cancelable: true,
        detail: resultObj
    })
    // dispatch the event to prefered element
    this.textarea.dispatchEvent(customEvent)
}
    // count word array, total characters and return object
    countWords(string) {
        let wordsArr = string.match(/\S+/g)
        return {
            totalChars: string.length,
            totalWords: wordsArr ? wordsArr.length : 0
        }
    }
}
