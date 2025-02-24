import { useState } from 'react';
import AuthInputs from './components/AuthInputs.jsx';
import Header from './components/Header.jsx';
import LargeRedButton from './components/LargeRedButton.jsx';
import OrderForm from './components/OrderForm.jsx';
import PaymentForm from './components/PaymentForm.jsx';

export default function App() {


  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(prevState => !prevState);
  }
  return (
    <>
      {/* <Header />
      <main>
        <AuthInputs />
      </main> */}

      <LargeRedButton
        type={"Oredr"}
        text={"ORDER NOW"}
        isActive={isActive}
        handleClick={handleClick}
      />

      <OrderForm
        isActive={isActive}
        handleClick={handleClick}

      />
      <PaymentForm />
    </>
  );
}
