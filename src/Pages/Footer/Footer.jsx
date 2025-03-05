import logo from "../../assets/Logo (2).png"
const Footer = () => {
  return (
    <div className="text-white">
      <div className="bg-[#516EFF] p-2 cs:p-20 mt-10 flex flex-wrap cs:flex-row items-center justify-center">
        <div className=" min-w-[250px] cs:w-[25%] h-[250px] cs:px-14 sm:px-5  border-r border-[#ffffff]">
          <img src={logo} alt="" />
          <h1 className="mt-14">
            Dentics is a well-known name in dental and oral care in New York.
            The journey of this institution started in 1990
          </h1>
        </div>
        <div className=" min-w-[250px] cs:w-[25%] h-[250px] cs:px-14 sm:px-5  border-r border-[#ffffff]">
          <h1>We are welcoming you</h1>
          <h1 className="mt-14 mb-5 text-4xl">Want to visit our clinic?</h1>
          <h1>
            Saturday - Thrusday <br />
            10 am- 9 pm
          </h1>
        </div>
        <div className=" min-w-[250px] cs:w-[25%] h-[250px] cs:px-14 sm:px-5  border-r border-[#ffffff]">
          <h1>Important link</h1>
          <div className="flex flex-wrap justify-between mt-14 mb-5">
            <i className="bx border rounded-xl mb-1 p-2 text-4xl hover:text-[#516EFF] hover:bg-white bxl-instagram"></i>
            <i className="bx border rounded-xl mb-1 p-2 text-4xl hover:text-[#516EFF] hover:bg-white bxl-tiktok"></i>
            <i className="bx border rounded-xl mb-1 p-2 text-4xl hover:text-[#516EFF] hover:bg-white bxl-facebook"></i>
            <i className="bx border rounded-xl mb-1 p-2 text-4xl hover:text-[#516EFF] hover:bg-white bxl-telegram"></i>
          </div>
          <h1>Career</h1>
          <h1>Support</h1>
          <h1> Privacy policy</h1>
        </div>
        <div className=" min-w-[250px] cs:w-[25%] h-[250px] cs:px-14 sm:px-5 ">
          <h1>Say hello to us</h1>
          <div className="mt-14">
            <h1 className="mb-5">hello@reallygreatsite.com</h1>
            <h1>
              Address <br />
              Адрес: ул. Шерализода, 2 (рядом с автовокзалом, напротив
              супермаркетов Ёвар и Артел)
            </h1>
          </div>
        </div>
      </div>
      <div className="bg-[#216583] text-center p-5">
        <h1>© 2025, All Rights Reserved</h1>
      </div>
    </div>
  );
};

export default Footer;
