"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reference = void 0;
class Reference {
    constructor() {
        this.banks = ["HSBC", "BANAMEX"];
    }
    static calculateReference(bank, batch, mandate, type) {
        switch (bank) {
            case "HSBC":
                return this.getHsbcKey(batch, mandate, type);
            case "BANAMEX":
                return this.getBanamexKey(batch, mandate, type);
            default:
                return "";
        }
    }
    static toChar(num, format) {
        const referenceLength = format.length;
        const batchComplement = new Array(referenceLength).fill(format[0]);
        [...num.toString()].map((letter, index) => (batchComplement[index] = letter));
        return batchComplement.join("").trim();
    }
    static getHsbcKey(batch, mandate, type) {
        const batchFormatted = this.toChar(batch, "00000000");
        const reference = `${type}${mandate}${batchFormatted}L`;
        const referenceAux = reference.replace("G", "7").replace("L", "3");
        const digit = Number(reference.substring(14, 15)) * 13 +
            Number(reference.substring(13, 14)) * 17 +
            Number(reference.substring(12, 13)) * 19 +
            Number(reference.substring(11, 12)) * 23 +
            Number(reference.substring(10, 11)) * 11 +
            Number(reference.substring(9, 10)) * 13 +
            Number(reference.substring(8, 9)) * 17 +
            Number(reference.substring(7, 8)) * 19;
        Number(reference.substring(6, 7)) * 23 +
            Number(reference.substring(5, 6)) * 11 +
            Number(reference.substring(4, 5)) * 13 +
            Number(reference.substring(3, 4)) * 17 +
            Number(reference.substring(2, 1)) * 19 +
            Number(reference.substring(1, 2)) * 23 + 330;
        const checkDigit = (digit % 97) + 1;
        const hsbcKey = `${referenceAux}${this.toChar(checkDigit, "00")}`;
        return hsbcKey;
    }
    static getBanamexKey(batch, mandate, type) {
        const sumsuc = 329;
        const sumta = 565;
        const batchFormatted = this.toChar(batch, "00000000");
        const referenceAux = `${type}${mandate}${batchFormatted}L`;
        const reference = referenceAux.replace("G", "4").replace("L", "5");
        const digit = (Number(reference.substring(1, 2)) * 19 +
            Number(reference.substring(2, 3)) * 23 +
            Number(reference.substring(3, 4)) * 29 +
            Number(reference.substring(4, 5)) * 31 +
            Number(reference.substring(5, 6)) * 37 +
            Number(reference.substring(6, 7)) * 1 +
            Number(reference.substring(7, 8)) * 2 +
            Number(reference.substring(8, 9)) * 3 +
            Number(reference.substring(9, 10)) * 5 +
            Number(reference.substring(10, 11)) * 7 +
            Number(reference.substring(11, 12)) * 11 +
            Number(reference.substring(12, 13)) * 13 +
            Number(reference.substring(13, 14)) * 17 +
            Number(reference.substring(14, 15)) * 19 +
            Number(reference.substring(15, 16)) * 23 +
            Number(reference.substring(16, 17)) * 29 +
            Number(reference.substring(17, 18)) * 31 +
            Number(reference.substring(18, 19)) * 37) || 10 + sumsuc + sumta;
        const checkDigit = 99 - (digit % 97);
        const banamexKey = `${referenceAux}${this.toChar(checkDigit, "00")}`;
        return banamexKey;
    }
}
exports.Reference = Reference;
//# sourceMappingURL=reference.js.map