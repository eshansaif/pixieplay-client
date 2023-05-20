import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full ">
                <div
                    id="slide1"
                    className="carousel-item relative w-full"
                >
                    <div
                        className="hero flex items-center justify-center w-full h-full bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url("/slider-1.jpg")` }}
                    >
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md text-white">
                                <h1 className="mb-5 text-5xl font-bold">Carry Dolls</h1>
                                <p className="mb-5 text-3xl">
                                    Roll Here, Play There, And Show The World How Much You Care!
                                </p>
                                <button className="btn btn-primary">Shop Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle bg-[#570df8]">
                            ❮
                        </a>
                        <a href="#slide2" className="btn btn-circle bg-[#570df8]">
                            ❯
                        </a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    {/* <img src="/slider-2.jpg" className="w-full" /> */}
                    <div className="hero min-h-screen w-full" style={{ backgroundImage: `url("/slider-2.jpg")` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md text-white f">
                                <h1 className="mb-5 text-5xl font-bold">Kitchen for Cuties</h1>
                                <p className="mb-5 text-3xl">Roll Here, Play There, And Show The World How Much You Care!</p>
                                <button className="btn btn-primary">Shop Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle bg-[#570df8]">❮</a>
                        <a href="#slide3" className="btn btn-circle bg-[#570df8]">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    {/* <img src="/slider-3.jpg" className="w-full" /> */}
                    <div className="hero min-h-screen w-full" style={{ backgroundImage: `url("/slider-3.jpg")` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md text-white f">
                                <h1 className="mb-5 text-5xl font-bold">Baby Sinks</h1>
                                <p className="mb-5 text-3xl">Roll Here, Play There, And Show The World How Much You Care!</p>
                                <button className="btn btn-primary">Shop Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle bg-[#570df8]">❮</a>
                        <a href="#slide4" className="btn btn-circle bg-[#570df8]">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    {/* <img src="/slider-4.jpg" className="w-full" /> */}
                    <div className="hero min-h-screen w-full" style={{ backgroundImage: `url("/slider-4.jpg")` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md text-white f">
                                <h1 className="mb-5 text-5xl font-bold">Zany Zoo</h1>
                                <p className="mb-5 text-3xl">Roll Here, Play There, And Show The World How Much You Care!</p>
                                <button className="btn btn-primary">Shop Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle bg-[#570df8] ">❮</a>
                        <a href="#slide1" className="btn btn-circle bg-[#570df8]">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;