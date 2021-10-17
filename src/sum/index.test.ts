import { sum } from "."

import * as index from "./index"
test('sum', () => {
  expect(sum(1, 2)).toBe(3)
})

// @ponicode
describe("index.sum", () => {
    test("0", () => {
        let callFunction: any = () => {
            index.sum(-100, -5.48)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            index.sum(1, 100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            index.sum(100, 100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            index.sum(1, 1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            index.sum(0, 0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            index.sum(-Infinity, -Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})
