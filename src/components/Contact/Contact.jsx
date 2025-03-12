import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";
const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [done, setDone] = useState(false)
  const [name, setName] = useState(false)
  const [email, setEmail] = useState(false)
  const [message, setMessage] = useState(false)

 const onClickHandler=(event)=>{
    if(name===""||email===""||message===""){
      return alert("Please Fill all feilds")
    }
   const templateId = 'template_PJM3DA2Z';
   sendFeedback( templateId,{message_html:message,from_name: name ,reply_to: email})
   }
 
  const  sendFeedback= (templateId, variables)=>{
   emailjs.send(
     'warishce@gmail.com', templateId,variables,'user_IJpFzxT8nELts7lj7KNnX'
     ).then(res => {
       if(res.status === 200){
           setTimeout(() => {
            setEmail('')
            setName('')
            setMessage('')
           }, 3000)
       }else{
         let msg="Mail not sent "
         alert(msg)
       }
 
     })
     // Handle errors here however you like, or use a React error boundary
     .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
     
  
  }

  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          {/* <span style={{color: darkMode?'white': ''}}>Get in Touch</span> */}
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <div>
          <input type="text" name="user_name" className="user" onChange={(e)=>setName(e.target.value)}  placeholder="Name"/>
          <input type="email" name="user_email" className="user" onChange={(e)=>setEmail(e.target.value)} placeholder="Email"/>
          <textarea name="message" className="user" onChange={(e)=>setMessage(e.target.value)} placeholder="Message"/>
          <input type="submit" value="Send" className="button" onClick={onClickHandler}/>
          <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
