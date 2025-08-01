const address = 'andorkilla';
const part = address.slice(2,5);
// console.log(part);


const sentence = 'I am a student of CSE';
// console.log(sentence.split(' '));
// console.log(sentence.split('a'));


const friendsStr = 'Rahim, Karim, bahin, gybb,ugd';
const friends = friendsStr.split(',');
// console.log(friends);


const realFriend = ['Rahim', 'Karim', 'bahin', 'gybb', 'ugd'];
console.log(realFriend.join());
console.log(realFriend.join('|'));
console.log(realFriend.join('-'));
