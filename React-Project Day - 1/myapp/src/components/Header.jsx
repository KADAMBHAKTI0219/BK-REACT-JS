
const Header = ()=>{
    return (
        <div style={{width:"100%",borderBlockEnd:"2PX SOLID GREEN"}}>
            <nav className="nav" style={{width:"90%",margin:"auto",display:"flex",justifyContent:"space-between", alignItems:"center"}}>
            <ul style={{margin:"0",display:"flex",justifyContent:"space-between", alignItems:"center",listStyle:"none" }}>
                <li><img src="https://cdn.pixabay.com/photo/2023/07/05/15/29/ai-generated-8108575_960_720.png" alt="logo" height={100} width={100}/></li>
                <li><h1 style={{color:"green",fontSize:"24px"}}>SEED PLANT ORGANIC</h1></li>
            </ul>
                <ul style={{display:"flex",justifyContent:"space-between", alignItems:"center",listStyle:"none",width:"30%"}}>
                <li style={{fontSize:"20px",fontWeight:"600",color:"green"}}>Home</li>
                <li style={{fontSize:"20px",fontWeight:"600",color:"green"}}>About</li>
                <li  style={{fontSize:"20px",fontWeight:"600",color:"green"}}>Service</li>
                <li  style={{fontSize:"20px",fontWeight:"600",color:"green"}}>Contact</li></ul>
           <ul style={{display:"flex",justifyContent:"space-between", alignItems:"center",listStyle:"none",width:"10%"}}>
            <li style={{fontSize:"20px",fontWeight:"600",color:"green"}}><i class="fa-solid fa-magnifying-glass"></i></li>
            <li style={{fontSize:"20px",fontWeight:"600",color:"green"}}><i class="fa-solid fa-user"></i></li>
            <li style={{fontSize:"20px",fontWeight:"600",color:"green"}}><i class="fa-solid fa-cart-shopping"></i></li>
            </ul>     
        </nav>
        </div>
    )
}
export default Header