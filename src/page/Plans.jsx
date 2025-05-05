import React from 'react';
import plans from '../components/PlanDetails';
import { Navbar } from '../Components/navbar';

const Plans = () => {
  return (
   <div className="bg-gray-900 min-h-screen p-6 text-white">
    <Navbar/>
    <div className="px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12 text-blue-400">Choose Your Plan</h1>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-7xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col justify-between hover:scale-105 transition-transform duration-300"
          >
            <div>
              <h2 className="text-2xl font-bold text-green-400 mb-2">{plan.name}</h2>
              <p className="text-gray-300">{plan.duration}</p>
              <p className="text-3xl font-semibold text-blue-400 mt-4 mb-6">{plan.price}</p>
              <ul className="mb-6 list-disc list-inside text-gray-300 space-y-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 w-full py-2 rounded-lg font-semibold">
              Select Plan
            </button>
          </div>
        ))}
      </div>
    </div>
   </div>
  );
};

export default Plans;
