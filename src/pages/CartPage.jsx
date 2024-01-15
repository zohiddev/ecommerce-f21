import React from 'react'
import LockIcon from '../assets/icon/LockIcon';
import MessageIcon from '../assets/icon/MessageIcon';
import CarIcon from '../assets/icon/CarIcon'
import ShopIcon from '../assets/icon/ShopIcon';
import Productssuper from '../components/Productssuper';

function CartPage() {
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
  ];
  const obj = [
    {
      id: 1,
      price: "$99.50",
      title: "GoPro HERO6 4K Action Camera - Black",
      img: "./images/ipad.png",
    },
    {
      id: 2,
      price: "$99.50",
      title: "GoPro HERO6 4K Action Camera - Black",
      img: "./images/mobile.png",
    },
    {
      id: 3,
      price: "$99.50",
      title: "GoPro HERO6 4K Action Camera - Black",
      img: "./images/watch.png",
    },
    {
      id: 4,
      price: "$99.50",
      title: "GoPro HERO6 4K Action Camera - Black",
      img: "./images/laptop.png",
    }
  ]
  return (
    <section className="products">
      <div className="container">
        <h2 className='products-header__title'>
          My Cart (3)
        </h2>
        <div className="products-wrapper">
        <div className="products-row">
          {
            products.map((item) => (
              <div className="products-col" key={item.id}>
                <div className="productss">
                  <div className="products-img">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="products-titles">
                    <h3 className='products-desc'>{item.desc}</h3>
                    <p className='products-title'>{item.title}</p>
                    <p className='products-title'>{item.subtitle}</p>
                    <div className="products-buttons">
                      <button className='products-button'>Remove</button>
                      <button className='products-button'>Save for later</button>
                    </div>
                  </div>
                </div>
                <div className="products-option">
                  <h3 className='products-price'>{item.price}</h3>
                  <select name="select" id="" className='product-select'>
                    <option value="select" className='products-option'>{item.option}</option>
                    <option value="select" className='products-option'>{item.option1}</option>
                    <option value="select" className='products-option'>{item.option2}</option>
                  </select>
                </div>
              </div>
            ))

          }
          <div className="products-btns">
            <button className='products-btn'>Bact to shop</button>
            <button className='products-btn__one'>Remove all</button>
          </div>
        </div>
          <div className="products-item">
            <div className="products-item__top">
              <p >Have a coupon?</p>
             <div className="products-item__buttons">
             <input type="text" placeholder='Add coupon' />
             <button>Apply</button>
             </div>

            </div>
            <div className="products-item__bottom">
              <div className="products-item__wrap">
                <p className='products-item__title'>Subtotal:</p>
                <p className='products-item__subtitle'>$1403.97</p>
              </div>
              <div className="products-item__wrap">
                <p className='products-item__title'>Discount:</p>
                <p className='products-item__subtitle2'>- $60.00</p>
              </div>
              <div className="products-item__wrap">
                <p className='products-item__title'>Tax:</p>
                <p className='products-item__subtitle3'>+ $14.00</p>
              </div>
              <hr />
              <div className="products-item__wrap">
                <p className='products-item__title'><b>Total:</b></p>
                <p className='products-item__title'><b>$1357.97</b></p>
              </div>
              <button>Checkout</button>

              <div className="products-item__bottom__icons">
              </div>
            </div>
          </div>
        </div>
        <div className="products-footer__wrapper">
          {

            footer.map((item) => (
              <div className="products-footer" key={item.id}>
                <div className="products-footer__wrap">
                  <div className="products-footer__icon">
                    {item.icon}
                  </div>
                  <div className="products-footer__titles">
                    <h3 className='products-footer__title'>
                      <h3 className='products-footer__title'>{item.title}</h3>
                      <p className='products-footer__subtitle'>{item.subtitle}</p>
                    </h3>
                  </div>
                </div>
              </div>

            ))
          }
        </div>
        <div className="products-saved">
          <h4 className="products-saved__title">Saved for later</h4>
          <div className="products-saved__boxs">
            {
              obj.map( (items) => (
                <div className="products-saved__box" key={items.id}>
                  <div className="products-saved__box__img">
                    <img src={items.img} alt="" />
                  </div>
                  <div className="products-saved__box__texts">
                    <h5>{items.price}</h5>
                    <p>{items.title}</p>
                    <button className='products-saved__box__button'><span><ShopIcon /></span> <span>Move to cart</span></button>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <Productssuper />
      </div>
    </section>
  )
}

export default CartPage