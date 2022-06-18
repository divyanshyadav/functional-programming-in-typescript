import { MapFunction } from '../utils/functionalUtils'

export default class Maybe {
    value: any

    static of(value: any) {
        return new Maybe(value)
    }

    constructor(value: any) {
        this.value = value
    }

    isNothing() {
        return this.value === undefined || this.value === null
    }

    map(fn: MapFunction) {
        if (this.isNothing()) return this
        return Maybe.of(fn(this.value))
    }
}
