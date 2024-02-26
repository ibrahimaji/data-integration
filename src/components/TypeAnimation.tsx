"use client"
import { TypeAnimation } from 'react-type-animation';

const TypeAnimationEffect = () => {
  return (
    <div>
      <TypeAnimation
        sequence={[
          "Untuk transportasi yang lebih aman",
          1000,
          "Untuk transportasi yang lebih nyaman",
          1000,
          "Untuk transportasi yang lebih selamat",
          1000,
          "Untuk transportasi yang lebih baik",
          1000,
        ]}
        speed={50}
        repeat={Infinity}
        style={{ fontSize: '2em' }}
        className='max-w-[600px] text-neutral-500 md:text-xl dark:text-neutral-400'
      />
    </div>
  );
};

export default TypeAnimationEffect;