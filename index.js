// The functions will modify the array below. Leave it as is.
let supplyList = ["Pencils", "Erasers"];

// 1. Modularize the following code examples into a new function called addItems
// This function should take in a new item as an input, add it to the supplyList array, console log the added item, and then return the new item
function addItems(newItem){
supplyList.push(newItem)
console.log(newItem)
return newItem
}
// Code to Modularize
// let newItem1 = "Markers"
// supplyList.push(newItem1)
// console.log(newItem1 + " added to list.")

// let newItem2 = "Tape"
// supplyList.push(newItem2)
// console.log(newItem2 + " added to list.")


// 2. Call your addItems function with "Markers" as an input. 
addItems("Markers")

// 3. Call your addItems function with "Tape" as an input
addItems("Tape")
// 4. Call your addItems function with "Glue" as an input
addItems("Glue")
console.log(supplyList)
// 5. Write a function called remainingItems to log how many items are in the list.
// Log: "The supply list has x item(s)." x being the amount of items. 
// The function should return supplyList's length
function remainingItems(){
console.log("The supply list has " + supplyList.length + " item(s).")
}

// 6. Call your remainingItems function.
remainingItems()

