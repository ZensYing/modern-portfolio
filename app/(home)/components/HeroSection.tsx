import Link from 'next/link';
import React from 'react'
import MyButton from './MyButton';

export default function HeroSection() {
    return (
        <div className="min-h-[100vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-between max-sm:py-10 "  >
            <div className="space-y-10 text-center lg:text-left fadeRight " data-aos="fade-right">
                <h1 className="text-4xl lg:text-7xl font-bold">
                    Nice to meet you 👋<br /> {" "}
                    <span className="underline underline-offset-8 decoration-green-500">{"I'm Soratha."}</span>
                </h1>
                <p className="md:w-96 text-lg text-gray-300">
                    {"Based in Cambodia, I'm a Fullstack developer passionate about building a modern web application that users love."}
                </p>

                <Link href={"mailto:some@gmail.com"} className="inline-block group">
                    <div className="duration-300 transition-all hover:rotate-6 hover:scale-110">
                        <h1 className="text-3xl font-bold group-hover:text-green-500 duration-300 transition-all">Contact Me 📪</h1>
                        <div className="w-40 h-2 bg-green-500 rounded-full ">

                        </div>
                        <div className="w-40 h-2 bg-indigo-500 rounded-full translate-x-2">

                        </div>
                    </div>
                </Link>
            </div>

            <div className="relative fadeLeft" data-aos="fade-left">
                <div className="w-72 h-72 space-y-3 -rotate-[30deg] relative z-10">
                    <div className="flex gap-3 translate-x-8">
                        <div className="w-32 h-32 rounded-2xl bg-green-500"></div>
                        <div className="w-32 h-32 rounded-full bg-indigo-500"></div>
                    </div>
                    <div className="flex gap-3 -translate-x-8">
                        <div className="w-32 h-32 rounded-2xl bg-indigo-500"></div>
                        <div className="w-32 h-32 rounded-full bg-green-500"></div>
                    </div>
                </div>
                <div className="glow w-72 h-72 absolute lg:top-[10%] max-lg:top-[18%] ">

                </div>
                <div className=" absolute bottom-5 sm:bottom-14 left-0 z-20  ">
                    <MyButton title="See More👨🏻‍💻"  />
                </div>
            </div>

        </div>
    );
}
