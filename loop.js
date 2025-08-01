const mobile = {
    brand : 'apple',
    model : 'iphone 13',
    ram: '4gb',
    Storage : '120GB',
    price : 88000,
    color: 'purple'

}

// for of: array
// for in : object

for(const prop in mobile)
{
    console.log(prop)
    console.log(mobile[prop])
}