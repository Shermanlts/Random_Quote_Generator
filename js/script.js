/*
Great Thinker Random quote generator.
*/
var timer = 1; //timer is used to refresh the page when idle.
var timeOut = 20; //how long the page will wait before refreshing


// 20 quotes used as source.
quotes = [
	{quote: 'I don\'t care that they stole my idea... I care that they don\'t have any of their own.',
	source: 'Nikola Tesla', bio: 'http://en.wikipedia.org/wiki/Nikola_Tesla'},
	{quote: 'It\'s not the love you make. It\'s the love you give.',
	source: 'Nikola Tesla', bio: 'http://en.wikipedia.org/wiki/Nikola_Tesla'},
	{quote: 'Of all things, I liked books best',
	source: 'Nikola Tesla', bio: 'http://en.wikipedia.org/wiki/Nikola_Tesla'},
	{quote: 'Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former.',
	source: 'Albert Einstein', bio: 'http://en.wikipedia.org/wiki/Albert_Einstein'},
	{quote: 'The difference between stupidity and genius is that genius has its limits.',
	source: 'Albert Einstein', bio: 'http://en.wikipedia.org/wiki/Albert_Einstein'},
	{quote: 'Intellectuals solve problems, geniuses prevent them.',
	source: 'Albert Einstein', bio: 'http://en.wikipedia.org/wiki/Albert_Einstein'},
	{quote: 'Education is what remains after one has forgotten what one has learned in school.',
	source: 'Albert Einstein', bio: 'http://en.wikipedia.org/wiki/Albert_Einstein'},
	{quote: 'No man should escape our universities without knowing how little he knows.',
	source: 'J. Robert Oppenheimer', bio: 'http://en.wikipedia.org/wiki/J._Robert_Oppenheimer'},
	{quote: 'The optimist thinks this is the best of all possible worlds. The pessimist fears it is true.',
	source: 'J. Robert Oppenheimer', bio: 'http://en.wikipedia.org/wiki/J._Robert_Oppenheimer'},
	{quote: 'There is no great genius without some touch of madness.',
	source: 'Aristotle', bio: 'http://en.wikipedia.org/wiki/Aristotle'},
	{quote: 'It is the mark of an educated mind to be able to entertain a thought without accepting it.',
	source: 'Aristotle', bio: 'http://en.wikipedia.org/wiki/Aristotle'},
	{quote: 'I know that I am intelligent because I know that I know nothing.',
	source: 'Socrates', bio: 'http://en.wikipedia.org/wiki/Socrates'},
	{quote: 'I was really too honest a man to be a politican and live.',
	source: 'Socrates', bio: 'http://en.wikipedia.org/wiki/Socrates'},
	{quote: 'Our greatest glory is not in never falling, but in rising every time we fall.',
	source: 'Confucius', bio: 'http://en.wikipedia.org/wiki/Confucius'},
	{quote: 'The superior man understands what is right; the inferior man understands what will sell.',
	source: 'Confucius', bio: 'http://en.wikipedia.org/wiki/Confucius'},
	{quote: 'That which does not kill us makes us stronger.',
	source: 'Friedrich Nietzsche', bio: 'http://en.wikipedia.org/wiki/Friedrich_Nietzsche'},
	{quote: 'History repeats itself, first as tragedy, second as farce.',
	source: 'Karl Marx', bio: 'http://en.wikipedia.org/wiki/Karl_Marx'},
	{quote: 'Intelligence is the ability to adapt to change.',
	source: 'Stephen Hawking', bio: 'http://en.wikipedia.org/wiki/Stephen_Hawking'},
	{quote: 'Life would be tragic if it weren\'t funny.',
	source: 'Stephen Hawking', bio: 'http://en.wikipedia.org/wiki/Stephen_Hawking'},
	{quote: 'Scientists have become the bearers of the torch of discovery in our quest for knowledge.',
	source: 'Stephen Hawking', bio: 'http://en.wikipedia.org/wiki/Stephen_Hawking'}
];

// quotesHolder holds the current list of available quotes without modifying the original
var quotesHolder = quotes.slice();

// Returns a random number(0-(num-1))
function getRandom(num) {
	var choice = Math.floor(Math.random() * num);
	return choice
}


// Create the getRandomQuuote function and name it getRandomQuote
function getRandomQuote() {
	var selection
	console.log(quotesHolder.length);
	//Checks if any quotes are remaining and if not refills the list
	if (quotesHolder.length === 0) {
		quotesHolder = quotes.slice();
		selection = getRandom(quotesHolder.length);
	} 
	else if (quotesHolder.length === 1) {
		selection = 0
	} 
	else {
		selection = getRandom(quotesHolder.length);
	}
	//stores quote and then removes it from the list
	var selectedQuote = quotesHolder[selection]
	quotesHolder.splice(selection, 1)
	return selectedQuote
}


// Create the printQuote funtion and name it printQuote
function printQuote() {
	timer = 1 //resets timer after selection
	var quote = getRandomQuote();
	var location = document.getElementById('quote-box');
	var message = '<p class="quote">' + quote.quote + '</p>';
	message = message + '<p class="source">' + quote.source;
	message = message + '<span class="link"><a href=' + quote.bio + ' target="_blank">Bio</a></span></p>';
	location.innerHTML = message
}


function idleTimer() {
	if ( timer >= timeOut) {
		printQuote();
		timer = 1;
	}
	else {
		timer += 1;
	}
}

setInterval(idleTimer, 1000);

//Resets quote at each restart
printQuote();

// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);