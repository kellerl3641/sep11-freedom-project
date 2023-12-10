# Entry 1
##### 11/06/2023

### Content
My topic for this Freedom Project is going to be making a Scramble game with Jquery as my Topic, I've decided to use Jquery because I think the code of Jquery is quite similar to Javascript and since I was studying a little about Jquery last year with my webpage, I decided to dive deeper into Jquery and see for myself how much of it I can digest. My Scramble Game would include a simple display value for the words that the user has to guess and there would be 2 buttons that can be pressed if the user wants to refresh the word or check the word that they entered. If the user entered the incorrect word, they would be given an alert stating that "The word you've answered is incorrect, please try again" but if the user enters the correct word, they would get an alert stating that "The word you entered is correct" and they can proceed onto the next word.

### Sources
The main 3 sources that I used in learning Jquery would be [W3schools](https://www.w3schools.com/jquery/default.asp), [Jquery home page](https://jquery.com/) and google in general. I might have popped in and out of [Jsbin](https://jsbin.com/?html,output) to test my code whenever I want to change a line of code but is afraid to mess up my overall composition of the code. But, W3schools gave me the most useful and needed resources when I was trying to create a on click function. I also need to give some credits to [FreecodeCamp](https://www.freecodecamp.org/) because when I was researching my topic, I came across FCC many many times. (Yes, I had to check how to use increments and decrements again.)

### Engineering Design Process
I'm currently at step 2 of the Engineering Design Process which is "Brainstorming Possible Solution" because I already finished tinkering with my HTML section of my scramble game with just some `divs` and some `input types` but I didn't really figure out how to lay out my Jquery and how to include my Jquery code within the Scramble Game. Therefore, I'm still "Brainstorming" ideas on how to incorporate Jquery in my project in general. <br>

My html code is shown below :
```html
 <div class="container">
            <h2>Word Scramble</h2>
            <div class="content">
                <p class="word"></p>
                <div class="details">
                    <p class="hint">Hint: <span></span></p>
                    <p class="time">Time Left: <span><b>30</b>s</span></p>
                </div>
                <input type="text" spellcheck="false" placeholder="Enter a valid word">
                <div class="buttons">
                    <button class="refresh-word">Refresh Word</button>
                    <button class="check-word">Check Word</button>
                </div>
            </div>
        </div>
```

### Skills
The 2 main skills that I learned and developed within this week of tinkering with my tool was "Collaboration" and "Communication". I collaborated with the internet mainly whenever I was stuck on a certain step of my code. For example, when i was trying to think about how to set up the Scramble game to have a clock set up that would count down as soon as the word refreshes or the game starts and I didn't know how to put that in my lines of code. Therefore, I popped into google and searched up "How to decrement a number" as my first step and I caught a glimpse of using the decrement values of a number which is `i--` and I decided to put everything in a `for loop` since it would be continuous over time but if I didn't hop over to google and just instead chose to give up and not even make a time, I wouldn't have learned how to use a for loop or include a for loop in my lines of code to make A COUNT DOWN TIMER. So I collaborated with Googe and FreecodeCamp to resolve my issue. I learned how to communicate by asking one of my senior friends if they knew how to make a count down timer using Jquery but since they didn't choose Jquery as their topic last year, they weren't able to help me but they did give me an insight on how I could use a `for loop` and just using the variable `i`, I could decrement the value until it hits the selected time and then a alert box would pop up for the user to know that the game is over and simply display the word that was supposed to be guessed. 
<br>
[Next](entry02.md)

[Home](../README.md)
