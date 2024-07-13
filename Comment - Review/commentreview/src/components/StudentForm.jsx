import React, { useState } from 'react'
import './Student.css'

const StudentForm = () => {
    const studentDataObj = {
        name: '',
        email: '',
        password: '',
        select:'',
        gender:true,
    }
    const [studentData,setStudentData] = useState(studentDataObj)
    
    const {name,email,password,select,gender} = studentData

    const studentGetData = (e)=>{
        setStudentData({...studentData,[e.target.name]:e.target.value})

    }
    const studentSubmit = (e)=>{
        e.preventDefault()
        console.log(studentData)
        }


  return (
    <div className='main'>
      <form action="" onSubmit={(e)=>studentSubmit(e)} >
            <input type="text" placeholder='Enter Your Full Name' value={name} name='name' onChange={(e)=>studentGetData(e)}/><br />
            <input type="email" placeholder='Enter Your Email' value={email} name='email'  onChange={(e)=>studentGetData(e)}/><br />  
            <input type="password" placeholder='Enter Your Password'  value={password} name='password'  onChange={(e)=>studentGetData(e)}/><br />
            <select name="select" id="select"  onChange={(e)=>studentGetData(e)}  value={select}>
                <option value="Freshman">Freshman</option>
                <option value="Sophomore">Sophomore</option>
                <option value="Junior">Junior</option>
                <option value="Senior">Senior</option>
            </select>
           <p> Male <input type="radio"  value={'male'} name='gender' onChange={(e)=>studentGetData(e)}/>
            Female <input type="radio"  value={'female'} name='gender'  onChange={(e)=>studentGetData(e)}/>
            Other <input type="radio" value={'other'} name='gender'  onChange={(e)=>studentGetData(e)}/></p>
            <br />
            <input type="submit" style={{backgroundColor:"green",color:"white",width:"50%",fontSize:"24px",padding:"10px"}} />
      </form>
    </div>
  )
}

export default StudentForm
