# Entry 2
##### 2/5/24


### Content
I have been trying to plan out what I want to do with my code and honestly, it turned out pretty well if you asked me. My plan was to first create a timer that runs from 30 seconds all the way down to 0 seconds and then stop the game overall then display the text "Times up, you lost" and finally give you the correct word. The second part of the code would be running the game in general by looping through the length of my words array and jumble up the words so the user can guess them. If the user guessed the word correctly, it will display an alert saying "good job, you guessed the word correctly. If not, it will display "try again or that's not the correct word". Lastly I should have a button where they refresh the list of words for them and a button that checks the correct word for them. I mainly got to the part where I create a timer and started on the basis of creating a clickable and checkable button.
### Sources
The 2 main sources that I've used is google and github... YES I USED GITHUB GUYS!!! PRAISE ME!!! credits to this person's scramble game [Click Here](https://github.com/rayan2228/word-scramble/blob/main/js/script.js). I was a little bit confused on how to start the timer countdown until I looked over his code and I understood that I needed a function, an argument and setting the value to any timer amount that I wanted and then as the user presses the check word or refresh button, the timer gradually starts decreasing and it ends up at 0 then alerts "times up!" and the correct word if the user doesn't guess correctly. Some code snippets of what I did is below:

```javascript
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
```


The main part of this code would be the line where it states the MaximumTime and the correct intervals for it.
### Engineering Design Process
The Engineering Design Process that I'm currently on would be 6 and 7 which are "Test and evaluate the prototype" and "Improve as needed" because I still didn't complete my actual game-starting function and that is the heart of my project but I definitely got my timer to work so I was really proud of that.
### Skills
Some skills that I use was "breaking code down into smaller pieces" which includes Skill in changing the content of HTML elements, including text, attributes, and HTML structure, using properties like innerHTML. I was trying to work the clear interval segment of the code and in return it gave me a gigantic error in my code and it returned no maximumTime. I forgot to set an argument in the parameters and it kept returning "there was no maximumTime" and I was confused on why it kept returning that error and I was frustrated because I could not figure it out. Therefore, I went back to my code and break down the code into different segments where I don't have to fuss over all the big chunks and it resulted in completion of my code. I also used "How to Google" because I was searching up "if there must be an argument called in a parameter if you want to use a not indicated argument." The results were very conflicting because it didn't state if there must be a "given" argument in order to use another one but then I realized that I was trying to use an argument in a function when there isn't that argument stated. Which was why the console was screaming errors at me. Therefore, I made an argument in the function that I needed and I decided to retry the console and FINALLY it stopped screaming at me.
### Goals (over the break)
I plan to actually create my game starter function because that's what is the main starting point of my game and I plan to check more of other people's creations to get an idea of how the code is gonna run but overall!!! I'M GOING TO GET SOME CODING DONE MR.MUELLER I PROMISE!!!


[Previous](entry02.md) | [Next](entry04.md)

[Home](../README.md)

