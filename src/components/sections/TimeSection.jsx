import React from 'react'
import bgcardc from '../../assets/icon/8.svg'
import bgcardcc from '../../assets/icon/7.svg'
import bgcardccc from '../../assets/icon/6.svg'
import bgcardcccc from '../../assets/icon/5.svg'
import bgcardccccc from '../../assets/icon/3.svg'
function TimeSection() {
    return (
        <div className="timesection-all">
          
                <div className="-all">
                    <div className="timesection-text-calendar">
                        <p className='timesection-text'>Deals and offers</p>
                        <span className='timesection-span'>Hygiene equipments</span>
                        <div className="timesection-calendar-block">
                            <button>
                                <div className="timesection-block">
                                    <p className='timesection-block-text'>04</p>
                                    <span className='timesection-block-span'>Days</span>
                                </div>
                            </button>
                            <button>
                                <div className="timesection-block">
                                    <p className='timesection-block-text'>13</p>
                                    <span className='timesection-block-span'>Hour</span>
                                </div>
                            </button>
                            <button>
                                <div className="timesection-block">
                                    <p className='timesection-block-text'>34</p>
                                    <span className='timesection-block-span'>Min</span>
                                </div>
                            </button>
                            <button>
                                <div className="timesection-block">
                                    <p className='timesection-block-text'>56</p>
                                    <span className='timesection-block-span'>Sec</span>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="bg-card-all">
                        <button>
                            <div className="bg-card">
                                <div className="bg-card-img"><img src={bgcardc} alt="" /></div>
                                <div className="bg-card-name">Smart watches</div>
                                <div className="bg-card-percentage">-25%</div>
                            </div>
                        </button>
                        <button>
                            <div className="bg-card">
                                <div className="bg-card-img"><img src={bgcardcc} alt="" /></div>
                                <div className="bg-card-name">Laptops</div>
                                <div className="bg-card-percentage">-15%</div>
                            </div>
                        </button>
                        <button>
                            <div className="bg-card">
                                <div className="bg-card-img"><img src={bgcardccc} alt="" /></div>
                                <div className="bg-card-name">GoPro cameras</div>
                                <div className="bg-card-percentage">-40%</div>
                            </div>
                        </button>
                        <button>
                            <div className="bg-card">
                                <div className="bg-card-img"><img src={bgcardcccc} alt="" /></div>
                                <div className="bg-card-name">Headphones</div>
                                <div className="bg-card-percentage">-25%</div>
                            </div>
                        </button>
                        <button>
                            <div className="bg-card">
                                <div className="bg-card-img"><img src={bgcardccccc} alt="" /></div>
                                <div className="bg-card-name">Canon camreras</div>
                                <div className="bg-card-percentage">-25%</div>
                            </div>
                        </button>
                    </div>
                </div>
          <div className="calendar-bg-card-all">
          <div className="calendar-block">
<div className="calendar-mini-block">
<div className="calendar-block-h1">Deals and offers</div>
<div className="calendar-block-p">Electronic equipments</div>
</div>
<div className="calendar-mini-button">
    <button className='calendar-mini-button_buton'>13 <br />   Hour</button>
    <button className='calendar-mini-button_buton'> 34 <br /> Min</button>
    <button className='calendar-mini-button_buton'> 56 <br /> Sec</button>
</div>
            </div>
            <div className="calendar-block-button">
            <div className="bg-card-all">
                        <button>
                            <div className="bg-card">
                                <div className="bg-card-img"><img src={bgcardc} alt="" /></div>
                                <div className="bg-card-name">Smart watches</div>
                                <div className="bg-card-percentage">-25%</div>
                            </div>
                        </button>
                        <button>
                            <div className="bg-card">
                                <div className="bg-card-img"><img src={bgcardcc} alt="" /></div>
                                <div className="bg-card-name">Laptops</div>
                                <div className="bg-card-percentage">-15%</div>
                            </div>
                        </button>
                     
                    </div>
            </div>
          </div>
        </div>
    )
}

export default TimeSection