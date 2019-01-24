class Board{
    constructor(){
        this.clickNumber = 0;
        this.first;
        this.second;
        this.squares = [];
    }

    fillBoard(pole){ //wypelnia pole gry ikonkami
        let squares = document.querySelectorAll('.square');

        for (const square of squares){

            let index = Math.floor((Math.random() * (pole.iconsArray.length-1)) + 0);

            let icon = document.createElement('i');
            icon.className = `${pole.iconsArray[index]}`;
            icon.style.opacity = "0.1";
            square.appendChild(icon);
            this.squares.push(square);
            pole.iconsArray.splice(index, 1);

        }
    }

    checkSquares(square, score, word, add){ //sprawdza czy gracz trafil 2 takie same pola czy nie
        if(this.clickNumber==0){

            this.first = square;
            console.log(this.first);
            square.firstChild.style.animation = "show 2s forwards"
            this.clickNumber++;
        }

        else if(this.clickNumber == 1){
            this.second = square;


            if(this.first!==this.second){
                square.firstChild.style.animation = "show 2s forwards";

                if(this.first.firstChild.className===this.second.firstChild.className){ 
                    word.words = "Great!"
                    word.setWord()
                    score.scores+=100;
                    score.setScores();
                    this.removeSquare(add);
                    
                }
                else{

                    word.words = "Try again!"
                    word.setWord();
                    this.leaveSquare();

                }
                word.words = ""
                this.clickNumber--;
                this.second = null;
                this.gowno = null;

            }    
        }

    }

    removeSquare(add){ //usuniecie pol po odgadnieciu 2 takich samych

        this.first.firstChild.style.animation = "hide 1s forwards";
        this.second.firstChild.style.animation = "hide 1s forwards";
        console.log(this.first);
        this.first.removeEventListener("click", add);
        this.second.removeEventListener("click", add);

    }


    leaveSquare(){ // schowanie klockow jezeli nie udalo sie odgadnac
        
        this.second.firstChild.style.animation = "hide 1s forwards";
        this.first.firstChild.style.animation = "hide 1s forwards";
    }



}