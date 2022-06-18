import { add } from '../utils/mathUtils'
import { prop } from '../utils/objectUtils'
import { match } from '../utils/stringUtils'
import Maybe from './Maybe'

describe('Maybe', () => {
    it('should return the same container if value is null', () => {
        const container = Maybe.of(null)
        expect(container.map(a => a)).toBe(container)
    })

    it('should return the same container if value is null', () => {
        const container = Maybe.of(undefined)
        expect(container.map(a => a)).toBe(container)
    })

    it('should return new container if value is not null or undefined', () => {
        const container = Maybe.of(1)
        expect(container.map(a => a)).not.toBe(container)
        expect(container.map(a => a) instanceof Maybe).toBe(true)
    })

    it('should return true if value is matched', () => {
        const container = Maybe.of('hello')
        expect(container.map(match(/h/g)).value).toEqual(['h'])
    })

    it("should return empty container if value doesn't matched", () => {
        const container = Maybe.of('hello')
        const emptyContainer = container.map(match(/a/g))
        expect(emptyContainer.isNothing()).toEqual(true)
        expect(emptyContainer.map(a => a)).toEqual(emptyContainer)
    })

    it('should return empty container if prop not on object', () => {
        const container = Maybe.of({ name: 'red' })
        const emptyContainer = container
            .map(prop('age'))
            .map(add(10))
            .map(add(20))
        expect(emptyContainer.isNothing()).toEqual(true)
    })

    it('should not return empty container if prop on object', () => {
        const container = Maybe.of({ name: 'red', age: 10 })
        const newContainer = container
            .map(prop('age'))
            .map(add(10))
            .map(add(10))
        expect(newContainer.isNothing()).toEqual(false)
        expect(newContainer.value).toEqual(30)
    })
})
