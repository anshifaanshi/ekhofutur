export default function HeroSection() {
  return (
    <div className="min-h-screen bg-white flex items-center overflow-hidden relative">
      {/* Large Curved Blue Background Shape */}
      <div 
        className="absolute top-0 right-0 h-full"
        style={{
          width: '55%',
          background: 'linear-gradient(180deg, #87CEEB 0%, #4682B4 100%)',
          borderRadius: '0 0 0 50%',
          clipPath: 'ellipse(100% 100% at 100% 50%)',
          zIndex: 1
        }}
      />
      
      <div className="container mx-auto px-6 lg:px-16 xl:px-20 py-12 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-5 lg:space-y-7 max-w-xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
              All worries are<br />
              less with wine.
            </h1>
            
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed pr-4">
              Protein is an essential macronutrient, but not all food sources 
              of protein are created equal, and you may not need as much as you think.
            </p>
            
            <button 
              className="text-white font-semibold px-7 py-3.5 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              style={{backgroundColor: '#4682B4'}}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#5A9FD4'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#4682B4'}
            >
              Shop Now
            </button>
          </div>

          {/* Right Content - Image on Blue Background */}
          <div className="relative flex justify-center lg:justify-end items-center h-full">
            <img 
              src="/assets/images/fitness-model.png" 
              alt="Fitness Model"
              className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl h-auto object-contain z-20"
              style={{filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.1)'}}
              onError={(e) => {
                e.target.style.display = 'none';
                const placeholder = document.createElement('div');
                placeholder.className = 'w-full max-w-md h-96 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center text-gray-500 text-center p-4';
                placeholder.textContent = 'Add your image to /public/assets/images/fitness-model.png';
                e.target.parentElement.appendChild(placeholder);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}