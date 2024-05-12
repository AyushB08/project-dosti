import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen w-screen bg-dark-blue items-center justify-center flex flex-col md:flex-row">
      <div className="text-white text-4xl">
        Together, we make a difference.
      </div>
      
      <Image
        src="/images/charity.png"
        alt="Description of the image"
        width={300}
        height={200}
      />
      
    </main>
  );
}
