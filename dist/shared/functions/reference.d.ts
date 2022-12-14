export declare class Reference {
    private banks;
    static calculateReference(bank: string, batch: number, mandate: string, type: string): string;
    static toChar(num: number, format: string): string;
    static getHsbcKey(batch: number, mandate: string, type: string): string;
    static getBanamexKey(batch: number, mandate: string, type: string): string;
}
