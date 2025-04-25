'use client';
import { useState } from 'react';
import { FaPlus } from "react-icons/fa6";



const faqItems = [
    {
        question: 'How accurate are your AI summaries?',
        answer: 'Your free trial ends automatically after 3 days - unless you choose to stick around. Cancel anytime in one click.',
    },
    {
        question: 'What happens when my 3-day trial ends?',
        answer: 'Your free trial ends automatically after 3 days – unless you choose to stick around. Cancel anytime in one click.',
    },
    {
        question: 'How do mind maps enhance the learning experience?',
        answer: 'Your free trial ends automatically after 3 days - unless you choose to stick around. Cancel anytime in one click.',
    },
    {
        question: 'Does Summary.gg work with all YouTube videos?',
        answer: 'We support the majority of public YouTube videos, especially educational and lecture content.',
    },
    {
        question: 'Where are my invoices?',
        answer: 'Your free trial ends automatically after 3 days - unless you choose to stick around. Cancel anytime in one click.',
    },
    {
        question: 'Can I cancel?',
        answer: 'Yes, you can cancel anytime with one click in your account dashboard.',
    },
];

const FAQs = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);


    const toggleFAQ = (index: number) => {
        setActiveIndex(prevIndex => (prevIndex === index ? null : index));
    };

    return (
        <section className="px-[18px] pt-6">
            <div className="w-full max-w-[1224px] mx-auto">
                <div className="text-center mb-9 md:mb-12 space-y-3 md:space-y-0">
                    <h2 className="font-semibold text-[35px] md:text-[60px] leading-[45px] md:leading-[110px] tracking-[-2px]">
                        Got Questions? <span className="faqs_heading">We're Here for You!</span>
                    </h2>
                    <p className="font-medium text-sm md:text-2xl leading-[20px] md:leading-[42px] tracking-[-0.5px]">
                        Curious about how it all works? Check out our FAQs for quick answers to your most common questions, and discover how we’re revolutionizing the way you learn.
                    </p>
                </div>

                <div className="space-y-3 md:space-y-6">
                    {faqItems.map((item, index) => (
                        <div
                            key={index}
                            className={`border border-[#00000021] rounded-[10px] transition-all duration-300 ${activeIndex === index ? 'bg-[#009EFF] text-white/90' : 'bg-white text-black/90'
                                }`}
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex justify-between items-center gap-4 text-left px-5 py-4 md:py-6 font-medium text-base md:text-[22px] tracking-[-0.5px] leading-[32px] md:leading-[42px]"
                            >
                                <span className='flex-1'>{item.question}</span>
                                <span>
                                    <FaPlus className={`text-2xl transition-all duration-300 ${activeIndex === index ? "-rotate-45" : "rotate-0"}`} />
                                </span>
                            </button>

                            {activeIndex === index && (
                                <div className="px-5 pb-5 text-base md:text-[22px] font-normal leading-[32px] md:leading-[42px] tracking-[-0.5px]">
                                    {item.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQs;
