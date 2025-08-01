const sentence = 'I am studying at CSE';
//const result reverse

let reverse = ''
for(const letter of sentence)
{
    reverse = letter + reverse;
}
console.log(reverse);

// shortcut reverse
const reversed = sentence.split('').reverse().join('');
console.log(reversed);