import React from 'react'
import { 
    MemberSection,
    Container,
    Header,
    PageTitle,
    H2,
    Form,
    ContentContainer,
    FormGroup,
    Label,
    Input ,
    P,
    ButtonL
} from './MemberElement.js';
 import useMemberForm from './useMemberForm';
 import ValidateMemberLogic from './ValidateMemberLogic';

const Member = () => {
     const {handleInputs, values, handleSubmit, errors} = useMemberForm(ValidateMemberLogic);
     const [name, setName] = useState("");
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [address, setAddress] = useState("");
     const [confirmpassword, setConfirmPassword] = useState("");
   
     const [flag, setFlag] = useState(false);
     const [login, setLogin] = useState(true);
     
       function handleFormSubmit(e) {
        e.preventDefault();
    
        if (!name || !email || !password || !confirmpassword || !address) {
          setFlag(true);
        } else {
          setFlag(false);
          localStorage.setItem("YourEmail", JSON.stringify(email));
          localStorage.setItem(
            "YourPassword",
            JSON.stringify(password)
          );
          console.log("Saved in Local Storage");
    
          setLogin(!login);
        }
      }
    
    
    return (
        <div>
        {login ? (

    <MemberSection>
        <Container>
            <Header>
                <PageTitle>Become a member</PageTitle> 
                <H2>Don't want to miss out on exclusive discounts, offers, launches and events?</H2>
            </Header>
            <Form onSubmit={handleFormSubmit} method="post" ValidateMemberLogic>  
                <ContentContainer>
                    <FormGroup className="form-group">
                        <Label>Username</Label>
                        <Input 
                            type="text" 
                            name="name" 
                            className="form-control"
                            onChange={(event) => setName(event.target.value)}
                             placeholder="Type your fullname" 
                           
                        />
                        {/* {errors.username && <P>{errors.username}</P>}    */}
                        {/* errors.username is true pass whatever is after that */}
                    </FormGroup>
                    <FormGroup className="form-group">
                        <Label>Address</Label>
                        <Input 
                            type="text" 
                            name="address" 
                            id="address" 
                            className="form-control"
                            onChange={(event) => setAddress(event.target.value)}
                            placeholder="Type your Address"
                            
                        />
                        {/* {errors.username && <P>{errors.username}</P>}    */}
                        {/* errors.username is true pass whatever is after that */}
                    </FormGroup>
                    <FormGroup className="form-group">
                        <Label>Email*</Label>
                        <Input 
                            type="email" 
                            className="form-control input"
                             onChange={(event) => setEmail(event.target.value)}
                             placeholder="your@email.com" 
                            
                        />
                        {/* {errors.email && <P>{errors.email}</P>} */}
                    </FormGroup>
                    <FormGroup className="form-group">
                        <Label>Password*</Label>
                        <Input 
                        type="password"
                            className="form-control input"
                             onChange={(event) => setPassword(event.target.value)}
                             placeholder="Your password" 
                            
                        />
                        {/* {errors.password && <P>{errors.password}</P>} */}
                    </FormGroup>
                    <FormGroup className="form-group">
                        <Label>Confirm Password*</Label>
                        <Input 
                            type="password" 
                            className="form-control input"
                             onChange={(event) => setConfirmPassword(event.target.value)}
                             placeholder="Your password" 
                            
                        />
                        {/* {errors.confirmpassword && <P>{errors.confirmpassword}</P>} */}
                    </FormGroup>
                    <ButtonL type='submit' >
                        Create Account
                    </ButtonL>
                </ContentContainer>
                <p onClick={handleClick} className="forgot-password text-right">
                Already registered{" "}log in?
                
              </p>
              {flag && (
                <Alert color="primary" variant="danger">
                  I got it you are in hurry! But every Field is important!
                </Alert>
              )}
            </Form>
        </Container>
    </MemberSection>
    ) : (
        <AccountSidebar />
      )}
    </div>
  );
}

export default Member;