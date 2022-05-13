import styled from "@emotion/styled"
import { useState } from "react"
import { SliderLeftArrow, SliderRightArrow } from "./icons"
import { slideItems } from "../data/dummy_data";


const Wrapper = styled.div`
    display: flex;
    transform: translateX(${(props)=>props.index* -100}vw);
    transition: all 1.5s ease;
`

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    
    const handleClick = (direction) => {
        if(direction === "left") slideIndex > 0 ? setSlideIndex(slideIndex-1): setSlideIndex(slideItems.length-1);
        else slideIndex < slideItems.length-1 ? setSlideIndex(slideIndex+1): setSlideIndex(0);
    };

    return (
        <div className="h-screen w-full flex overflow-hidden">
            <div onClick={()=>{handleClick("left")}} className="z-10 w-12 h-12 rounded-full cursor-pointer bg-gray-50 opacity-50 flex justify-center items-center absolute top-0 bottom-0 left-0 m-auto ml-3 hover:ml-2">
                <SliderLeftArrow color="action" size={"medium"}/>
            </div>
            <Wrapper index={slideIndex}>
                {
                    slideItems.map((item)=>{
                        console.log(item.bg); //${item.bg}
                        return (
                            <div key={item.id} className={`flex items-center h-screen w-screen bg-[#D5D6FF]`}>
                                <div className="flex-1 h-full flex justify-center">
                                    <img className="h-4/5" alt="img" src={item.img}/>
                                </div>
                                <div className="flex-1 p-12">
                                    <h1 className="text-7xl">{item.title}</h1>
                                    <p className="mx- my-12 text-xl font-medium tracking-wide">{item.description}</p>
                                    <button className="p-3 text-xl bg-transparent border-2 border-black cursor-pointer">SHOP NOW</button>
                                </div>
                            </div>
                        );
                    })
                }
                
            </Wrapper>
            <div onClick={()=>{handleClick("right")}}  className="z-10 w-12 h-12 rounded-full cursor-pointer bg-gray-50 opacity-50 flex justify-center items-center absolute top-0 bottom-0 right-0 m-auto mr-3 hover:mr-2">
                <SliderRightArrow color="action" size={"medium"}/>
            </div>
        </div>
    )
}

export default Slider