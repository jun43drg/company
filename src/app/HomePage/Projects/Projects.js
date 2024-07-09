import Image from "next/image";
import Link from "next/link";
export default function Projects() {
  return (
    <div className="pt-10 ml-16">
      <h1 className="text-3xl pb-10 font-bold text-center">
        Apps we built been trending on the App Store
      </h1>
      <div className="flex justify-center">
        <div className="bg-[#dee0ff] w-[650px] h-[390px] py-[30px] px-[40px] rounded-[32px] mr-[15px]">
          <div className="flex justify-between text-[14px]">
            <div>01.</div>
            <div>Showcase</div>
          </div>
          <div className="flex">
            <div>
              <div className="mt-20 mb-4 text-[32px] font-bold ">SCUOLA</div>
              <p className="w-[240px]">
                Convenience, savings and rewards at your fingertips
              </p>
            </div>
            <div>
              <Image
                src="/projects-1.png"
                alt="project"
                width={450}
                height={450}
                className="mt-12"
              />
            </div>
          </div>
          <div className="mt-16 text-center hover:text-blue-700">
            <Link href={"/project"}>Lounge Project</Link>
          </div>
        </div>
        <div className="bg-[#F8F0E6] w-[540px] h-[450] py-[30px] px-[40px] rounded-[32px]">
          <div className="flex justify-between text-[14px]">
            <div>02.</div>
            <div>Showcase</div>
          </div>
          <div className="flex">
            <div>
              <div className="mt-20 mb-4 text-[32px] font-bold">JOLIE.</div>
              <p className="w-[180px]">
                Private trust management and trading platform
              </p>
            </div>
            <div>
              <Image
                src="/projects-2.png"
                alt="project"
                width={550}
                height={550}
                className="mt-12"
              />
            </div>
          </div>
          <div className="mt-16 text-center hover:text-blue-700">
            <Link href={"/project"}>Lounge Project</Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="bg-[#242627] w-[1200px] h-[390px] py-[30px] px-[40px] rounded-[32px] mt-6 text-white ml-[50px]">
          <div className="flex justify-between text-[15px] font-bold">
            <div>03.</div>
            <div>Showcase</div>
          </div>
          <div className="flex">
            <div className="mt-16 mr-80">
              <Image src="/Skole.svg" alt="Mô tả ảnh" width={240} height={51} />
              <p className="mt-8 text-[18px] w-[170px] h-[50px]">
                Online platform for distance learning
              </p>
            </div>
            <Image
              src="/projects-3.png"
              alt="project"
              width={450}
              height={200}
            />
          </div>
          <Link
            href={"/project"}
            className="mt-16 text-center hover:text-blue-700 "
          >
            Lounge Project
          </Link>
        </div>
      </div>
    </div>
  );
}
