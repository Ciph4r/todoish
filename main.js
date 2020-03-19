// Make your global todos array here.
const todo = []
// Put a few todos in there to start with!
// This is mostly to give us some data to test our functions with.
todo.push('eat','sleep','repeat')

// Now test it here just by console.logging a particular todo index.
// console.log(todo[1])

// Next: a function that prints a todo.
// For now, just have this function console log the value passed in!
// (We'll expand this helper later.)

const printTodo = (item) => {
    console.log(todo[item])
}

// Below, call your printTodo with a value of any kind. All it will do is console.log it,
// but soon we'll do more with it!
printTodo(0)
// Now write a function that prints everything on our todo list, INDIVIDUALLY.
// Make SURE to use the above printTodo function!
const printAll = () => {
    printTodo(0)
    printTodo(1)
    printTodo(2)
}

//Now test it out by calling your print-everything function. It should print out each item from your todo list array.
printAll()

// Now please write a function that adds an item to our todo list.
// Could add it anywhere! We'll talk about where it should be added eventually.
const addItem = (item) => {
    todo.push(item)
}

// Test the above function by calling it with a value,
// then calling your print-everything function and making sure it's in there.
addItem('pizza')

// Now write a function that removes an item at a given index from our todo list.
const removeItem = (item) =>{
todo.splice(item,1)
}

// Test the above function by passing it an index, then calling our print-everything
// function to see if the correct thing was removed.
removeItem(0)
printAll()
// Lastly: write a function that clears all items from our array.
const emptyArray = () =>{
    todo.splice(0)
}

// Test it by calling it and then calling your print-everything function.
// Nothing should print because the array should be empty now
emptyArray()
// const body = document.querySelector('body')
// const ul = document.createElement('ul').append.body




// const newLi = () => {
//     let ulitem = document.querySelector('ul')
//     let x = document.createElement('li')
//     ulitem.appendChild('x')
// }


