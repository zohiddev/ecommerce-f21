import React from 'react'
import home_page from '../../assets/icon/home_page.svg'
import one from '../../assets/icon/001.svg'
import one1 from '../../assets/icon/002.svg'
import one2 from '../../assets/icon/003.svg'
import one3 from '../../assets/icon/004.svg'
function AdSection() {
    const adds = [
        {
            id: 1,
            name: "Soft chairs",
            usd: "19",
            img: "../../../public/images/1.png"
        },
        {
            id: 2,
            name: "Sofa & chair",
            usd: "19",
            img: "../../../public/images/2.png"
        },
        {
            id: 3,
            name: "Kitchen dishes",
            usd: "19",
            img: "../../../public/images/3.png"
        },
        {
            id: 4,
            name: "Smart watches",
            usd: "19",
            img: "../../../public/images/4.png"
        },
        {
            id: 5,
            name: "Kitchen mixer",
            usd: "100",
            img: "../../../public/images/5.png"
        },
        {
            id: 6,
            name: "Blenders",
            usd: "39",
            img: "../../../public/images/6.png"
        },
        {
            id: 7,
            name: "Home appliance",
            usd: "19",
            img: "../../../public/images/7.png"
        },
        {
            id: 8,
            name: "Coffee maker",
            usd: "10",
            img: "../../../public/images/8.png"
        }
    ]
    const adds1 = [

        {
            id: 9,
            name: "Smart watches",
            usd: "19",
            img: "../../../public/images/a1.png"
        },
        {
            id: 10,
            name: "Cameras",
            usd: "89",
            img: "../../../public/images/a2.png"
        },
        {
            id: 11,
            name: "Headphones",
            usd: "10",
            img: "../../../public/images/a3.png"
        },
        {
            id: 12,
            name: "Smart watches",
            usd: "90",
            img: "../../../public/images/a4.png"
        },
        {
            id: 13,
            name: "Gaming set",
            usd: "35",
            img: "../../../public/images/a5.png"
        },
        {
            id: 14,
            name: "Laptops & PC",
            usd: "340",
            img: "../../../public/images/a6.png"
        },
        {
            id: 15,
            name: "Smartphones",
            usd: "19",
            img: "../../../public/images/a7.png"
        },
        {
            id: 16,
            name: "Electric kattle",
            usd: "240",
            img: "../../../public/images/a8.png"
        }
    ]

    return (
        <div className="add-contents">
            <div className="container">
                <div className="content-all">
                    <div className="add-content">
                        <div className="add-main">
                            <h1 className="add-main_tytle">Home and outdoor</h1>
                            <button className="add-main_button">Source now</button>
                        </div>
                        <div className="add-products">
                            {adds.map((add) => (

                                <div className='product' key={add.id}> <button className='df'>
                                    <div className="products-content">
                                        <h3 className="product-name">{add.name}</h3>
                                        <span className="product-text">From</span>  <br />
                                        <span className="product-text cost">USD  {add.usd}</span>
                                    </div>
                                    <div className="product_img">
                                        <img src={add.img} alt="" />
                                    </div> </button>
                                </div>

                            ))}
                        </div>
                    </div>
                    <div className="add-content">
                        <div className="add-main two">
                            <h1 className="add-main_tytle">Consumer electronics and gadgets</h1>
                            <button className="add-main_button">Source now</button>
                        </div>
                        <div className="add-products">
                            {adds1.map((add1) => (
                                <div className='product' key={add1.id}>

                                    <button className="df">
                                        <div className="products-content">
                                            <h3 className="product-name">{add1.name}</h3>
                                            <span className="product-text">From</span>  <br />
                                            <span className="product-text cost">USD  {add1.usd}</span>
                                        </div>
                                        <div className="product_img">
                                            <img src={add1.img} alt="" />
                                        </div>
                                    </button>

                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="home-page-all">
                    <div className="home-page-block">
                        <h1 className='home-page-h1'>Home and outdoor</h1>
                        <div className="block-home-alll">
                            <div className="block-home">
                                <button>
                                    <div className="bg-card">
                                        <div className="bg-card-img"><img src={one} alt="" /></div>
                                        <div className="bg-card-name">Smart watches</div>
                                        <div className="bg-card-name">From USD 19</div>
                                    </div>
                                </button>
                            </div>
                            <div className="block-home">
                                <button>
                                    <div className="bg-card">
                                        <div className="bg-card-img"><img src={one1} alt="" /></div>
                                        <div className="bg-card-name">Smart watches</div>
                                        <div className="bg-card-name">From USD 19</div>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <button className='home-page-button'>Source now <img src={home_page} alt="" /> </button>
                    </div>

                    <div className="home-page-block">
                        <h1 className='home-page-h1'>Consumer electronics</h1>
                        <div className="block-home-alll">
                            <div className="block-home">
                                <button>
                                    <div className="bg-card">
                                        <div className="bg-card-img"><img src={one2} alt="" /></div>
                                        <div className="bg-card-name">Smart watches</div>
                                        <div className="bg-card-name">From USD 19</div>
                                    </div>
                                </button>
                            </div>
                            <div className="block-home">
                                <button>
                                    <div className="bg-card">
                                        <div className="bg-card-img"><img src={one3} alt="" /></div>
                                        <div className="bg-card-name">Smart watches</div>
                                        <div className="bg-card-name">From USD 19</div>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <button className='home-page-button'>Source now <img src={home_page} alt="" /> </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdSection