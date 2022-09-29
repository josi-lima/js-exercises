// ================ Challenge JavaScript#30- Array Cardio #DAY-1 💪 ======================================

// Some data to work with

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
  'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
  'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
  'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
  'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
  'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

// ================================================================================

// Array.prototype.filter()

// 🚀 EXERCISE 1: Filter the list of inventors for those who were born in the 1500s.

const aFifteen = inventors.filter(function (inventor) {
  if (inventor.year >= 1500 && inventor.year < 1600) {
    return true;
  }
});
console.table(aFifteen);

// Shorter version ===========================

const bFifteen = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
console.table(bFifteen);

/*
┌─────────┬────────────┬───────────┬──────┬────────┐
│ (index) │   first    │   last    │ year │ passed │
├─────────┼────────────┼───────────┼──────┼────────┤
│    0    │ 'Galileo'  │ 'Galilei' │ 1564 │  1642  │
│    1    │ 'Johannes' │ 'Kepler'  │ 1571 │  1630  │
└─────────┴────────────┴───────────┴──────┴────────┘
*/
// =================================================================================
console.log('');

// Array.prototype.map()

// 🚀 EXERCISE 2: Give us an array of the inventors first and last names.

const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.log(fullNames);

/* [
  'Albert Einstein',
  'Isaac Newton',
  'Galileo Galilei',
  'Marie Curie',
  'Johannes Kepler',
  'Nicolaus Copernicus',
  'Max Planck',
  'Katherine Blodgett',
  'Ada Lovelace',
  'Sarah E. Goode',
  'Lise Meitner',
  'Hanna Hammarström'
] */

// =================================================================================
console.log('');

// Array.prototype.sort()

// 🚀 EXERCISE 3: Sort the inventors by birthdate, oldest to youngest.

const orderedList = inventors.sort(function (personA, personB) {
  if (personA.year > personB.year) {
    return 1;
  }
  return -1;
});
console.table(orderedList)

// Shorter version ===========================

const ordered = inventors.sort((personA, personB) => personA.year > personB.year ? 1 : -1);

console.table(ordered)

/*
┌─────────┬─────────────┬───────────────┬──────┬────────┐
│ (index) │    first    │     last      │ year │ passed │
├─────────┼─────────────┼───────────────┼──────┼────────┤
│    0    │ 'Nicolaus'  │ 'Copernicus'  │ 1473 │  1543  │
│    1    │  'Galileo'  │   'Galilei'   │ 1564 │  1642  │
│    2    │ 'Johannes'  │   'Kepler'    │ 1571 │  1630  │
│    3    │   'Isaac'   │   'Newton'    │ 1643 │  1727  │
│    4    │    'Ada'    │  'Lovelace'   │ 1815 │  1852  │
│    5    │   'Hanna'   │ 'Hammarström' │ 1829 │  1909  │
│    6    │ 'Sarah E.'  │    'Goode'    │ 1855 │  1905  │
│    7    │    'Max'    │   'Planck'    │ 1858 │  1947  │
│    8    │   'Marie'   │    'Curie'    │ 1867 │  1934  │
│    9    │   'Lise'    │   'Meitner'   │ 1878 │  1968  │
│   10    │  'Albert'   │  'Einstein'   │ 1879 │  1955  │
│   11    │ 'Katherine' │  'Blodgett'   │ 1898 │  1979  │
└─────────┴─────────────┴───────────────┴──────┴────────┘
*/

// =================================================================================
console.log('');

// Array.prototype.reduce()

// 🚀 EXERCISE 4: How many years did the inventors live all together?

const allYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year)
}, 0); 
// 0 is the initial value
console.log(`The inventors lived ${allYears} years altogether.`); // 861

// Longer version ===========================

function findTotalYears() {
  let totalYears = 0;

  for (let index = 0; index < inventors.length; index += 1) {
  totalYears += (inventors[index].passed - inventors[index].year);
  }
  return totalYears;
}
console.log(`The total amount of time they lived is ${findTotalYears()} years.`); // 861

// =================================================================================
console.log('');

// Array.prototype.sort()

// 🚀 EXERCISE 5: Sort the inventors by years lived, starting with the person who lived the most on the top.

const oldest = inventors.sort((personA, personB) => {
  const lastPerson = personA.passed - personA.year;
  const nextPerson = personB.passed - personB.year;
  return lastPerson > nextPerson ? -1 : 1;
});

console.table(oldest);

/*
┌─────────┬─────────────┬───────────────┬──────┬────────┐
│ (index) │    first    │     last      │ year │ passed │
├─────────┼─────────────┼───────────────┼──────┼────────┤
│    0    │   'Lise'    │   'Meitner'   │ 1878 │  1968  │
│    1    │    'Max'    │   'Planck'    │ 1858 │  1947  │
│    2    │   'Isaac'   │   'Newton'    │ 1643 │  1727  │
│    3    │ 'Katherine' │  'Blodgett'   │ 1898 │  1979  │
│    4    │   'Hanna'   │ 'Hammarström' │ 1829 │  1909  │
│    5    │  'Galileo'  │   'Galilei'   │ 1564 │  1642  │
│    6    │  'Albert'   │  'Einstein'   │ 1879 │  1955  │
│    7    │ 'Nicolaus'  │ 'Copernicus'  │ 1473 │  1543  │
│    8    │   'Marie'   │    'Curie'    │ 1867 │  1934  │
│    9    │ 'Johannes'  │   'Kepler'    │ 1571 │  1630  │
│   10    │ 'Sarah E.'  │    'Goode'    │ 1855 │  1905  │
│   11    │    'Ada'    │  'Lovelace'   │ 1815 │  1852  │
└─────────┴─────────────┴───────────────┴──────┴────────┘
*/

// =================================================================================
console.log('');

// Array.prototype.includes()

// 🚀 EXERCISE 6: Create a list of Boulevards in Paris that contain 'de' anywhere in the name.

// Intructions: to test the code, go to this website, open the console and type the code there.
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

/*
const category = document.querySelector('.mw-category');
const links = Array.from(category.querySelectorAll('a'));
const de = links.map(link => link.textContent).filter(streetName => streetName.includes('de'));
*/
// =================================================================================
console.log('');

// Array.prototype.sort()

// 🚀 EXERCISE 7: Sort the people alphabetically by last names.

const alpha = people.sort(function(lastOne, nextOne) {
  const [aLast] = lastOne.split(', ');
  const [bLast] = nextOne.split(', ');
  return aLast > bLast ? 1 : -1;
});
console.table(alpha);

/*
┌─────────┬───────────────────────┐
│ (index) │        Values         │
├─────────┼───────────────────────┤
│    0    │     'Beck, Glenn'     │
│    1    │    'Becker, Carl'     │
│    2    │   'Beckett, Samuel'   │
│    3    │    'Beddoes, Mick'    │
│    4    │   'Beecher, Henry'    │
│    5    │  'Beethoven, Ludwig'  │
│    6    │   'Begin, Menachem'   │
│    7    │   'Belloc, Hilaire'   │
│    8    │    'Bellow, Saul'     │
│    9    │  'Ben-Gurion, David'  │
│   10    │  'Benchley, Robert'   │
│   11    │   'Benenson, Peter'   │
│   12    │  'Benjamin, Walter'   │
│   13    │     'Benn, Tony'      │
│   14    │ 'Bennington, Chester' │
│   15    │    'Benson, Leana'    │
│   16    │     'Bent, Silas'     │
│   17    │   'Bentsen, Lloyd'    │
│   18    │     'Berger, Ric'     │
│   19    │   'Bergman, Ingmar'   │
│   20    │   'Berio, Luciano'    │
│   21    │    'Berle, Milton'    │
│   22    │   'Berlin, Irving'    │
│   23    │     'Berne, Eric'     │
│   24    │  'Bernhard, Sandra'   │
│   25    │     'Berra, Yogi'     │
│   26    │   'Berry, Wendell'    │
│   27    │    'Berry, Halle'     │
│   28    │    'Bethea, Erin'     │
│   29    │   'Bevan, Aneurin'    │
│   30    │     'Bevel, Ken'      │
│   31    │    'Biden, Joseph'    │
│   32    │   'Bierce, Ambrose'   │
│   33    │     'Biko, Steve'     │
│   34    │   'Billings, Josh'    │
│   35    │    'Biondo, Frank'    │
│   36    │ 'Birrell, Augustine'  │
│   37    │     'Black, Elk'      │
│   38    │     'Blair, Tony'     │
│   39    │    'Blair, Robert'    │
│   40    │   'Blake, William'    │
└─────────┴───────────────────────┘

*/

// =================================================================================
console.log('');

// Array.prototype.reduce()

// 🚀 EXERCISE 8: // Sum up the instances of each of these items from the array.

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
