class Score{
    constructor(){
        this.scores = 0;
    }

    setScores(){
        let scoresDiv = document.querySelector('#scores')
        scoresDiv.innerHTML = `Score: </br> ${this.scores}`;
    }
}