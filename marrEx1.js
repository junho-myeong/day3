
// 다차원 배열이란 배열안에 배열이 들어가는것이다.
// 즉 리모컨 안에 리모컨이 또잇는것이다.
const arr = [ [1,2] , [3,4] ,[5,6]]
console.log(arr)
// 즉 밑에 경우는 점프를 두번 하는 경우이다.
console.log(arr[0][0])
// 배열 안에서 리모콘은 재할당 가능 바꿀수잇지만
// 단 배열 자체를 바꿀수는 없다
const arr1 = arr[0]
const arr2 = arr[1]

console.log(arr1)
console.log(arr1[0])

// 매월 매출 기록을 1~12월 까지 잡을껀데
// 아까 말했듯이 키벨류를 내가 정할수잇어서 1 월 2 월 .. 12월
// 다중 데이터를 넣을수잇다.

const value = [
    [90, 87, 140],
    [120,130,150],
    [180,240,200],
    [180,140,190]
]

console.log(value)

// 가장 매출이 좋았던 분기
// => 각 분기별 매출 평균 , 그리고 그 중에서 최대 평균을 찾느다

const parrAvg = []
for (let i = 0; i < value.length; i++) {
    let sum = 0
    for (let j = 0; j <value[i].length ; j++) {
        sum += value[i][j]
    }
    console.log(sum)
    const tempAvg = parseFloat(sum/value[i].length).toFixed(2)
    parrAvg[i] = tempAvg
}

console.log(parrAvg)

// 최고 매출 분기와 최저 매출 분기차
let max=105.67
let period = 0
for (let i = 0; i < parrAvg.length; i++) {
    if(parrAvg[i]>max) {
        max = parrAvg[i]
        period = (i+1)
    }
}

console.log(max)
console.log(period)




// 최고 매출 과 월

// 최저 매출과 월



// 우리가 하고싶은 일을 다른것에서 재사용 해서 사용하는 것을 함수라고 한다.

// 이런방식으로 표현하는것을 객체 literal 이라고 한다. 즉 객체 표현 방식이라고 말한다.
const arr10 = {
    name : '명준호',
    나이 : 28,
    사는곳 : '서울'
}
// 여기서 name 은 키 이고 '명준호'는 값이다

console.log(arr10.name)









