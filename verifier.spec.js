import {verifyCell} from "./verifier"

describe("cell", () => {
    it("live cell fewer than 2. it die", () => {
        const result = verifyCell("2");
        expect(result).toBe(true);
    })
})