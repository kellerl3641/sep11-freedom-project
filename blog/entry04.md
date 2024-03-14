# Entry 4
##### 3/14/24

### Content
This whole week I have been on an on and off working rate but I was constantly fiddling with JQUERY. I was using the JQUERY UI library to test out the different cool animations that I can later include in my Scramble Game and that led to me understand alot about their utiities and how I can incorporate them into my code.
### Sources
During my journey on tinkering, I mainly used 4 sources. Google, Jquery UI offical website as stated [here](https://jqueryui.com/), [w3schools](https://www.w3schools.com/jquery/default.asp) and [CodePen](https://codepen.io/tag/jquery). An idea to create a notification board that keeps track of the user's score whenever they want to check how many points they recieved popped into my head when I was scrolling through the Jquery Library. I tinkered using the code shown below:
```html
<body>
<div id="dialog" title="Basic dialog">
  <p>The user's score would be collected as the user decided to press a button to show it.</p>
</div>

<script>
  $( function() {
    $( "#dialog" ).dialog();
} );
</script>
```
The main part of showing a "Dialog" is really just using HTML to write out whatever text you want to show to the user and then you just call `.dialog()` to the given element using their Id or their class. In order for me to fully understand it, I decided to remember it as an "append" because it's simply just grabbing the innerhtml part of a paragraph or heading and putting it after the `.dialog()` portion. This section can also be found [here](https://jqueryui.com/dialog/). I also used google to search up how to automate a scoreboard and it turns out that I just have to store it inside a variable and then iterate it. Here's what I think it's going to be:
```javascript
<script>
    // Step 2: Define variables to keep track of the score
    let score = 0;

    // Step 3: Update Score Function
    function updateScore(points) {
      score += points;
      displayScore();
    }

    // Step 4: Display Score Function
    function displayScore() {
      document.getElementById('score').innerText = score;
    }

    // Example usage
    // Call updateScore function whenever a player earns points
    updateScore(10); // Add 10 points to the score

    // Continue updating score throughout the game as needed
  </script>
```
### Engineering Design Process
For the EDP, I'm currently on number 7 which is "Improve as needed". I am still not sure how I would add the scoreboard into the game and make it user-interactive so that when the user wants to check their score, they can press a button and a dialog would pop out and it would display they current score for them. I did get to understand the basics and the fundamentals and structuring of my Beyond MVP (the score board) though.
### Skills
There are a total of 4 skills that I learned this week. Yes, I know. SO MANY. I was focusing on myself and what I wanted to accomplish this week and I learned that knowledge takes time, asking frequent questions isn't embarrassing. Don't tell anyone Mr.Mueller but I very much hated asking questions in class or when I'm struggling with something, I tend to just leave it alone until I get home and try to use all the available resources that I can find on the internet to resolve my problem but I recently learned that sometimes it's okay to not know something and it's okay to be laughed at for not knowing something. It's part of your path to success and you should never be afraid to know what you don't exactly have a clue about. The 2nd skill that I learned was DON'T PROCRASTINATE!!! THIS IS VERY ***IMPORTANT***! I was procrastinating my learning log and I MISSED ABOUT 3 OR 4 OF IT! (Mr.Mewller was not happi). The 3rd skill goes with the previous one and it's "Organize your code, organize your timing".Sometimes it seems very hard to have time for anything and I was completely in that phase, I didn't have time to do certain blogs and writeups BUT I used my notes app to help me distinguish the different things I need to do and how I could do them. The last but NOT least, HAVE FUN. Try to have fun with what you want to make, it's NOT the end of the world if your IDE crashes. That IS NORMAL! You're learning so don't be scared to break a few equipments(just not Mr.Muellers or he'll scream at you😫)
<br>
[Previous](entry03.md) | [Next](entry05.md)

[Home](../README.md)

