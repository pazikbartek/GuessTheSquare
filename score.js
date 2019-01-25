class Score{
    constructor(){
        this.points = 0;
        this.attempts = 18;
    }

    setPoints(){
        let pointsDiv = document.querySelector('.points')
        pointsDiv.innerHTML = `Score: </br> &nbsp; ${this.points}`;
    }

    setAttempts(){
        let attemptsDiv = document.querySelector('.attempts');
        attemptsDiv.innerHTML = `Attempts: </br> &nbsp; ${this.attempts}`;
    }

}