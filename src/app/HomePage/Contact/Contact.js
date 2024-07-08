export default function Contact() {
  return (
    <div className="flex justify-center">
      <div className="mt-20 bg-[#010ED0] w-[1180px] h-[350px] p-[50px] rounded-3xl text-white">
        <div className="flex justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-10">
              Got a project? Let’s talk
            </h1>
            <p className="mb-4 font-bold">T: 1-800-356-8933</p>
            <p className="font-bold">E: office@tecnologia.com</p>
          </div>
          <div>
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Your name"
                className="w-[255px] h-[40px]  px-[15px] py-[10px] rounded-[5px] text-black"
              />
              <input
                type="text"
                placeholder="Email address"
                className="w-[255px] h-[40px]  px-[15px] py-[10px] rounded-[5px] text-black"
              />
            </div>
            <div className="flex gap-4 mt-4">
              <input
                type="text"
                placeholder="Phone munber"
                className="w-[255px] h-[40px]  px-[15px] py-[10px] rounded-[5px] text-black"
              />
              <input
                type="text"
                placeholder="What is your budget?"
                className="w-[255px] h-[40px]  px-[15px] py-[10px] rounded-[5px] text-black"
              />
            </div>
            <div className="mt-4">
              <input
                type="text"
                placeholder="Message"
                className="w-[530px] h-[70px]  px-[15px] py-[10px] rounded-[5px] text-black"
              />
            </div>
            <div className="mt-2 text-sm">
              <input type="checkbox" id="action" value="1" />{" "}
              <label>I want an NDA to protect my idea</label>
            </div>
            <div className="mt-2 bg-[#EDEEFF] hover:bg-[#FFFFFF] hover:text-[#000000] text-blue-700 rounded-[5px] w-[160px] h-[40px] px-[24px] py-[9px]">
              <button>Send request</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
