class Board{
    fillBoard(pole){
        let squares = document.querySelectorAll('.square');

        for (const square of squares){
            let index = Math.floor((Math.random() * (pole.iconsArray.length-1)) + 0);
            let icon = document.createElement('i');
            icon.className = `${pole.iconsArray[index]}`;
            icon.style.opacity = "0.1";
            square.appendChild(icon);
            pole.iconsArray.splice(index, 1);
        }
    }
}