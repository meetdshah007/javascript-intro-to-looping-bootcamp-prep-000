function forLoop(arr) {
  const len = arr.length;
  arr.push("I am a strange loop.");
  for(let i=0; i<len; i++) {
    arr.push(`I am ${i} strange loop${i===0 ? '' : 's'}.`);
  }
  console.log(arr);
  return arr;
}

function whileLoop(n) {
  while(n>0){
    console.log(`Count${n}`);
    n--;
  }
  return "done";
}

function doWhileLoop(num) {
  do {
    console.log(`I run once regardless.`)
    num--;
  }while(num > 0)
}