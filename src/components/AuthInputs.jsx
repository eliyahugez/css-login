import { useState } from 'react';
import { styled } from 'styled-components'
import CustomButtonControlers from './Button.jsx';
import CustomInputLable from './Input';
import Button from './Button.jsx';

const CustomDivControlers = styled.div`
 display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`
// const CustomLabelControlers = styled.label`
//   display: block;
//   margin-bottom: 0.5rem;
//   font-size: 0.75rem;
//   font-weight: 700;
//   letter-spacing: 0.1em;
//   text-transform: uppercase;
//   color: ${({ isValidLabal }) => (isValidLabal) ? '#f73f3f' : '#6b7280'};
// `
// const CustomInputControlers = styled.input`
//  width: 100%;
//   padding: 0.75rem 1rem;
//   line-height: 1.5;
//   border-radius: 0.25rem;
//   box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
//   background-color: ${({ isValidInput }) => (isValidInput) ? '#f39999' : 'rgb(149, 175, 216)'};
//   color: ${({ isValidInput }) => (isValidInput) ? 'red' : 'black'};
//   border: 1px solid ${({ isValidInput }) => (isValidInput ? '#f39999' : 'pink')};
//   `


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
      // console.log(enteredEmail);

      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
      // console.log(value);

    }
  }
  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;


  return (
    <div id="auth-inputs" className='w-full mx-auto max-w-sm p-8 rounded shadow-md bg-gradient-to-b from-stone-400 to-stone-700 ' >
      <div className='flex flex-col gap-4 mb-4 ' >
        <CustomInputLable
          label="Email"
          type="email"
          isValidInput={emailNotValid}
          onChange={(event) => {
            handleInputChange('email', event.target.value);
            handleLogin();
          }} />
        <CustomInputLable
          label="Password"
          type="password"
          isValidInput={passwordNotValid}
          onChange={(event) => {
            handleInputChange('password', event.target.value);
            handleLogin();
          }} />

      </div>
      <div className="flex gap-4 justify-end">
        <botton type="button"
          className='text-button hover:text-amber-400 cursor-pointer' >
          Create a new account
        </botton>
        <Button className='button' onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}
