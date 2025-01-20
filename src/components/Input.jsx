import { styled } from 'styled-components'

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
  background-color: ${({ isValidInput }) => (isValidInput) ? '#f39999' : 'rgb(149, 175, 216)'};
  color: ${({ isValidInput }) => (isValidInput) ? 'red' : 'black'};
  border: 1px solid ${({ isValidInput }) => (isValidInput ? '#f39999' : 'pink')};
  `

export default function CustomInputLable({ label, isValidInput, ...props }) {
    return <p>
        <CustomLabelControlers isValidInput={isValidInput}>{label}</CustomLabelControlers>
        <CustomInputControlers {...props} isValidInput={isValidInput} />
    </p>
}