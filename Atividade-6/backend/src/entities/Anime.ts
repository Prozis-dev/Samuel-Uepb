import { v4 as uuidv4 } from "uuid"
import IAnimeDTO from "../dtos/IAnimeDTO"

export default class Anime {
    id: string

    name: string

    genre: string

    studio: string

    constructor({name, genre, studio}: IAnimeDTO) {
        this.id = uuidv4()
        this.name = name
        this.genre = genre
        this.studio = studio
    }
}