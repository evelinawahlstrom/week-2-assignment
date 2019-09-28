class ShoppingCart {
    constructor(itemName, quantity, pricePerUnit) {
        this.itemName = itemName
        this.quantity = quantity
        this.pricePerUnit = pricePerUnit
    }
    getItems() {
        return getItems([])
    }

    addItems() {
        if (getItems()) === (getItems([]))
        return itemName: "string", quantity: number, pricePerUnit: number
    }
    clearItems() {
        return delete.ShoppingCart

    }
}
}

const cart = new ShoppingCart {}


module.exports = { ShoppingCart }


/* 
2. Given a brand new instance of the class in a variable `cart`, calling 
`cart.getItems()` should return an empty array.
3. The class should have a method `cart.addItem(itemName, quantity, price)`
, which adds a new item to an internal array.
4. After adding items, a call to `cart.getItems()` 
should return an array that includes the added items.
5. Items in the array should be in this format:
    ```js
    {
      name: "Name of the item",
      quantity: 1,
      pricePerUnit: 99.99
    }
    ```
6.  Calling `cart.clear()` should remove all items 
from the items array. Meaning, the next call to `getItems()` 
should return an empty array.
7.  Calling `cart.total()` should return 
the total value of the shopping cart. Meaning, 
the sum of the cost of each cart item. The cost of each item is 
its `pricePerUnit` multiplied by the `quantity`. **Use `reduce`!**