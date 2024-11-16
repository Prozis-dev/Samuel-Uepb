import IAnimesDTO from "../dtos/IAnimeDTO";
import IUpdateAnimeDTO from "../dtos/IUpdateAnimeDTO";
import Anime from "../entities/Anime";

export default interface IAnimesRepository {
    create({name, genre, studio}: IAnimesDTO): Anime
    findByIdAndUpdateName({id, value}: IUpdateAnimeDTO): Anime | undefined
    findByIdAndUpdateGenre({id, value}: IUpdateAnimeDTO): Anime | undefined
    findByIdAndUpdateStudio({id, value}: IUpdateAnimeDTO): Anime | undefined
    findByIdAndDelete(id: string): void
    getAll(): Anime[]
    findById(id: string): Anime | undefined
}