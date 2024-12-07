import React, { useRef } from 'react'
import { useReducer } from 'react'

function MarkSheet() {
    let FirstNameInputRef=useRef();
    let LastNameInputRef=useRef();
    let EmailInputRef=useRef();
    let PasswordInputRef=useRef();
    let TelInputRef=useRef();
    let HinInputRef=useRef();
    let EngInputRef=useRef();
    let MathInputRef=useRef();
    let SciInputRef=useRef();
    let SocInputRef=useRef();

    let FirstNameResultRef=useRef();
    let LastNameResultRef=useRef();
    let EmailResultRef=useRef();
    let PasswordResultRef=useRef(); 
    let TelResultRef=useRef();
    let HinResultRef=useRef();
    let EngResultRef=useRef();
    let MathResultRef=useRef();
    let SciResultRef=useRef();
    let SocResultRef=useRef();
    let NameRegEx=/^[a-zA-Z\s]{2,30}$/;
    let EmailRegEx= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let PassRegEx=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/;

    let InputonFocus=(InputRef)=>{
        InputRef.current.style.backgroundColor="yellow"

    }
    let InputonChange=(InputRef, ResultRef)=>{
        if(InputRef.current.value >=0 && InputRef.current.value <=100){
            if(InputRef.current.value >=35){
                ResultRef.current.innerHTML="Pass 😊"
                ResultRef.current.style.color="green"
        }else{
            ResultRef.current.innerHTML="Fail 😓"
            ResultRef.current.style.color="red"
        }
    }else{
        ResultRef.current.innerHTML="Invalid 🙆"
        ResultRef.current.style.color="brown"
         
    }

    }
    let InputonBlur=(InputRef)=>{
         InputRef.current.style.backgroundColor="pink"

    }

    let calculateMarks=(TelMarks,HinMarks,EngMarks,MathMarks,SciMarks,SocMarks)=>{
        let TotalMarks=TelMarks+ HinMarks+ EngMarks+ MathMarks+ SciMarks+ SocMarks;
        let Percentage=(TotalMarks/600)*100;
        return {TotalMarks,Percentage}
    }
    let results=calculateMarks(90,90,80,90,80,60);
    console.log(results);

    let validateName=(NameStr,ResultRef)=>{
        let result=NameRegEx.test(NameStr);
        if(result==true){
            ResultRef.current.innerHTML="valid"
            ResultRef.current.style.color="green"
        }else{
            ResultRef.current.innerHTML="Invalid"
            ResultRef.current.style.color="red"
        }
    }
     let validateEmail=(EmailStr,ResultRef)=>{
        let result=EmailRegEx.test(EmailStr)
        if(result==true){
            ResultRef.current.innerHTML="valid"
            ResultRef.current.style.color="green"
        }else{
             ResultRef.current.innerHTML="Invalid"
            ResultRef.current.style.color="red"
        }

     }
     let validatePass=(PassStr,ResultRef)=>{
        let result=PassRegEx.test(PassStr)
        if(result==true){
            ResultRef.current.innerHTML="valid"
            ResultRef.current.style.color="green"
        }else{
             ResultRef.current.innerHTML="Invalid"
            ResultRef.current.style.color="red"
        }

     }


  return (
    <div>
       <form>
        <div>
            <label>First Name:</label>
            <input type="text" ref={FirstNameInputRef} 
            onFocus={()=>{
                FirstNameInputRef.current.style.backgroundColor="yellow"
            }}
            onChange={()=>{
                validateName(FirstNameInputRef.current.value,FirstNameResultRef); 
            }}
            onBlur={()=>{
                FirstNameInputRef.current.style.backgroundColor="pink"
            }}

            ></input>
            <label ref={FirstNameResultRef}></label>
        </div>
        <div>
            <label>Last Name:</label>
            <input type="text" ref={LastNameInputRef}
            onFocus={()=>{
                LastNameInputRef.current.style.backgroundColor="yellow"
            }}
            onChange={()=>{
                validateName(LastNameInputRef.current.value,LastNameResultRef); 
            }}
            onBlur={()=>{
                LastNameInputRef.current.style.backgroundColor="pink"
            }}
            ></input>
            <label ref={LastNameResultRef}></label>
        </div>
        <div>
            <label>Email:</label>
            <input type="email" ref={EmailInputRef}
            onChange={()=>{
                validateEmail(EmailInputRef.current.value,EmailResultRef);
            }}
            ></input>
            <label ref={EmailResultRef}></label>
        </div>
        <div>
            <label>Password:</label>
            <input type="password" ref={PasswordInputRef}
             onChange={()=>{
                validatePass(PasswordInputRef.current.value,PasswordResultRef);
            }}
            ></input>
            <label ref={PasswordResultRef}></label>
        </div>
        <div>
            <label>Telugu Marks:</label>
            <input type="number" ref={TelInputRef}
            onFocus={()=>{
                InputonFocus(TelInputRef);
            }}
            onChange={()=>{
                InputonChange(TelInputRef, TelResultRef);
                
            }}
            onBlur={()=>{
                InputonBlur(TelInputRef);
               
            }}
            ></input>
            <label ref={TelResultRef}></label>
        </div>
        <div>
            <label>Hindi Marks:</label>
            <input type="number" ref={HinInputRef}
            onFocus={()=>{
                InputonFocus(HinInputRef)
            }}
            onChange={()=>{
                InputonChange(HinInputRef,HinResultRef)
            }}
            onBlur={()=>{
                InputonBlur(HinInputRef)
            }}
            
            ></input>
            <label ref={HinResultRef}></label>
        </div>
        <div>
            <label>English Marks:</label>
            <input type="number" ref={EngInputRef}
             onFocus={()=>{
                InputonFocus(EngInputRef)
            }}
            onChange={()=>{
                InputonChange(EngInputRef, EngResultRef)
            }}
            onBlur={()=>{
                InputonBlur(EngInputRef)
            }}
            ></input>
            <label ref={EngResultRef}></label>
        </div>
        <div>
            <label>Maths Marks:</label>
            <input type="number" ref={MathInputRef}
             onFocus={()=>{
                InputonFocus(MathInputRef)
            }}
            onChange={()=>{
                InputonChange(MathInputRef, MathResultRef)
            }}
            onBlur={()=>{
                InputonBlur(MathInputRef)
            }}
            ></input>
            <label ref={MathResultRef}></label>
        </div>
        <div>
            <label>Science Marks:</label>
            <input type="number" ref={SciInputRef}
             onFocus={()=>{
                InputonFocus(SciInputRef)
            }}
            onChange={()=>{
                InputonChange(SciInputRef, SciResultRef)
            }}
            onBlur={()=>{
                InputonBlur(SciInputRef)
            }}
            ></input>
            <label ref={SciResultRef}></label>
        </div>
        <div>
            <label>Social Marks:</label>
            <input type="number" ref={SocInputRef}
             onFocus={()=>{
                InputonFocus(SocInputRef)
            }}
            onChange={()=>{
                InputonChange(SocInputRef,SocResultRef)
            }}
            onBlur={()=>{
                InputonBlur(SocInputRef)
            }}
            ></input>
            <label ref={SocResultRef}></label>
        </div>
        <div>
            <button type="button" onClick={()=>{
                let FirstName=FirstNameInputRef.current.value;
                let LastName=LastNameInputRef.current.value;
                let Telmarks=Number(TelInputRef.current.value);
                let Hinmarks=Number(HinInputRef.current.value);
                let Engmarks=Number(EngInputRef.current.value);
                let Mathmarks=Number(MathInputRef.current.value);
                let Scimarks=Number(SciInputRef.current.value);
                let Socmarks=Number(SocInputRef.current.value);
                let TotalMarks= Telmarks+ Hinmarks+ Engmarks+ Mathmarks+ Scimarks+ Socmarks;
                let percentage=(TotalMarks/600)*100

                alert(` ${FirstName} ${LastName} Got Total Result ${TotalMarks} with ${percentage.toFixed(1)}%`)
            }}>Calculate</button>

             
        </div>
       </form>
    </div>
  )
}

export default MarkSheet
