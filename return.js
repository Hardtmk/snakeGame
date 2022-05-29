
const arr=['孫悟空','豬八戒','沙和尚']

const arr1=['孫悟空','豬八戒','沙和尚']
const arr2=['apple','orange','banna']
const arr3=['apples','oranges','bannas']
function returning(){

 for(var i =0; i<arr1.length; i++){
  if(arr.includes(arr1[i])){
   return true
  }
  if(arr.includes(arr2[i])){
   return true
  }
 }
 return false

}
// 也就是說只要其中一個是true的話,結果就會返回true
console.log(returning())