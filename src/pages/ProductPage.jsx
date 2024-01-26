import React, { useEffect, useState } from 'react'
import { NavLink,  useParams } from 'react-router-dom'
import CheckIcon from '../../public/pagesimg/details/icons/center/check.png'
import MessageIcon from '../../public/pagesimg/details/icons/center/message.png'
import ShopIcon from '../../public/pagesimg/details/icons/center/shopping.png'
import StarsIcon from '../../public/pagesimg/details/icons/center/stars.png'
import FlagIcon from '../../public/pagesimg/details/icons/right/flag.png'
import HeartIcon from '../../public/pagesimg/details/icons/right/heart.png'
import LanguageIcon from '../../public/pagesimg/details/icons/right/language.png'
import VerifiedIcon from '../../public/pagesimg/details/icons/right/verified_user.png'
import { HeaderLink } from '../components'
import Productssuper from '../components/sections/Productssuper'

function ProductPage() {
  const [product, setProduct] = useState(null)
  const [recommendedProducts, setRecommendedProducts] = useState([])
  const params = useParams()
  console.log(params.slug)

  function fetchProduct(){
    fetch(`https://ecommerce.main-gate.appx.uz/dev/v1/product/${params.slug}`).then(function(response){
      return response.json()
    }).then(function(json){
      setProduct(json.product)
      setRecommendedProducts(json.recommendedProducts)
    })
  }

  useEffect(function(){
    fetchProduct()
  },[])

    if(!product){
      return null
    }

  return (
    <div className="detail">
        <div className="container">
            <div className="detail__col">
                <HeaderLink/>
                <div className="detail__col__detail">
                    <div className="detail__col__detail__row">
                        <div className="detail__col__detail__left">
                            <div className="detail__col__detail__left-image">
                                <img src={product.image} alt="" />
                            </div>
                            <div className="detail__col__detail__left-icons">
                              {
                                product.images.map((item, i) => (
                                  <div className="detail__col__detail__left-icon" key={i}>
                                      <img src={item} alt="" />
                                  </div>
                                ))
                              }
                            </div>
                        </div>
                        <div className="detail__col__detail__center">
                            <div className="detail__col__detail__center__header">
                                <div className="detail__col__detail__center__header-wrap">
                                    <img src={CheckIcon} alt="" />
                                    <p className='detail__col__detail__center__header-wrap-text'>Instock</p>
                                </div>
                                <h4 className="detail__col__detail__center__header-title">
                                     Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle
                                </h4>
                                <div className="detail__col__detail__center__header-wrap2">
                                    <li className='detail__col__detail__center__header-list'>
                                        <img src={StarsIcon} alt="" />
                                        <p className='detail__col__detail__center__header-list-text yellow'>9.3</p>
                                    </li>
                                    <li className='detail__col__detail__center__header-list'>
                                        <img src={MessageIcon} alt="" className='detail__col__detail__center__header-list-icon'/>
                                        <p className='detail__col__detail__center__header-list-text'>32 reviews</p>
                                    </li>
                                    <li className='detail__col__detail__center__header-list'>
                                        <img src={ShopIcon} alt="" className='detail__col__detail__center__header-list-icon' />
                                        <p className='detail__col__detail__center__header-list-text'>154 sold</p>
                                    </li>
                                </div>
                                <div className="detail__col__detail__center__header-wrap3">
                                    <div className="detail__col__detail__center__header-wrap3-wrap">
                                        <p className='detail__col__detail__center__header-wrap3-toptitle'>$98.00</p>
                                        <p className='detail__col__detail__center__header-wrap3-text'>50-100 pcs</p>
                                    </div>
                                    <span className="border"></span>
                                    <div className="detail__col__detail__center__header-wrap3-wrap">
                                        <p className='detail__col__detail__center__header-wrap3-toptitle'>$90.00</p>
                                        <p className='detail__col__detail__center__header-wrap3-text'>100-700 pcs</p>
                                    </div>
                                    <span className="border"></span>
                                    <div className="detail__col__detail__center__header-wrap3-wrap">
                                        <p className='detail__col__detail__center__header-wrap3-toptitle'>$78.00</p>
                                        <p className='detail__col__detail__center__header-wrap3-text'>700+ pcs</p>
                                    </div>
                                </div>
                                <div className="detail__col__detail__center__header__col">
                                    <div className="detail__col__detail__center__header__col-wrap">
                                        <li className="detail__col__detail__center__header__col-list">
                                            <p className='detail__col__detail__center__header__col-title'>Price:</p>
                                            <p className='detail__col__detail__center__header__col-text'>Negotiable</p>
                                        </li>
                                    </div>
                                    <hr />
                                    <div className="detail__col__detail__center__header__col-wrap">
                                        <li className="detail__col__detail__center__header__col-list">
                                            <p className='detail__col__detail__center__header__col-title'>Type: </p>
                                            <p className='detail__col__detail__center__header__col-text'>Classic  shoes</p>
                                        </li>
                                        <li className="detail__col__detail__center__header__col-list">
                                            <p className='detail__col__detail__center__header__col-title'>Material: </p>
                                            <p className='detail__col__detail__center__header__col-text'>Plastic material</p>
                                        </li>
                                        <li className="detail__col__detail__center__header__col-list">
                                            <p className='detail__col__detail__center__header__col-title'>Design: </p>
                                            <p className='detail__col__detail__center__header__col-text'>Modern nice</p>
                                        </li>
                                    </div>
                                    <hr />
                                    <div className="detail__col__detail__center__header__col-wrap">
                                    <li className="detail__col__detail__center__header__col-list">
                                            <p className='detail__col__detail__center__header__col-title'>Customization: </p>
                                            <p className='detail__col__detail__center__header__col-text'>Customized logo and design custom packages</p>
                                        </li>
                                        <li className="detail__col__detail__center__header__col-list">
                                            <p className='detail__col__detail__center__header__col-title'>Protection:  </p>
                                            <p className='detail__col__detail__center__header__col-text'>Refund Policy</p>
                                        </li>
                                        <li className="detail__col__detail__center__header__col-list">
                                            <p className='detail__col__detail__center__header__col-title'>Warranty:  </p>
                                            <p className='detail__col__detail__center__header__col-text'>2 years full warranty </p>
                                        </li>
                                    </div>
                                    <hr />
                                </div>
                            </div>
                        </div>
                        <div className="detail__col__detail__right">
                            <div className="detail__col__detail__right__row">
                                <div className="detail__col__detail__right__info">
                                    <div className="detail__col__detail__right__info-wrap">
                                        <span className='detail__col__detail__right__info-bg'>R</span>
                                        <div className="detail__col__detail__right__info-wrap2">
                                            <p  className='detail__col__detail__right__info-wrap2-text'>Supplier</p>
                                            <p  className='detail__col__detail__right__info-wrap2-text'>Guanjoi Trading LLC</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="detail__col__detail__right__info__col">
                                        <div className="detail__col__detail__right__info__col-wrap">
                                            <img src={FlagIcon} alt="" />
                                            <p className="detail__col__detail__right__info__col-text">Germany, Berlin</p>
                                        </div>
                                        <div className="detail__col__detail__right__info__col-wrap">
                                            <img src={VerifiedIcon} alt="" />
                                            <p className="detail__col__detail__right__info__col-text">Verified Seller</p>
                                        </div>
                                        <div className="detail__col__detail__right__info__col-wrap">
                                            <img src={LanguageIcon} alt="" />
                                            <p className="detail__col__detail__right__info__col-text">Verified Seller</p>
                                        </div>
                                        <div className="detail__col__detail__right__info__col__buttons">
                                            <button className='detail__col__detail__right__info__col__buttons-btn btn-one'>Send inquiry</button>
                                            <button className='detail__col__detail__right__info__col__buttons-btn btn-two'>Sellers profile</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="detail__col__detail__right__col">
                                    <img src={HeartIcon} alt="" />
                                    <p className="detail__col__detail__right__col-text">Save for later</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="detail__col__info">
                    <div className="detail__col__info__row">
                        <div className="detail__col__info__info">
                            <div className="detail__col__info__header">
                                <ul className="detail__col__info__header__list">
                                    <NavLink to='#' className='detail__col__info__header__item'>Description</NavLink>
                                    <NavLink to='#' className='detail__col__info__header__item'>Reviews</NavLink>
                                    <NavLink to='#' className='detail__col__info__header__item'>Shipping</NavLink>
                                    <NavLink to='#' className='detail__col__info__header__item'>About seller</NavLink>
                                </ul>
                            </div>
                            <div className="detail__col__info__body">
                                <div className="detail__col__info__body__info">
                                    <p className="detail__col__info__body__info-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                    </p>
                                </div>
                                <div className="detail__col__info__body__wrap">
                                    <div className="detail__col__info__body__lefttitle">
                                        <ul className='detail__col__info__body__lefttitle__list'>
                                            <li className='detail__col__info__body__lefttitle-item'>Model</li>
                                            <li className='detail__col__info__body__lefttitle-item'>Style</li>
                                            <li className='detail__col__info__body__lefttitle-item'>Certificate</li>
                                            <li className='detail__col__info__body__lefttitle-item'>Size</li>
                                            <li className='detail__col__info__body__lefttitle-item'>Memory</li>
                                        </ul>
                                    </div>
                                    <div className="detail__col__info__body__righttitle">
                                         <ul className='detail__col__info__body__righttitle__list'>
                                            <li className='detail__col__info__body__righttitle-item'>#8786867</li>
                                            <li className='detail__col__info__body__righttitle-item'>Classic style</li>
                                            <li className='detail__col__info__body__righttitle-item'>ISO-898921212</li>
                                            <li className='detail__col__info__body__righttitle-item'>34mm x 450mm x 19mm</li>
                                            <li className='detail__col__info__body__righttitle-item'>36GB RAM</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="detail__col__info__body__check">
                                    <div className="detail__col__info__body__check__wrap">
                                        <img src={CheckIcon} alt="" />
                                        <p>Some great feature name here</p>
                                    </div>
                                    <div className="detail__col__info__body__check__wrap">
                                        <img src={CheckIcon} alt="" />
                                        <p>Lorem ipsum dolor sit amet, consectetur </p>
                                    </div>
                                    <div className="detail__col__info__body__check__wrap">
                                        <img src={CheckIcon} alt="" />
                                        <p>Duis aute irure dolor in reprehenderit</p>
                                    </div>
                                    <div className="detail__col__info__body__check__wrap">
                                        <img src={CheckIcon} alt="" />
                                        <p>Some great feature name here</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="detail__col__product">
                    <h2 className="detail__col__product__toptitle">Related products</h2>
                    <div className="detail__col__product__wrap">
                        {
                            recommendedProducts.map((item)=>(
                                <div className="detail__col__product-wrap" key={item.id}>
                                    <div className="detail__col__product__image">
                                        <img src={item.image} alt="" />
                                    </div>
                                    <div className="detail__col__product__info">
                                        <p className="detail__col__product-title">{item.name_uz}</p>
                                        <p className="detail__col__product-title">{item.description_uz}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <Productssuper/>
            </div>
        </div>
    </div>
)
}

export default ProductPage