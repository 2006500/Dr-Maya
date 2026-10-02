export const metadata = {
    title: "Perfectionism Therapy in Santa Monica",
    description:
        "Perfectionism therapy can support adults who feel pressured to meet high expectations or struggle with self-criticism. Dr. Maya Reynolds offers a warm, collaborative space to help you develop greater self-understanding and move forward with more ease.",
};
import Image from "next/image";


export default function PerfectionismTherapy() {
    return (
        <div className="rounded-2xl bg-[#E8E0CC] 
               shadow-[0_4px_20px_rgba(0,0,0,0.20)] 
               m-3 sm:m-5 md:m-7 lg:m-10 
               pt-5 pb-8">
            <div className="flex flex-col md:flex-row gap-2 pt-6 md:pt-10">
                <div className="w-full md:w-1/2">
                    <Image
                        src="/perfectionism-therepy.jpg"
                        alt="Image Loading"
                        width={1000}
                        height={1000}
                        quality={100}
                        className="w-full h-auto rounded-[20px] 
                       px-5 md:px-10 lg:px-20 
                       pb-5 md:pb-8 lg:pb-10"
                    />
                </div>
                <div className="font-body text-sm pl-10 lg:text-xl text-[#404040] ">
                    <span className="font-display text-lg md:text-xl text-[#163B32] lg:text-5xl">
                        🌿 <br />
                    </span>
                    <span className="font-display font-bold 
                       text-4xl md:text-5xl lg:text-6xl 
                       text-[#163B32]">
                        Perfectionism Therapy  <br />
                        in santa monica  <br />
                    </span>
                    <br />
                    Perfectionism Therapy supports all who feel<br/>
                    pressured to meet high expectations or struggle with <br/>
                    self criticism. Dr Maya Reynold's offers a warm, <br/>
                    collaborative space to help you develop greater <br/>
                    self understanding and move forward with more ease <br /> <br />
                    <a
                        href="/contact"
                        className="mt-8 border-b border-[#42520C] pb-2 text-xs tracking-[0.18em] text-[#42520C] transition-all duration-300 hover:tracking-[0.23em] hover:text-[#657A16] sm:text-sm"
                    >
                        Book an appoinment
                    </a>
                </div>
            </div>
        </div>
    );
}