function forLoop(arr) {
  for(let i=0; i<arr.length; i++){
    arr.push(`I am ${i} strange loop${i === 0 ? '' : 's'}.`);
  }
  return arr;
}

function whileLoop(n) {
  while(n>=0){
    console.log(`Count${n}`);
    n--;
  }
}

function doWhileLoop(num) {
  do {
    console.log(`I run once regardless.`)
    num--;
  }while(num > 0)
}