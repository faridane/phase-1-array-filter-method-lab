
drivers.filter(function (findMatching) {
    return (findMatching == "Bobby")
  });

 

function findMatching(drivers) {
    const newCollection = [];
  
    for (const user of drivers) {
      if (user=="Bobby" || user =="bobby" || user=="") {
        newCollection.push(user);
        
      }
    }
  
    return newCollection;
  }


//   *****************************  fuzzyMatch  ***************************

  function fuzzyMatch(drivers) {
    const newCollection = [];
  
    for (const user of drivers) {
      if (user=="Sa") {
        newCollection.push(user);
        
      }
    }
  
    return newCollection;
  }

//   *************************   matchName   *****************************
function matchName(drivers) {
    const newCollection = [];
  
    for (const user of drivers) {
      if (user.name=="Bobby") {
        newCollection.push(user);
        
      }
    }
  
    return newCollection;
  }
const bluePenguinUsers = filter(drivers, function (user) {
    return user.name === "Bobby";
  });
  
  bluePenguinUsers;
  