# Tool Learning Log

Tool: **Jquery**

Project: **Scramble Game**

---

10/23/2023:
My official Tool for this Freedom Project would be "Jquery" and I want to make a scramble game with the tool so my first step would be thinking of the process and what I want the scramble to look like.
1. I would need a word bank where it gives the word and also the answer to the word
2. I would start off with a simple function where it gives me the timer
3. Make a function where it auto shuffles the words
4. A function where the words are corected and checked and displayed as an error whenever the player types in a wrong character
5. A refresh button and refreshes a word when
6. A check word button where it checks the word when you click on it (then goes to the checking words function)

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
The above is the html basic set up that I need for the Scramble Game and then I can use the ID(s) for each element and grab it with Jquery to start making the code
**I'll worry about the css last because it would take the longest to do and utalize** 

X/X/X:
* Text


<!--
* Links you used today (websites, videos, etc)
* Things you tried, progress you made, etc
* Challenges, a-ha moments, etc
* Questions you still have
* What you're going to try next
-->
