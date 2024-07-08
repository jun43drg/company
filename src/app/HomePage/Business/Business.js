export default function Business() {
  return (
    <div className="flex  mt-20">
      <div className="w-[422px] h-[316px] mr-[180px] ml-20">
        <h1 className="text-4xl font-bold w-[300px]">
          Start your journey to better business
        </h1>
        <div>
          <input
            type="text"
            placeholder="Don't miss out updates"
            className="w-[380px] mt-6 h-[40px] px-[15px] py-[10px] rounded-[5px] text-black hover:border-blue-600 border-2"
          />
        </div>
        <div className="mt-4">
          <input type="checkbox" id="action" value="1" />{" "}
          <label>I want an NDA to protect my idea</label>
        </div>
        <div className="mt-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Send
          </button>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="w-[176px] w-[316px] px-[37px]   ">
          <h1 className="text-2xl font-bold mb-2">New York</h1>
          <p className="mb-2">Seventh Ave, 20th Floor New York, NY 10018 </p>
          <p>T: 1-800-356-8933</p>
        </div>
        <div className="w-[176px] w-[316px] px-[37px]   ">
          <h1 className="text-2xl font-bold mb-2">Boston</h1>
          <p className="mb-2">45 Myrtle Street, 02114 Boston, MA </p>
          <p>T: 1-900-322-8422</p>
        </div>
      </div>
    </div>
  );
}
