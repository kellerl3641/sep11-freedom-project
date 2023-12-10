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
The code above is basically used to store all my "questions" that I will be asking the players and the word is going to pop up randomly at any chosen moment and it would display the hint of the string that is stored in there. The player would then try to guess the word while relying on my hint and if they were to get the word correctly, they would get an alert saying "Good job, onto the next word" or if they were to get the word wrong, they would see an alert saying "That's not the correct word. Please try again."

12/3/2023
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
<hr>
<br>
This part below is the HTML parts section for the Jquery above ^
```html
 <input type="text" id="myInput">
    <button type="button" id="Btn">Show Value</button>
```

<!--
* Links you used today (websites, videos, etc)
* Things you tried, progress you made, etc
* Challenges, a-ha moments, etc
* Questions you still have
* What you're going to try next
-->
