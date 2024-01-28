import Image from "next/image";
import { TextGenerateEffect } from "./components/ui/text-generate-effect"; 
import {Input} from "@nextui-org/react";

const words = `POSSE IN PARTNERSHIP WITH SIRENS VIBE PRESENTS`;
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col text-center items-center justify-between">
       
      <div className='h-full w-full absolute bg-[url("/vector-bg.png")] bg-contain bg-repeat opacity-10' />
      
      <TextGenerateEffect words={words} /> 
      
      <div className="lg:bottom-[150px] bottom-[250px] relative flex flex-col items-center">
        <Image src={"/OME_mono_Logo.svg"} alt="One_Music_Event_logo" width={1000} height={10} className="h-[750px] " />
        <Image src={"/OME_Tag.png"} alt="OME_Tag" width={250} height={150} className="relative lg:bottom-[200px] bottom-[250px]"/>
      </div>
           
      <div className="relative lg:bottom-[300px] bottom-[450px] mx-[100px] flex flex-col items-center justify-center">
        <div className="text-[1rem] lg:text-[1.5rem]">
          <span>-----------------</span>
          <span>ENTRANCE FEES</span>
          <span>-----------------</span>
        </div>

        <div className="w-full font-bold relative pt-[5rem] gap-5 text-[25px] lg:text-[30px] flex justify-center items-center text-center">
          <div>
            <span>REGULAR : 50,000 BIF</span>
          </div>

          <div className="w-[4px] h-[80px] mx-8 bg-white" />

          <div>
          <span>VIP : 100,000 BIF</span>

            </div>
        </div>

        <div className="flex gap-2 text-[2rem] pt-5 lg:text-[3rem] font-bold">
          <span>SPONSOR TICKET : 200,000 BIF</span>
        </div>
      </div>
   
  


      <div className="relative lg:bottom-[200px] bottom-[400px] px-5 ">
        <div className="text-[1rem] lg:text-[1.5rem] ">
          <span>-----------------</span>
          <span>SPECIAL GUESTS</span>
          <span>-----------------</span>
        </div>
        <p className="text-[20px] pt-[2rem]">
          Ngabo Leonce,Makarena,Roza TWAGIRAYEZU,CIZA Sylvestre, Ogiga Augustin, <br/> Gerard NDIKUBWAYO, KAPOSHI Ismael, Backy JOHN, ABASHAZANGENDO,TOROBEKA, MIJURIRO 
        </p>
      </div>

          
      <div className="flex relative lg:bottom-[150px] bottom-[350px] text-black flex-col flex-wrap items-center md:flex-nowrap gap-4">
        <span className="text-white font-bold">GET A TICKET USING LUMIPAY</span>
      <Input type="text" label="Name" variant="faded" className="w-full lg:w-[500px]"/>
        <Input type="tel" label="Number" placeholder="Enter your Number" variant="faded" className=" w-full lg:w-[500px] " />
        <button className="inline-flex mt-[2rem] h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        GET YOUR TICKET
      </button>
      </div>
   


      <div className="w-full font-bold bg-white text-black relative p-[2rem] text-[100%] lg:text-[35px] flex justify-center items-center text-center">
        <div className="flex gap-2">
          <Image src={"/location4.svg"} alt="location_icon" width={50} height={30}/>
          <span>VAN BEACH RESORT</span>
        </div>

        <div className="w-[4px] h-[50px] mx-10 bg-black" />

        <div className="flex gap-2">
        <Image src={"/calendar.svg"} alt="calendar_icon" width={50} height={30}/>
        <span>February 4th, 2024</span>

        </div>

    </div>
    </main>
  );
}
