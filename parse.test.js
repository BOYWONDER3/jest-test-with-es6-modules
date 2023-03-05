import parse from './parse.js'

describe('#parse', () => {
    describe('with exponents', () => {
        test('it returns the correct result', () => {
            expect(parse("3 - 1")).toBe(2)
        })
    })
    
})