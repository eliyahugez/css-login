import { useState } from 'react';
import { styled } from 'styled-components'

const CustomDivControlers = styled.div`
 display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`
const CustomLabelControlers = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({ isValidLabal }) => (isValidLabal) ? '#f73f3f' : '#6b7280'};
`
const CustomInputControlers = styled.input`
 width: 100%;
  padding: 0.75rem 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    background-color: ${({ isValidInput }) => (isValidInput) ? '#f73f3f' : 'rgb(149, 175, 216)'};


  `
//  background-color: #d1d5db;
// color:rgb(149, 175, 216);   background-color: ${isValidInput}) => isValidInput ? '#d1d5db' : '#fed2d2'};
// border-color: ${({ isValidInput }) => isValidInput ? '#d1d5db' : '#f73f3f'};
// border: 1px solid transparent;`}



export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      console.log(enteredEmail);

      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
      console.log(value);

    }
  }
  function handleLogin() {
    setSubmitted(true);
  }



  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;
  console.log(passwordNotValid);

  return (
    <div id="auth-inputs">
      <CustomDivControlers>
        <p>
          <CustomLabelControlers
            // className={`label ${emailNotValid ? 'invalid' : ''}`}
            isValidLabal={emailNotValid}
          >Email</CustomLabelControlers>
          <CustomInputControlers
            type="email"
            isValidInput={emailNotValid}
            // className={emailNotValid ? 'invalid' : undefined}
            onChange={(event) => {
              handleInputChange('email', event.target.value);
              handleLogin();
            }
            }
          />
        </p>
        <p>
          <CustomLabelControlers
            // className={`label ${emailNotValid ? 'invalid' : ''}`}
            isValidLabal={passwordNotValid}

          >Password</CustomLabelControlers>
          <CustomInputControlers
            type="password"
            isValidInput={passwordNotValid}

            // className={passwordNotValid ? 'invalid' : undefined}
            onChange={(event) => {
              handleInputChange('password', event.target.value);
              handleLogin();
            }
            }
          />
        </p>
      </CustomDivControlers>
      <div className="actions">
        <button type="button" className="text-button">
          Create a new account
        </button>
        <button className='button' onClick={handleLogin}>Sign In</button>
      </div>
    </div>
  );
}
