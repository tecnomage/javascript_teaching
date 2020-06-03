// It's called making a closure. 
// Basically for each call of that colorGenerator function the vars local to 
// it will stay around and be represented in the call of the function it returns.

// See this:

function colorGenerator(color) {
    return function () { return color; };
}

// remember these are functions to be called, not the actual color names
var getRed = colorGenerator('red');
var getBlue = colorGenerator('blue');

// now each time we call the returned function of
// each, it will say the color we want
alert( getRed() + " and " + getBlue() ); // -> "red and blue"