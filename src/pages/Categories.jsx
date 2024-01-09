import React from 'react'
import icon1 from '../assets/icon/icon-1.svg'
import icon2 from '../assets/icon/icon-2.svg'
import icon3 from '../assets/icon/icon-3.svg'
import icon4 from '../assets/icon/icon-4.svg'
import icon5 from '../assets/icon/icon-5.svg'
import icon6 from '../assets/icon/icon-6.svg'
import icon7 from '../assets/icon/icon-7.svg'
import icon9 from '../assets/icon/icon-9.svg'
import icon10 from '../assets/icon/icon-10.svg'
import ico0 from '../assets/icon/image 108.svg'
import search from '../assets/icon/search.svg'
import box1 from '../assets/icon/box-1.svg'
import box2 from '../assets/icon/box-2.svg'
import box3 from '../assets/icon/box-3.svg'
import asd1 from '../assets/icon/asd1.svg'
import asd2 from '../assets/icon/asd2.svg'
import asd3 from '../assets/icon/asd3.svg'
function Categories() {
  return (
    <cartpage>
      <div className="cartpage-all">
        <div className="container"> <h1>Our extra services</h1>
          <div className="cartpage-block-img-all">

            <button>
              <div className="cartpage-block-img">
                <div className="cartpage-img">
                  <img src={ico0} alt="" /></div>

                <div className="cartpage-block-img-img">
                  <div className="cartpage-block"><p>Source from <br />
                    Industry Hubs</p></div>
                  <img className='search' src={search} alt="" />
                </div>

              </div>
            </button>

            <button>
              <div className="cartpage-block-img">
                <div className="cartpage-img"><img src={asd3} alt="" /></div>

                <div className="cartpage-block-img-img">
                  <div className="cartpage-block"><p>Customize Your <br />
                    Products</p></div>
                  <img className='search' src={box1} alt="" />
                </div>

              </div>
            </button>

            <button>
              <div className="cartpage-block-img">
                <div className="cartpage-img"><img src={asd2} alt="" /></div>

                <div className="cartpage-block-img-img">
                  <div className="cartpage-block"><p>Fast, reliable shipping <br />
                    by ocean or air</p></div>
                  <img className='search' src={box2} alt="" />
                </div>

              </div>
            </button>

            <button>
              <div className="cartpage-block-img">
                <div className="cartpage-img"><img src={asd1} alt="" /></div>

                <div className="cartpage-block-img-img">
                  <div className="cartpage-block"><p>Product monitoring <br />
                    and inspection</p></div>
                  <img className='search' src={box3} alt="" />
                </div>

              </div>
            </button>
          </div>







          <div className="Suppliersbyregion-all">
            <h1>Suppliers by region</h1>
            <div className="flag-all">
              <div className="flag-block">

              <button>
              <div className="flag-blok-1">
                  <img src={icon1} alt="" />
                  <div className="text">
                    <p>Arabic Emirates</p>
                    <span>shopname.ae</span>
                  </div>
                </div>
              </button>

              <button>
              <div className="flag-blok-1">
                  <img src={icon2} alt="" />
                  <div className="text">
                    <p>Australia</p>
                    <span>shopname.ae</span>
                  </div>
                </div>
              </button>

               <button>
               <div className="flag-blok-1">
                  <img src={icon3} alt="" />
                  <div className="text">
                    <p>United States</p>
                    <span>shopname.ae</span>
                  </div>
                </div>
               </button>


              <button>
              <div className="flag-blok-1">
                  <img src={icon4} alt="" />
                  <div className="text">
                    <p>Russia</p>
                    <span>shopname.ae</span>
                  </div>
                </div>
              </button>


              <button>
              <div className="flag-blok-1">
                  <img src={icon5} alt="" />
                  <div className="text">
                    <p>Italy</p>
                    <span>shopname.ae</span>
                  </div>
                </div>
              </button>


              </div>

              <div className="flag-block">
               <button>
               <div className="flag-blok-1">
                  <img src={icon6} alt="" />
                  <div className="text">
                    <p>Denmark</p>
                    <span>denmark.com.dk</span>
                  </div>
                </div>
               </button>

               <button>
               <div className="flag-blok-1">
                  <img src={icon7} alt="" />
                  <div className="text">
                    <p>France</p>
                    <span>denmark.com.dk</span>
                  </div>
                </div>
               </button>

              <button>
              <div className="flag-blok-1">
                  <img src={icon1} alt="" />
                  <div className="text">
                    <p>Arabic Emirates</p>
                    <span>denmark.com.dk</span>
                  </div>
                </div>
              </button>


               <button>
               <div className="flag-blok-1">
                  <img src={icon9} alt="" />
                  <div className="text">
                    <p>China</p>
                    <span>denmark.com.dk</span>
                  </div>
                </div>
               </button>


               <button>
               <div className="flag-blok-1">
                  <img src={icon10} alt="" />
                   <div className="text">
                    <p>Great Britain</p>
                    <span>denmark.com.dk</span>
                  </div>
                </div>
               </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </cartpage>
  )
}

export default Categories