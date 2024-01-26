import React, { useEffect, useState } from 'react'
import ArrowRightIcon from '../../assets/icons/ArrowRightIcon'

function HeaderDropdown({isActive, categories}) {
  const [activeCategory, setActiveCategory] = useState(null)
  console.log(categories)
  if(!categories && !activeCategory){
    return null
  }

  useEffect(() => {
    setActiveCategory(categories[0]?.id)
  }, [categories])

  function handleCategory(id){
    setActiveCategory(id)
  }


  return (
    <div className={isActive ? 'header-dropdown dropdown-header open' : 'header-dropdown dropdown-header'}>
        <div className="container">
          <div className="dropdown-row">
            <div className="dropdown-sider">
            <ul className="dropdown-sider__list">
              {categories.map(item => (
                <li className={item.id === activeCategory ? "dropdown-sider__item active" : "dropdown-sider__item"} key={item.id} onMouseOver={() => handleCategory(item.id)}>
                  <span className="dropdown-sider__text">
                    {item.name_uz}
                  </span>
                  <span className="dropdown-sider__icon">
                    <ArrowRightIcon/>
                  </span>
              </li>
              ))}
            </ul>
            </div>

            <div className="dropdown-aside">
              <div className="dropdown-aside__header">
                <h4 className="dropdown-aside__title">{categories?.find(item => item.id === activeCategory)?.name_uz}</h4>
              </div>

              <div className="dropdown-aside__body">
                <ul className="dropdown-aside__list">
                  {
                    categories?.find(item => item.id === activeCategory)?.children?.map(item => (
                      <li className="dropdown-aside__item" key={item.id}>
                        {item.name_uz}
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default HeaderDropdown