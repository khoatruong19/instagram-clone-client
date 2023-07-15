import { useCallback, useState } from "react";

const useToggle = (defaultValue = false) => {
    const [value, setValue] = useState(defaultValue)

    const toggle = useCallback(() => setValue(prev => !prev), [])

    return {
        value, setValue, toggle
    }
};

export default useToggle
