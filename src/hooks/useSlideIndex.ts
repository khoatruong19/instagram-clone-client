import { useState } from "react"

const useSlideIndex = (maxIndex: number = 0) => {
    const [index, setIndex] = useState(0)

    const handleSlideIndex = (dir: "increase" | "decrease") => {
        if(dir === "increase"){
            setIndex(prev => prev < maxIndex ? prev + 1 : prev)
            return
        }
        setIndex(prev => prev > 0 ? prev - 1 : 0)
    }

    return {index, handleSlideIndex}
}

export default useSlideIndex