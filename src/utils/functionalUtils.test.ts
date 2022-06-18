import { compose, map } from './functionalUtils'
import { add } from './mathUtils'
import { prop } from './objectUtils'

describe('functional Utils', () => {
    it('should map over an array', () => {
        expect(map(add(10))([1, 2, 3])).toEqual([11, 12, 13])
    })

    it('should return the same value if compose has zero functions', () => {
        expect(compose()(1)).toBe(1)
    })

    it('should return age with added 20 in it', () => {
        const getAgeAndAddTwenty = compose(add(10), add(10), prop('age'))
        expect(getAgeAndAddTwenty({ age: 10 })).toBe(30)
    })
})
