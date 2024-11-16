import IAnimesDTO from "../dtos/IAnimeDTO"
import Anime from "../entities/Anime"
import IAnimesRepository from "../dtos/IAnimesRepository"

class CreateAnimeService {

    constructor (private animesRespository: IAnimesRepository) {}

    execute({name, genre, studio}: IAnimesDTO):Anime {
        if (!name || !genre || !studio) {
            throw new Error('Please fill out all fields')
        }
        
        const anime = this.animesRespository.create({
            name,
            genre,
            studio
        })

        return anime
    }
}

export default CreateAnimeService