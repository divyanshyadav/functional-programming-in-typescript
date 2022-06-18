export default class Container {
    value: any

    constructor(value: any) {
        this.value = value
    }

    static of(value: any) {
        return new Container(value)
    }

    map(fn: (a: any) => any) {
        return Container.of(fn(this.value))
    }
}
