# Entry 2
##### 12/9/23


### Content
From the previous Entry that I wrote, I was simply setting up my "HTML" section of my Scramble Game which turned out pretty basic but useful as I will later include CSS to make it stand out more. This time I began to start adding some basic Javascript into the code. I thought about first storing all the words and hints that will be used in this game in an array that I set called "Words" and it will have 2 different objects inside the array which will be `word : ` and `hint :`. These 2 objects will be the essentials to looping through the displayed values that will be shuffled everytime the user clicks on `Refresh Word`. I struggle a little bit with setting them as objects because I kept messing up on where to add a comma to break one object since I thought it would be ok to just set it all in one big object until I realized that I couldn't do that. Why? Well because the object `word:` and `hint:` keeps changing values. It sets everything to be in one big object with one big curly brackets `{}` then the values would just keep shifting from the previous to the next instead of storing each different values.

### Sources
The main source I've used this time would be google and ALOT of it. Here's the link to [google](https://www.google.com/) if you like (click on the google word <:) I used google mainly as a cheat sheet when I don't know where to begin. I also used this [article](https://www.freecodecamp.org/news/javascript-array-of-objects-tutorial-how-to-create-update-and-loop-through-objects-using-js-array-methods/) made by FreeCodeCamp that teaches you How to Create, Update, and Loop Through Objects Using JS Array Methods. It gave me an insight on how to correctly set up mines in order for it to be used. (I was saying HUH the entire time reading the article from head to toe until I realized that they were just examples of the codes)

### Engineering Design Process
The Engineering Design Process that I'm currently on would be 6 and 7 which are "Test and evaluate the prototype" and "Improve as needed". I was mainly testing out how to store a bunch of word and hint values inside a big container that I can later use to grab the length of since I need to randomly shuffle words and shuffle the hints when the user presses different buttons.
Below is what I managed to do as stated in this entry.
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
];
```
As you can see, every comma seperates one set of object from the other so that it doesn't crash or keeps resetting my values to the next `word` or `hint` that the program sees.
### Skills
<<<<<<< HEAD
Writing my first chunk of code was not easy.. Let me tell you one skill that I accumulated in writing this section of my code and Entry would be `Self planning` because boy did I struggle with that.... I also relied alot on google not to copy or paste but to use it as my thinking refence cheat sheet. I was struggling a lot on how I would manage to add a bunch of words and hints that the user should use and try to guess. I finally decided on Objects and Arrays because all I knew then was I wanted to make was "a lot of words and hints stored inside a big box". So I went to google and searched "How do I make something that stores a lot and is stored inside a giant box?"Yes.... I searched that up... and guess what? IT DIDN'T GIVE ME ANYTHING [*inserts frustrated emoji*] so I stopped and said "Okay... Even though Google gave up on me, I WILL NOT GIVE UP AND I WILL BOTHER MR.MUELLER IF I MUST!" and I remembered how Mr.Mueller was talking about "Arrays" and how I can set many many variables INSIDE an array [it saved me 3 hours of pure anger]. That was step one of my mission right? the next step was adding more things inside my big box, of course my first thought was to add variables but it didn't really seem right to me to set it as variables because variables are interchangable and I need it to stay as it is then I thought about OBJECTS AND OBJECTS ARE COOL AND VERY USEFUL TO STAY IN POSITION when you store something in it :). Therefore I finally managed to finish my first chunk of code and that's how you successfully see these million lines of sentences you're reading right now.

### Goals (over the break)
Over the break, I plan on specifially building my clock and the timer that goes down as the player plays on it. I would be looking up how to use countdowns in Jquery while also make my buttons interactive. I already checked out the Jquery home page and they have this section called "intervals" and there's this code that you can use called "setInterval" which then is continuous with `clearInterval()` and you can choose to cleear the timer with it. So over the break, I'll be investigating more about that.
=======
Writing my first chunk of code was not easy.. Let me tell you the one skill that I accumulated in writing this section of my code and Entry would be `Self planning` because boy did I struggle with that.... I also relied alot on google not to copy or paste but to use it as my thinking refence cheat sheet. I was struggling a lot on how I would manage to add a bunch of words and hints that the user should use and try to guess. I finally decided on Objects and Arrays because all I knew then was I wanted to make was "a lot of words and hints stored inside a big box". So I went to google and searched "How do I make something that stores a lot and is stored inside a giant box?"Yes.... I searched that up... and guess what? IT DIDN'T GIVE ME ANYTHING [*inserts frustrated emoji*] so I stopped and said "Okay... Even though Google gave up on me, I WILL NOT GIVE UP AND I WILL BOTHER MR.MUELLER IF I MUST!" and I remembered how Mr.Mueller was talking about "Arrays" and how I can set many many variables INSIDE an array [it saved me 3 hours of pure anger]. That was step one of my mission right? the next step was adding more things inside my big box, of course my first thought was to add variables but it didn't really seem right to me to set it as variables because variables are interchangable and I need it to stay as it is then I thought about OBJECTS AND OBJECTS ARE COOL AND VERY USEFUL TO STAY IN POSITION when you store something in it :). Therefore I finally managed to finish my first chunk of code and that's how you successfully see these million lines of sentences you're reading right now.
>>>>>>> refs/remotes/origin/main
<br>
[Previous](entry01.md) | [Next](entry03.md)

[Home](../README.md)
