import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";


const testimonials = [
    {
        id: 1,
        text: '"Сын занимался 5 месяцев — прошёл с нулевым уровнем, ушёл с уверенным A2. Самое главное — теперь он не боится говорить! Спасибо за результат, который реально видим."',
        author: "Адауль М.",
        location: "Алматы",
        rating: 5,
        childAge: "9 лет",
        level: "A1 → A2",
    },
    {
        id: 2,
        text: '"Нам очень понравилось, что детей разделили по возрасту и уровню. Дочка накопила ли не скучает на уроках — все в группу на одной волне. За 4 месяца прогресс очевиден!"',
        author: "Гульнара Т.",
        location: "Астана (онлайн)",
        rating: 5,
        childAge: "12 лет",
        level: "A2 → B1",
    },
    {
        id: 3,
        text: '"Платформа просто огонь! Ребёнок раньше ненавидел английский, а теперь сам захочет играть и зарабатывать баллы. Учится и не замечает, что учится."',
        author: "Ерлан К.",
        location: "Шымкент (онлайн)",
        rating: 5,
        childAge: "10 лет",
    },
    {
        id: 4,
        text: '"Преподаватели очень терпеливые и добрые. Сын боялся говорить по-английски, но на первом же уроке почувствовал себя комфортно. Рекомендуем всем!"',
        author: "Зульфия А.",
        location: "Алматы",
        rating: 5,
        childAge: "8 лет",
        level: "A1 → A2",
    },
    {
        id: 5,
        text: '"Дочь занимается уже полгода, прогресс просто невероятный! Она теперь читает книги на английском и смотрит мультики без перевода. Спасибо вам!"',
        author: "Марина В.",
        location: "Нур-Султан",
        rating: 5,
        childAge: "11 лет",
        level: "A2 → B1",
    },
    {
        id: 6,
        text: '"Очень удобно, что можно заниматься онлайн. Сына никогда не хватало времени на доп занятия, а тут расписание гибкое и все под него подстроено."',
        author: "Тимур Н.",
        location: "Атырау (онлайн)",
        rating: 5,
        childAge: "13 лет",
        level: "B1 → B2",
    },
];

export const Feedback = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerView, setItemsPerView] = useState(3);
    const containerRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setItemsPerView(1);
            } else if (window.innerWidth < 1024) {
                setItemsPerView(2);
            } else {
                setItemsPerView(3);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const visibleTestimonials = testimonials.slice(
        currentIndex,
        currentIndex + itemsPerView
    );
    const maxIndex = Math.max(0, testimonials.length - itemsPerView);

    const handlePrev = () => {
        setCurrentIndex(Math.max(0, currentIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex(Math.min(maxIndex, currentIndex + 1));
    };

    const renderStars = (rating) => {
        return Array.from({ length: 5 }).map((_, i) => (
            <Star
                key={i}
                size={16}
                className={`${
                    i < rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                }`}
            />
        ));
    };

    return (
        <div className="w-full bg-white py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8">
            <div className="w-full max-w-[1400px] mx-auto">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-8 mb-12 md:mb-16">
                    <div className="flex-1">
                        <div className="inline-block px-4 py-2 bg-yellow-50 rounded-full mb-4">
              <span className="text-yellow-600 text-xs md:text-sm font-semibold tracking-wide uppercase">
                Отзывы
              </span>
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                            Что говорят родители и ученики
                        </h2>
                    </div>

                    <div className="flex gap-3 flex-shrink-0">
                        <button
                            onClick={handlePrev}
                            disabled={currentIndex === 0}
                            className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full border-2 border-blue-500 text-blue-500 hover:bg-blue-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed hover:disabled:bg-white"
                            aria-label="Предыдущие отзывы"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={handleNext}
                            disabled={currentIndex === maxIndex}
                            className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full border-2 border-blue-500 text-blue-500 hover:bg-blue-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed hover:disabled:bg-white"
                            aria-label="Следующие отзывы"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>

                <div
                    ref={containerRef}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                >
                    {visibleTestimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="flex flex-col h-full p-6 md:p-8 border-2 border-gray-200 rounded-2xl hover:border-blue-200 transition-colors duration-300 bg-white"
                        >
                            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 flex-grow font-light italic">
                                {testimonial.text}
                            </p>

                            <div className="pt-6 border-t border-gray-200 space-y-4">
                                <div>
                                    <p className="text-gray-900 font-semibold text-base md:text-lg">
                                        — {testimonial.author}
                                    </p>
                                    <p className="text-gray-500 text-sm">
                                        {testimonial.location}
                                    </p>
                                </div>

                                <div className="flex items-center gap-2">
                                    <div className="flex gap-1">{renderStars(testimonial.rating)}</div>
                                </div>

                                {(testimonial.childAge || testimonial.level) && (
                                    <p className="text-gray-500 text-sm">
                                        {testimonial.childAge && `Возраст ребёнка: ${testimonial.childAge}`}
                                        {testimonial.childAge && testimonial.level && " | "}
                                        {testimonial.level && `Уровень: ${testimonial.level}`}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12 md:mt-16">
                    <a
                        href="#"
                        className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors whitespace-nowrap text-center"
                    >
                        Больше отзывов на Google Reviews →
                    </a>
                    <a
                        href="#"
                        className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition-colors whitespace-nowrap text-center"
                    >
                        Смотреть видео-отзывы →
                    </a>
                </div>

                <div className="flex justify-center gap-2 mt-8 md:mt-12">
                    {Array.from({ length: Math.ceil(testimonials.length / itemsPerView) }).map(
                        (_, idx) => (
                            <button
                                key={idx}
                                onClick={() =>
                                    setCurrentIndex(Math.min(idx * itemsPerView, maxIndex))
                                }
                                className={`w-2 h-2 rounded-full transition-colors ${
                                    idx === Math.floor(currentIndex / itemsPerView)
                                        ? "bg-blue-600"
                                        : "bg-gray-300"
                                }`}
                                aria-label={`Перейти к странице ${idx + 1}`}
                            />
                        )
                    )}
                </div>
            </div>
        </div>
    );
};
