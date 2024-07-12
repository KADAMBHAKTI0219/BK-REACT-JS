import React, { useState } from 'react'
import './Student.css'

const StudentForm = () => {
  const [boxgender,setgender] = useState(false)
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
        setStudentData({...studentData,['']:''})
        setgender(false)
        }


  return (
    <div>
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
           <p> Male <input type="radio" checked={gender} value={'male'} name='gender' onChange={(e)=>setgender(e.target.checked)}/>
            Female <input type="radio" checked={gender} value={'female'} name='gender'  onChange={(e)=>setgender(e.target.checked)} />
            Other <input type="radio" checked={gender} value={'other'} name='gender'  onChange={(e)=>setgender(e.target.checked)}/></p>
            <br />
            <input type="submit"  />
      </form>
    </div>
  )
}

export default StudentForm
