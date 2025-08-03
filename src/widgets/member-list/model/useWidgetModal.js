import {  useState } from "react"

export const useWidgetModal = () => {
    // дефолтно false - значит сетка
    const [stateGridOrSwiper, setStateGridOrSwiper] = useState(false);
    
    // переключатель между состояниями отображения
    const handleStateGridOrSwiper = () => {
        setStateGridOrSwiper((prev) => !prev)
    }

    return {
        stateGridOrSwiper,
        setStateGridOrSwiper,
        handleStateGridOrSwiper
    }
}