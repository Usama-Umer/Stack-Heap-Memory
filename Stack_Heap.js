// The stack and the heap. These memory regions are used differently and serve distinct purposes in handling data.

// 1=> Stack Memory

//     The stack is a region of memory that stores primitives (e.g., numbers, strings, booleans, null, undefined, and symbols) and references to objects.
//     It operates in a Last In, First Out (LIFO) manner, making it very fast to allocate and deallocate memory.
//     Function calls, local variables, and function arguments are stored on the stack. When a function is called, a new stack frame is created for it, and when the function completes, the stack frame is popped off.
//     The stack has a limited size, so it’s mainly used for smaller, short-lived data.

// Example 

let FirstName = "Usama"
let anotherName = FirstName ;
anotherName = "Umer"

console.log(anotherName);
console.log(FirstName);

// ++++++++++++++++++++++++++++++++++++++++++

// 2=> Heap Memory

//     The heap is a larger, dynamically allocated region of memory used for storing objects, arrays, and functions.
//     When a complex data structure (like an object or array) is created, it’s allocated in the heap, and a reference to this object is stored on the stack.
//     The heap is not managed in a LIFO way, so data here can be stored and freed up at any time. However, accessing data in the heap is slower than accessing it in the stack.
//     JavaScript’s garbage collector manages memory in the heap. It identifies which objects are no longer needed and automatically frees up space, reducing the likelihood of memory leaks.


let Userone = {
    Name : "Usama" ,
    Email : "usama@gmail.com"
}

let Usertwo = {
    Name : "Umer" ,
    Email : "umer@gmail.com"
}

 Usertwo = Userone ;

 Usertwo.Email = "usama@gmail.com"
 console.log(Userone.Email);
 console.log(Usertwo.Email);


// 3=> Stack and Heap Interaction

// When a variable is assigned a primitive value, it’s stored directly in the stack. When a variable holds an object, the reference to that object is stored on the stack, while the actual object itself is stored in the heap. This separation is important to understand because variables assigned to objects in JavaScript are references, not actual copies.
 
 



