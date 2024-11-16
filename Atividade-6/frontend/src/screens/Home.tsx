import { Nav } from "../components/Nav";

export default function Home() {
    return (
        <div className="flex flex-col md:flex-row gap-12 items-center justify-center bg-[#000000] text-white min-h-screen">
            <Nav />
            <div className="flex flex-col items-start justify-center flex-grow">
                <h1 className="font-bold text-9xl text-right ml-12 title-animation">
                    Animes Library
                </h1>
                <p className="text-left text-lg mt-4 max-w-xl ml-12 whitespace-nowrap subtitle-animation">
                    Crie sua própria biblioteca personalizada de animes, onde
                    você pode organizar, adicionar e explorar suas
                </p>
                <p className="text-left text-lg max-w-xl ml-12 whitespace-nowrap subtitle-animation">
                    séries favoritas de forma simples e intuitiva.
                </p>
            </div>
            <div className="flex justify-start items-center m-8 flex-grow">
                <img
                    src="https://i.imgur.com/IqYKWbn.jpeg"
                    alt="Anime"
                    className="object-contain max-w-full max-h-[92vh]"
                    style={{ width: "100%", height: "auto" }}
                />
            </div>
        </div>
    );
}
