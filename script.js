var display =document.querySelector('.quotedisplay');
var btn= document.querySelector('.gt');



var quotes =['"The time is nowStop hitting the snooze button on your life." - Mel Robbins',
    '"Become addicted to constant and never-ending self-improvement." - Anthony JD\’Angelo',
    '"Those who seek a better life must first become a better person." - Jim Rohn',
    '"When we strive to become better than we are, everything around us becomes better too." - Paulo Coelho',
    '"You are essentially who you create yourself to be, and all that occurs in your life is the result of your own making"  - Stephen Richards',
'"There is nothing noble in being superior to your fellow man; true nobility is being superior to your former self"- Ernest Hemingway',
'"Those who cannot change their minds cannot change anything.― George Bernard Shaw"','"Make the most of yourself....for that is all there is of you.”― Ralph Waldo Emerson',
'"Once we accept our limits, we go beyond them.― Albert Einstein"','“No matter who you are, no matter what you did, no matter where you\'ve come from, you can always change, become a better version of yourself.”― Madonna','“Formal education will make you a living; self-education will make you a fortune.”― Jim Rohn'];

btn.addEventListener('click',()=>{
    var RandomNumber =Math.floor(Math.random()*(quotes.length));
   
    display.innerHTML=quotes[RandomNumber];

});
