import { useEffect, useMemo, useState } from "react";
import Button from "../shared/ui/Button.jsx";
import problemsData from "../shared/data/ProblemsData.jsx";
import ProblemsFeature from "../shared/ui/ProblemsFeature.jsx";

function Problems() {
    // делаем бесконечность: дублируем массив (лента)
    const items = useMemo(() => [...problemsData, ...problemsData], []);

    // сдвиг в карточках
    const [pos, setPos] = useState(0);

    // авто каждые 5 секунд
    useEffect(() => {
        const interval = setInterval(() => {
            setPos((p) => p + 1);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    // когда дошли до середины (конец первого набора) — прыгаем назад без анимации
    // чтобы было ощущение бесконечной ленты
    const safePos = pos % problemsData.length;

    return (
        <section className="mt-16">

            <div className="px-16">
                <Button>ПРОБЛЕМАТИКА</Button>
                <p className="pt-4 text-[40px] font-bold">Знакомая ситуация?</p>
                <p className="text-black/60">Почему обычные курсы не дают результата.</p>
            </div>

            {/* CARDS */}
            <div className="px-16 mt-10 overflow-hidden">
                <div
                    className="flex gap-6 transition-transform duration-700 ease-in-out"
                    style={{
                        transform: `translateX(-${safePos * (100 / 4)}%)`,
                    }}
                >
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="w-1/4 shrink-0"
                        >
                            <ProblemsFeature img={item.img} text={item.text} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Problems;