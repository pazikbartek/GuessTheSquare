class Word{
    constructor(){
        this.words;
    }

    setWord(){

        let wordDiv = document.querySelector('#words');
        if(wordDiv.children[0]!==null){
            wordDiv.innerHTML = "";
        }

        let newWord = document.createElement("div");
        newWord.id="child";
        wordDiv.appendChild(newWord);
        newWord.textContent = `${this.words}`;
        newWord.style.opacity = "0";
        newWord.style.animation = "word 1s ";
    }
}