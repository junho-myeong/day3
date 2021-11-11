const arr = [4,3,2,21,58,79,46,558,776,443]

// 문자열로 취급 되어서 이상한 배열이 되는것이다.
console.log(arr.sort())

arr.sort((a,b) => a-b)
console.log(arr)
// sort lamda에 대해 공부하기






