import React from 'react';
import { Search, DollarSign, Calendar, Zap } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Search",
      description: "Find the nearest charging station with our advanced location finder.",
      bgColor: "bg-yellow-200",
      textColor: "text-gray-800"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Check Rates",
      description: "View pricing details for each station to find the best deal.",
      bgColor: "bg-teal-200",
      textColor: "text-gray-800"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Reserve",
      description: "Book a slot in advance to skip the wait and ensure prompt service.",
      bgColor: "bg-orange-200",
      textColor: "text-gray-800"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Charge",
      description: "Plug in and power up at your convenience.",
      bgColor: "bg-sky-300",
      textColor: "text-gray-800"
    }
  ];

  return (
    <div className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Effortlessly locate, reserve, and charge your electric vehicle with our easy-to-use platform.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`${step.bgColor} ${step.textColor} rounded-2xl p-8 transition-transform duration-300 hover:scale-105 hover:shadow-xl`}
            >
              <div className="mb-4">
                {step.icon}
              </div>
              <h3 className="text-3xl font-bold mb-4">
                {step.title}
              </h3>
              <p className="text-base leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}