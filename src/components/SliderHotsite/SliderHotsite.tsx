import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import * as hotsites from "../../utils/hotsitesHandler"

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { useMouseContext } from '../../context/mouseContext';

type HotsiteArray = {
    name: string,
    url: string
}

export const SliderHotsite = () => {
    const [loading, setLoading] = useState(false);
    const [hotsitesArray, setHotsitesArray] = useState<HotsiteArray[]>([]);
    const {setCursorVariant} = useMouseContext();

    useEffect(() => {
        const newArray: HotsiteArray[] = [];
        for (const [key, value] of Object.entries(hotsites)) {
            newArray.push({ name: key, url: value });
        }
        setHotsitesArray(newArray);

        setTimeout(() => {
            setLoading(true)
        }, 1000);
    }, []);


    return !loading ? "" : (
        <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white pb-5 w-fit"
            onMouseEnter={() => setCursorVariant("titles")} onMouseLeave={() => setCursorVariant("default")}>
                Hotsites
            </h2>
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
        </div>
    );
}


