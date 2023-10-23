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

<!--
* Links you used today (websites, videos, etc)
* Things you tried, progress you made, etc
* Challenges, a-ha moments, etc
* Questions you still have
* What you're going to try next
-->
