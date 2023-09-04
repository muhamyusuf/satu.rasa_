import { gallerySlider } from '@/datas';
import Image from 'next/image';
import '../../global.css';

export default function Slider() {
  return (
    <div className="flex max-w-[900px] rounded-md relative animate-fade-in">
      <div className="slider">
        <div className="gap-5 slider-track">
          {gallerySlider.map((item, index) => (
            <div className="slide" key={index}>
              <Image
                src={item.image}
                alt={item.name}
                width={300}
                height={200}
                className="object-cover grayscale hover:grayscale-0 cursor-pointer w-full h-full rounded-md transform transition duration-300 translate-z-[20px] hover:scale-150"
                quality={100}
                priority
              />
            </div>
          ))}

          {gallerySlider.map((item, index) => (
            <div className="slide" key={index}>
              <Image
                src={item.image}
                alt={item.name}
                width={300}
                height={200}
                className="object-cover grayscale hover:grayscale-0 cursor-pointer w-full h-full rounded-md transform transition duration-300 translate-z-[20px] hover:scale-150"
                quality={100}
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
