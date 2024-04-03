// links
import Link from "next/link";

// icons
import {
  RiYoutubeLine, 
   RiInstagramLine,
   RiFacebookLine, 
   RiDribbbleLine, 
   RiBehanceLine, 
   RiPinterestLine,
   RiLinkedinBoxLine,
  } from "react-icons/ri";

const Socials = () => {
  return <div className="flex items-center gap-x-5 text-lg">
    <Link href={"https://www.linkedin.com/in/marcos-molina-araoz/"} className="hover:text-accent transition-all duration-300">
    <RiLinkedinBoxLine />
    </Link>
    <Link href={"https://www.instagram.com/marcos_molina05/?hl=es"} className="hover:text-accent transition-all duration-300">
      <RiInstagramLine />
    </Link>
    <Link href={"https://www.youtube.com/watch?v=qp0-L_M3Ad4&t=1999s"} className="hover:text-accent transition-all duration-300">
      <RiYoutubeLine />
    </Link>    
    <Link href={""} className="hover:text-accent transition-all duration-300">
    <RiPinterestLine />
    </Link>
    {/* <Link href={""} className="hover:text-accent transition-all duration-300">
      <RiFacebookLine />
    </Link>     */}
    {/* <Link href={""} className="hover:text-accent transition-all duration-300">
      <RiDribbbleLine />
    </Link> */}
    {/* <Link href={""} className="hover:text-accent transition-all duration-300">
      <RiBehanceLine />
      </Link> */}
  </div>;
};

export default Socials;
