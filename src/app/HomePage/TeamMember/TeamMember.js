import Image from "next/image";
export default function TeamMember() {
  const imageStyle = {
    borderRadius: "10%",
  };
  return (
    <div className="mt-20 ml-6">
      <h1 className="text-4xl font-bold text-left">
        Meet some of our 80+ team members
      </h1>
      <div className="flex justify-around mt-10 gap-8">
        <div className="rounded-lg">
          <Image
            src="/member-1.webp"
            alt="member"
            width={300}
            height={150}
            style={imageStyle}
          />
          <h1 className="text-xl font-bold text-center mt-2">Mat Zalman</h1>
          <p className="text-center">CEO</p>
        </div>
        <div>
          <Image
            src="/member-2.webp"
            alt="member"
            width={300}
            height={150}
            style={imageStyle}
          />
          <h1 className="text-xl font-bold text-center mt-2">Megan Palms</h1>
          <p className="text-center text-sm">MARKETING DIRECTOR</p>
        </div>
        <div>
          <Image
            src="/member-3.webp"
            alt="member"
            width={300}
            height={150}
            style={imageStyle}
          />
          <h1 className="text-xl font-bold text-center mt-2">Joe Nickalson</h1>
          <p className="text-center text-sm">SENIOR BACKEND DEVELOPER</p>
        </div>
        <div>
          <Image
            src="/member-4.webp"
            alt="member"
            width={300}
            height={150}
            style={imageStyle}
          />
          <h1 className="text-xl font-bold text-center mt-2">Anton Thorne</h1>
          <p className="text-center text-sm">SENIOR DEVELOPER</p>
        </div>
      </div>
    </div>
  );
}
