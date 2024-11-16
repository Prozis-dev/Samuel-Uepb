import toast from "react-hot-toast"
import axios from "axios"
import { Input } from "./Input"

const api = import.meta.env.VITE_REACT_APP_API_URL

interface inputData {
  id: string,
  placeholder: string
}

interface Props {
  inputsData: inputData[]
}

const showInfoToast = (message: string) => {
  toast(message, {
    icon: 'ℹ️',
    style: { backgroundColor: '#214822', color: 'white' }
  })
}

const showErrorToast = (message: string) => {
  toast.error(message, {
    style: { backgroundColor: '#520701', color: 'white' },
  })
}


const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()

  const name = (document.getElementById('name') as HTMLInputElement).value
  const genre = (document.getElementById('genre') as HTMLInputElement).value
  const studio = (document.getElementById('studio') as HTMLInputElement).value

  try {
    await axios.post(`${api}/animes/add`, {
      name,
      genre,
      studio,
    })

    showInfoToast("Anime adicionado");
  } catch (error) {
    showErrorToast("Erro ao adicionar o anime")
    console.error(error)
  }
}

export function Form({ inputsData }: Props) {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center gap-3 w-1/2 max-w-[43rem] text-[#131016]"
    >
      {inputsData.map((inputData, index) => {
        return (
          <Input
            key={index}
            id={inputData.id}
            placeholder={inputData.placeholder}
          />
        )
      })}
      <button
        type="submit"
        className="border mt-3 px-3 w-2/6 min-w-fit text-white rounded-lg h-10 hover:text-[#131016] hover:bg-white duration-500 ease-in-out active:scale-90 shadow-2xl shadow-black"
      >
        Cadastrar
      </button>
    </form>
  )
}