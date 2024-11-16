import axios from "axios"
import AnimeExpandedColumn from "./AnimeExpandedColumn"
import toast from "react-hot-toast"

interface Props {
    anime: {
        id: string,
        name: string,
        genre: string,
        studio: string
    },
    setAnime: React.Dispatch<React.SetStateAction<{
        id: string;
        name: string;
        genre: string;
        studio: string;
    }>>
}

const api = import.meta.env.VITE_REACT_APP_API_URL
const columns = ['Nome', 'Gênero', 'Estúdio']
const apiColumns: ('name' | 'genre' | 'studio')[] = ['name', 'genre', 'studio']

const animeDefault = {
    id: '',
    name: '',
    genre: '',
    studio: ''
}

const showInfoToast = (message: string) => {
    toast(message, {
        icon: 'ℹ️',
        style: { backgroundColor: '#4caf50', color: 'white' }
    })
}

const showErrorToast = (message: string) => {
    toast.error(message, {
        style: { backgroundColor: '#f44336', color: 'white' },
    })
}

export default function AnimeExpanded({ anime, setAnime }: Props) {
    const handleDelete = async () => {
        const confirm = window.confirm("Você deseja realmente excluir esse anime?")
        if (confirm) {
            try {
                await axios.delete(`${api}/animes/${anime.id}`)
                showInfoToast("Anime removido com sucesso!")
                setAnime(animeDefault)
            } catch (error) {
                showErrorToast("Ocorreu um erro ao remover o anime")
                console.error(error)
            }
        }
    }

    return (
        <>
            <p className="text-gray-400 text-xs absolute top-2 left-2">Id: {anime['id']}</p>
            <div className="flex flex-col gap-6 items-center justify-center w-full ">
                {columns.map((column, index) => {
                    return <AnimeExpandedColumn key={index} column={column} columnValue={anime[apiColumns[index]]} apiColumn={apiColumns[index]} id={anime.id} />
                })}
            </div>
            <button
                onClick={handleDelete}
                className="absolute bottom-10 border border-[#f44336] mt-3 px-3 w-2/6 min-w-fit text-[#f44336] rounded-lg h-10 hover:text-white hover:bg-[#f44336] duration-500 ease-in-out active:scale-90 shadow-2xl shadow-black"
            >
                Deletar
            </button>
        </>
    )
}
