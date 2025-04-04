import Featured from "@/components/ui/featured";
import { HeroBackground } from "@/components/ui/heroBackground";
import Navbar from "@/components/ui/navbar";
import { TypewriterEffectSmooth } from "@/components/ui/typeWriter";

export default function Home() {
  return (
    <div>

      {/* Narbar */}
      <Navbar />

      {/* Hero section */}
      <div className="relative w-full h-screen bg-black flex items-center justify-center overflow-hidden">

        {/* Background with Mouse Hover Effects */}
        <div className="absolute inset-0 w-full h-full">
          <HeroBackground
            className="absolute inset-0 w-full h-full bg-black group-hover:opacity-100 transition-all duration-500 ease-in-out"
            images={[
              "image1.jpg",
              "image2.webp",
              "image3.jpg",
              "image4.webp",
              "image5.jpg",
              "image6.jpg",
              "image7.jpg",
              "image8.jpeg",
              "image9.jpg",
              "https://assets.aceternity.com/spotlight-new.webp",
              "https://assets.aceternity.com/cloudinary_bkp/Spotlight_ar5jpr.png",
              "https://assets.aceternity.com/cloudinary_bkp/Parallax_Scroll_pzlatw_anfkh7.png",
              "https://assets.aceternity.com/tabs.png",
              "https://assets.aceternity.com/cloudinary_bkp/Tracing_Beam_npujte.png",
              "https://assets.aceternity.com/cloudinary_bkp/typewriter-effect.png",
              "https://assets.aceternity.com/glowing-effect.webp",
              "https://assets.aceternity.com/hover-border-gradient.png",
              "https://assets.aceternity.com/cloudinary_bkp/Infinite_Moving_Cards_evhzur.png",
              "https://assets.aceternity.com/cloudinary_bkp/Lamp_hlq3ln.png",
              "https://assets.aceternity.com/macbook-scroll.png",
              "https://assets.aceternity.com/cloudinary_bkp/Meteors_fye3ys.png",
              "https://assets.aceternity.com/cloudinary_bkp/Moving_Border_yn78lv.png",
              "https://assets.aceternity.com/multi-step-loader.png",
              "https://assets.aceternity.com/vortex.png",
              "https://assets.aceternity.com/wobble-card.png",
              "https://assets.aceternity.com/world-map.webp"
            ]}
          />
        </div>

        {/* Text Effect in Center */}
        <div className="relative z-10 flex flex-col items-center">
          <TypewriterEffectSmooth
            className="text-white text-center select-none pointer-events-none"
            words={[
              { text: "Kalam,", className: "text-white text-[64px]" },
              { text: "Kaagaz", className: "text-white text-[64px]" },
              { text: "Aur", className: "text-white text-[64px]" },
              { text: "Kavita", className: "text-white text-[64px]" },
              { text: "...", className: "text-yellow-600 text-[64px]" }
            ]}
          />
        </div>
      </div>

      <Featured />
    </div>
  )
}
