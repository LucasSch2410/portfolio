import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import * as hotsites from "../../utils/hotsitesHandler"
import { motion, useAnimation, useInView } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

type HotsiteArray = {
    name: string,
    url: string
}

export function SliderHotsite() {
    const [hotsitesArray, setHotsitesArray] = useState<HotsiteArray[]>([]);

    useEffect(() => {
        const newArray: HotsiteArray[] = [];
        for (const [key, value] of Object.entries(hotsites)) {
            newArray.push({ name: key, url: value });
        }
        setHotsitesArray(newArray);
    }, []);

    const hotsiteControls = useAnimation();
    const hotsiteRef = useRef(null)
    const hotsiteIsInView = useInView(hotsiteRef, { amount: 0.5 });

    useEffect(() => {
        if (hotsiteIsInView) {
            hotsiteControls.start("visible");
        } else {
            hotsiteControls.start("hidden");
        }

    }, [hotsiteIsInView]);

    const belowAnimation = {
        hidden: {
            opacity: 0,
            y: 20,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.3,
                duration: 0.2,
            },
        },
    };

    return (
        <motion.div ref={hotsiteRef} className="py-8" variants={belowAnimation} initial="hidden" animate={hotsiteControls}>
            <h2 className="text-3xl lg:text-4xl font-bold text-white pb-5">Hotsites</h2>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                navigation={true}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="mySwiper"
            >
                {hotsitesArray.map((hot, index) => (
                    <SwiperSlide key={index}>
                        <img src={hot.url} alt={hot.name} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </motion.div>
    );


}


