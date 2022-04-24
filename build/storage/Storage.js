"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyStorage = void 0;
var node_localstorage_1 = require("node-localstorage");
var KeyStorage = /** @class */ (function () {
    function KeyStorage() {
    }
    //TODO: Create a storage system for react, Ionic, vue and vanilla JS
    //TODO: create own universal storage API
    KeyStorage.prototype.save = function (key, data) {
    };
    KeyStorage.prototype.get = function (key) {
    };
    KeyStorage.prototype.delete = function (key) {
    };
    //Extremely insecure, better to build your own key storage system rather than using the unencrypted node local storage
    KeyStorage.UnencryptedNodeLocalStorage = /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super.call(this) || this;
            _this.storage = new node_localstorage_1.LocalStorage('./scratch');
            return _this;
        }
        class_1.prototype.save = function (key, data) {
            _super.prototype.save.call(this, key, data);
            this.storage.setItem(key, JSON.stringify(data));
        };
        class_1.prototype.get = function (key) {
            var item = this.storage.getItem(key);
            if (item) {
                return JSON.parse(item);
            }
            else {
                return null;
            }
        };
        return class_1;
    }(KeyStorage));
    return KeyStorage;
}());
exports.KeyStorage = KeyStorage;
