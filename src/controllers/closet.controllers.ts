import { Closet } from "../models/Closet";
import { Request, Response } from "express";

export class closet {

  static async findAll(req: Request, res: Response): Promise<Response> {
    try {
      const closet = await Closet.findAll();
      if (closet.length === 0) {
        return res.status(404).json('Closet does not exists');
      };
      return res.json(closet);
    } catch (error) {
      return res.status(500).json('Internal server error')
    }
  };

  static async createClothing(req: Request, res: Response): Promise<Response> {
    try {
      const { name, waist, color, price, description } = req.body
      const newClothes = await Closet.create({
        name,
        waist,
        color,
        price,
        description
      })
      return res.json(newClothes);
    } catch (error) {
      return res.status(500).json('Internal server error')
    }
  };

  static async updateClothes(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params
      const { name, waist, color, price, description } = req.body;
      const clothes = await Closet.findByPk(id)
      if (clothes === null) {
        return res.status(404).json('The Clothes does not exists')
      };
      await clothes.update({
        name: name,
        waist: waist,
        color: color,
        price: price,
        description: description
      });
      return res.json(clothes);
    } catch (error) {
      return res.status(500).json(error);
    }
  };

  static async deleteClothes(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params
      const clothes = await Closet.findByPk(id);
      if (clothes === null) {
        return res.status(404).json('The Clothes does not exists');
      };
      clothes.destroy();
      return res.send('Clothes destroyed');
    } catch (error) {
      return res.status(500).json(error);
    }
  };

  static async findById(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params
      const clothes = await Closet.findByPk(id);
      if (clothes === null) {
        return res.status(404).json('The clothes does not exists');
      };
      return res.json(clothes);
    } catch (error) {
      return res.status(500).json(error);
    };
  };
};
