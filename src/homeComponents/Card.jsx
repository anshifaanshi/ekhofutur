import React from 'react';

const Card = ({ data }) => {
  const [visible, setVisible] = React.useState(false);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const divRef = React.useRef(null);

  const handleMouseMove = (e) => {
    const bounds = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - bounds.left, y: e.clientY - bounds.top });
  };

  if (!data) return null; // Prevent crash if no data is passed

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="relative w-full max-w-xs h-96 rounded-xl p-px bg-gray-900 backdrop-blur-md text-gray-800 overflow-hidden shadow-lg cursor-pointer mx-auto"
    >
      <div
        className={`pointer-events-none blur-3xl rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-300 size-60 absolute z-0 transition-opacity duration-500 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ top: position.y - 120, left: position.x - 120 }}
      />

      <div className="relative z-10 bg-gray-900/75 p-6 h-full w-full rounded-[11px] flex flex-col items-center justify-center text-center">
        <img
          src={data.image}
          alt="Profile Avatar"
          className="w-24 h-24 rounded-full shadow-md my-4"
        />
        <h2 className="text-2xl font-bold text-white mb-1">{data.name}</h2>
        <p className="text-sm text-indigo-500 font-medium mb-4">{data.role}</p>
        <p className="text-sm text-slate-400 mb-4 px-4">{data.description}</p>
      </div>
    </div>
  );
};

// --- Self-contained data and grid rendering ---
const card = [
  {
    name: "Richard Nelson",
    role: "Software Developer",
    description:
      "Passionate about clean code, scalable systems, and solving real-world problems with elegant software.",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
  },
  {
    name: "Richard Nelson",
    role: "Software Developer",
    description:
      "Passionate about clean code, scalable systems, and solving real-world problems with elegant software.",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
  },
  {
    name: "Richard Nelson",
    role: "Software Developer",
    description:
      "Passionate about clean code, scalable systems, and solving real-world problems with elegant software.",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
  },
  {
    name: "Richard Nelson",
    role: "Software Developer",
    description:
      "Passionate about clean code, scalable systems, and solving real-world problems with elegant software.",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
  },
];

const CardGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
      {cardData.map((item, index) => (
        <Card key={index} data={item} />
      ))}
    </div>
  );
};

export default Card;
