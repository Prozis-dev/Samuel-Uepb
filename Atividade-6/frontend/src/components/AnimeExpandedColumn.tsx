import axios from "axios"
import { useState } from "react"
import toast from "react-hot-toast"

const api = import.meta.env.VITE_REACT_APP_API_URL

interface Props {
    column: string
    columnValue: string
    apiColumn: ("name" | "genre" | "studio")
    id: string
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

export default function AnimeExpandedColumn({ column, columnValue, apiColumn, id }: Props) {
    const [inputValue, setInputValue] = useState(columnValue)
    const [isOpen, setIsOpen] = useState(false)

    const handleEdit = async () => {
        const input = (document.getElementById(apiColumn) as HTMLInputElement)
        if (isOpen) {
            input.classList.add('outline-none', 'cursor-default')
            input.readOnly = true
            setIsOpen(false)

            try {
                await axios.put(`${api}/animes/${id}`, {
                    key: apiColumn,
                    value: inputValue
                })
                showInfoToast("Atualizado!")
            } catch (error) {
                showErrorToast("Erro ao autalizar!")
                console.error(error)
            }
        } else {
            input.classList.remove('outline-none', 'cursor-default')
            input.readOnly = false
            input.focus()
            setIsOpen(true)
        }
    }
    return (
        <div className="flex relative w-full justify-around ">
            <p className="w-[.8rem]">{column}:</p>
            <div className="flex justify-around">
                <input
                    id={apiColumn}
                    className="bg-transparent w-5/6 outline-none cursor-default"
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                    readOnly
                />
                <button className="ease-in-out hover:scale-90 duration-500 " onClick={handleEdit}>
                    {isOpen ? '💾' : '🖊️'}
                </button>
            </div>
        </div>
    )
}
