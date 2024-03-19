# Tool Learning Log

Tool: **Jquery**

Project: **Scramble Game**

10/23/2023:
I checked out Jquery's offical [website](https://jquery.com/) and I was trying to find some codes that would be helpful in my scramble game and the first thing I noticed was I have to include a Jquery CDN and I learned that there are 2 ways to do it, you can first download Jquery and then just imbed it onto your IDE like `<script src="jquery-3.7.1.min.js"></script>` or you can use the CDN from Jquery that involves the code `<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>`. Any of these 2 can be used to start your code off and you can add it onto the header parts of your project. <br>
The second part would checking out the different ways you can grab elements with ID with Jquery because I need that in order to use buttons and

10/24/2023:
```html
<body>
    <div class="container">
        <h2>Word Scramble</h2>
        <div class="content">
            <p class="word"></p>
            <div class="details">
                <p class="hint">Hint: <span></span></p>
                <p class="time">Time Left: <span><b>30</b>S</span></p>
            </div>
            <input type="text" spellcheck="false" placeholder="Enter a valid word">
            <div class="buttons">
                <button class="refresh-word">Refresh Word</button>
                <button class="check-word">Check Word</button>
            </div>
        </div>
    </div>
```
11/18/2023
I began to start creating the first section of my code for Scramble game and I came up with

```javascript
let words = [
    {
        word: "", //object
        hint: "" //object
    },
    {
        word: "",
        hint: ""
    }
]
```

The code above is basically used to store all my "questions" that I will be asking the players and the word is going to pop up randomly at any chosen moment and it would display the hint of the string that is stored in there. The player would then try to guess the word while relying on my hint and if they were to get the word correctly, they would get an alert saying "Good job, onto the next word" or if they were to get the word wrong, they would see an alert saying "That's not the correct word. Please try again."


12/3/2023<br>
Since I would be using a lot of user inputted boxes, I would then need to familarize myself for it. From tinkering with my tool I learned that when you want to display any user inputted values, you can use the code `val()` which allows you to get the user's input value into whatever stored variable you want. For example, I was tinkering with this section below :
```javascript
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script>
$(document).ready(function(){
    // Get value on button click and show alert
    $("#Btn").click(function(){
        var str = $("#myInput").val();
        alert(str);
    });
});
</script>
```
The code above allows the user's input to be snatched using `.val()` which I later stored in a variable with the id "Btn" and when the user clicks on that button, it returns the exact same value that they had inputed in the input box.
<br>
This part below is the HTML parts section for the Jquery above ^
```html
 <input type="text" id="myInput">
    <button type="button" id="Btn">Show Value</button>
```
1/12/2024<br>
I decided to update my "words" array that stores all my words and all the words that the user needs to guess for the game and I got

```javascript
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
```

1/29/2024<br>
I worked on getting some buttons to start with and I hopped over to Jquery's main page and noticed that there are many ways for me to add a button using Jquery especially since they have this new library called "Jquery UI" (mainly used for buttons, displays and decorations) but it's quite different from just the regular HTML + CSS. I took a snippet of the Jquery UI button :
```javascript
$( function() {
    $( ".widget input[type=submit], .widget a, .widget button" ).button();
    $( "button, input, a" ).on( "click", function( event ) {
      event.preventDefault();
    } );
  } );
```
at first I didn't understand anything that this code was trying to say but I started to break it down line by line and I think the first part where it says "input[type=submit]" is basically grabbing the html part because I remember that there is this part in HTML where you choose the type of input you want like ```"<input type="text">``` but instead it's just grabbing for the input type = submit button and then the rest is to activate the "button" ability in Jquery UI and then the rest is just the same as any.

2/1/2024<br>
I decided to try and create some variables that can be used to store any of these buttons and use them for later and I came up with
```javascript
const wordText = document.querySelector(".word"),
hintText = document.querySelector(".hint "),
timeText = document.querySelector(".time "),
inputField = document.querySelector("input"),
refreshBtn = document.querySelector(".refresh-word"),
checkBtn = document.querySelector(".check-word");


let correctWord, timer;
```
The code is simply just grabbing the class of the element that I want to use. and then storing them in a const so I don't later mess up and try to rename the variable.

2/5/2024 <br>
Today I didn't really do much in my project but I researched completely about the usage of `document.addEventListener('DOMContentLoaded', function())` and it turns out that because sometimes Javascript loads first and then the HTML and that results in the system not understanding why there is a Javascript code trying to grab a HTML element when there isn't one.

2/12/2024 <br>
Today I tried out the different Javscript querySelectors that grabs the element's id and its classes using `document.querySelector()` and `document.getElementById()`. The querySelector one is more of a upgrade from `document.getElementById()` because it doesn't need to just write "get by class" or "get by ID". You can directly get it with the tag, id or class of an element. Something I tinkered with is below :

```html
<p class="example">I am a paragraph.</p>
<p>This is a p element.</p>
```
The Javascript for grabbing the elements are shown below :
```javascript
document.querySelector("p").style.backgroundColor = "pink"; //sets it to background color of pink
document.querySelector(".example").style.backgroundColor = "red";
```
The two codes above do the exact same thing but one changes the background color ot red and the other to pink.

2/19/2024 <br>
Mr.Mueller was talking about the difference between `QuerySelectorAll()` and `querySelector()` and the main 2 differences between the two of them is firstly, the `QuerySelectorAll()` grabs all the element with the same tag or the same id, class. The `querySelector()` only selects the first element with the same tag or id, class instead of every single one. Secondly, the `QuerySelectorAll()` can be used to save time and effectively reduce having to make loopsp for a single element. Some code that I tinkered with in JSBIN are shown below :

```html
<h2 class="fruits">An apple</h2>
<p class="fruits">A pear.</p>
```

```javascript
let allVar = document.querySelectorAll(".fruits");
for (let i = 0; i < allVar.length; i++) {
  allVar[i].style.backgroundColor = "pink";
}
```
The code above grabs all the element with the class name of fruits and then loops through each one of them to make the background color of each, pink.

2/26/2024 <br>
I was tinkering with my buttons and I noticed that I wanted to make sure the user inputs were not all capitalized even if the user decides to enter the values in upper case and I searched on google how to make the values capitalized and I came across `.toLowerCase()` and some snippets of my codes is shown below:
```javascript
let userChoice = inputVal.value.toLowerCase();
if(!userChoice) return alert("Please enter the word to check!");
```
This code allows me to store the user's input as a variable named "userChoice" and because I wanted to store the values as lower cases, I automatically used `.toLowerCase()`. It then sends an alert if the user doesn't have anything in that textbox.

3/4/2024 <br>
I didn't really feel like keeping track of my work and working more on my project today so I decided to fix up my code because it seemed very "sloppy" and hard to read and there was quotations inside quotations which made my eyes go fuzzy trying to read this line of code shown below :
`"oops! " + userChoice + " is not a correct word."` so I decided to change it to this one:
```javascript
(`Oops! ${userChoice} is not a correct word`);
alert(`Congrats! ${correctWord.toUpperCase()} is the correct word`);
```
these 2 codes look very differently than each other but I guarantee you that these 2 does the exact same thing. The first one is just using string concatentions and it's exactly what we learned back in Unit 1 of Javascript Basics (Look back to your notes) and the second part would just be using the new improved version of coding to enhance your first one.

3/18/2024 <br>
I was sick and cramping so I didn't really do much today at home but I was trying to understand how to generate different letters and words and I realized that I could simply utilize the "password" generator concept in my scramble game and just replicate and change a few ideas.
```javascript
  function generatePass() {
      let pass = '';
      let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
                'abcdefghijklmnopqrstuvwxyz0123456789@#$';

      for (let i = 1; i <= 8; i++) {
        let char = Math.floor(Math.random() * str.length);
        pass += str.charAt(char);
      }

      document.getElementById("password").textContent = pass; // Display the generated password
      return pass;
    }

    document.getElementById("but").addEventListener("click", generatePass);

```

The above is the password generator that I thought of but I added an EventListener to display the value when clicked.
<!--
* Links you used today (websites, videos, etc)
* Things you tried, progress you made, etc
* Challenges, a-ha moments, etc
* Questions you still have
* What you're going to try next
-->
