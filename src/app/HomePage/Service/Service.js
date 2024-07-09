import Image from "next/image";
import Link from "next/link";
export default function Service() {
  return (
    <>
      <div className="text-3xl font-bold text-center">
        <h1>We provide clients with award-winning services</h1>
      </div>
      <div className="flex justify-center">
        <div class="flex justify-between flex-nowrap mt-10 ml-24">
          <div className="pr-52">
            <Link href="/nft">
              <Image
                src="/icon-nft.png"
                alt="nft"
                width={70}
                height={70}
                className="mb-4"
              />
              <h1 className="font-bold text-xl mb-2 hover:text-cyan-500">
                NFT Development
              </h1>
              <p className="text-sm w-36">
                Non Fungible Tokens are in Trend. We&apos;ve been building them
                since 2016
              </p>
            </Link>
          </div>
          <div className="pr-52">
            <Link href="/mobile">
              <Image
                src="/icon-mb.png"
                alt="nft"
                width={70}
                height={70}
                className="mb-4"
              />
              <h1 className="font-bold text-xl mb-2 hover:text-cyan-500">
                Mobile App Development
              </h1>
              <p className="text-sm w-32">
                From Social Media Apps like TikTok to Fitness Tracking and
                Marketplaces
              </p>
            </Link>
          </div>
          <div className="pr-52">
            <Link href="/app">
              <Image
                src="/icon-wapp.png"
                alt="nft"
                width={70}
                height={70}
                className="mb-4"
              />
              <h1 className="text-xl font-bold mb-2 hover:text-cyan-500">
                Web App Development
              </h1>
              <p className="text-sm w-32">
                From Social Media Apps like TikTok to Fitness Tracking and
                Marketplaces
              </p>
            </Link>
          </div>
          <div>
            <Link href="/software">
              <Image
                src="/icon-sw.png"
                alt="nft"
                width={70}
                height={70}
                className="mb-4"
              />
              <h1 className="text-xl font-bold mb-2 hover:text-cyan-500">
                Software Development
              </h1>
              <p className="text-sm w-32">
                From Social Media Apps like TikTok to Fitness Tracking and
                Marketplaces
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
