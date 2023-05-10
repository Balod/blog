import { compute } from "./compute";

describe('compute', () => {
    it('should return -1 if negative input', () => {
        const result = compute( -1 );
        expect(result).toBe( -1 );
    })

    it('should increment input if positive', () => {
        const result = compute( 1 );
        expect(result).toBe( 2 );
    })
})