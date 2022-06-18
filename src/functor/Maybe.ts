import { MapFunction } from '../utils/functionalUtils'
import Container from './Container'

export default class Maybe extends Container {
    isNothing() {
        return this.value === undefined || this.value === null
    }

    map(fn: MapFunction) {
        if (this.isNothing()) return this
        return new Maybe(fn(this.value))
    }
}
