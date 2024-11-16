import IUpdateAnimeServiceDTO from "../dtos/IUpdateAnimeServiceDTO";
import IAnimesRepository from "../dtos/IAnimesRepository";

class UpdateAnimeService {
    constructor (private jsRepository: IAnimesRepository) {}

    execute({id, element}: IUpdateAnimeServiceDTO) {
        if (!element.key || !element.value) {
            throw new Error('Please fill out all fields')
        }

        let anime
        switch (element.key) {
            case "name":
                anime = this.jsRepository.findByIdAndUpdateName({
                    id, 
                    value: element.value
                })
                break

            case "genre":
                anime = this.jsRepository.findByIdAndUpdateGenre({
                    id, 
                    value: element.value
                })
                break

            case "studio":
                anime = this.jsRepository.findByIdAndUpdateStudio({
                    id, 
                    value: element.value
                })
                break
            default:
                throw new Error('Key not valid')
        }
        return anime
    }
}

export default UpdateAnimeService