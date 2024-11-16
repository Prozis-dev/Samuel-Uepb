import { Request, Response } from "express";
import AnimesRepository from "../repositories/AnimesRepository";
import CreateAnimeService from "../services/CreateAnimeService";
import UpdateAnimeService from "../services/UpdateAnimeService";

const animesRepository = new AnimesRepository()

export default class AnimesController {
    public index (req: Request, res: Response) {
        res.status(200).json(animesRepository.getAll())
    }

    public create(req: Request, res: Response) {
        const { name, genre, studio } = req.body

        const createAnime = new CreateAnimeService(animesRepository)
        const anime = createAnime.execute({ name, genre, studio })

        res.status(200).json(anime)
    }

    public update(req: Request, res: Response) {
        const { id } = req.params
        const { key, value } = req.body
        const element = {key, value}

        const updateAnime = new UpdateAnimeService(animesRepository)
        const anime = updateAnime.execute({id, element})

        res.status(200).json(anime)
    }

    public delete(req: Request, res: Response) {
        const { id } = req.params

        const anime = animesRepository.findByIdAndDelete(id)

        res.status(200).json(anime)
    }

    public show(req: Request, res: Response) {
        const { id } = req.params

        const anime = animesRepository.findById(id)

        res.status(200).json(anime)
    }
}