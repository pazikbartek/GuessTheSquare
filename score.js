class Score{
    constructor(){
        this.points = 0;
        this.attemps = 20;
    }

    setPoints(){
        let pointsDiv = document.querySelector('.points')
        pointsDiv.innerHTML = `Score: </br> &nbsp; ${this.points}`;
    }

    setAttemps(){
        let attempsDiv = document.querySelector('.attemps');
        attempsDiv.innerHTML = `Attemps: </br> &nbsp; ${this.attemps}`;
    }

}