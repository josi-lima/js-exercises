// ================ Challenge JavaScript#30- Array Cardio #DAY-2 💪 ======================================

// Some data to work with

const people = [
      { name: 'Wes', year: 1988 },
      { name: 'Kait', year: 1986 },
      { name: 'Irv', year: 1970 },
      { name: 'Lux', year: 2015 }
    ];

    const comments = [
      { text: 'Love this!', id: 523423 },
      { text: 'Super good', id: 823423 },
      { text: 'You are the best', id: 2039842 },
      { text: 'Ramen is my fav food ever', id: 123523 },
      { text: 'Nice Nice Nice!', id: 542328 }
    ];
    
    // ================================================================================
    
    // Array.prototype.some() 
    // 🚀 EXERCISE 1: Check if at least one person is 19 or older.
    
    // First solution ========================
    const isOlder = people.some(person => {
        if (2022 - person.year >= 19) {
            return true;
        }
    });
    console.log(isOlder); // true

    // Second solution ========================
    const isAdult = people.some(function (person) {
    const currentYear = (new Date()).getFullYear();
    if (currentYear - person.year >= 19) {
      return true;
    }
    });
   console.log(isAdult); //true

    // Shorter solution ========================
    const isYoungAdult = people.some(person => {
    const currentYear = (new Date()).getFullYear();
    return currentYear - person.year >= 19;     
    });
    console.log(isYoungAdult); //true

    // Shortest solution ========================
    const isOlder19 = people.some(person => ((new Date()).getFullYear()) - person.year >= 19);
    console.log(isOlder19); //true

    // ================================================================================

    // Array.prototype.every() 
    // 🚀 EXERCISE 2: Check if everyone is 19 or older.

    const allAdults = people.every(person => ((new Date()).getFullYear()) - person.year >= 19);
    console.log(allAdults); //false
        

    // Array.prototype.find() --> .find() is like .filter(), but instead it returns just the first element that matches what you're looking for.
    // 🚀 EXERCISE 3: Find the comment with the ID of 823423.

    const rightComment = comments.find(function (comment) {
    if (comment.id === 823423) {
      return true;
    }
    });
    console.log(rightComment); // { text: 'Super good', id: 823423 }
  
    // Shorter solution ========================
    const findComment = comments.find(comment => comment.id === 823423);
    console.log(findComment);

   // ================================================================================
        

    // Array.prototype.findIndex()
    // 🚀 EXERCISE 4: Find the comment with this same ID (823423).
    
    
     // Array.prototype.findIndex()
    // 🚀 EXERCISE 5: Delete the comment with the ID of 823423.
    
