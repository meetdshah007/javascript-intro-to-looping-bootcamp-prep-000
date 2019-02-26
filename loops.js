function forLoop(arr) {
  const len = arr.length;
  for(let i=0; i<len; i++){
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