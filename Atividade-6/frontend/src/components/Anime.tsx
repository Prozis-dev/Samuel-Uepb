interface Props {
    anime: never
}

export default function Anime({ anime } :Props) {
    return (
        <div className="flex gap-4 border max-md:text-xs px-10 max-md:px-5 max-md:mx-5 py-5 rounded-2xl shadow-2xl shadow-black">
            <p>Id: {anime['id']}</p>
            <p>Nome: {anime['name']}</p>
            <p>Gênero: {anime['genre']}</p>
            <p>Studio: {anime['studio']}</p>
        </div>
    )
}
