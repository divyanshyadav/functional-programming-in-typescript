import { MapFunction, Mappable } from '../utils/functionalUtils'

export default class Container implements Mappable {
    value: any

    constructor(value: any) {
        this.value = value
    }

    map(fn: MapFunction) {
        return new Container(fn(this.value))
    }
}
