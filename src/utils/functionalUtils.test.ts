import { map } from './functionalUtils'
import { add } from './mathUtils'

describe('functional Utils', () => {
    it('should map over an array', () => {
        expect(map(add(10))([1, 2, 3])).toEqual([11, 12, 13])
    })
})
