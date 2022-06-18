import { MapFunction } from '../utils/functionalUtils'
import Container from './Container'

export default class Maybe extends Container {
    isNothing() {
        return this.value === undefined || this.value === null
    }

    map(fn: MapFunction) {
        return this.isNothing() ? this : new Maybe(fn(this.value))
    }
}
