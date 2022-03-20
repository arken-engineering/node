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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var objection_1 = require("objection");
var node_1 = __importDefault(require("./node"));
var base_1 = __importDefault(require("./base"));
var Achievement = /** @class */ (function (_super) {
    __extends(Achievement, _super);
    function Achievement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Achievement, "tableName", {
        get: function () {
            return 'achievements';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Achievement, "timestamps", {
        get: function () {
            return true;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Achievement, "jsonSchema", {
        get: function () {
            return {
                type: 'object',
                required: [],
                properties: {}
            };
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Achievement, "relationMappings", {
        get: function () {
            return {
                parent: {
                    relation: objection_1.Model.HasOneRelation,
                    modelClass: node_1.default,
                    join: {
                        from: 'achievements.parentId',
                        to: 'nodes.id'
                    }
                }
            };
        },
        enumerable: false,
        configurable: true
    });
    return Achievement;
}(base_1.default));
exports.default = Achievement;
// {
//   "id": 1,
//   "key": "CRAFT_1",
//   "name": "New Beginnings",
//   "category": "Basic",
//   "icon": "https://rune.game/images/achievements/blue/s_030.PNG",
//   "points": 1,
//   "type": "Crafting",
//   "isCompleted": false,
//   "details": {
//     "Date": "Anytime",
//     "Total": 0
//   },
//   "branches": {
//     "1": {
//       "description": [
//         "Craft 1 Runeword"
//       ]
//     },
//     "2": {
//       "description": "Craft 1 Runeword"
//     }
//   }
// },
