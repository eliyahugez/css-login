import React, { useState } from 'react';
import { VisaIcon, MasterCardIcon, AmericanExpressIcon } from './CardSvg';

const PaymentForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        emailConfirm: '',
        phoneNumber: '',
        streetAddress: '',
        zipCode: '',
        amount: '',
        cardHolderName: '',
        cardNumber: '',
        expMonth: 'January',
        expYear: '2025',
        cvv: ''
    });
    const labelInputClassName = 'block text-sm font-medium text-gray-700 mb-2 transition-colors group-focus-within:text-amber-600';
    const InputclassName = 'w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-200 outline-none';


    const [emailError, setEmailError] = useState('');
    const [cardType, setCardType] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        if (name === 'emailConfirm' || name === 'email') {
            const otherEmail = name === 'email' ? formData.emailConfirm : formData.email;
            if (otherEmail && value !== otherEmail) {
                setEmailError('Emails do not match');
            } else {
                setEmailError('');
            }
        }

        if (name === 'cardNumber') {
            const firstDigits = value.substring(0, 4);
            if (firstDigits.startsWith('4')) {
                setCardType('visa');
            } else if (/^5[1-5]/.test(firstDigits)) {
                setCardType('mastercard');
            } else if (/^3[47]/.test(firstDigits)) {
                setCardType('amex');
            } else {
                setCardType('');
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
    };

    const renderCardIcon = () => {
        switch (cardType) {
            case 'visa':
                return <div className='flex items-center justify-center w-8 h-8'>
                    <VisaIcon className='w-full h-full' />
                </div>;
            case 'mastercard':
                return <div className='flex items-center justify-center w-8 h-8'>
                    <MasterCardIcon className='w-full h-full' />
                </div>;
            case 'amex':
                return <div className='flex items-center justify-center w-8 h-8'>
                    <AmericanExpressIcon className='w-full h-full' />
                </div>;
            default:
                return (
                    <div className='flex items-center justify-center w-8 h-8'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-full h-full text-amber-800' viewBox="0 0 20 20" fill="currentColor">
                            <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                            <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                        </svg>
                    </div>
                );
        }
    };

    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-yellow-100 to-amber-300">
            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl transform transition-all duration-500 hover:shadow-3xl">
                <div className="bg-gradient-to-r from-yellow-600 to-yellow-800 px-8 py-8 rounded-t-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
                    <h1 className="text-4xl font-bold text-white text-center relative z-10 tracking-tight">Payment Details</h1>
                    <p className="text-amber-100 text-center mt-2 relative z-10">Please fill in your payment information</p>
                </div>


                <form onSubmit={handleSubmit} className="px-8 py-8 space-y-8">
                    {/* Personal Information */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                            <span className="bg-amber-100 text-yellow-900 p-2 rounded-full mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                </svg>
                            </span>
                            Personal Information
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="group">
                                <label className={labelInputClassName}>First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    className={InputclassName}
                                    required
                                />
                            </div>
                            <div className="group">
                                <label className={labelInputClassName}>Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    className={InputclassName}
                                    required
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="group">
                                <label className={labelInputClassName}>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className={InputclassName}
                                    required
                                />
                            </div>
                            <div className="group">
                                <label className={labelInputClassName}>Confirm Email</label>
                                <input
                                    type="email"
                                    name="emailConfirm"
                                    value={formData.emailConfirm}
                                    onChange={handleInputChange}
                                    className={`w-full px-4 py-3 rounded-xl border-2 ${emailError ? 'border-red-500' : 'border-gray-200'} focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-200 outline-none`}
                                    required
                                />
                                {emailError && <p className="mt-1 text-sm text-red-600">{emailError}</p>}
                            </div>
                            <div className="group">
                                <label className={labelInputClassName}>Amount ($)</label>
                                <input
                                    type="number"
                                    name="amount"
                                    value={formData.amount}
                                    onChange={handleInputChange}
                                    className={InputclassName}
                                    required
                                    min="0"
                                    step="0.01"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="group">
                                <label className={labelInputClassName}>Phone Number</label>
                                <input
                                    type="tel"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleInputChange}
                                    className={InputclassName}
                                    placeholder="Enter your mobile number"
                                    required
                                />
                            </div>
                            <div className="group">
                                <label className={labelInputClassName}>Street Address</label>
                                <input
                                    type="text"
                                    name="streetAddress"
                                    value={formData.streetAddress}
                                    onChange={handleInputChange}
                                    className={InputclassName}
                                    required
                                />
                            </div>
                            <div className="group">
                                <label className={labelInputClassName}>ZIP Code</label>
                                <input
                                    type="text"
                                    name="zipCode"
                                    value={formData.zipCode}
                                    onChange={handleInputChange}
                                    className={InputclassName}
                                    required
                                    pattern="[0-9]*"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Card Information */}
                    <div className="space-y-6 border-t pt-8">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                            <span className="bg-amber-100 text-amber-600 p-2 rounded-full mr-3">
                                {renderCardIcon()}
                                {console.log(cardType)
                                }

                            </span>
                            Card Information
                        </h2>

                        <div className="group">
                            <label className={labelInputClassName}>Card Holder Name</label>
                            <input
                                type="text"
                                name="cardHolderName"
                                value={formData.cardHolderName}
                                onChange={handleInputChange}
                                className={InputclassName}
                                required
                            />
                        </div>

                        <div className="group">
                            <label className={labelInputClassName}>Card Number</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    name="cardNumber"
                                    value={formData.cardNumber}
                                    onChange={handleInputChange}
                                    placeholder="XXXX XXXX XXXX XXXX"
                                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-200 outline-none pr-12"
                                    required
                                />
                                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                    {renderCardIcon()}
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                            <div className="group">
                                <label className={labelInputClassName}>Exp Month</label>
                                <select
                                    name="expMonth"
                                    value={formData.expMonth}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-200 outline-none appearance-none bg-white"
                                >
                                    {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map(month => (
                                        <option key={month} value={month}>{month}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="group">
                                <label className={labelInputClassName}>Exp Year</label>
                                <select
                                    name="expYear"
                                    value={formData.expYear}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-200 outline-none appearance-none bg-white"
                                >
                                    {Array.from({ length: 10 }, (_, i) => 2024 + i).map(year => (
                                        <option key={year} value={year}>{year}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="group">
                                <label className={labelInputClassName}>CVV</label>
                                <input
                                    type="text"
                                    name="cvv"
                                    value={formData.cvv}
                                    onChange={handleInputChange}
                                    placeholder="XXX"
                                    className={InputclassName}
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-6">
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-yellow-600 to-amber-500 text-white py-4 px-8 rounded-xl text-lg font-bold hover:from-yellow-700 hover:to-amber-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-amber-200"
                        >
                            Complete Payment
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PaymentForm;