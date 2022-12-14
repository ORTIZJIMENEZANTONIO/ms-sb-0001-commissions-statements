"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.File = void 0;
const xlsx = require("xlsx");
const fs = require("fs");
class File {
    static async makeFile(data, fileName) {
        console.log(data);
        const path = `${__dirname.split("dist")[0]}src/files/`;
        const workSheet = xlsx.utils.json_to_sheet(data);
        const workBook = xlsx.utils.book_new();
        const name = `${path}${fileName !== null && fileName !== void 0 ? fileName : new Date().getTime()}.xlsx`;
        xlsx.utils.book_append_sheet(workBook, workSheet, "getQueryToExcel");
        await xlsx.write(workBook, { bookType: "xlsx", type: "buffer" });
        await xlsx.write(workBook, { bookType: "xlsx", type: "binary" });
        await xlsx.writeFile(workBook, name);
        const f = fs.readFileSync(name, { encoding: "base64" });
        return {
            data,
            file: {
                name,
                base64: data.length > 0 ? f : "",
            },
        };
    }
}
exports.File = File;
//# sourceMappingURL=excel.js.map