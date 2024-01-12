import React from 'react'

function CartPage() {

  const products = [
    {
        id :1,
        score:"7.5",
        scImg: "../../public/images/str_1-3.png",
        img: "../../public/images/image-1_9.png"
    },
    {
        id :2,
        score:"7.5",
        scImg: "../../public/images/str_2.png",
        img: "../../public/images/image_2-6.png"
    },
    {
        id :3,
        score:"7.5",
        scImg: "../../public/images/str_1-3.png",
        img: "../../public/images/image_3.png"
    },
    {
        id :4,
        score:"7.5",
        scImg: "../../public/images/str_1-3.png",
        img: "../../public/images/image_4.png"
    },
    {
        id :5,
        score:"7.5",
        scImg: "../../public/images/str_2.png",
        img: "../../public/images/image-5.png"
    },
    {
        id :6,
        score:"7.5",
        scImg: "../../public/images/str_1-3.png",
        img: "../../public/images/image_2-6.png"
    },
    {
        id :7,
        score:"7.5",
        scImg: "../../public/images/str_1-3.png",
        img: "../../public/images/image_7.png"
    },
    {
        id :8,
        score:"7.5",
        scImg: "../../public/images/str_2.png",
        img: "../../public/images/image-8.png"
    },
    {
        id :9,
        score:"7.5",
        scImg: "../../public/images/str_1-3.png",
        img: "../../public/images/image-1_9.png"
    }
  ]

  const cats = [
    {
        id :1,
        name:"Samsung"
    },
    {
        id :2,
        name:"Apple"
    },
    {
        id :3,
        name:"Poco"
    },
    {
        id :4,
        name:"Metallic"
    },
    {
        id :5,
        name:"4 star"
    },
    {
        id :6,
        name:"3 star"
    }
  ]

  const links = [
    {
        id :1,
        name:"Mobile accessory"
    },
    {
        id :2,
        name:"Electronics"
    },
    {
        id :3,
        name:"Smartphones "
    },
    {
        id :4,
        name:"Modern tech"
    }
  ]

  const brands = [
    {
        id :1,
        name:"Samsung"
    },
    {
        id :2,
        name:"Apple"
    },
    {
        id :3,
        name:"Huwavei "
    },
    {
        id :4,
        name:"Pocco"
    },
    {
        id :5,
        name:"Lenova"
    }
  ]

  const features = [
    {
        id :1,
        name:"Metallic"
    },
    {
        id :2,
        name:"Plastic cover"
    },
    {
        id :3,
        name:"8GB Ram "
    },
    {
        id :4,
        name:"Super power"
    },
    {
        id :5,
        name:"Large Memory"
    }
  ]

  return (
    <div className="CartPage-main">
      <div className="container">
        <div className="CartPage_Left">
          <div className="CartPage_LeftCategories">
            <div className="CartPage_LeftCategorie">
              <div className="CartPage_LeftCategories_Head">
                <h3 className="CartPage_LeftCategories_HeadTytle">Category</h3>
                <button className="CartPage_LeftCategories_HeadIcon">
                  <img src="../../public/images/top_ic.svg" alt="" />
                </button>
              </div>
              <div className="CartPage_LeftCategorie-links">
                {links.map((link) => (
                  <a href="#" className='CartPage_LeftCategorie-link' key={link.id}>{link.name}</a>
                ))}
                <a href="" className="CartPage_LeftCategorie-link all">See all</a>
              </div>
            </div>
            <div className="CartPage_LeftCategorie">
              <div className="CartPage_LeftCategories_Head">
                <h3 className="CartPage_LeftCategories_HeadTytle">Brands</h3>
                <button className="CartPage_LeftCategories_HeadIcon">
                  <img src="../../public/images/top_ic.svg" alt="" />
                </button>
              </div>
              <div className="CartPage_LeftCategorieInputs">
                {brands.map((brand) => (
                  <div className='CartPage_LeftCategorieInputs-int' key={brand.id}>
                    <input type="checkbox" className="CartPage_LeftCategorieInputs-intCheck" />
                    <span className="CartPage_LeftCategorieInputs-intText">{brand.name}</span>
                  </div>
                ))}
                <a href="" className="CartPage_LeftCategorie-link all">See all</a>   
              </div>
            </div>
            <div className="CartPage_LeftCategorie">
              <div className="CartPage_LeftCategories_Head">
                <h3 className="CartPage_LeftCategories_HeadTytle">Features</h3>
                <button className="CartPage_LeftCategories_HeadIcon">
                  <img src="../../public/images/top_ic.svg" alt="" />
                </button>
              </div>
              <div className="CartPage_LeftCategorieInputs">
                {features.map((feature) => (
                  <div className='CartPage_LeftCategorieInputs-int' key={feature.id}>
                    <input type="checkbox" className="CartPage_LeftCategorieInputs-intCheck" />
                    <span className="CartPage_LeftCategorieInputs-intText">{feature.name}</span>
                  </div>
                ))}
                <a href="" className="CartPage_LeftCategorie-link all">See all</a>   
              </div>
            </div>
            <div className="CartPage_LeftCategorie">
            <div className="CartPage_LeftCategories_Head">
              <h3 className="CartPage_LeftCategories_HeadTytle">Price range</h3>
              <button className="CartPage_LeftCategories_HeadIcon">
                <img src="../../public/images/bot_ic.svg" alt="" />
              </button>
            </div>
            </div>
            <div className="CartPage_LeftCategorie">
            <div className="CartPage_LeftCategories_Head">
              <h3 className="CartPage_LeftCategories_HeadTytle">Condition</h3>
              <button className="CartPage_LeftCategories_HeadIcon">
                <img src="../../public/images/bot_ic.svg" alt="" />
              </button>
            </div>
            </div>
            <div className="CartPage_LeftCategorie">
            <div className="CartPage_LeftCategories_Head">
              <h3 className="CartPage_LeftCategories_HeadTytle">Ratings</h3>
              <button className="CartPage_LeftCategories_HeadIcon">
                <img src="../../public/images/bot_ic.svg" alt="" />
              </button>
            </div>
            </div>
            <div className="CartPage_LeftCategorie">
            <div className="CartPage_LeftCategories_Head">
              <h3 className="CartPage_LeftCategories_HeadTytle">Manufacturer</h3>
              <button className="CartPage_LeftCategories_HeadIcon">
                <img src="../../public/images/bot_ic.svg" alt="" />
              </button>
            </div>
            </div>
          </div>
        </div>
        <div className="CartPage_Right">
          <div className="CartPage_Right-header">
            <div className="CartPage_Right-header_top">
              <div className="CartPage_Right-header_top-text">
                <span className="CartPage_Right-header_top-text-fr">12,911 items in </span>
                <span className="CartPage_Right-header_top-text-sc">Mobile accessory</span>
              </div>
              <div className="CartPage_Right-header_top-buttons">
                <div className="CartPage_Right-header_top-buttons_check">
                  <input type="checkbox"  className='CartPage_Right-header_top-buttons_check-box'/>
                  <span className="CartPage_Right-header_top-buttons_check-text">
                    Verified only
                  </span>
                </div>
                <div className="CartPage_Right-header_top-buttons-select">
                  <span className="CartPage_Right-header_top-buttons-select-text">Featured</span>
                  <input type="selectbox"  className='CartPage_Right-header_top-buttons-select-box'/>
                </div>
                <div className="CartPage_Right-header_top-buttons-btn">
                  <button className="CartPage_Right-header_top-buttons-btn_fr">
                    <img src="../../public/images/square.svg" alt="" />
                  </button>
                  <button className="CartPage_Right-header_top-buttons-btn_fr">
                  <img src="../../public/images/Menu.svg" alt="" />
                  </button>
                </div>
              </div>
            </div>
            <div className="CartPage_Right-header_foot">
              {cats.map((cat) => (
                <button className="CartPage_Right-header_footCat" key={cat.id}>
                  <span className="CartPage_Right-header_footCat-text">{cat.name}</span>
                  <button className="CartPage_Right-header_footCat-ic">
                    <img src="../../public/images/x_ic.svg" alt="" />
                  </button>
                </button>
              ))}
              <button className="CartPage_Right-header_foot-btn">Clear all filter</button>
            </div>
          </div>
          <div className="CartPage_Right_product-contents">
            {products.map((product) => (
              <div className='productCard' key={product.id}>
                  <div className="productCard-img">
                    <img src={product.img} alt="" />
                  </div>
                  <div className="productCard-inf">
                    <div className="productCard-inf-cost">
                      <h4 className="productCard-inf-costi_tytle">$99.50</h4>
                      <div className="productCard-inf-cost_score">
                        <div className="productCard-inf-cost_score-img">
                          <img src={product.scImg} alt="" />
                        </div>
                        <span className="productCard-inf-cost_score-text">
                          {product.score}
                        </span>
                      </div>
                      <span className="productCard-inf-cost-text">GoPro HERO6 4K Action <br/> Camera - Black</span>
                    </div>
                    <button className="productCard-inf_ic">
                      <img src="../public/images/heart.svg" alt="" />
                    </button>
                  </div>
              </div>
            ))}
          </div>
          <div className="CartPage_Right-foot">
           <button className="CartPage_Right-footShow">
            <span className="CartPage_Right-footShow-text">Show 10</span>
            <input type="selectbox" className="CartPage_Right-footShow" />
           </button>
           <div className="CartPage_Right-footBtn">
            <button className="CartPage_Right-footBtn_button"><img src="../../public/images/left-ic.svg" alt="" /></button>
            <button className="CartPage_Right-footBtn_button">1</button>
            <button className="CartPage_Right-footBtn_button">2</button>
            <button className="CartPage_Right-footBtn_button">3</button>
            <button className="CartPage_Right-footBtn_button"><img src="../../public/images/right-ic.svg" alt="" /></button>
           </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage