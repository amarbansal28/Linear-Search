function linearSearch(arr,ele){
  for(let i = 0 ; i < arr.length ; i++){
      if(ele === arr[i]){
          return `element found at ${i+1}`;   
      }
  }
  return "element not found";
}

console.log(linearSearch([1,9,3,6,7,5,8],7))
