import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

// Compnents
import Navbar from './components/Navbar/Navbar';
import Slider from './components/Slider/Slider';
import Button from './components/Button/Button';

// CSS
import './App.css';

const commaNumber = require('comma-number')

function App() {
    const [data, setData] = useState([]);
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);
    const delay = 10000;

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(() =>
            setIndex((prevIndex) =>
                prevIndex === data.length - 1 ? 0 : prevIndex + 1
            ), delay);

        return () => {
            resetTimeout();
        };
    }, [index])

    useEffect(() => {
        axios.get('https://dummyjson.com/products?skip=5&limit=10')
            .then(res => {
                setData(res.data.products);
            })
            .catch(err => console.log("Error : " + err))
    }, [])

    return (
        <div className="container">
            <Navbar />

            <div className="discount-info">
                <div className="discount-content" lang="th">
                    <p>นำสมาร์ทโฟนของคุณมาแลก เพื่อรับเครดิตมูลค่าสูงสุด ฿17,100 สำหรับใช้ซื้อเครื่องใหม่*</p>
                    <label className="link-more">ดูเพิ่มเติม</label>
                </div>
            </div>

            <div className="slider-container product-page">
                <div
                    className="slider-show"
                    style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
                >
                    {data.map((item, i) => (
                        <div className="product-section" key={i}>
                            <div className="product-section-wrapper">

                                {/* Title */}
                                <div className="product-title">
                                    {item.title}
                                </div>

                                {/* Description */}
                                <div className="product-desc">
                                    {item.description}
                                </div>

                                {/* Price */}
                                <div className="product-price" lang="th">
                                    เริ่มต้นที่ ${commaNumber(item.price)}
                                </div>

                                {/* Link button group */}
                                <div className="product-link" lang="th">
                                    <Button label="ซื้อ" />
                                    <label className="link-more">ดูเพิ่มเติม</label>
                                </div>

                                {/* Image */}
                                <Slider imgList={item.images} />

                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default App;
