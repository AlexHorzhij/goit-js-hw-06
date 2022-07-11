
// ====== Metod 1 =======

// const item = document.querySelectorAll('.item')
// const itemsList = document.querySelectorAll('.item > ul')
// const titles = document.querySelectorAll('.item > h2')

// function numberOfItems1() {
//     console.log("Number of categories:", item.length)
 
//     console.log(`Category: ${titles[0].textContent}`)
//     console.log(`Elements: ${itemsList[0].children.length}` )
    
//     console.log(`Category: ${titles[1].textContent}`)
//     console.log(`Elements: ${itemsList[1].children.length}` )
  
//     console.log(`Category: ${titles[2].textContent}`)
//     console.log(`Elements: ${itemsList[2].children.length}` )
// }

// numberOfItems1()


// ====== Metod 2 =======

const item = document.querySelectorAll('.item')

function numberOfItems2() {
    console.log("Number of categories:", item.length)
    
    item.forEach(el => {
        console.log(`Category: ${el.firstElementChild.textContent}`)
        console.log(`Elements: ${el.lastElementChild.children.length}`)

    })
}

numberOfItems2()

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5