class End{

    checkScores(score){
        if (score.attempts===0){
            if(score.points<800){
                let end = document.createElement('class');
                end.className = "end";
                let h1 = document.createElement('H3');
                h1.innerHTML = `You lost! </br> Your results: ${score.points} points`;
                let emot = document.createElement('i');
                emot.className = "fas fa-frown-open";

                end.appendChild(h1);
                end.appendChild(emot);

                let tab = document.querySelector("#board");
                tab.innerHTML = "";
                tab.appendChild(end);
            }
            else{
                let end = document.createElement('class');
                end.className = "end";
                let h1 = document.createElement('H3');
                h1.innerHTML = `You won! </br> Your results: ${score.points} points`;
                let emot = document.createElement('i');
                emot.className = "fas fa-grin-beam";;

                end.appendChild(h1);
                end.appendChild(emot);

                let tab = document.querySelector("#board");
                tab.innerHTML = "";
                tab.appendChild(end);
            }
        }

        else if (score.points===800){
            let end = document.createElement('class');
            end.className = "end";
            let h1 = document.createElement('H3');
            h1.innerHTML = `You won! </br> Your results: ${score.points} points`;
            let emot = document.createElement('i');
            emot.className = "fas fa-grin-beam";

            end.appendChild(h1);
            end.appendChild(emot);

            let tab = document.querySelector("#board");
            tab.innerHTML = "";
            tab.appendChild(end);
        }

    }
}