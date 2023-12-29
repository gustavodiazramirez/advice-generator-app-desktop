import React, { useState, useEffect } from 'react';
import LineaDivisora from './components/LineaDivisora';
import IconDado from './components/IconDado';

const App = () => {
  const [state, setState] = useState({ id: "", advice: "" });

  useEffect(() => {
    // Llamar a fetchAdvice directamente dentro de useEffect
    const fetchAdvice = () => {
      fetch("https://api.adviceslip.com/advice")
        .then((response) => response.json())
        .then((data) => setState({ id: data.slip.id, advice: data.slip.advice }))
        .catch((error) => console.log(error));
    };

    // Llamar a fetchAdvice cuando el componente se monta
    fetchAdvice();
  }, []);

  const fetchAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => setState({ id: data.slip.id, advice: data.slip.advice }))
      .catch((error) => console.log(error));
  };

  const handleIconClick = () => {
    fetchAdvice();
  };

  return (
    <>
      <div className="bg-[#1f2632] h-screen flex items-center">
        <div className='bg-[#323a49] h-[300px] w-[550px] rounded-xl overflow-hidden shadow-lg mx-auto self-center flex flex-col'>
          <div className="px-16 py-10 flex-1 overflow-auto">
            <div>
              <div className="font-bold tracking-[0.3em] text-sm mb-6 text-[#52ffa8] text-center">ADVICE #{state.id}</div>
              <p className="text-gray-200 text-2xl text-center font-manrope font-semibold">
                {state.advice}
              </p>
            </div>
          </div>
          <div className='ml-[51px] mb-16 flex-shrink-0'>
            <LineaDivisora />
          </div>
        </div>
        <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 -ml-[2px] mb-[155px] h-[50px] w-[50px] rounded-full bg-[#52ffa8] flex-shrink-0 flex items-center justify-center'>
          <IconDado onClick={handleIconClick} />
        </div>
      </div>
    </>
  );
};

export default App;
