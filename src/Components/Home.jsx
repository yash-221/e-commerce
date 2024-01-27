import React from 'react'
import Products from './Products';

const Home = () => {
    return (
        <div className='hero'>
            <div className="card bg-dark text-dark border-0">
                <img src="/assets/bg.webp" className="card-img" alt="Background" height="410px" />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                        <h3 className="card-title display-4 fw-bold mb-0 ">NEW SEASON ARRIVALS</h3>
                        <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
                    </div>

                </div>
            </div>
            <Products />
        </div>
    );
}

export default Home
