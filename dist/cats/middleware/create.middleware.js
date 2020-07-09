"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMiddleware = void 0;
const whitelist_1 = require("./../../config/whitelist");
const common_1 = require("@nestjs/common");
const HttpStatus = require("http-status");
const filterBody_1 = require("../../utils/filterBody");
let CreateMiddleware = class CreateMiddleware {
    use(req, res, next) {
        try {
            const catPrefix = 'cats';
            const catBody = filterBody_1.filteredBody(req.body, whitelist_1.WHITELIST.cats.create, catPrefix);
            if (catBody["id"] === undefined) {
                throw {
                    errorCode: HttpStatus.BAD_REQUEST,
                    message: 'Id is required',
                };
            }
            req.body = catBody;
            return next();
        }
        catch (error) {
            throw new common_1.HttpException({
                status: HttpStatus.BAD_REQUEST,
                error: error.errorCode,
                message: error.message,
                data: [],
            }, HttpStatus.BAD_REQUEST);
        }
    }
};
CreateMiddleware = __decorate([
    common_1.Injectable()
], CreateMiddleware);
exports.CreateMiddleware = CreateMiddleware;
//# sourceMappingURL=create.middleware.js.map