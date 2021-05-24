/* Some programming languages (like Python) include a "title" method to return a string with Every Word Capitalized (e.g. 'title case'.title() returns 'Title Case').  

JavaScript has no .title method, but that won't stop us!  Use the string methods you know to print 'Title Case' from 'title case'. */

let notTitle = 'title case';

let capTitle = notTitle.slice(0,1).toUpperCase();
let capCase = notTitle.slice(6,7).toUpperCase();

console.log(`${capTitle}itle ${capCase}ase`);
