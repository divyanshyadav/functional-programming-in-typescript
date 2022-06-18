import { MapFunction } from '../utils/functionalUtils'

export default class Container {
    value: any

    static of(value: any) {
        return new Container(value)
    }

    constructor(value: any) {
        this.value = value
    }

    map(fn: MapFunction) {
        return Container.of(fn(this.value))
    }
}
