"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsNullable = void 0;
const class_validator_1 = require("class-validator");
function IsNullable(validationOptions) {
    return (0, class_validator_1.ValidateIf)((_object, value) => value !== null, validationOptions);
}
exports.IsNullable = IsNullable;
//# sourceMappingURL=custom-validator.js.map