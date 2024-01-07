import React from 'react'

function Recommended() {
    function Recommended(props){
        return (
            <div className="recommended-box">
            <div className="recommended-img">
                <img src={props.img} alt="" />
            </div>
            <div className="recommended-titles">
                <h3 className="recommended-title">{props.title}</h3>
                <p className='recommended-subtitle'>{props.subtitle}</p>
            </div>
        </div>
        )
    }
  return (
   <section className='recommended'>
    <div className="container">
        <div className="recommended-head">
            <h3 className='recommended-head__title'>Recommended items</h3>
        </div>
        <div className="recommended-row">
            <div className="recommended-box">
                <div className="recommended-img">
                    <img src="./images/img.png" alt="" />
                </div>
                <div className="recommended-titles">
                    <h3 className="recommended-title">$10.30</h3>
                    <p className='recommended-subtitle'>T-shirts with multiple colors, for men</p>
                </div>
            </div>
            <div className="recommended-box">
                <div className="recommended-img">
                    <img src="./images/img1.png" alt="" />
                </div>
                <div className="recommended-titles">
                    <h3 className="recommended-title">$10.30</h3>
                    <p className='recommended-subtitle'>Jeans shorts for men blue color</p>
                </div>
            </div>
            <div className="recommended-box">
                <div className="recommended-img">
                    <img src="./images/img2.png" alt="" />
                </div>
                <div className="recommended-titles">
                    <h3 className="recommended-title">$12.50</h3>
                    <p className='recommended-subtitle'>Brown winter coat medium size</p>
                </div>
            </div>
            <div className="recommended-box">
                <div className="recommended-img">
                    <img src="./images/img3.png" alt="" />
                </div>
                <div className="recommended-titles">
                    <h3 className="recommended-title">$34.00</h3>
                    <p className='recommended-subtitle'>Jeans bag for travel for men</p>
                </div>
            </div>
            <div className="recommended-box">
                <div className="recommended-img">
                    <img src="./images/img4.png" alt="" />
                </div>
                <div className="recommended-titles">
                    <h3 className="recommended-title">$99.00</h3>
                    <p className='recommended-subtitle'>Leather wallet</p>
                </div>
            </div>
            <div className="recommended-box">
                <div className="recommended-img">
                    <img src="./images/img5.png" alt="" />
                </div>
                <div className="recommended-titles">
                    <h3 className="recommended-title">$9.99</h3>
                    <p className='recommended-subtitle'>Canon camera black, 100x zoom</p>
                </div>
            </div>
            <div className="recommended-box">
                <div className="recommended-img">
                    <img src="./images/img6.png" alt="" />
                </div>
                <div className="recommended-titles">
                    <h3 className="recommended-title">$8.99</h3>
                    <p className='recommended-subtitle'>Headset for gaming with mic</p>
                </div>
            </div>
            <div className="recommended-box">
                <div className="recommended-img">
                    <img src="./images/img4.png" alt="" />
                </div>
                <div className="recommended-titles">
                    <h3 className="recommended-title">$99.00</h3>
                    <p className='recommended-subtitle'>Leather wallet</p>
                </div>
            </div>
            <div className="recommended-box">
                <div className="recommended-img">
                    <img src="./images/img7.png" alt="" />
                </div>
                <div className="recommended-titles">
                    <h3 className="recommended-title">$10.30</h3>
                    <p className='recommended-subtitle'>Blue wallet for men leather metarfial</p>
                </div>
            </div>
            <div className="recommended-box">
                <div className="recommended-img">
                    <img src="./images/img8.png" alt="" />
                </div>
                <div className="recommended-titles">
                    <h3 className="recommended-title">$80.95</h3>
                    <p className='recommended-subtitle'>Jeans bag for travel for men</p>
                </div>
            </div>
        </div>
    </div>
   </section>
  )
}

export default Recommended;
