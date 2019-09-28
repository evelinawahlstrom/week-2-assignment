const groupAdultsByAgeRange = ([{}]) => {
        const grouping = groupAdultsByAgeRange()





        module.exports = { groupAdultsByAgeRange }

        //`20 and younger`, `21-30`, `31-40`, 41-50`, `51 and older`



        /*
        1.  The function will be called with an array of objects as its argument.
         The objects represent people, with a property `name` and a property `age`.
          Your function should group each person **over the age of 18** into age ranges.
           Here are a few examples:
            ```js
        // Example 1
            groupAdultsByAgeRange([{name: "Henry", age: 9}, {name: "John", age: 20}])
            // Should result in:
            const result = { '20 and younger': [ { name: 'John', age: 20 } ] }

            // Example 2
            groupAdultsByAgeRange([{name: "Anna", age: 31}, {name: "John", age: 32}, 
            {name: "Hank", age: 60}])
            // Should result in:
            const result2 = { 
              '31-40': [ { name: 'Anna', age: 31 }, { name: 'John', age: 32 } ],
              '51 and older': [ { name: 'Hank', age: 60 } ] 
            }
            ```
        1. Notice that the groups are only added to the resulting object if 
        they are not empty. Make sure your function does the same.
        1. You should use a combination of `filter` and `reduce`. 
        If your solution uses `for`-loops instead of `reduce` for creating 
        the **final object**, you will receive partial points. 
        The use of `for`-loops is allowed, but try to construct 
        the returned "grouping" object using `reduce`.
        1. These are the groups that your code needs to return.
         Use the text as the name of the property:
            - `20 and younger`
            - `21-30`
            - `31-40`
            - `41-50`
            - `51 and older` */