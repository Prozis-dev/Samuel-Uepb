export default interface IUpdateAnimeServiceDTO {
    id: string,
    element: {
        key: 'name' | 'genre' | 'studio',
        value: string
    }
}