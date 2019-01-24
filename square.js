class Square{
    constructor(){
        this.iconsArray = ["fas fa-heart", "fas fa-heart", "fas fa-apple-alt", "fas fa-apple-alt", "fas fa-dove",
        "fas fa-dove", "fas fa-gem", "fas fa-gem", "fas fa-sun", "fas fa-sun", "far fa-futbol", "far fa-futbol",
        "fas fa-moon", "fas fa-moon", "fas fa-dog", "fas fa-dog"];
    }

    addListener(board){ // przypisuje zdarzenia do kwadratow w tablicy
        board.squares.forEach((square) =>{
            square.addEventListener("click", function(){
                board.checkSquares(square);
            })
        })
    }



    
}