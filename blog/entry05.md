# Entry 5
##### 5/5/24

### Content
I have offically finished my MVP freedom project for my scramble game and for my last section of code, I had to get the game to restart after the user clicks Refresh Word but I didn't exactly know how that would work until I went on google to search up how to reset a game and because I was learning p5js, I thought maybe I could use no loop to stop it? and then rerun it but then I figured out that I didn't need to make another FUNCTION that helps me reload my code. Moreover, I noticed that I could just create a button that simply says "Refresh words" and then I can reuse my initial starting code to "restart" my game. One last change that I had to change in my code was my `Check words` function because it didn't render out the correct word and I was wondering why because I tried putting it in VS code and it turned out just fine but the second I placed it in my Github IDE, it turned out as a blank screen. I later realized that I forgot to close my bracket for my section of code.
Check the code from below:

```javascript
const checkWord = () => {
            let userChoice = inputVal.value.toLowerCase();
            if(!userChoice) return alert("Please enter the word to check!");
            if(userChoice !== correctWord) return alert(`Oops! ${userChoice is not a correct word`);
            alert(`Congrats! ${correctWord.toUpperCase()} is the correct word`);
            startGame();
        }
```
Do you see the problem??? well I do, check on line 12 of this entry and look for my missing `}`. That was my WHOLE ENTIRE ERROR!!!!! Check out the functioning code below and spot the difference again

```javascript
const checkWord = () => {
            let userChoice = inputVal.value.toLowerCase();
            if(!userChoice) return alert("Please enter the word to check!");
            if(userChoice !== correctWord) return alert(`Oops! ${userChoice} is not a correct word`);
            alert(`Congrats! ${correctWord.toUpperCase()} is the correct word`);
            startGame();
        }
```
With that error resolved, I could finally git push everything and send it to Mr.Mueller(😥😌)

### Sources
I actually didn't use ANY WEBSITES or LINKS this time for once to fix my code but still borrowed google a lot to ask my repeated questions, but.... I did ask Kinsen to help me with the actual loadup of my game because I couldn't get the code to run naturally without this huge chunk of error stating "Undefined variable within scope" (IT MADE ME UPSET OKAY!) so big credits to Kinsen Qiu for being my moral support and my advisor for coding.
### Engineering Design Process
I'm currently on the end of my EDP but will still work towards making my project beyond MVP (I am currently stick on what to use for my beyond MVP) but I did think about having a scoreboard that keeps track of the user's points but I'll think further about it when something pops into my head.
### Skills
Some skills that I accumulated is being patient. Yes, I am learning to be patient. Especially when you are coding or working with computer and trying to tell the program to do something, you CANNOT just get upset at the code. You have to understand that the code is never wrong, you are the one who's done something to make the code not work correctly. As harsh and annoying that sounds, it helped me. I was stuck going back and forth checking my IDE and my VS code trying to see what's the difference between the two but I never got to find it until I checked my console terminal for a hint. Which, leads me to my other skill `Check your CONSOLE`. I am not proud of this but when I was stuck trying to find my code and error, I looked EVERYWHERE except my console. (Mr.Mewller going to scream at me😥) I kept getting upset with my IDE stating that every single code was the exact same but before I offically gave up, I remembered that Mr.Mueller always says "Check your console for debugging". So lesson learned, right click your web page and press inspect. <br>
[Previous](entry04.md) | [Next](entry06.md)

[Home](../README.md)

