
import FireIcon from '../../assets/fire_icon.svg'
import Stars from "../../assets/stars.svg"

const Pricing = () => {
    return (
        <section className='px-[18px] pt-14'>
            <div className='w-full max-w-[948px] mx-auto'>
                <div className='space-y-1 text-center'>
                    <h2 className='font-semibold text-[29px] md:text-[60px] leading-[35px] md:leading-[110px] tracking-[-2px]'>
                        Simple Pricing, <span className='pricing_heading font-medium'>Rebel Power</span>
                    </h2>

                    <p className='font-medium text-[13px] md:text-2xl leading-[20px] md:leading-[42px] tracking-[-0.5px]'>
                        No fee traps, no guru garbage - just one Pro Plan that cuts through the clutter and feels like boosting your smarts 5x.
                    </p>
                </div>

                <div className='pricing_box_container rounded-[20px] md:rounded-[36px] p-[10px] md:p-[14px] overflow-hidden max-w-[700px] w-full mx-auto mt-10 md:mt-14'>
                    <div className='pricing_box_subcontainer rounded-2xl md:rounded-[20px] px-[14px] md:px-7 py-5 md:py-9'>
                        <div className='flex items-center gap-3'>
                            <h2 className='text-3xl md:text-4xl font-medium md:leading-[42px] tracking-[-1px]'>Pro Plan</h2>

                            <div className='bg-[#009EFF] rounded py-[5px] px-[6px] flex items-center gap-1 font-medium text-[10px] md:text-base text-white tracking-[-0.5%]'>
                                <img src={FireIcon} alt="fire_icon" />
                                One Plan to Rule Your Attention Span
                            </div>
                        </div>

                        <p className='text-sm md:text-[22px] font-normal leading-[27px] md:leading-[36px] tracking-[-0.38px] md:tracking-[-0.5px] mt-4'>
                            3-day free trial. No hidden fees. No surprise tariffs. <br />
                            Cancel in one click.
                        </p>


                        <div className='flex items-end w-full gap-3 mt-10 md:mt-14 pb-4 md:pb-8 border-b border-[#D4D4D4]'>
                            <p className='font-semibold text-[42px] md:text-[65px] leading-[32px] md:leading-[42px] tracking-[-3px]'>$28 </p>
                            <p className='font-normal text-sm md:text-lg'> /per month</p>
                        </div>

                        <div className='pt-6'>
                            <p className='text-sm md:text-[22px] font-medium leading-[25px] md:leading-[32px] tracking-[-0.38px] md:tracking-[-0.5px] mb-3'>
                                What's Included:
                            </p>

                            <ul className='space-y-4 text-sm md:text-[22px] font-normal leading-[25px] md:leading-[42px]'>
                                <li>
                                    💠  Unlimited AI summaries - no limits, ya ad-dodgin’ genius!
                                </li>

                                <li>
                                    💠  Summarize videos up to 12 hours long - Extract key insights from lectures, tutorials, podcasts, whatever.
                                </li>

                                <li>
                                    💠  AI-Generated Mindmaps – Visualize connections between concepts.
                                </li>

                                <li>
                                    💠  Precision takeaways - Identify the most valuable moments without watching entire videos.
                                </li>
                            </ul>
                        </div>

                        <p className='text-[#F39C11] text-xs md:text-[22px] md:leading-[35px] font-normal mt-10 mb-12 md:mb-20'>
                            Warning: So effective, you might start skipping full videos on instinct – if that’s your thing.
                        </p>

                        <button className="bg-[#009EFF] text-white text-base md:text-2xl font-medium px-5 md:px-[30px] py-4 md:py-[20px] rounded-md md:rounded-[10px] flex items-center justify-center cursor-pointer gap-3 hover:bg-opacity-90 transition-all duration-300 w-full">
                            <img src={Stars} alt="stars" loading='lazy' className="h-5 md:h-auto" />
                            Start 3–Day Trial
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing
