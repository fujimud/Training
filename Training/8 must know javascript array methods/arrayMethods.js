const items = [
	{name: 'Bike', price: 100 },
	{name: 'TV', price: 200 },
	{name: 'Album', price: 10 },
	{name: 'Book', price: 5 },
	{name: 'Phone', price: 500 },
	{name: 'Computer', price: 1000 },
	{name: 'Keyboard', price: 25 }
]

//////////////////////////////////////////////////////
// filter returns name and price when it meets the condition
const filteredItems = items.filter((item) => {	
	return item.price <= 100
})


console.log('Filtered')
console.log(filteredItems)

//////////////////////////////////////////////////////
// returns all name values
const itemNames = items.map((item) => {
	return item.name
})
console.log('map all names')
console.log(itemNames)

//////////////////////////////////////////////////////
// return a match
const foundItem = items.find((item) => {
	return item.name === 'Album'
})
console.log('find an item for album')
console.log(foundItem)

//////////////////////////////////////////////////////
console.log('forEach: list each price')
items.forEach((item) => {
    
	console.log(item.price)
})

//////////////////////////////////////////////////////
//returns a true or false for the hole thing
const inexpensiveItems = items.some((item) => {
	return item.price <= 100
})
console.log('some: less or equal to 100')
console.log(inexpensiveItems)

//////////////////////////////////////////////////////

const total = items.reduce((currentTotal, item) => {
	return item.price + currentTotal
}, 0)
console.log('reduce: add all prices')
console.log(total)

/////////////////////////////////////////////////////
const includeItems = [1,2,3,4,5]


const includesTwo = includeItems.includes(2)
console.log('includes: does it contain 2')
console.log(includesTwo)

// returns a boolean of either true or false

