enum Role {
  Reporter = 1,
  Developer,
  Maintainer,
  Owner,
  Guest
}

console.log(Role)

// 字符串枚举
enum Message {
  Success = '恭喜你，成功了',
  Fail = '抱歉，失败了'
}

console.log(Message)

// 异构枚举
enum Answer {
  N,
  Y = 'Yes'
}

console.log('====================================')
console.log(Answer)
console.log('====================================')

enum Char {
  // const
  a,
  b = Char.a,
  c = 1 + 3,
  d = Math.random(),
  e = '123'.length
}

console.log(Char)

const enum Month {
  Jan,
  Feb,
  Mar
}

let month = [Month.Jan, Month.Feb, Month.Mar]

console.log(month)

// 枚举类型
enum E {
  a,
  b
}
enum F {
  a = 0,
  b = 1
}
enum G {
  a = 'apple',
  b = 'banana'
}

let e: E = 3
let f: F = 3
// e === f

let e1: E.a = 1
let e2: E.b
// e1 === e2
let e3: E.a = 3
e1 === e3

let g1: G = G.b
let g2: G.a = G.a

// 对象属性
interface List {
  readonly id: number
  name: string
  age?: number
}

interface Result {
  data: List[]
}

function render(result: Result) {
  result.data.forEach(value => {
    console.log(value.id, value.name)
    if (value.age) {
      console.log(value.age)
    }
    // value.id++
  })
}

let result = {
  data: [{ id: 1, name: 'A', sex: 'male' }, { id: 2, name: 'B' }]
}

render(result)

interface StringArray {
  [index: number]: string
}

let chars: StringArray = ['A', 'B']

interface Names {
  [x: string]: any
  [z: number]: number
}
