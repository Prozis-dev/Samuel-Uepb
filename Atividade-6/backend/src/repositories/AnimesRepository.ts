import IAnimesDTO from "../dtos/IAnimeDTO";
import Anime from "../entities/Anime";
import IUpdateAnimeDTO from "../dtos/IUpdateAnimeDTO";
import IAnimesRepository from "../dtos/IAnimesRepository";

class AnimesRepository implements IAnimesRepository{
    private jsRepository: Anime[]

    constructor() {
        this.jsRepository = []
    }

    create({name, genre, studio}: IAnimesDTO): Anime {
        const data: IAnimesDTO ={
            name,
            genre, 
            studio
        }

        const anime = new Anime(data)

        this.jsRepository.push(anime)
        
        return anime
    }

    findByIdAndUpdateName({id, value}: IUpdateAnimeDTO): Anime | undefined {
        const anime = this.jsRepository.find(anime => 
            anime.id === id
        )
        
        if (!anime) {
            throw new Error('Anime not found')
        }
        
        anime.name = value
        
        return anime
    }

    findByIdAndUpdateGenre({id, value}: IUpdateAnimeDTO): Anime | undefined {
        const anime = this.jsRepository.find(anime => 
            anime.id === id
        )

        if (!anime) {
            throw new Error('Anime not found')
        }

        anime.genre = value

        return anime
    }

    findByIdAndUpdateStudio({id, value}: IUpdateAnimeDTO): Anime | undefined {
        const anime = this.jsRepository.find(anime => 
            anime.id === id
        )

        if (!anime) {
            throw new Error('Anime not found')
        }

        anime.studio = value

        return anime
    }

    findByIdAndDelete(id: string) {
        const anime = this.jsRepository.find(anime => 
            anime.id === id
        )

        if (!anime) {
            throw new Error('Anime not found')
        }

        this.jsRepository = this.jsRepository.filter(animeElement => 
            animeElement.id !== anime.id
        )

        return anime
    }

    public getAll(): Anime[] {
        return this.jsRepository
    }

    findById(id: string): Anime | undefined {
        const anime = this.jsRepository.find(anime =>
            anime.id === id
        )

        if (!anime) {
            throw new Error('Anime not found')
        }

        return anime
    }
}

export default AnimesRepository