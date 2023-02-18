import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className='container-fluid'>
                <div className='row mt-4 text-light' style={{ background: "#0c0d0d" }}>
                    <div className='col-md-12 text-center py-3 fs-3'>Save on the high-quality images you love. <u style={{ color: "yellow" }}>Best Blogs today.</u></div>
                </div>
                <div className='row text-center py-0 text-white py-4 my-0' style={{ background: "#181a1a" }}>
                    <div className='col-md-3'>
                        <h4 className='text-danger'>ALL FITURES 💯👍🥰</h4>
                        <p>Home <br/>
                        About<br/>
                        Contect<br/>
                        Services<br/>
                        ...</p>
                    </div>
                    <div className='col-md-3'>
                        <h4 className='text-danger'>LEARN MORE</h4>
                        <p>Plans and pricing <br />
                            iStock promo codes<br />
                            Tips and tricks<br />
                            Stock photos<br />
                            Stock videos<br />
                            Stock illustrations<br />
                            Plugins and apps<br />
                            License information<br />
                            Legal / Privacy</p>
                    </div>
                    <div className='col-md-3'>
                    <h4 className='text-danger'> COMPANY</h4>
                        <p>About us <br/>
                            Newsroom<br/>
                            Investor<br/>
                            Careers<br/>
                            Affiliates<br/>
                            Sell stock</p>
                    </div>
                    <div className='col-md-3 fs-1'>
                        <div className='d-flex' style={{align:"between"}}>
                        <div className=' rounded ms-2' style={{width:"50px", height:"50px",background:"#a3a3a0"}}> <ion-icon name="logo-instagram" className=""></ion-icon></div> 
                        <div className=' rounded ms-2' style={{width:"50px", height:"50px",background:"#a3a3a0"}}> <ion-icon name="logo-whatsapp" className=""></ion-icon></div> 
                        <div className=' rounded ms-2' style={{width:"50px", height:"50px",background:"#a3a3a0"}}> <ion-icon name="logo-facebook" className=""></ion-icon></div> 
                        <div className=' rounded ms-2' style={{width:"50px", height:"50px",background:"#a3a3a0"}}> <ion-icon name="logo-twitter" className=""></ion-icon></div>
                        </div> <br/>
                        <p className='fs-3' style={{float:"left",color:"#a3a3a0"}}>THE BEST GLOG PAGE</p>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
