import styled from "@emotion/styled"
import { useState } from "react"
import { SliderLeftArrow, SliderRightArrow } from "./icons"


const Wrapper = styled.div`
    display: flex;
    transform: translateX(${(props)=>props.index* -100}vw);
`



const slideItems = [
    {
        id:1,
        img: "https://png.pngtree.com/png-clipart/20210502/original/pngtree-fashion-street-male-model-png-image_6269795.jpg",
        title:"SUMMER SALE",
        description: "DON'T COMPROSIME ON STYLE! GET FLAT 30% ON NEW ARRIVALS.",
        bg : "",
    },
    {
        id:2,
        img: "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        title:"TREND SALE",
        description: "DON'T MISS THIS TRENDY SHASION! IT'S AWESOME.",
        bg : "",
    },
    {
        id:3,
        img: "https://images.pexels.com/photos/794063/pexels-photo-794063.jpeg?auto=compress&cs=tinysrgb&w=600",
        title:"TOP SALE",
        description: "Tessa Thompson Walks Her Dog in Sky-High Platforms.",
        bg : "",
    },
]

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    
    const handleClick = (direction) => {
        if(direction === "left") slideIndex > 0 ? setSlideIndex(slideIndex-1): setSlideIndex(2);
        else slideIndex < 2 ? setSlideIndex(slideIndex+1): setSlideIndex(0);
    };

    return (
        <div className="h-screen w-full flex overflow-hidden">
            <div onClick={()=>{handleClick("left")}} className="z-10 w-12 h-12 rounded-full cursor-pointer bg-gray-50 opacity-50 flex justify-center items-center absolute top-0 bottom-0 left-0 m-auto ml-3 hover:ml-2">
                <SliderLeftArrow color="action" size={"medium"}/>
            </div>
            <Wrapper index={slideIndex}>
                {
                    slideItems.map((item)=>{
                        return (
                            <div key={item.id} className="flex items-center h-screen w-screen bg-teal-50">
                                <div className="flex-1 h-full">
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