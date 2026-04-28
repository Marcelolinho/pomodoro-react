import { useState, useEffect } from "react"

export default function PizzaModel() {
    const [time, setTime] = useState(() => {
        const saved = localStorage.getItem("last-time");
        const now = new Date().getTime();

        if (saved) {
            const lastTime = parseInt(saved, 10);
            const diff = now - lastTime;

            if (diff < 0) {
                return 0;
            }
        }

        return 0;
    })

    useEffect(() => {
        localStorage.setItem("last-time", JSON.stringify(time));

        const interval = setInterval(() => {
            setTime((seconds) => seconds - 1)
        }, 1000)

        return () => clearInterval(interval)
    }, [time]);

    return (
        <>
            <main id="center">
                <div className="pizza">
                    <span>{time}</span>
                </div>
            </main>
        </>
    )
}   