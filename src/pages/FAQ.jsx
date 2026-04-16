import { useState } from "react";



const faqItems = [
    {
        question: "Как проходит бесплатное тестирование?",
        answer:
            "Тестирование длится 45-60 минут. Мы определяем уровень ребёнка по 4 навыкам (Speaking, Listening, Reading, Writing), показываем родителям детальный отчёт и рекомендуем программу. Это бесплатно и без обязательств.",
    },
    {
        question: 'Что значит "Гарантия +1 уровень за 5 месяцев"?',
    },
    {
        question: "Как вы подбираете группу?",
    },
    {
        question: "Сколько детей в группе?",
    },
    {
        question: "Что за платформа для онлайн-обучения?",
    },
    {
        question: "Как контролировать прогресс ребёнка?",
    },
    {
        question: "Есть ли домашние задания?",
    },
    {
        question: "Можно ли попробовать перед оплатой?",
    },
    {
        question: "Что если ребёнок пропустит урок?",
    },
    {
        question: "Как записаться?",
    },
];

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleItem = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <div className="w-full max-w-[1312px] mx-auto px-4 py-16">
            <div className="flex gap-12 lg:gap-24">
                <div className="flex-shrink-0 w-full lg:w-80">
                    <div className="sticky top-8">
                        <div className="inline-block px-4 py-2 bg-[#FFF5E6] rounded-full mb-4">
              <span className="text-[#FF9800] text-sm font-semibold tracking-wide uppercase">
                FAQ
              </span>
                        </div>
                        <h2 className="text-[#111111] text-4xl lg:text-5xl font-bold leading-tight mb-4">
                            Часто задаваемые
                            <br />
                            вопросы
                        </h2>
                        <p className="text-[#666666] text-base">
                            Ответы на ваши вопросы
                        </p>
                    </div>
                </div>

                <div className="flex-1 min-w-0">
                    <div className="space-y-0">
                        {faqItems.map((item, index) => (
                            <div
                                key={index}
                                className="border-b border-[#E5E5E5] last:border-b-0"
                            >
                                <button
                                    onClick={() => toggleItem(index)}
                                    className="w-full flex items-center justify-between py-6 text-left hover:opacity-80 transition-opacity"
                                >
                  <span className="text-[#111111] text-lg font-semibold pr-8">
                    {item.question}
                  </span>
                                    <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            className={`transition-transform duration-200 ${
                                                openIndex === index ? "rotate-0" : "rotate-0"
                                            }`}
                                        >
                                            {openIndex === index ? (
                                                <path
                                                    d="M2 8H14"
                                                    stroke="#111111"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                />
                                            ) : (
                                                <>
                                                    <path
                                                        d="M8 2V14"
                                                        stroke="#111111"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                    />
                                                    <path
                                                        d="M2 8H14"
                                                        stroke="#111111"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                    />
                                                </>
                                            )}
                                        </svg>
                                    </div>
                                </button>
                                {openIndex === index && item.answer && (
                                    <div className="pb-6 pr-12 animate-in fade-in slide-in-from-top-2 duration-200">
                                        <p className="text-[#666666] text-base leading-relaxed">
                                            {item.answer}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
