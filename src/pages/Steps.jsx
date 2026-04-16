import Button from '../shared/ui/Button.jsx'
import stepsData from '../shared/data/StepsData.jsx'
import StepsFeature from "../shared/ui/StepsFeature.jsx";
import {useEffect, useState} from "react";
import stepsimg from '../assets/images/steps_img.png'

function Steps() {
    const [activeIndex, setActiveIndex] = useState(0);

    // каждые 3 секунды меняем активный шаг
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(prev => (prev + 1) % stepsData.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <section className='px-16 mt-10' >
                <div className='pb-12' >
                    <Button>КАК МЫ РАБОТАЕМ</Button>
                    <h2 className="text-[40px] font-bold leading-[105%] tracking-[-0.01em] text-[#0B0B0B]">
                        5 шагов от первого урока <br />
                        до <span className="text-[#0076B7]">гарантированного результата</span>
                    </h2>
                </div>
                <div className='flex gap-x-10 ' >
                    <div className='flex flex-col gap-y-2 max-w-full' >
                        {stepsData.map((step, index) => (
                            <StepsFeature name={step.name} text={step.text} description={step.description} key={index} work={index ===activeIndex} />
                        ))}

                    </div>
                    <img className='w-131 object-cover rounded-[24px] ' src={stepsimg} alt=""/>
                </div>

            </section>
        </>
    );
}

export default Steps;