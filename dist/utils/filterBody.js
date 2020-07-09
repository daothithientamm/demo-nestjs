"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filteredBody = void 0;
function filteredBody(body, whitelist, prefix = '') {
    const items = {};
    Object.keys(body).forEach(key => {
        const repairKey = prefix ? key.replace(prefix, '') : key;
        if (whitelist.indexOf(key) >= 0) {
            items[repairKey] = body[key];
        }
    });
    return items;
}
exports.filteredBody = filteredBody;
//# sourceMappingURL=filterBody.js.map