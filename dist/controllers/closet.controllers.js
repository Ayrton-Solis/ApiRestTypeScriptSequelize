"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.closet = void 0;
const Closet_1 = require("../models/Closet");
class closet {
    static findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const closet = yield Closet_1.Closet.findAll();
                if (closet.length === 0) {
                    return res.status(404).json('Closet does not exists');
                }
                ;
                return res.json(closet);
            }
            catch (error) {
                return res.status(500).json('Internal server error');
            }
        });
    }
    ;
    static createClothing(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, waist, color, price, description } = req.body;
                const newClothes = yield Closet_1.Closet.create({
                    name,
                    waist,
                    color,
                    price,
                    description
                });
                return res.json(newClothes);
            }
            catch (error) {
                return res.status(500).json('Internal server error');
            }
        });
    }
    ;
    static updateClothes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const { name, waist, color, price, description } = req.body;
                const clothes = yield Closet_1.Closet.findByPk(id);
                if (clothes === null) {
                    return res.status(404).json('The Clothes does not exists');
                }
                ;
                yield clothes.update({
                    name: name,
                    waist: waist,
                    color: color,
                    price: price,
                    description: description
                });
                return res.json(clothes);
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
    }
    ;
    static deleteClothes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const clothes = yield Closet_1.Closet.findByPk(id);
                if (clothes === null) {
                    return res.status(404).json('The Clothes does not exists');
                }
                ;
                clothes.destroy();
                return res.send('Clothes destroyed');
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
    }
    ;
    static findById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const clothes = yield Closet_1.Closet.findByPk(id);
                if (clothes === null) {
                    return res.status(404).json('The clothes does not exists');
                }
                ;
                return res.json(clothes);
            }
            catch (error) {
                return res.status(500).json(error);
            }
            ;
        });
    }
    ;
}
exports.closet = closet;
;
