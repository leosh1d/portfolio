import {motion} from 'motion/react';
import Heading from "../../../atoms/heading";
import {useRouter} from "next/router";
import {d_benefits} from "../../../dictionary";

export const TechReview = () => {
    const lang = useRouter().locale || "en"
    return (
        <div
            className="rounded-3xl flex flex-col md:text-xl overflow-hidden relative w-full h-full justify-center items-center bg-gray_medium dark:bg-black_medium duration-200 transition-colors bg-gray-100 px-4 lg:px-6 shadow-md">
            <Heading additional_class="m-4 lg:m-6 w-full">{d_benefits.interview[lang]}</Heading>
            <div className='relative inline-flex w-96 justify-center items-center py-12'>
                <motion.div
                    className="absolute w-24 h-24 bg-gray-800 rounded-full flex"
                    animate={{
                        x: [
                            80, 80, 100, 100, -80, -80, 80
                        ],
                        y: [
                            -100, -100, 55, 55, 75, 75, -100
                        ],
                        rotate: [
                            0, 0, 0, 0, 90, 90, 0
                        ]
                    }}
                    transition={{
                        duration: 5,
                        ease: "easeInOut",
                        repeat: Infinity,
                    }}
                >
                    <div className='absolute top-11 left-3.5 backdrop-blur-[2px] w-12 h-12 rounded-full z--1'></div>

                    <svg width="155" height="155" viewBox="0 0 155 155" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="61.5" cy="61.5" r="29.5" fill="currentColor" fillOpacity="0.1"/>

                        <path
                            d="M100.104 90.4167H95.0021L93.1938 88.6729C99.7422 81.0784 103.341 71.3821 103.333 61.3542C103.333 53.0515 100.871 44.9352 96.2586 38.0318C91.6459 31.1284 85.0896 25.7478 77.4189 22.5705C69.7482 19.3932 61.3076 18.5619 53.1645 20.1816C45.0213 21.8014 37.5413 25.7995 31.6704 31.6704C25.7995 37.5413 21.8014 45.0213 20.1816 53.1645C18.5619 61.3076 19.3932 69.7482 22.5705 77.4189C25.7478 85.0896 31.1284 91.6459 38.0318 96.2586C44.9352 100.871 53.0515 103.333 61.3542 103.333C71.7521 103.333 81.3104 99.5229 88.6729 93.1938L90.4167 95.0021V100.104L122.708 132.331L132.331 122.708L100.104 90.4167ZM61.3542 90.4167C45.2729 90.4167 32.2917 77.4354 32.2917 61.3542C32.2917 45.2729 45.2729 32.2917 61.3542 32.2917C77.4354 32.2917 90.4167 45.2729 90.4167 61.3542C90.4167 77.4354 77.4354 90.4167 61.3542 90.4167Z"
                            fill="currentColor"/>
                        <defs>
                            <filter id="filter0_b_1903_90" x="20" y="20" width="83" height="83"
                                    filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                <feGaussianBlur in="BackgroundImageFix" stdDeviation="6"/>
                                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1903_90"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1903_90"
                                         result="shape"/>
                            </filter>
                        </defs>
                    </svg>
                </motion.div>
                <svg width="293" height="274" viewBox="0 0 293 274" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M60.8541 1.1543C68.9239 1.1543 76.6631 4.32042 82.3693 9.95615C88.0755 15.5919 91.2812 23.2356 91.2812 31.2057C91.2812 39.1759 88.0755 46.8196 82.3693 52.4553C76.6631 58.091 68.9239 61.2572 60.8541 61.2572C52.7844 61.2572 45.0451 58.091 39.339 52.4553C33.6328 46.8196 30.4271 39.1759 30.4271 31.2057C30.4271 23.2356 33.6328 15.5919 39.339 9.95615C45.0451 4.32042 52.7844 1.1543 60.8541 1.1543ZM60.8541 76.2829C94.4761 76.2829 121.708 89.7309 121.708 106.334V117.089C121.708 119.448 119.772 121.36 117.384 121.36H4.32466C1.93622 121.36 0 119.448 0 117.089V106.334C0 89.7309 27.2322 76.2829 60.8541 76.2829Z"
                        fill="currentColor"/>
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M151.76 10.0323C151.76 4.63833 156.151 0.265625 161.568 0.265625H283.193C288.61 0.265625 293.001 4.63833 293.001 10.0323C293.001 15.4263 288.61 19.7991 283.193 19.7991H161.568C156.151 19.7991 151.76 15.4263 151.76 10.0323Z"
                          fill="currentColor" fillOpacity="0.25"/>
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M0 161.792C0 156.398 4.37271 152.025 9.76671 152.025H283.235C288.629 152.025 293.001 156.398 293.001 161.792C293.001 167.186 288.629 171.559 283.235 171.559H9.76671C4.37271 171.559 0 167.186 0 161.792Z"
                          fill="currentColor" fillOpacity="0.25"/>
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M151.76 59.6124C151.76 54.2184 156.151 49.8457 161.568 49.8457H283.193C288.61 49.8457 293.001 54.2184 293.001 59.6124C293.001 65.0064 288.61 69.3791 283.193 69.3791H161.568C156.151 69.3791 151.76 65.0064 151.76 59.6124Z"
                          fill="currentColor" fillOpacity="0.25"/>
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M0 212.88C0 207.486 4.37271 203.113 9.76671 203.113H283.235C288.629 203.113 293.001 207.486 293.001 212.88C293.001 218.274 288.629 222.647 283.235 222.647H9.76671C4.37271 222.647 0 218.274 0 212.88Z"
                          fill="currentColor" fillOpacity="0.25"/>
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M151.76 110.704C151.76 105.31 156.151 100.938 161.568 100.938H283.193C288.61 100.938 293.001 105.31 293.001 110.704C293.001 116.098 288.61 120.471 283.193 120.471H161.568C156.151 120.471 151.76 116.098 151.76 110.704Z"
                          fill="currentColor" fillOpacity="0.25"/>
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M0 263.97C0 258.576 4.37271 254.203 9.76671 254.203H283.235C288.629 254.203 293.001 258.576 293.001 263.97C293.001 269.364 288.629 273.737 283.235 273.737H9.76671C4.37271 273.737 0 269.364 0 263.97Z"
                          fill="currentColor" fillOpacity="0.25"/>
                </svg>

            </div>

        </div>
    );
};

