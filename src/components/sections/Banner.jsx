import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function Banner() {

  const [categories, setCategories] = useState([])
  const [banner, setBanner] = useState([])


  function fetchCategories() {
    fetch('https://ecommerce.main-gate.appx.uz/dev/v1/category/list').then(function (response) {
      return response.json()
    }).then(function (json) {
      setCategories(json.categories)
    })
  }

  function fetchBanners(){
    fetch('https://ecommerce.main-gate.appx.uz/dev/v1/events/list').then(function(response){
      return response.json()
    }).then(function(json){
      setBanner(json.events)
    })
  }

  useEffect(function () {
    fetchCategories()
    fetchBanners()
  }, [])

  return (
    <section className="banner">
      <div className="container">
        <div className="banner-row">
          <div className="banner-left">
            <ul className="banner-list">
              {
                categories.length === 0 ? <p className="banner-list-item">Loading...</p> : categories.map(item => (
                  <Link to='/categories' className="banner-list-item active" key={item.id}>
                    {item.name_uz}
                  </Link>
                ))
              }
            </ul>
          </div>
          <div className="banner-center">
          {
              banner.length === 0 ? null : <div className="banner-banner">
              <div className="banner-banner__info">
                <h3 className="banner-banner__info-toptitle">
                  {banner[1].title_uz}
                </h3>
                <h2 className="banner-banner__info-title">Electronic items</h2>
                <button className="banner-banner__info-btn">Learn more</button>
              </div>
              <div className="banner-banner__image">
                <img src={banner[1].image} alt="" />
              </div>
            </div>
            }
            
          </div>
          <div className="banner-right">
            <div className="banner__content">
              <div className="banner__content-userpanel">
                <div className="banner__content-userpanel-wrap">
                  <div className="banner__content-userpanel-image">
                    <img src="./images/avatar.png" alt="" />
                  </div>
                  <div className="banner__content-userpanel-info">
                    <p className="banner__content-userpanel-info-text">
                      Hi, user{" "}
                    </p>
                    <p className="banner__content-userpanel-info-text">
                      let’s get stated
                    </p>
                  </div>
                </div>
                <div className="banner__content-userpanel__buttons">
                  <button className="banner__content-userpanel__buttons-btn">
                    Join now
                  </button>
                  <button className="banner__content-userpanel__buttons-btn2">
                    Log in
                  </button>
                </div>
              </div>
              <div className="banner__content-panel panel-one">
                <p className="banner__content-panel-text">
                  Get US $10 off with a new supplier
                </p>
              </div>
              <div className="banner__content-panel panel-two">
                <p className="banner__content-panel-text">
                  Send quotes with supplier preferences
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
