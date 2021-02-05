let floors = 6; //how many floors

//buildTower(floors); //function call

//print the return using iteration method 😁

/** 
 * 😈 Introduce to you The evil javascript tower 😈
function recieves number of floors to build a tower
the function returns an array as the following

e.g.
*****[tower of 1 floor]*****
[
  '*'
]

*****[tower of 3 floors]*****
[
  '  *  ', 
  ' *** ', 
  '*****'
]
*****[tower of 6 floors]*****
[
  '     *     ', 
  '    ***    ', 
  '   *****   ', 
  '  *******  ', 
  ' ********* ', 
  '***********'
]
*/

function buildTower(nFloors) {
  
  const  tower=[];
 if(nFloors>1){
 for(let i=0;i<nFloors;i++){
  let space=" ";
  let star="*";
  space =space.repeat(nFloors-i-1);
   for(var j=1; j<= i; j++){
    star=star +"**"
  

   }
  
   tower.push("'"+space+star+space+"'")
   
  }
  } else {
    tower.push("*");

  }
 
return tower;
 
 
    
}

let output =buildTower(floors);
for(let i=0; i<output.length; i++){
   console.log(output[i]);
}



/// This is really challenging