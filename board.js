class Board{
    constructor(){
        this.clickNumber = 0;
        this.firstClassName;
        this.secondClassName;
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

    checkSquares(square){ //sprawdza czy gracz trafil 2 takie same pola czy nie
        if(this.clickNumber==0){
            this.firstClassName = square;
            (square.firstChild).style.opacity = "1";
            this.clickNumber++;
        }
        else if(this.clickNumber == 1){
            this.secondClassName = square;
            (square.firstChild).style.opacity = "1";

            if(this.firstClassName.firstChild.className===this.secondClassName.firstChild.className){
                this.removeSquare();
            }
            else{
                this.leaveSquare();
            }

            this.clickNumber--;
            this.secondClassName = null;
            this.firstClassName = null;

        }

    }

    removeSquare(){ //usuniecie pol po odgadnieciu 2 takich samych

        this.secondClassName.innerHTML = "";
        this.firstClassName.innerHTML = "";
    }

    leaveSquare(){ // schowanie klockow jezeli nie udalo sie odgadnac
        
        (this.firstClassName.firstChild).style.opacity = "0.1";
        (this.secondClassName.firstChild).style.opacity = "0.1";
    }



}