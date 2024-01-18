import { Router } from "express";
import { closet } from "../controllers/closet.controllers";
const router = Router();

router.get('/closet', closet.findAll);
router.post('/closet', closet.createClothing);
router.put('/closet/:id', closet.updateClothes);
router.delete('/closet/:id', closet.deleteClothes);
router.get('/closet/:id', closet.findById);


export default router;