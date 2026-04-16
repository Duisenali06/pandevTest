import girl from '../assets/images/girl.png'
import tower from '../assets/images/tower.png'
function FirstSection(props) {
    return (
        <>
            <section className='
            xl:px-16 xl:py-20
            ' >
                <div className='' >
                    <div className='relative rounded-[32px] flex flex-col  bg-blue-500


                    xl:gap-y-10 xl:pl-18 xl:py-32
                    '>
                        <h1 className='font-bold  text-white leading-[105%] tracking-[-0.01em]
                        lg:text-[36px]
                        xl:text-[56px]
                        ' >
                            Английский для детей <br/>
                            7-17 лет с гарантией <br/>
                            +1 уровень за 5 месяцев</h1>
                        <p className='text-white' >Мы не просто ведём уроки. Определяем реальный уровень, <br/>
                            подбираем группу ровесников и гарантируем результат по договору. <br/>
                            Онлайн и оффлайн в Алматы.
                        </p>
                        <div>
                            <button className=' px-6 py-5 rounded-full text-black bg-white' >Пройти бесплатное тестирование</button>
                            <button className=' px-6 py-5 rounded-full text-white border border-white'>Как мы гарантируем результат</button>
                        </div>

                        <img
                            src={tower}
                            alt=""
                            className="
                                {/*h-[380px]*/}
                                {/*w-[170px]*/}
                                absolute
                                right-80 top-5
                                w-[170px]
                                opacity-70
                                -rotate-18

                              "
                        />

                        {/* GIRL */}
                        <img
                            src={girl}
                            alt=""
                            className="
                                w-140
                                absolute
                                right-8 bottom-0

                                object-contain
                                pointer-events-none
                              "
                        />



                        <div className="absolute -bottom-20 right-18 w-[850px] max-w-[92%]">
                            <div className="
                            rounded-[32px]
                            bg-white/50
                            backdrop-blur-[40px]
                            shadow-[0_24px_84px_rgba(0,0,0,0.08)]
                            px-10 py-8
                        ">
                                <div className="grid grid-cols-3 text-center items-center">

                                    <div>
                                        <div className="text-[40px] font-bold text-blue-600">100%</div>
                                        <div className="text-black/60 text-sm mt-2">
                                            получают +1 уровень за 5 месяцев
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <div className="absolute left-0 top-1/2 -translate-y-1/2 h-16 w-px bg-black/10" />
                                        <div className="absolute right-0 top-1/2 -translate-y-1/2 h-16 w-px bg-black/10" />

                                        <div className="text-[40px] font-bold text-blue-600">1500+</div>
                                        <div className="text-black/60 text-sm mt-2">
                                            довольных родителей
                                        </div>
                                    </div>

                                    <div>
                                        <div className="text-[40px] font-bold text-blue-600">4.9/5</div>
                                        <div className="text-black/60 text-sm mt-2">
                                            средняя оценка
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </section>
        </>
    );
}

export default FirstSection;