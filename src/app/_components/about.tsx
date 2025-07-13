import Image from "next/image"
import about1Img from '../../../public/about-1.png'
import about2Img from '../../../public/about-2.png'
import { Check, MapPin} from 'lucide-react';
import {WhatsappLogoIcon} from "@phosphor-icons/react/dist/ssr"
export function About(){
    return(
        <section className="bg-[#FDF6ec] py-16">
            <div className="container px-4 mx-auto">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 item center">
                
                <div className="relative">
                  <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
                    <Image src={about1Img} alt="Foto do cachorro about1"
                    fill
                    quality={100}
                    className="object-cover hover:scale-110 direction-300"
                    priority
                    />
                </div>

                  <div className="absolute w-40 h-40 right-4 -bottom-8 border-4
                  overflow-hidden rounded-lg border-white">
                    <Image src={about2Img} alt="Foto do cachorro about2"
                    fill
                    quality={100}
                    priority
                    />
                </div>

                </div>


                <div className="space-y-6 mt-10">
                    <h2 className="text-4xl font-bold">SOBRE</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam impedit culpa possimus commodi deserunt odit dolorem eaque quam obcaecati quod voluptatum tenetur vel, eum suscipit iusto illum. Alias quasi illo veritatis est praesentium libero odio, facere odit, obcaecati dolorum maiores quidem ex assumenda labore hic totam voluptate quibusdam eos natus.
                </p>
                <ul className="space-y-4">
                    <li className="flex items-center gap-2">
                        <Check className="text-red-500"/>
                        Aberto desde 2006
                    </li>
                     <li className="flex items-center gap-2">
                        <Check className="text-red-500"/>
                        Equipe com mais de 10 veterinários
                    </li>
                     <li className="flex items-center gap-2">
                        <Check className="text-red-500"/>
                        Qualidade é a nossa prioridade 
                    </li>
                </ul>

                <div className="flex gap-2">
                <a href="#" className="bg-[#E84C3D] text-white flex items-center justify-center
                w-fit gap-2 px-4 py02 rounded-md">
                    <WhatsappLogoIcon className="w-5 h-5 text-white "/>
                    Contato via WhatsApp
                </a>
                <a href="#" className=" flex items-center justify-center
                w-fit gap-2 px-4 py02 rounded-md">
                    <MapPin className="w-5 h-5 text-black "/>
                    Endereço da loja 
                </a>
                </div>
                </div>
                </div>
            </div>
        </section>
    )
}