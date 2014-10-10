// Create and name the variable.
// Tell the interpreter it is an array.
// Assign values inside the parentheses.
var colors = new Array('white', 
						'black',
						'custom');
// Show the first item from the array.
var el = document.getElementById('colors');
el.textContent = colors[0];

// Note: textContent does not work in IE8 or earlier - would need to use innerHTML