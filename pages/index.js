import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 ${inter.className}`}>
      <video
        autoPlay={true}
        loop={true}
        muted={true}
        className="absolute z-10 w-auto min-w-full min-h-full max-w-none"
      >
      <source
        src="ContinuousMotionPer4.mp4"
        type="video/mp4"
      />
      </video>
    </main>
  );
}
