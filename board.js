class Board{
    constructor(){
        this.clickNumber = 0;
        this.first;
        this.second;
        this.squares = [];
        this.squaresToRemove = [];
    }

    fillBoard(pole){ //wypelnia pole gry ikonkami
        let squares = document.querySelectorAll('.square');

        for (const square of squares){

            let index = Math.floor((Math.random() * (pole.iconsArray.length)) + 0);
            let icon = document.createElement('i');
            icon.className = `${pole.iconsArray[index]}`;
            icon.style.opacity = "0";
            square.appendChild(icon);
            this.squares.push(square);
            pole.iconsArray.splice(index, 1);

        }
    }

    checkSquares(square, score, word, end, add){ //sprawdza czy gracz trafil 2 takie same pola czy nie


        if(this.clickNumber==0){

            if(this.squaresToRemove.indexOf(square)>=0){
                square.removeEventListener("click", add);
                return false;
            }
            
            this.first = square;
            this.first.firstChild.style.animation = "show 0.4s forwards"
            this.clickNumber++;
        }

        else if(this.clickNumber == 1){

            this.second = square;
            if(this.first!==this.second){

                if(this.first.firstChild.className===this.second.firstChild.className){ 
                    word.words = "Great move!"
                    word.setWord();
                    score.points+=100;
                    score.setPoints();
                    this.removeSquare(add);
                }
                else{

                    word.words = "Try again!"
                    word.setWord();
                    this.leaveSquare();
                }

                score.attempts--;
                score.setAttempts();
                end.checkScores(score);
                word.words = ""
                this.clickNumber--;
            }    
        }

    }

    removeSquare(add){ //usuniecie pol po odgadnieciu 2 takich samych

        if (this.second.firstChild.style.animation){
            let newIcon = document.createElement("i");
            newIcon.className = `${this.second.firstChild.className}`;  //dodawanie nowej animacji do elementu ktory juz mial animacje
            this.second.innerHTML = "";
            this.second.appendChild(newIcon);
        }

        this.first.firstChild.style.animation = "hide 1s forwards";
        this.second.firstChild.style.animation = "hide 1s forwards";
        this.first.style.animation = "changeColor 0.4s 0.4s forwards"
        this.second.style.animation = "changeColor 0.4s 0.4s forwards"
        
        this.squaresToRemove.push(this.first);
        this.second.removeEventListener("click", add);
        this.first.style.cursor = "default";
        this.second.style.cursor = "default";
    }


    leaveSquare(){ // schowanie klockow jezeli nie udalo sie odgadnac

        if (this.second.firstChild.style.animation){
            let newIcon = document.createElement("i");
            newIcon.className = `${this.second.firstChild.className}`; //dodawanie nowej animacji do elementu ktory juz mial animacje
            this.second.innerHTML = "";
            this.second.appendChild(newIcon);
        }

        this.second.firstChild.style.animation = "hide 1s  forwards";
        this.first.firstChild.style.animation = "hide 1s  forwards";
    }



}