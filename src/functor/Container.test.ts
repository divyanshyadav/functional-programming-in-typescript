import Container from './Container'

describe('Container', () => {
    it('should create a new container', () => {
        const container = new Container(1)
        expect(container instanceof Container).toBe(true)
        expect(container.map(a => a) instanceof Container).toBe(true)
        expect(container.map(a => a).value).toBe(1)
    })

    it('should create a new container with the null', () => {
        const container = new Container(null)
        expect(container instanceof Container).toBe(true)
        expect(container.map(a => a) instanceof Container).toBe(true)
        expect(container.map(a => a).value).toBe(null)
    })

    it('should create a new container with the undefined', () => {
        const container = new Container(undefined)
        expect(container instanceof Container).toBe(true)
        expect(container.map(a => a).value).toBe(undefined)
    })

    it('should map Container of type number to Container of type string', () => {
        const container = new Container(1)
        expect(container instanceof Container).toBe(true)
        const fn = (value: number): string => value.toString()
        expect(container.map(fn).value).toBe('1')
    })
})
