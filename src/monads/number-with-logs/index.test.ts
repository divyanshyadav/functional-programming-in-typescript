import {
    addOne,
    addOneWithLogs,
    runWithLogs,
    square,
    squareWithLogs,
    wrapWithLogs,
} from '.'

describe('number-with-logs monad', () => {
    test('square', () => {
        expect(square(2)).toBe(4)
    })

    test('addOne', () => {
        expect(addOne(2)).toBe(3)
    })

    test('square then addOne', () => {
        expect(addOne(square(2))).toBe(5)
    })

    test('square then addOne with logs', () => {
        const a = wrapWithLogs(2)
        const b = runWithLogs(a, squareWithLogs)
        const c = runWithLogs(b, addOneWithLogs)

        expect(c).toEqual({
            result: 5,
            logs: ['squared 2 to get 4', 'add one to 4 to get 5'],
        })
    })
})
