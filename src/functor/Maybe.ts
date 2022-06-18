import { MapFunction } from '../utils/functionalUtils'
import Container from './Container'

export default class Maybe extends Container {
    isNothing() {
        return [undefined, null].includes(this.value)
    }

    map(fn: MapFunction) {
        return this.isNothing() ? this : new Maybe(fn(this.value))
    }
}
