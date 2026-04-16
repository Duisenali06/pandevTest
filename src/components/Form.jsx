import React from "react";

export default function Form() {
    return (
        <div className=" w-full  rounded-[20px] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.25)] border border-[#E6F1FF]
        md:mx-auto md:mt-10
        p-4 max-w-120
        lg:mx-0
        ">
            {/* Title */}
            <h2 className="text-[36px] font-bold text-[#0B0B0B] leading-tight">
                Форма заявки
            </h2>

            {/* Subtitle */}
            <p className="mt-2 text-[15px] leading-relaxed text-[#6B7280]">
                Первое тестирование и пробный урок бесплатно. Договор с гарантией результата.
                Свяжемся за 15 минут.
            </p>

            {/* Fields */}
            <div className="mt-5 space-y-4">
                {/* Name */}
                <div>
                    <label className="text-[13px] text-[#6B7280]">Ваше имя:</label>
                    <input
                        type="text"
                        defaultValue="Андрей"
                        className="mt-2 w-full rounded-[10px] border border-[#D7E6FF] px-4 py-3 text-[14px] text-[#111827] outline-none focus:border-[#2F80ED] focus:ring-2 focus:ring-[#2F80ED]/20"
                        placeholder="Введите имя"
                    />
                </div>

                {/* Phone */}
                <div>
                    <label className="text-[13px] text-[#6B7280]">Ваш Телефон / WhatsApp:</label>
                    <input
                        type="tel"
                        className="mt-2 w-full rounded-[10px] border border-[#D7E6FF] px-4 py-3 text-[14px] text-[#111827] outline-none focus:border-[#2F80ED] focus:ring-2 focus:ring-[#2F80ED]/20"
                        placeholder="+7 (777) 777-77-77"
                    />
                </div>
            </div>

            {/* Button */}
            <button className="mt-6 w-full rounded-full bg-[#0076B7] py-[14px] text-[14px] font-semibold text-white shadow-[0_10px_25px_rgba(3,48,136,0.25)] hover:opacity-95 active:scale-[0.99] transition">
                Записаться на бесплатное тестирование
            </button>

            {/* Note */}
            <p className="mt-4 text-[14px] leading-relaxed text-[#9CA3AF]">
                Ваши данные в безопасности. Политика конфиденциальности, Никакого спама.
            </p>
        </div>
    );
}