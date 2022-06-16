import React, { useEffect, useRef, useState } from "react";

import "./Slider.css";

const Slider = ({ imgList }) => {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);
    const delay = 2000;

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(() =>
            setIndex((prevIndex) =>
                prevIndex === imgList.length - 1 ? 0 : prevIndex + 1
            ), delay);

        return () => {
            resetTimeout();
        };
    }, [index])

    return (
        <div className="slider-container image-slider">
            <div
                className="slider-show image-show"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {imgList.map((img, index) => (
                    <div className="slide" key={index}>
                        <div className="slide-wrapper">
                            <img src={img} alt={index} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slider;
