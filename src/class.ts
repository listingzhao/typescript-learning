class Dog {
  constructor(name: string) {
    this.name = name
  }
  name: string
  run() {}
  private pri() {}
  protected pro() {}
  readonly legs: number = 4
  static food: string = 'bones'
}

console.log(Dog.prototype)
let dog = new Dog('wangwang')
console.log(dog)
console.log(Dog.food)

class Husky extends Dog {
  constructor(name: string, public color: string) {
    super(name)
    this.color = color
    this.pro()
  }
}

console.log(Husky.food)
