class Word{
    constructor(){
        this.words;
    }

    setWord(){
        let wordDiv = document.querySelector('#words');
        wordDiv.textContent = `${this.words}`;
    }
}