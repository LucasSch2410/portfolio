import { useEffect, useState } from "react"
import * as hotsites from "../../utils/hotsitesHandler"

type HotsiteArray = {
    name: string,
    url: string
} 

export default function Projects() {
    const [hotsitesArray, setHotsitesArray] = useState<HotsiteArray[]>([]);

    useEffect(() => {
        const newArray: HotsiteArray[] = [];
        for (const [key, value] of Object.entries(hotsites)) {
            newArray.push({ name: key, url: value });
        }
        setHotsitesArray(newArray);
    }, []);


    return (
        <main className="max-w-5xl mx-auto flex-col py-6 px-10 md:px-0">
            {hotsitesArray.map((hot, index) => (
                <img src={hot.url} alt={hot.name} key={index}/>
            ))}
        </main>
    )
  }
  