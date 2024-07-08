import Image from "next/image";
import Link from "next/link";
export default function LatestInsight() {
  return (
    <div className="mt-20 ml-6">
      <h1 className="text-3xl font-bold text-left">Our Latest Insights</h1>
      <div className="flex justify-around mt-10">
        <div className="w-[325px] h-[480px] p-[40px] border-[1px] border-gray-200 shadow-xl rounded-3xl">
          <Image
            src="/product.webp"
            alt="product"
            width={300}
            height={300}
            className="rounded-3xl"
          />
          <p className="text-[10px] mt-6 font-bold text-slate-400">
            PRODUCT ENGINEERING
          </p>
          <Link href="/product" className="hover:text-blue-800">
            <h1 className="text-2xl font-bold mt-4">
              Identify the best technologies for your business with Tecnologia’s
              new tool
            </h1>
            <p className="text-[14px] mt-4">Learn more</p>
          </Link>
        </div>
        <div className="w-[325px] h-[480px] p-[40px] border-[1px] border-gray-200 shadow-xl rounded-3xl">
          <Image
            src="/AI.webp"
            alt="AI"
            width={400}
            height={300}
            className="rounded-3xl"
          />
          <p className="text-[10px] mt-6 font-bold text-slate-400">AI</p>
          <Link href="/product" className="hover:text-blue-800">
            <h1 className="text-2xl font-bold mt-4">
              How Chat GPT is Revolutionizing the Way We Find Information
            </h1>
            <p className="text-[14px] mt-4">Learn more</p>
          </Link>
        </div>
        <div className="w-[325px] h-[480px] p-[40px] border-[1px] border-gray-200 shadow-xl rounded-3xl">
          <Image
            src="/company.webp"
            alt="product"
            width={400}
            height={300}
            className="rounded-3xl"
          />
          <p className="text-[10px] mt-6 font-bold text-slate-400">COMPANY</p>
          <Link href="/product" className="hover:text-blue-800">
            <h1 className="text-2xl font-bold mt-4">
              Clutch Recognizes Tecnologia Among New York’s Top Development for
              2023
            </h1>
            <p className="text-[14px]">Learn more</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
