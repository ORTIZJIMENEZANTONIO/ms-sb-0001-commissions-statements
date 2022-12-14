"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = void 0;
class Text {
    static formatText(text) {
        return text
            .toLocaleLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
    }
    static formatTextDb(text) {
        return `unaccent(LOWER(${text}))`;
    }
}
exports.Text = Text;
//# sourceMappingURL=text.js.map