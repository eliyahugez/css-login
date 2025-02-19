import { XIcon } from 'lucide-react';
import React from 'react';

const SubscriptionBenefits = ({ handleClick, isActive }) => {
  return (
    <div className="bg-sahara bg-gradient-to-b from-amber-100 to-amber-300 p-4 sm:p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
      <button
        className="animate-spin text-red-600 text-2xl absolute top-8 right-8"
        onClick={() => handleClick(isActive)}
      >
        <XIcon />
      </button>
      {/* Cover Image */}
      <div className="w-full flex justify-center mb-8">
        <img
          src="https://i.ibb.co/n8Qjqkcr/image0.jpg" // Replace with your book cover image
          alt="Book Cover"
          className="w-full max-w-[80%] h-auto rounded-lg shadow-md"
        />
      </div>

      {/* Main Title */}
      <h1 className="text-5xl sm:text-6xl font-bold text-red-600 text-center mb-4">
        YOURS FREE
      </h1>

      {/* Subtitle */}
      <h2 className="text-2xl sm:text-4xl text-gray-700 text-center mb-8">
        With Your Risk-Free Subscription To Q-Day Investors Protection Services Interactive Live Website
      </h2>

      {/* Logo */}
      <div className="flex justify-center mb-8">
        <img
          src="https://i.ibb.co/MxRKC8gD/2025-01-23-141609.png" // Replace with your logo
          alt="Logo"
          className="max-h-[30dvh] rounded-lg w-auto"
        />
      </div>

      {/* Introduction Text */}
      {/* <p className="text-xl sm:text-2xl text-red-700  mb-8">
        You’ll get all this with your subscription:
      </p> */}

      <div className=" flex flex-col space-y-6 md:space-y-12 space-x-6 sm:space-x-12 md:space-x-16 ">

        {/* Benefit 1 */}
        <div className="flex items-start space-x-4">
          {/* <span className="text-red-600 font-bold text-xl"></span> */}
          <p className="text-xl sm:text-2xl text-red-700 ">
            You’ll get all this with your subscription:          </p>
        </div>
        {/* Benefit 1 */}
        <div className="flex items-start space-x-4">
          <span className="text-red-600 font-bold text-xl">1.</span>
          <p className="text-gray-700">
            How to secure your online wallet so it won’t get stolen (as it has happened many times).          </p>
        </div>

        {/* Benefit 2 */}
        <div className="flex items-start space-x-4">
          <span className="text-red-600 font-bold text-xl">2.</span>
          <p className="text-gray-700">
            What to do when quantum computers hack SHA encryption and everyone’s passwords.
          </p>
        </div>

        {/* Benefit 3 */}
        <div className="flex items-start space-x-4">
          <span className="text-red-600 font-bold text-xl">3.</span>
          <p className="text-gray-700">
            How to get filthy rich as the price of Bitcoin and stock markets make violent up and down swings.
          </p>
        </div>

        {/* Benefit 4 */}
        <div className="flex items-start space-x-4">
          <span className="text-red-600 font-bold text-xl">4.</span>
          <p className="text-gray-700">
            PUSH notifications informing you of trades, opportunities, and constant updates on vulnerabilities, CYBER ATTACKS, and how to protect yourself.
          </p>
        </div>

        {/* Benefit 5 */}
        <div className="flex items-start space-x-4">
          <span className="text-red-600 font-bold text-xl">5.</span>
          <p className="text-gray-700">
            Live Price Quotes and sophisticated charts with real-time trade algorithms the experts use. And sophisticated trading strategies DESIGNED TO PROTECT YOU AND SHOW YOU HOW TO PROSPER.
          </p>
        </div>

        {/* Benefit 6 */}
        <div className="flex items-start space-x-4">
          <span className="text-red-600 font-bold text-xl">6.</span>
          <p className="text-gray-700">
            CHAT button where your questions are answered by a live Q-Day expert.
          </p>
        </div>

        {/* Benefit 7 */}
        <div className="flex items-start space-x-4">
          <span className="text-red-600 font-bold text-xl">7.</span>
          <p className="text-gray-700">
            How to buy insurance against losses due to Q-Day fraud.
          </p>
        </div>

        {/* Benefit 8 */}
        <div className="flex items-start space-x-4">
          <span className="text-red-600 font-bold text-xl">8.</span>
          <p className="text-gray-700">
            Specific WARNINGS about Q-Day Hacks and OPPORTUNITIES when the STOCK MARKET and Bitcoin bubble bursts.
          </p>
        </div>

        {/* Benefit 9 */}
        <div className="flex items-start space-x-4">
          <span className="text-red-600 font-bold text-xl">9.</span>
          <p className="text-gray-700">
            How to use options, futures, and Exchange Traded Funds to lock in your value, protect yourself from losses, and make money as generations of wealth are hacked.
          </p>
        </div>

        {/* Benefit 10 */}
        <div className="flex items-start space-x-4">
          <span className="text-red-600 font-bold text-xl">10.</span>
          <p className="text-gray-700">
            <span className="font-semibold">FREE </span>
            hack-proof offline wallet for your cyber assets (with a 2-year subscription). PLUS continuous releases of Bitcoins “forbidden secrets”, constant daily updates of news and trades on the coming Quantum Computer Hacks in both audio and written form.
          </p>
        </div>
        {/* Plus */}
        <div className="flex items-start space-x-4">
          <span className="text-red-600 font-bold text-xl">PLUS</span>
          <p className="text-gray-700">
            continuous releases of Bitcoins “forbidden secrets”, constant daily updates of news and
            trades on the coming Quantum Computer Hacks in both audio and written form          </p>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionBenefits;