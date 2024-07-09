import Image from "next/image";
export default function Content() {
  return (
    <>
      <div className="relative h-screen mb-12">
        <img
          src="/Background.jpg"
          alt="Background"
          className="absolute inset-0 object-cover w-full h-full -pt-16"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-4xl font-bold ">
          <h1 className="mb-4">Dịch vụ của chúng tôi</h1>
          <p>
            Cổng thanh toán TMĐT, Dịch vụ ngân hàng, Hệ thống, Logistic xuất
            nhập khẩu
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center text-4xl font-bold ml-64 mr-64 mb-20">
        <h1>
          Với đội ngũ giàu kinh nghiệm và khuôn khổ linh hoạt, chúng tôi ưu tiên
          các mục tiêu thương mại của khách hàng để mang lại giá trị kinh doanh
          cao nhất.
        </h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 text-xl">
          Tại sao nên chọn chúng tôi
        </button>
      </div>
    </>
  );
}
