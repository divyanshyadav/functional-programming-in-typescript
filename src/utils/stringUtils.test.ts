import { match } from './stringUtils'

describe('String Utils', () => {
    it('should return array of matched values if match found', () => {
        expect(match(/a/gi)('bca')).toEqual(['a'])
    })

    it('should return null if match not found', () => {
        expect(match(/d/gi)('bca')).toEqual(null)
    })
})
