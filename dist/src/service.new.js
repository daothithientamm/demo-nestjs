"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyNewService = void 0;
let MyNewService = class MyNewService {
    async createFile(name) {
        console.log(`Creating a file named ${name}`);
    }
    async createDirectory(name) {
        console.log(`Creating a directory named ${name}`);
    }
};
__decorate([
    Command({
        command: 'file <name>',
        description: 'Create a file'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], MyNewService.prototype, "createFile", null);
__decorate([
    Command({
        command: 'directory <name>',
        description: 'Create a directory'
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], MyNewService.prototype, "createDirectory", null);
MyNewService = __decorate([
    Console({
        name: 'new',
        description: 'A command to create an item'
    })
], MyNewService);
exports.MyNewService = MyNewService;
//# sourceMappingURL=service.new.js.map