

import { Typewriter } from 'react-simple-typewriter';

const TypewriterText = () => {
  return (
    <span className="text-blue-600 text-xl font-bold bg-white  px-2 py-1 rounded-xl shadow-sm">
      <Typewriter
        words={['برخی از دسته بندی های پرفروش ...']}
        loop={0} 
        cursor
        cursorStyle='_'
        typeSpeed={70} 
        deleteSpeed={50}
        delaySpeed={1000} 
      />
    </span>
  );
};

export default TypewriterText;
