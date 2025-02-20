import React, { useState } from 'react';
import { CreditCardIcon, XIcon } from 'lucide-react';
import LargeRedButton from './LargeRedButton';
// import className from './classesName';
import SubscriptionBenefits from './SubscriptionBenefits';
import { VisaIcon, MasterCardIcon, AmericanExpressIcon, } from './CardSvg';
// import { PaymentIcon } from 'react-native-payment-icons'
// import VisaLogo from 'https://www.svgrepo.com/show/303634/visa-4-logo.svg';

const OrderForm = ({ isActive, handleClick }) => {
  const [formData, setFormData] = useState({
    plan: '',
    cardNumber: '',
    expDate: '',
    name: '',
    address: '',
    city: '',
    state: '',
    zip: ''
  });

  const hidden = isActive ? '' : 'hidden';
  const [cardType, setCardType] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (name === 'cardNumber') {
      const amex = /^3[47]/;
      const mastercard = /^5[1-5]/;
      const visa = /^4/;

      if (amex.test(value)) setCardType('amex');
      else if (mastercard.test(value)) setCardType('mastercard');
      else if (visa.test(value)) setCardType('visa');
      else setCardType('');
    }
  };

  const getCardDisplayName = (card) => {
    const names = {
      amex: 'American Express',
      mastercard: 'MasterCard',
      visa: 'Visa'
    };
    return names[card] || '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className={`min-h-screen ${hidden} backdrop-blur-xl fixed top-0 left-0 right-0 bottom-0 overflow-y-auto py-12 px-4 sm:px-6 lg:px-8`}>
      <SubscriptionBenefits handleClick={handleClick} isActive={isActive} />
      <div className="max-w-3xl mx-auto shadow-xl rounded-2xl">
        {/* Header with Image */}
        <div className="bg-gradient-to-r from-red-500 rounded-xl to-red-600 px-8 py-6 relative">
          <button
            className="animate-spin text-white text-2xl absolute top-4 right-4"
            onClick={() => handleClick(isActive)}
          >
            <XIcon />
          </button>
          <div className="text-center">
            {/* Placeholder for Image */}
            {/* <div className="mb-6">
              <img 
                src="https://via.placeholder.com/800x400" 
                alt="Q-Day Header" 
                className="w-full h-auto rounded-lg"
              />
            </div> */}
            <h1 className="text-3xl font-bold text-white">
              Q-DAY ORDER FORM
            </h1>
          </div>
        </div>

        {/* Form Content */}
        <form onSubmit={handleSubmit} className={`px-8 py-6 bg-gradient-to-b from-amber-100 to-amber-300 space-y-8`}>
          {/* Intro Text */}
          <div className="text-center">
            <p className="text-lg">
              <span className="font-bold text-2xl text-red-800">YES!</span>
              {' '}Rush my access to my{' '}
              <span className="text-blue-600 font-semibold">FREE E-Report</span>,
              {' '}<span className="italic text-gray-700">"The Coming Q-Day Crash,"</span>
            </p>
            <p className="text-gray-600 mt-2">
              and enter my risk-free subscription to{' '}
              <span className="font-bold text-gray-800">Q-Day Investors Protection Services</span>
              {' '}as indicated below.
            </p>
            <p className="text-gray-600 mt-2">
              I understand I can cancel at any time for a full refund of my remaining subscription.
            </p>
          </div>

          {/* Subscription Plans */}
          <div className="space-y-4">
            <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-red-500 transition-colors duration-200">
              <label className="flex items-start space-x-4 cursor-pointer">
                <input
                  type="radio"
                  name="plan"
                  value="twoYear"
                  onChange={handleInputChange}
                  className="mt-1 w-4 h-4 text-blue-600"
                />
                <div className="flex-1">
                  <span className="block text-xl font-semibold text-blue-600">SAVE 50%</span>
                  <span className="text-gray-600">Two years for only $39 a month (reg. $79/mo.)</span>
                  <span className="block mt-2 text-sm text-blue-500">Special Bonus – FREE hack-proof offline wallet (a $150 value)</span>
                </div>
              </label>
            </div>

            <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-red-500 transition-colors duration-200">
              <label className="flex items-start space-x-4 cursor-pointer">
                <input
                  type="radio"
                  name="plan"
                  value="oneYear"
                  onChange={handleInputChange}
                  className="mt-1 w-4 h-4 text-blue-600"
                />
                <div className="flex-1">
                  <span className="block text-xl font-semibold text-blue-600">SAVE 20%</span>
                  <span className="text-gray-600">One year for only $49 a month (reg. $60/mo.)</span>
                </div>
              </label>
            </div>
          </div>

          {/* Credit Card Section */}
          <div className="p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Charge my credit card:</h3>

            <div className="flex space-x-4 mb-6 justify-center">
              {['amex', 'mastercard', 'visa'].map(card => (
                <div
                  key={card}
                  className={`p-4 rounded-lg transition-all duration-200 text-center ${cardType === card
                    ? 'bg-blue-100 border-2 border-blue-500 shadow-md'
                    : 'bg-white border-2 border-gray-200'
                    }`}
                >
                  <CreditCardIcon type="visa" format="flatRounded" width={100}
                    size={40}
                    className={`mx-auto mb-2 ${cardType === card ? 'text-blue-500' : 'text-gray-400'}`}

                  />


                  <span className={`text-sm ${cardType === card ? 'text-blue-500 font-medium' : 'text-gray-400'}`}>
                    {getCardDisplayName(card)}
                    {card === 'visa' && <VisaIcon
                      className={`mx-auto mb-2 ${cardType === card ? 'text-blue-500' : 'text-gray-400'}`}
                    />}
                    {card === 'mastercard' && <MasterCardIcon
                      className={`mx-auto mb-2 ${cardType === card ? 'text-blue-500' : 'text-gray-400'}`}
                    />}
                    {card === 'amex' && <AmericanExpressIcon
                      className={`mx-auto mb-2 ${cardType === card ? 'text-blue-500' : 'text-gray-400'}`}
                    />}
                  </span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Card #:</label>
                <input
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="XXXX XXXX XXXX XXXX"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Exp. Date:</label>
                <input
                  type="text"
                  name="expDate"
                  value={formData.expDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="MM/YY"
                />
              </div>
            </div>
          </div>

          {/* Personal Details */}
          <div className="grid grid-cols-1 gap-6">

            <label className="block text-sm font-medium text-gray-700 mb-2">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg border-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />

            <div>
              <div
                className='grid grid-cols-1 md:grid-cols-2 gap-4'
              ><div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email:</label>
                  <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone:</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Address:</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">City:</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">State:</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Zip:</label>
                <input
                  type="text"
                  name="zip"
                  value={formData.zip}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Submit Section */}
          <div className="text-center space-y-4">
            <p className="text-xl font-bold text-red-600">
              Don't wait a minute longer.
            </p>
            <p className="text-lg text-gray-700">
              Click below to place your order.
            </p>
            <LargeRedButton
              type="submit"
              className="w-full max-w-md mx-auto bg-gradient-to-r from-red-600 to-red-700 text-white py-4 px-8 rounded-xl text-lg font-bold hover:from-red-700 hover:to-red-800 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              SUBMIT
            </LargeRedButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderForm;