"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateScoreDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const score_dto_1 = require("./score.dto");
class UpdateScoreDto extends (0, swagger_1.PartialType)(score_dto_1.ScoreDto) {
}
exports.UpdateScoreDto = UpdateScoreDto;
//# sourceMappingURL=update-score.dto.js.map