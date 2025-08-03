import {  useState } from "react"

export const useWidgetModal = () => {
    // дефолтно true - значит сетка
    const [stateGridOrSwiper, setStateGridOrSwiper] = useState(true);
    
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