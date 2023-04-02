// Code your solution here

//  filter method

const findMatching = (names, string) => {
   return names.filter(names => names.toUpperCase() === string.toUpperCase());
}

const fuzzyMatch = (name, string) => {
   return name.filter(name=> name.charAt(0) === string.charAt(0))
}

const matchName = (name, hometown)=> {
    return name.filter(name => name.name === hometown);
}


//   loops method

// function findMatching(name, string){
//     const match = [];
//     for(const drivers of name){
//         if(drivers === name || drivers.toUpperCase() === string.toUpperCase()){
//             match.push(drivers)
//         }
//     }
//     return match;
// }

// function fuzzyMatch(names, string){
//     const driverMatch = [];
//     for (const drivers of names){
//         if(drivers[0] === string[0] && drivers[1] === string[1]){
//             driverMatch.push(drivers)
//         }
//     } return driverMatch;
// }


// function matchName (names, hometown){
//    const driverMatch = [];
//    for (const drivers of names){
//       if(drivers.name === hometown){
//          driverMatch.push(drivers);

//       }
//    } return driverMatch;
// }