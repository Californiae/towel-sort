
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let n=[]
  if (matrix==undefined) {return n}
  
  // matrix.forEach(el => {
let bb=[]
    for (i=1 ; i<=matrix.length; i++){
      if ( i%2 === 0 ) {bb=matrix[i-1].reverse()}
        // .reverse()}
      else {bb=matrix[i-1]}
      // console.log( matrix[i-1]);
      n=[...n,...bb]   
  };
  
  return n;
}
