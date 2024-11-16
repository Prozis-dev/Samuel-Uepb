import axios from "axios";
import { Nav } from "../components/Nav";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import AnimeExpanded from "../components/AnimeExpanded";

const api = import.meta.env.VITE_REACT_APP_API_URL;

const showInfoToast = (message: string) => {
    toast(message, {
        icon: "✔️", // Emoji de sucesso
        style: { backgroundColor: "#214822", color: "white" },
        className: "toast-animation success-toast",
    });
};

const showErrorToast = (message: string) => {
    toast.error(message, {
        style: { backgroundColor: "#520701", color: "white" },
        className: "toast-animation error-toast",
    });
};

const animeDefault = {
    id: "",
    name: "",
    genre: "",
    studio: "",
};

export default function Edit() {
    const [anime, setAnime] = useState(animeDefault);

    const handleSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            const currentInput = event.target as HTMLInputElement;
            if (!currentInput.value.trim()) {
                showErrorToast("Por favor, insira o ID do anime.");
            } else {
                handleCatchAnime(currentInput.value);
            }
        }
    };

    const handleCatchAnime = async (id: string) => {
        try {
            const response = await axios.get(`${api}/animes/${id}`);
            const data = await response.data;
            showInfoToast("Anime encontrado!");
            setAnime(data);
        } catch (error) {
            showErrorToast("Anime não encontrado");
            console.error(error);
            setAnime(animeDefault);
        }
    };

    return (
        <div className="flex flex-col gap-12 items-center justify-center bg-[#000000] text-white size-full">
            <Toaster />
            <Nav />
            <input
                type="text"
                className="w-1/6 max-md:w-5/6 pl-3 text-[#131016] shadow-2xl shadow-black rounded-lg h-10 input-style input-animation"
                placeholder={"Digite o id do anime"}
                onKeyDown={handleSubmit}
            />
            <div className="flex flex-col relative items-center justify-center rounded-xl max-w-[30rem] w-1/2 max-md:w-3/4 h-[50%] border">
                {anime.id && (
                    <AnimeExpanded anime={anime} setAnime={setAnime} />
                )}
            </div>
        </div>
    );
}
