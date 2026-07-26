let level = 1;


function startGame() {

    document.getElementById("intro").classList.add("hidden");
    document.getElementById("game").classList.remove("hidden");

    showLevel();

}


function showLevel() {

    let title = document.getElementById("levelTitle");
    let question = document.getElementById("question");
    let answers = document.getElementById("answers");
    let message = document.getElementById("message");


    answers.innerHTML = "";
    message.innerHTML = "";


    if(level === 1){

        title.innerHTML = "Livello 1 🌸";

        question.innerHTML =
        "Quando ci siamo messi insieme? 💜";


        createButton("24/11/25", true);
        createButton("24/10/25", false);

    }


    if(level === 2){

        title.innerHTML = "Livello 2 🌺";

        question.innerHTML =
        "Come si chiama il tuo ragazzo? 💜";


        createButton("Ferdinando", false);
        createButton("Fernando", true);
        createButton("Fernendo", false);
        createButton("Nando", false);

    }


    if(level === 3){

        title.innerHTML = "Ultimo livello 💜";

        question.innerHTML =
        "Mi ami? ❤️";


        createButton("Si 💜", true);
        createButton("No", false);

    }

}



function createButton(text, correct){

    let button = document.createElement("button");

    button.innerHTML = text;


    button.onclick = function(){

        if(correct){

            if(level < 3){

                document.getElementById("message").innerHTML =
                "Brava amore 💜 Passi al livello " + (level + 1);

                level++;

                setTimeout(showLevel,1500);

            } else {

                finishGame();

            }


        } else {


            document.getElementById("message").innerHTML =
            "SEI UNA BANANA 😂🍌";


        }

    };


    document.getElementById("answers").appendChild(button);

}



function finishGame(){

    document.getElementById("game").classList.add("hidden");

    document.getElementById("final").classList.remove("hidden");

}
