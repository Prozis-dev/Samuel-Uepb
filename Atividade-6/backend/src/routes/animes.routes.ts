import { Router } from "express";
import AnimesController from "../controllers/AnimesController";

const animeRouter = Router()
const animesController = new AnimesController()

animeRouter.get('/', animesController.index)
animeRouter.post('/add', animesController.create)
animeRouter.put('/:id', animesController.update)
animeRouter.delete('/:id', animesController.delete)
animeRouter.get('/:id', animesController.show)

export default animeRouter