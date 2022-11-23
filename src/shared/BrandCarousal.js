import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
const BrandCarousal = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://tse2.mm.bing.net/th?id=OIP.JRatfBao34xMYX6XbANVGgHaE8&pid=Api&P=0"
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://tse4.mm.bing.net/th?id=OIP.P8n9weKzpAex4RLWzYk9IgHaEK&pid=Api&P=0"
                        alt="Second slide"
                    />


                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://tse3.mm.bing.net/th?id=OIP.o346cvdBs2NUBIFqdsMCpwHaE-&pid=Api&P=0"
                        alt="Second slide"
                    />


                </Carousel.Item>

            </Carousel>
        </div>
    );
};

export default BrandCarousal;