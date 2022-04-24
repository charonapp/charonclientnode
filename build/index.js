"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharonClient = exports.RequestType = void 0;
var axios = __importStar(require("axios"));
var getmac_1 = __importDefault(require("getmac"));
var RequestType;
(function (RequestType) {
    RequestType[RequestType["GET"] = 0] = "GET";
    RequestType[RequestType["POST"] = 1] = "POST";
    RequestType[RequestType["PUT"] = 2] = "PUT";
    RequestType[RequestType["DELETE"] = 3] = "DELETE";
})(RequestType = exports.RequestType || (exports.RequestType = {}));
var CharonClient = /** @class */ (function () {
    function CharonClient(storage, settings) {
        this.storage = storage;
        this.settings = settings;
    }
    CharonClient.prototype.createUserRequest = function (username) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.settings != undefined && this.settings.createEndpoint != undefined)) return [3 /*break*/, 2];
                        return [4 /*yield*/, axios.default.post(this.settings.createEndpoint, { username: username, address: (0, getmac_1.default)(), 'notificationid': 'never' })];
                    case 1:
                        res = _a.sent();
                        if (res.data.status == 'success') {
                            this.setUsernameAndKey(res.data.username, res.data.key);
                            return [2 /*return*/, true];
                        }
                        else {
                            return [2 /*return*/, res.data.status];
                        }
                        return [3 /*break*/, 3];
                    case 2: throw new Error("The createEndpoint in the client settings is undefined.");
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CharonClient.prototype.signInRequest = function (username) {
        return __awaiter(this, void 0, void 0, function () {
            var charonRes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.settings != undefined && this.settings.signInEndpoint != undefined)) return [3 /*break*/, 2];
                        return [4 /*yield*/, axios.default.post(this.settings.signInEndpoint, { username: username, address: (0, getmac_1.default)(), notificationid: 'never' })];
                    case 1:
                        charonRes = _a.sent();
                        if (charonRes.data.status == 'success') {
                            this.setUsernameAndKey(charonRes.data.username, charonRes.data.key);
                            return [2 /*return*/, true];
                        }
                        else {
                            return [2 /*return*/, charonRes.data.status];
                        }
                        return [3 /*break*/, 3];
                    case 2: throw new Error("The signInEndpoint in the client settings is undefined.");
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CharonClient.prototype.authenticateRequest = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.settings != undefined && this.settings.authenticateEndpoint != undefined) {
                }
                else {
                    throw new Error("The authenticateEndpoint in the client settings is undefined.");
                }
                return [2 /*return*/];
            });
        });
    };
    CharonClient.prototype.makeAuthenticatedRequest = function (url, type, data) {
        return __awaiter(this, void 0, void 0, function () {
            var key, username, getRes, postRes, putRes, deleteRes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        key = this.getKey();
                        username = this.getUsername();
                        if (!(type == RequestType.GET)) return [3 /*break*/, 2];
                        return [4 /*yield*/, axios.default.get(url, { headers: {
                                    charon: "auth ".concat(key, " ").concat(username)
                                } }).catch(function (e) { return e; })];
                    case 1:
                        getRes = _a.sent();
                        return [2 /*return*/, getRes];
                    case 2:
                        if (!(type == RequestType.POST)) return [3 /*break*/, 4];
                        return [4 /*yield*/, axios.default.post(url, data, {
                                headers: {
                                    charon: "auth ".concat(key, " ").concat(username)
                                }
                            }).catch(function (e) { return e; })];
                    case 3:
                        postRes = _a.sent();
                        return [2 /*return*/, postRes];
                    case 4:
                        if (!(type == RequestType.PUT)) return [3 /*break*/, 6];
                        return [4 /*yield*/, axios.default.put(url, data, {
                                headers: {
                                    charon: "auth ".concat(key, " ").concat(username)
                                }
                            }).catch(function (e) { return e; })];
                    case 5:
                        putRes = _a.sent();
                        return [2 /*return*/, putRes];
                    case 6:
                        if (!(type == RequestType.DELETE)) return [3 /*break*/, 8];
                        return [4 /*yield*/, axios.default.delete(url, {
                                headers: {
                                    charon: "auth ".concat(key, " ").concat(username)
                                }
                            })];
                    case 7:
                        deleteRes = _a.sent();
                        return [2 /*return*/, deleteRes];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    CharonClient.prototype.getKey = function () {
        return this.storage.get('key');
    };
    CharonClient.prototype.getUsername = function () {
        return this.storage.get('username');
    };
    CharonClient.prototype.setUsernameAndKey = function (username, key) {
        this.storage.save('username', { 'username': username });
        this.storage.save('key', { 'key': key });
    };
    CharonClient.prototype.setUsername = function (username) {
        this.storage.save('username', { 'username': username });
    };
    CharonClient.prototype.setKey = function (key) {
        this.storage.save('key', { 'key': key });
    };
    return CharonClient;
}());
exports.CharonClient = CharonClient;
