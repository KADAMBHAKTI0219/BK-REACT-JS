
const Footer = ()=>{
    return (
        <div style={{borderBlockStart:"2px solid green",marginBlockStart:"30px"}}>
            <ul style={{display:"flex",justifyContent:"space-evenly", alignItems:"baseline",listStyle:"none",margin:"0",padding:"30px 10px"}}>
                <li style={{fontSize:"20px",fontWeight:"600",color:"green"}}>About Us
                    <div>
                        <p style={{fontSize:"15px",color:"gray",width:"40px"}}>Lorem ipsum dolor sit amet
                        consectetur adipiscing elit. </p>
                    </div>
                </li>
                <li style={{fontSize:"20px",fontWeight:"600",color:"green"}}>Career
                <div>
                        <p style={{fontSize:"15px",color:"gray",width:"40px"}}>Lorem ipsum dolor sit amet
                        consectetur adipiscing elit. </p>
                    </div>
                </li>
                <li style={{fontSize:"20px",fontWeight:"600",color:"green"}}>Privacy Policy
                <div>
                        <p style={{fontSize:"15px",color:"gray",width:"40px"}}>Lorem ipsum dolor sit amet
                        consectetur adipiscing elit. </p>
                    </div>
                </li>
                <li style={{fontSize:"20px",fontWeight:"600",color:"green"}}>Refund Policy
                <div>
                        <p style={{fontSize:"15px",color:"gray",width:"40px"}}>Lorem ipsum dolor sit amet
                        consectetur adipiscing elit. </p>
                    </div>
                </li>
                <li style={{fontSize:"20px",fontWeight:"600",color:"green"}}>Terms and Conditions
                <div>
                        <p style={{fontSize:"15px",color:"gray",width:"40px"}}>Lorem ipsum dolor sit amet
                        consectetur adipiscing elit. </p>
                    </div>
                </li>
                <li style={{fontSize:"20px",fontWeight:"600",color:"green"}}>Companies
                <div  style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)", gap:"10px",listStyle:"none",marginBlockStart:"10px",fontSize:"24px"}}>
                        <i class="fa-brands fa-instagram"></i>
                       <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-telegram"></i>
                        </div>
                </li>
            </ul>
        </div>
    )
}
export default Footer