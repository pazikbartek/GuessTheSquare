class Square{
    constructor(){
        this.iconsArray = ["fas fa-heart", "fas fa-heart","fas fa-dog", "fas fa-apple-alt", "fas fa-dove",
        "fas fa-dove","fas fa-sun", "fas fa-gem", "fas fa-gem", "fas fa-sun", "far fa-futbol","fas fa-apple-alt",
        "far fa-futbol",
        "fas fa-moon", "fas fa-dog", "fas fa-moon"];
    }

    addListener(board, score, word){ // przypisuje zdarzenia do kwadratow w tablicy
        board.squares.forEach((square) =>{
            square.addEventListener("click", this.add = function add(){
                board.checkSquares(square, score, word, end, add);
            })
        })
    }



    
}