import { useEffect, useState } from "react";
import "./styles.css";

export function Card() {
    const [count, setCount] = useState(0);
    const [isCounting, setIsCounting] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            if (isCounting) {
                setCount((prevCount) => prevCount + 1);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [isCounting]);

    const stopCounting = () => {
        setIsCounting(false);
    };

    return (
        <div className="card">
            <h1>Atividade 4</h1>
            <main className="card-main">
                <p>Contagem: {count}</p>
                <button className="card-main-button" onClick={stopCounting}>
                    Parar
                </button>
            </main>
        </div>
    );
}
