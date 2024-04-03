// next image
import Image from 'next/image';

const TopLeftImg = () => {
  return (
    <div className='absolute left-0 top-0 mix-blend-color animate-pulse duration-75' style={{ mixBlendMode: "color-dodge", filter: "hue-rotate(145deg)" }}>
    <Image src='/top-left-img.png' width={400} height={400} alt=''/>
</div>

  );
};

export default TopLeftImg;
