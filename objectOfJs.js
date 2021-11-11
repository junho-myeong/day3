// A(3,10) B(7,6) C(3,2) D(6,2)

const pointArr = [
    {name : 'A', xPos : 3, yPos : 10},
    {name : 'B', xPos : 7, yPos : 6},
    {name : 'C', xPos : 3, yPos : 2},
    {name : 'D', xPos : 6, yPos : 2}
]

console.log(pointArr[0].name)

// for (let i = 0; i < pointArr.length; i++) {
//     const point = pointArr[i]
//     console.log(point)
// }


// 맛집 찾기 프로젝트 가장 가까운 거리와 가장 먼곳 찾아 보기

const target = {
    xPos : 6,
    yPos : 3
}

// 가장 가까운 거리를 배열로 잡아주는 프로그램
pointArr.sort((a , b) => {
    const distanceA = Math.sqrt(
       Math.pow(a.xPos-target.xPos, 2) +
         Math.pow(a.yPos-target.yPos,2))
    const distanceB = Math.sqrt(
        Math.pow(b.xPos-target.xPos, 2) +
        Math.pow(b.yPos-target.yPos,2))
    return distanceA-distanceB
})

console.log(pointArr)



//
// for (const pointArrElement of pointArr) {
//     console.log(pointArrElement)
//
// //  target 과 pointArrElement 의 거리 계산
//     const distance = Math.sqrt(
//         Math.pow( pointArrElement.xPos-target.xPos, 2) +
//         Math.pow(pointArrElement.yPos-target.yPos,2))
//     console.log(distance)
// }












