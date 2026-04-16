import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";


const teachers = [
    {
        id: 1,
        name: "Алина Нурланова",
        title: "Lead Teacher, CELTA",
        description:
            "Когда ребёнок начинает говорить на английском без страха — это и есть наша главная победа. Мы создаём атмосферу, где ошибки — это часть игры.",
        experience: "9 ЛЕТ ОПЫТА",
        level: "УРОВЕНЬ С1",
        image: "/teacher-placeholder-1.jpg",
    },
    {
        id: 2,
        name: "Марк Ким",
        title: "English Coach",
        description:
            "Английский — это не про грамматику. Это про умение выражать свои мысли и идеи. Я помогаю детям найти свой голос на английском.",
        experience: "7 ЛЕТ ОПЫТА",
        level: "УРОВЕНЬ С1",
        image: "/teacher-placeholder-2.jpg",
    },
    {
        id: 3,
        name: "Елена Смирнова",
        title: "Communication Specialist",
        description:
            "Каждый ребёнок уникален. Поэтому я подбираю методы обучения именно для него. Главное — чтобы было весело и результативно.",
        experience: "6 ЛЕТ ОПЫТА",
        level: "УРОВЕНЬ В2",
        image: "/teacher-placeholder-3.jpg",
    },
    {
        id: 4,
        name: "Дмитрий Волков",
        title: "TEFL Certified Teacher",
        description:
            "Английский язык — это ключ к новым возможностям. Я помогаю ребятам открыть этот ключ и уверенно использовать его.",
        experience: "8 ЛЕТ ОПЫТА",
        level: "УРОВЕНЬ С1",
        image: "/teacher-placeholder-4.jpg",
    },
];

const TeacherCard = ({ teacher }) => {
    const [imageError, setImageError] = useState(false);

    return (
        <div className="bg-white rounded-3xl p-4 md:p-6 border-2 border-gray-200 hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
            <div className="w-full aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl overflow-hidden flex items-center justify-center mb-4">
                {teacher.image && !imageError ? (
                    <img
                        src={teacher.image}
                        alt={teacher.name}
                        className="w-full h-full object-cover"
                        onError={() => setImageError(true)}
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-300">
                        <div className="w-2/3 h-2/3 bg-gray-400 rounded-full" />
                    </div>
                )}
            </div>
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">
                {teacher.name}
            </h3>
            <p className="text-blue-600 text-xs md:text-sm font-semibold mb-3">
                {teacher.title}
            </p>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4 flex-grow">
                {teacher.description}
            </p>
            <div className="text-gray-500 text-xs md:text-sm space-y-1">
                <div>{teacher.experience}</div>
                {teacher.level && <div>{teacher.level}</div>}
            </div>
        </div>
    );
};

export function Teachers() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsPerView, setCardsPerView] = useState(2);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setCardsPerView(1);
            } else if (window.innerWidth < 1024) {
                setCardsPerView(2);
            } else {
                setCardsPerView(2);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const maxIndex = Math.max(0, teachers.length - cardsPerView);

    const handlePrev = () => {
        setCurrentIndex(Math.max(0, currentIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex(Math.min(maxIndex, currentIndex + 1));
    };

    const visibleTeachers = teachers.slice(
        currentIndex,
        currentIndex + cardsPerView
    );

    return (
        <div className="w-full bg-gradient-to-b from-gray-50 to-white py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8">
            <div className="w-full max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                    <div className="flex flex-col justify-between">
                        <div>
                            <div className="inline-block px-4 py-2 bg-yellow-50 rounded-full mb-4">
                <span className="text-yellow-600 text-xs md:text-sm font-semibold tracking-wide uppercase">
                  Преподаватели
                </span>
                            </div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                                Команда, которая любит свою работу — и это видно
                            </h2>
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-8">
                                Каждый наш преподаватель прошёл строгий отбор и имеет
                                международные сертификаты. Но главное — они умеют то, чему не
                                учат в университете: заинтересовать детей, мотивировать и
                                делать так, чтобы дети сами хотели говорить по-английски.
                                Именно поэтому 96% родителей рекомендуют нас друзьям.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors whitespace-nowrap text-sm md:text-base">
                                Записаться преподавателю
                            </button>
                            <div className="flex gap-3">
                                <button
                                    onClick={handlePrev}
                                    disabled={currentIndex === 0}
                                    className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full border-2 border-blue-500 text-blue-500 hover:bg-blue-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed hover:disabled:bg-white"
                                    aria-label="Предыдущий преподаватель"
                                >
                                    <ChevronLeft size={24} />
                                </button>
                                <button
                                    onClick={handleNext}
                                    disabled={currentIndex === maxIndex}
                                    className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full border-2 border-blue-500 text-blue-500 hover:bg-blue-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed hover:disabled:bg-white"
                                    aria-label="Следующий преподаватель"
                                >
                                    <ChevronRight size={24} />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 auto-rows-max">
                        {visibleTeachers.map((teacher) => (
                            <TeacherCard key={teacher.id} teacher={teacher} />
                        ))}
                    </div>
                </div>

                <div className="flex justify-center gap-2 mt-8 md:mt-12">
                    {Array.from({
                        length: Math.ceil(teachers.length / cardsPerView),
                    }).map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() =>
                                setCurrentIndex(Math.min(idx * cardsPerView, maxIndex))
                            }
                            className={`w-2 h-2 rounded-full transition-colors ${
                                idx === Math.floor(currentIndex / cardsPerView)
                                    ? "bg-blue-600"
                                    : "bg-gray-300"
                            }`}
                            aria-label={`Перейти к странице ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
