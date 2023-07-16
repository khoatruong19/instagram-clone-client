import { useState } from "react"

const useSlideIndex = (maxIndex: number = 0) => {
    const [index, setIndex] = useState(0)

    const handleSlideIndex = (dir: "increase" | "decrease") => {
        console.log({dir})
        if(dir === "increase"){
            setIndex(prev => prev < maxIndex ? prev + 1 : prev)
            console.log({index})
            return
        }
        setIndex(prev => prev > 0 ? prev - 1 : 0)
        console.log({index})
    }

    return {index, handleSlideIndex}

    console.log({index})
}

export default useSlideIndex