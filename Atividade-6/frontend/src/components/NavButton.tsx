import { useNavigate } from "react-router-dom"

interface Props {
    name: string
    link: string
}

export function NavButton({ name, link }: Props) {
    const navigate = useNavigate()

    const handleGoToPage = (link: string) => {
        navigate(link)
    }

    return (
        <button onClick={() => handleGoToPage(link)} className="text-white max-md:text-xs hover:scale-95 hover:text-gray-400 duration-500 ease-in-out active:scale-110">
            {name}
        </button>
    )
}