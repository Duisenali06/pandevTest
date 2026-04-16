
function StepsFeature({name , description, text , work }) {
    return (
        <>
            <div className={`px-8 py-8 max-w-187 max-w-full border rounded-[32px] ${work ? 'bg-[#0076B7]' : '' } `} >
                <p className={`font-bold text-[22px] leading-[110%] tracking-[-0.01em] 
                ${work ? 'text-white' : ''}
                `} >{name}</p>
                {work && (
                    <>
                        <p className='text-white py-4' >{description}</p>
                        <p className='text-white' >{text}</p>
                    </>

                )}

            </div>
        </>
    );
}

export default StepsFeature;