import { useState } from "react"

const Content = (image)=>{
    const [img,setImage] = useState(true)
    return ( 
        <div>
            <div>
                <div style={{width:"100%",display:"flex",justifyContent:"space-evenly",marginBlockStart:"30px",alignItems:"center"}}><div style={{textAlign:"center",width:"45%"}}><h1 style={{color:"#40A578"}}>"In every walk with nature,one receives far more than he seeks"</h1>
        <p style={{textAlign:"justify",fontSize:"18px"}}>Plants are the eukaryotes that form the kingdom Plantae; they are predominantly photosynthetic. This means that they obtain their energy from sunlight, using chloroplasts derived from endosymbiosis with cyanobacteria to produce sugars from carbon dioxide and water, using the green pigment chlorophyll. Exceptions are parasitic plants that have lost the genes for chlorophyll and photosynthesis, and obtain their energy from other plants or fungi.Historically, as in Aristotle's biology, the plant kingdom encompassed all living things that were not animals, and included algae and fungi. Definitions have narrowed since then; current definitions exclude the fungi and some of the algae. By the definition used in this article, plants form the clade Viridiplantae (green plants), which consists of the green algae and the embryophytes or land plants (hornworts, liverworts, mosses, lycophytes, ferns, conifers and other gymnosperms, and flowering plants). A definition based on genomes includes the Viridiplantae, along with the red algae and the glaucophytes, in the clade Archaeplastida.There are about 380,000 known species of plants, of which the majority, some 260,000, produce seeds. They range in size from single cells to the tallest trees. </p></div>  
        <button onClick={()=>(setImage(!img))} style={{width:"45%",border:"none",outline:"none",fontSize:"18px",borderRadius:"20px",background:"none"}}>{img ? <img src="https://images6.alphacoders.com/134/1347850.png" alt="" style={{width:"100%",borderRadius:"20px"}}/> : <img src="https://cdn.wallpapersafari.com/2/28/bOrVPf.jpg" alt="flower" style={{width:"100%",borderRadius:"20px"}}/>}</button>  
        </div>  
       
        </div>
            
        </div>
       
    )
}
export default Content