import { greet } from "./greet";

describe('greet', () => {
    it('should includ name in message', () => {
        expect(greet('Angular')) .toContain('Angular');
    })
})