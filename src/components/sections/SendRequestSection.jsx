import React from 'react'

function SendRequestSection() {
    return (
        <div className="SendRequestSection-all">
            <div className="continer">
                <div className="SendRequestSection-name-info-block">
                    <div className="SendRequestSection-name">
                        <p className="SendRequestSection-name-text">An easy way to send <br />
                            requests to all suppliers</p>
                        <p className="SendRequestSection-name-text-1">Lorem ipsum dolor sit amet, consectetur adipisicing <br />
                            elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                    <div className="SendRequestSection-info-block">
                        <div className="SendRequestSection__name">Send quote to suppliers</div>
                        <div className="SendRequestSection-input"><input placeholder='What item you need?' type="text" /></div>
                        <div className="SendRequestSection-input-1"><input placeholder='Type more details' type="text" /></div>                        
                        <div className="SendRequestSection-select">
                            <div className="SendRequestSection-input-2"><input placeholder='Quantity' type="text" /></div>
                            <select className='selectt'>
                                <option >Pcs</option>
                                <option>Pcs</option>
                            </select>
                        </div>
                        <button className="SendRequestSection-button">Send inquiry</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SendRequestSection