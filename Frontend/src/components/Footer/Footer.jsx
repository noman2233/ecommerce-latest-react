import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

const Footer = () => {
  return (
<>
    <div className='footerHome'>
<div className="row">
          
<div className="about">
    <h3 className=''style={{padding:"10px"}}>About us</h3>

 <p>
    In the world of globalization , Our motive tis to provide best customer servise and quality products to our customers.So that it can make thier shopping experience better. 
 </p>
</div>
  
        <div className="useful">
            <div className="footer_col">
                <h3 className='useful_pages'>Useful pages</h3>
                <ul>
                   <Link to="/"> <li>Home</li></Link>
                   <Link to="/"> <li>Store</li></Link>
                   <Link to="/"> <li>Contact</li></Link>
              
                 
                </ul>
            </div>
        </div> 

        </div> 
       
        


    </div>
<div className="copyright">
   
    <p style={{color:"black"}}>Copyright &copy; <span style={{fontSize:"20px",fontWeigth:600}}>E-Store</span> || All Right Reserved 2022 </p>
</div>
</>
  )
}

export default Footer