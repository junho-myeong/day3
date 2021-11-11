const arr = [54,22,14,64,95,85]

// 평균 => 모든 점수의 합 / 개수

// 배열에서 루프를 돌리면 무조건 length 로 한다
let sum = 0
for (let i = 0; i < arr.length; i++) {
    // let sum = 0 이라고 하면 루프가 돌때마다 변수가 계속 생성 되는것이다.
    // 계속 써야 하는 변수는 밖에 , 잠깐 써야하는 변수는 {} 안에 사용한다.
    sum += arr[i]
    console.log(`sum : ${sum}`)
}
const average = (sum/arr.length).toFixed(3)
console.log(`평균은 : ${average}`)


// 최저 처음부터 터무니 없이 높은 점수 잡아 놓고 하는방법 , 가장 첫번째 점수 잡아 놓고 하는방법
let min = 101
for (let i = 0; i < arr.length; i++) {
    if(min > arr[i]){
        min = arr[i]
    }
}
console.log(min)
let min1 = 54
for (let i = 0; i < arr.length; i++) {
    min1 < arr[i] ? min1=min1 : min1=arr[i]
}

// 최고
let max = -1
for (let i = 0; i < arr.length; i++) {
    if(max < arr[i]){
        max = arr[i]
    }
}
console.log(`max 값은 :${max}`)
let max1 = 54
for (let i = 0; i < arr.length; i++) {
    max1 < arr[i] ? max1=arr[i] : max1=max1

}
console.log(`max1의 값은 : ${max1}`)


