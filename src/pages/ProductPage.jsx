import React from 'react'
import LockIcon from '../../public/icons/LockIcon';
import MessageIcon from '../../public/icons/MessageIcon';
import CarIcon from '../../public/icons/CarIcon'
function ProductPage() {
  const products = [
    {
      id: 1,
      img: "./images/img.png",
      desc: "T-shirts with multiple colors, for men and lady",
      title: "Size: medium, Color: blue,  Material: Plastic",
      subtitle: "Seller: Artel Market",
      price: "$78.99",
      option: "Qty: 7",
      option1: "Qty: 8",
      option2: "Qty: 9"
    },
    {
      id: 2,
      img: "./images/img4.png",
      desc: "T-shirts with multiple colors, for men and lady",
      title: "Size: medium, Color: blue,  Material: Plastic",
      subtitle: "Seller: Best factory LLC",
      price: "$39.00",
      option: "Qty: 4",
      option1: "Qty: 5",
      option2: "Qty: 6"
    },
    {
      id: 3,
      img: "./images/img2.png",
      desc: "T-shirts with multiple colors, for men and lady",
      title: "Size: medium, Color: blue,  Material: Plastic",
      subtitle: "Seller: Artel Market",
      price: "$170.50",
      option: "Qty: 1",
      option1: "Qty: 2",
      option2: "Qty: 3",
    }
  ];
  const footer = [
    {
      id: 1,
      icon: <LockIcon />,
      title: "Secure Payment",
      subtitle: "Have you ever finally just"
    },
    {
      id: 2,
      icon: <MessageIcon />,
      title: "Customer support",
      subtitle: "Have you ever finally just"
    },
    {
      id: 3,
      icon: <CarIcon />,
      title: "Free delivery",
      subtitle: "Have you ever finally just"
    }
  ]
  return (
    <section className="product">
      <div className="container">
        <h2 className='product-header__title'>
          My Cart (3)
        </h2>
        <div className="product-row">
          {
            products.map((item) => (
              <div className="product-col" key={item.id}>
                <div className="products">
                  <div className="product-img">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="product-titles">
                    <h3 className='product-desc'>{item.desc}</h3>
                    <p className='product-title'>{item.title}</p>
                    <p className='product-title'>{item.subtitle}</p>
                    <div className="product-buttons">
                      <button className='product-button'>Remove</button>
                      <button className='product-button'>Save for later</button>
                    </div>
                  </div>
                </div>
                <div className="product-option">
                  <h3 className='product-price'>{item.price}</h3>
                  <select name="select" id="" className='product-select'>
                    <option value="select" className='product-option'>{item.option}</option>
                    <option value="select" className='product-option'>{item.option1}</option>
                    <option value="select" className='product-option'>{item.option2}</option>
                  </select>
                </div>
              </div>
            ))

          }
          <div className="product-btns">
            <button className='product-btn'>Bact to shop</button>
            <button className='product-btn__one'>Remove all</button>
          </div>
        </div>
        {
          footer.map((item) => (
            <div className="product-footer" key={item.id}>
              <div className="product-footer__wrap">
              <div className="product-footer__icon">
                {item.icon}
              </div>
              <div className="product-footer__titles">
                <h3 className='product-footer__title'>
                  <h3 className='product-footer__title'>{item.title}</h3>
                  <p className='product-footer__subtitle'>{item.subtitle}</p>
                </h3>
              </div>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default ProductPage