
let words = [
    {
        word: "addition",
        hint: "The process of adding numbers"
    },
    {
        word: "meeting",
        hint: "Event in which people come together"
    },
    {
        word: "number",
        hint: "Math symbol used for counting"
    },
    {
        word: "exchange",
        hint: "The act of trading"
    },
    {
        word: "canvas",
        hint: "Piece of fabric for oil painting"
    },
    {
        word: "garden",
        hint: "Space for planting flower and plant"
    },
    {
        word: "position",
        hint: "Location of someone or something"
    },
    {
        word: "feather",
        hint: "Hair like outer covering of bird"
    },
    {
        word: "comfort",
        hint: "A pleasant feeling of relaxation"
    },
    {
        word: "tongue",
        hint: "The muscular organ of mouth"
    },
    {
        word: "expansion",
        hint: "The process of increase or grow"
    },
    {
        word: "country",
        hint: "A politically identified region"
    },
    {
        word: "group",
        hint: "A number of objects or persons"
    },
    {
        word: "taste",
        hint: "Ability of tongue to detect flavour"
    },
    {
        word: "store",
        hint: "Large shop where goods are traded"
    },

    {
        word: "field",
        hint: "Area of land for farming activities"
    },
    {
        word: "friend",
        hint: "Person other than a family member"
    },
    {
        word: "pocket",
        hint: "A bag for carrying small items"
    },
    {
        word: "needle",
        hint: "A thin and sharp metal pin"
    },
    {
        word: "expert",
        hint: "Person with extensive knowledge"
    },
    {
        word: "statement",
        hint: "A declaration of something"
    },
    {
        word: "second",
        hint: "One-sixtieth of a minute"
    },
    {
        word: "library",
        hint: "Place containing collection of books"
    },
]


document.addEventListener('DOMContentLoaded', function() {
        const wordVal = document.querySelector(".word"),
        hintVal = document.querySelector(".hint"),
        timeText = document.querySelector(".time"),
        inputVal = document.querySelector("input"),
        refreshBtn = document.querySelector(".refresh-word"),
        checkBtn = document.querySelector(".check-word");


        let correctWord, timer;


        const startTimer = maximumTime => {
            clearInterval(timer);
            timer = setInterval(() => {
                if(maximumTime > 0) {
                    maximumTime--;
                    return timeText.innerText = maximumTime;
                }
                alert(`TIME ENDED! ${correctWord.toUpperCase()} was the correct word!!! LOSER`);
                startGame();
            }, 1000);
        }

        const startGame = () => {
            startTimer(30);
            let randomObj = words[Math.floor(Math.random() * words.length)];
            let wordArray = randomObj.word.split("");
            for (let i = wordArray.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
            }
            wordVal.innerText = wordArray.join("");
            hintVal.innerText = randomObj.hint;
            correctWord = randomObj.word.toLowerCase();;
            inputVal.value = "";
            inputVal.setAttribute("maxlength", correctWord.length);
        }
        startGame();

        const checkWord = () => {
            let userChoice = inputVal.value.toLowerCase();
            if(!userChoice) return alert("Please enter the word to check!");
            if(userChoice !== correctWord) return alert(`Oops! ${userChoice} is not a correct word`);
            alert(`Congrats! ${correctWord.toUpperCase()} is the correct word`);
            startGame();
        }

        refreshBtn.addEventListener("click", startGame);
        checkBtn.addEventListener("click", checkWord);
        });
