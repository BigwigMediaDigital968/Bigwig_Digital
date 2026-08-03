import React, { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import Slider from 'react-slick';
import ButtonFill from '../../../../components/Button';
import WhatsAppCtaButton from '../../../../components/Buttons/WhatsAppCtaButton';

interface ProcessItem {
    title: string;
    content: string;
}

interface SmoProcessSectionProps {
    processItems: ProcessItem[];
    setIsPopupOpen: (isOpen: boolean) => void;
}

export default function ModernSmoProcess({
    processItems,
    setIsPopupOpen,
}: SmoProcessSectionProps) {

    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [isHovered, setIsHovered] = useState<boolean>(false); // Track hover state

    useEffect(() => {
        if (!processItems.length || isHovered) return; // Pause interval if hovered

        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % processItems.length);
        }, 3500);

        return () => clearInterval(interval);
    }, [processItems.length, isHovered]); // re-run effect when hover state changes

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.1 }
        }
    };

    const lineVariants: Variants = {
        hidden: { scaleX: 0 },
        visible: { scaleX: 1, transition: { duration: 0.8, ease: "easeInOut" } }
    };

    const nodeVariants: Variants = {
        hidden: { scale: 0, opacity: 0 },
        visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 200, damping: 15 } }
    };

    const cardVariants = (isAbove: boolean): Variants => ({
        hidden: { opacity: 0, y: isAbove ? -40 : 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 90, damping: 14 }
        }
    });
    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        arrows: false,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2500,
        pauseOnHover: false,
    };

    return (
        <section className="w-11/12 md:w-5/6 mx-auto min-h-screen flex flex-col justify-between py-8 relative overflow-hidden text-white">
            {/* Background Decorative Ambient Glows */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--color5)]/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[150px] pointer-events-none" />

            {/* Modern Section Header */}
            {/* <div className="relative z-10 max-w-3xl">
                <div className="flex items-center gap-2 mb-2">
                    <span className="h-[2px] w-8 bg-[var(--color5)]"></span>
                    <span className="text-xs font-bold tracking-widest text-[var(--color5)] uppercase">Strategic Roadmap</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-2">
                    Our Process for Effective <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color5)] to-cyan-400">SMO Services in Delhi</span>
                </h2>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                    Each aspect of our Social Media Optimization Services in Delhi is designed to enhance your visibility, engagement, and brand trust:
                </p>
            </div> */}

            <div className="mb-4">
                <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color5)] mb-4">
                    Here's Exactly How We Grow Your Social Presence, Step by Step
Keep the grid as it is
                </h2>

                <p className="text-gray-200 text-base md:text-lg leading-relaxed">
                    Each aspect of our Social Media Optimization Services in Delhi is
                    designed to enhance your visibility, engagement, and brand trust:
                </p>
            </div>

            {/* ================== ALTERNATING HORIZONTAL TIMELINE ================== */}
            <div className="relative my-auto py-4 w-full flex items-center z-10">

                {/* MOBILE VIEW */}
                <div className="block lg:hidden w-full">
                    <Slider {...settings}>
                        {processItems.map((item, index) => (
                            <div key={index} className="px-2 py-4">
                                
                                <div className="relative p-6 rounded-2xl backdrop-blur-xl bg-white/5  border border-white/10 overflow-hidden">
                                <div
                                                className="
                absolute inset-0 bg-gradient-to-br 
                from-transparent via-white/5 to-transparent
                opacity-0 group-hover:opacity-100
                transition-opacity duration-500
              "
                                            />

                                            {/* Shine Line */}
                                            <div
                                                className="
                absolute -top-full left-0 w-full h-full
                bg-gradient-to-r from-transparent via-[var(--color5)]/20 to-transparent
                rotate-45 group-hover:animate-shineLine
              "
                                            />
                                    <div className="absolute top-0 left-0 w-1 h-full bg-[var(--color5)]" />
                                    <span className="text-4xl font-black text-slate-800 absolute right-4 top-2 select-none">0{index + 1}</span>
                                    <h3 className="text-xl font-bold text-[var(--color5)] mb-3 relative z-10">{item.title}</h3>
                                    <p className="text-slate-300 text-sm leading-relaxed text-justify relative z-10">{item.content}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

                {/* DESKTOP VIEW: Perfect 3-Row Alternating Grid System */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="hidden lg:grid grid-cols-5 relative w-full h-[520px]"
                >
                    {/* Main Horizontal Central Line Track */}
                    <motion.div
                        variants={lineVariants}
                        className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-slate-900 via-[var(--color5)]/40 to-slate-900 z-0 transform -translate-y-1/2 origin-left"
                    />

                    {processItems.map((item, index) => {
                        const isAbove = index % 2 === 0;
                        const isActive = index === activeIndex;

                        return (
                            <div key={index} className={`relative flex flex-col items-center w-[280px] xl:w-[350px] h-full ${index === 0
                                ? 'justify-self-start'
                                : index === processItems.length - 1
                                    ? 'justify-self-end'
                                    : 'justify-self-center'
                                }`}>

                                {/* ================= ROW 1: TOP CARDS ================= */}
                                <div className="w-full h-[235px] flex flex-col justify-end items-center px-2 pb-2 xl:pb-6">
                                    {isAbove && (
                                        <motion.div
                                            variants={cardVariants(true)}
                                            animate={{
                                                y: isActive ? -8 : 0,
                                                borderColor: isActive ? "var(--color5)" : "rgba(51, 65, 85, 0.7)",
                                                boxShadow: isActive
                                                    ? "0 15px 35px rgba(0, 255, 255, 0.12), inset 0 0 15px rgba(0, 255, 255, 0.05)"
                                                    : "0 10px 25px rgba(0,0,0,0.4)"
                                            }}
                                            onMouseEnter={() => {
                                                setActiveIndex(index);
                                                setIsHovered(true); // Pauses the slider
                                            }}
                                            onMouseLeave={() => {
                                                setIsHovered(false); // Resumes the slider
                                            }}
                                            transition={{ duration: 0.5 }}
                                            className="relative p-5 rounded-2xl backdrop-blur-xl bg-white/5 border flex flex-col justify-between w-full h-[235px] overflow-hidden"
                                        >

                                            <div
                                                className="
                absolute inset-0 bg-gradient-to-br 
                from-transparent via-white/5 to-transparent
                opacity-0 group-hover:opacity-100
                transition-opacity duration-500
              "
                                            />

                                            {/* Shine Line */}
                                            <div
                                                className="
                absolute -top-full left-0 w-full h-full
                bg-gradient-to-r from-transparent via-[var(--color5)]/20 to-transparent
                rotate-45 group-hover:animate-shineLine
              "
                                            />

                                            {isActive && <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--color5)]/5 to-transparent pointer-events-none animate-pulse" />}
                                            <div>
                                                <div className="flex items-center justify-between">
                                                    <span className={`text-[10px] font-mono tracking-widest font-bold uppercase ${isActive ? 'text-[var(--color5)]' : 'text-slate-500'}`}>Phase 0{index + 1}</span>
                                                    <span className={`text-base font-black ${isActive ? 'text-slate-700/60' : 'text-slate-800'}`}>//</span>
                                                </div>
                                                <h3 className={`text-sm font-bold tracking-wide mb-2 transition-colors duration-500 ${isActive ? 'text-[var(--color5)]' : 'text-slate-100'}`}>{item.title}</h3>
                                                <p className={`text-sm leading-relaxed text-justify transition-colors duration-500 ${isActive ? 'text-white' : 'text-slate-300'}`}>{item.content}</p>
                                            </div>
                                            <div className={`h-[2px] bg-gradient-to-r from-[var(--color5)] to-cyan-400 transition-all duration-500 ${isActive ? 'w-full' : 'w-0'}`} />
                                        </motion.div>
                                    )}
                                </div>

                                {/* ================= ROW 2: CENTER TIMELINE JUNCTION ================= */}
                                <div className="relative w-full h-[50px] flex items-center justify-center">
                                    {/* Vertical Connectors */}
                                    {isAbove ? (
                                        <motion.div
                                            initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }}
                                            className="absolute bottom-1/2 w-[1px] h-6 bg-gradient-to-t from-[var(--color5)]/60 to-transparent origin-bottom"
                                        />
                                    ) : (
                                        <motion.div
                                            initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }}
                                            className="absolute top-1/2 w-[1px] h-6 bg-gradient-to-b from-[var(--color5)]/60 to-transparent origin-top"
                                        />
                                    )}

                                    {/* Node dot right on the central line track */}
                                    <motion.div
                                        variants={nodeVariants}
                                        animate={{
                                            borderColor: isActive ? "var(--color5)" : "rgba(71, 85, 105, 1)",
                                            boxShadow: isActive ? "0 0 20px var(--color5)" : "0 0 0px rgba(0,0,0,0)",
                                            scale: isActive ? 1.3 : 1
                                        }}
                                        className="w-4 h-4 rounded-full bg-slate-950 border-2 flex items-center justify-center z-20"
                                    >
                                        {isActive && <div className="w-1.5 h-1.5 rounded-full bg-[var(--color5)] animate-ping absolute opacity-75" />}
                                        <div className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-[var(--color5)]' : 'bg-slate-700'}`} />
                                    </motion.div>
                                </div>

                                {/* ================= ROW 3: BOTTOM CARDS ================= */}
                                <div className="w-full h-[235px] flex flex-col justify-start items-center px-2 pt-6">
                                    {!isAbove && (
                                        <motion.div
                                            variants={cardVariants(false)}
                                            animate={{
                                                y: isActive ? 8 : 0,
                                                borderColor: isActive ? "var(--color5)" : "rgba(51, 65, 85, 0.7)",
                                                boxShadow: isActive
                                                    ? "0 15px 35px rgba(0, 255, 255, 0.12), inset 0 0 15px rgba(0, 255, 255, 0.05)"
                                                    : "0 10px 25px rgba(0,0,0,0.4)"
                                            }}
                                             onMouseEnter={() => {
                                                setActiveIndex(index);
                                                setIsHovered(true); // Pauses the slider
                                            }}
                                            onMouseLeave={() => {
                                                setIsHovered(false); // Resumes the slider
                                            }}
                                            transition={{ duration: 0.5 }}
                                            className="relative p-5 rounded-2xl backdrop-blur-xl bg-white/5 border flex flex-col justify-between w-full h-[230px] overflow-hidden"
                                        >


                                            <div
                                                className="
                                                        absolute inset-0 bg-gradient-to-br 
                                                        from-transparent via-white/5 to-transparent
                                                        opacity-0 group-hover:opacity-100
                                                        transition-opacity duration-500
                                                    "
                                            />

                                            {/* Shine Line */}
                                            <div
                                                className="
                                                        absolute -top-full left-0 w-full h-full
                                                        bg-gradient-to-r from-transparent via-[var(--color5)]/20 to-transparent
                                                        rotate-45 group-hover:animate-shineLine
                                                    "
                                            />

                                            {isActive && <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--color5)]/5 to-transparent pointer-events-none animate-pulse" />}
                                            <div>
                                                <div className="flex items-center justify-between mb-2">
                                                    <span className={`text-[10px] font-mono tracking-widest font-bold uppercase ${isActive ? 'text-[var(--color5)]' : 'text-slate-500'}`}>Phase 0{index + 1}</span>
                                                    <span className={`text-base font-black ${isActive ? 'text-slate-700/60' : 'text-slate-800'}`}>//</span>
                                                </div>
                                                <h3 className={`text-sm font-bold tracking-wide mb-2 transition-colors duration-500 ${isActive ? 'text-[var(--color5)]' : 'text-slate-100'}`}>{item.title}</h3>
                                                <p className={`text-sm leading-relaxed text-justify transition-colors duration-500 ${isActive ? 'text-white' : 'text-slate-300'}`}>{item.content}</p>
                                            </div>
                                            <div className={`h-[2px] bg-gradient-to-r from-[var(--color5)] to-cyan-400 transition-all duration-500 ${isActive ? 'w-full' : 'w-0'}`} />
                                        </motion.div>
                                    )}
                                </div>

                            </div>
                        );
                    })}
                </motion.div>
            </div>

            {/* Action Footers */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 py-2 mt-auto relative z-20">
                <ButtonFill text="Start Your SMO Growth Journey" onClick={() => setIsPopupOpen(true)} />
                <WhatsAppCtaButton text="Start a WhatsApp Chat" message="Hi! I'm interested in your social media marketing services." />
            </div>
        </section>
    );
}