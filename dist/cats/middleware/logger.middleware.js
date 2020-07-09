"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerMiddleware = void 0;
const common_1 = require("@nestjs/common");
const HttpStatus = require("http-status");
const filterBody_1 = require("../../utils/filterBody");
let LoggerMiddleware = class LoggerMiddleware {
    use(req, res, next) {
        console.log('Request...');
        try {
            const requestBody = req.body;
            const agencyPrefix = 'agency';
            const agencyBody = filterBody_1.filteredBody(req.body, constants.WHITELIST.agency.create, agencyPrefix);
            throw {
                errorCode: 'auth/unauthorized',
                message: 'Authentication token is missing',
            };
        }
        catch (error) {
            throw new common_1.HttpException({
                status: HttpStatus.UNAUTHORIZED,
                error: error.errorCode,
                message: error.message,
                data: [],
            }, HttpStatus.UNAUTHORIZED);
        }
    }
};
LoggerMiddleware = __decorate([
    common_1.Injectable()
], LoggerMiddleware);
exports.LoggerMiddleware = LoggerMiddleware;
//# sourceMappingURL=logger.middleware.js.map