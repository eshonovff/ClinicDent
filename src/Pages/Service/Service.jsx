import { useTranslation } from "react-i18next";
import { Button } from "@mui/material";

const ServiceSection = () => {
  const { t } = useTranslation();

  return (
    <div className="">
      <section className="bg-[#516EFF] text-center cs:py-20 pt-5 flex flex-col cs:flex-row cs:items-center px-2">
        <div className=" cs:w-[50%] text-white">
          <h1 className="font-bold cs:text-4xl text-2xl mb-5">{t("service.title")}</h1>
          <p className="font-light hidden ph:block pb-2  text-xl">{t("service.description")}</p>
        </div>
        <div className=" cs:w-[50%] text-white ph:flex ph:flex-wrap  items-center justify-evenly">
          <Button
            className="w-full ph:w-[150px] cs:w-[200px] cs:h-[200px] ph:h-[150px] text-lg  flex  ph:flex-col  font-bold"
            variant="outlined"
            sx={{
              border: "2px solid #516EFF",
              color: "#516EFF",
              fontWeight: "bold",
              borderRadius: "10px",
              backgroundColor: "white",
              marginBottom: "20px",
  
            }}
          >
            <i className="bx cx:text-[50px] text-[30px] ph:pb-5 pb-0 bx-phone"></i>
            {t("service.call")}
          </Button>

          <Button
            className="w-full ph:w-[150px] cs:w-[200px] cs:h-[200px] ph:h-[150px] text-lg  flex  ph:flex-col  font-bold"
            variant="outlined"
            sx={{
              border: "2px solid #516EFF",
              color: "#516EFF",
              fontWeight: "bold",
              borderRadius: "10px",
              backgroundColor: "white",
              marginBottom: "20px",
            }}
          >
            <i className="bx cx:text-[50px] text-[30px] ph:pb-5 pb-0 bx-calendar"></i>
            {t("service.getDate")}
          </Button>

          <Button
            className=" w-full ph:w-[150px] cs:w-[200px] cs:h-[200px] ph:h-[150px] text-lg  flex  ph:flex-col  font-bold"
            variant="outlined"
            sx={{
              border: "2px solid #516EFF",
              color: "#516EFF",
              fontWeight: "bold",
              borderRadius: "10px",
              backgroundColor: "white",
              marginBottom: "20px",
            }}
          >
            <i className="bx cx:text-[50px] text-[30px] ph:pb-5 pb-0 bx-user"></i>
            {t("service.consult")}
          </Button>
        </div>
      </section>

      <section className=" flex cs:flex-row flex-col items-center justify-center">
        <div className=" cx:p-20 p-10 bg-[#F8FAFC] w-[100%] flex flex-col items-center rounded-br-[30%]">
          <h1 className="cx:text-5xl text-2xl font-bold pb-20 text-[#dfbd00] ">
            {t("section.title")}
          </h1>
          <img src="/src/assets/Image.png" alt="Service" />
        </div>
        <div className="w-[100%] px-2 cx:p-20">
          <div>
            <h1 className="cx:text-3xl mt-5 text-xl text-[#777777] pb-20">
              {t("section.description")}
            </h1>
          </div>
          <div>
            <h1 className="cx:text-3xl text-xl font-bold mb-10">
              {t("section.whatWeProvide")}
            </h1>
            <div className="grid grid-cols-2">
              <p className="flex items-center hover:text-[#dfbd00] cx:cx:pb-4 border-b mr-1 pb-1 cx:text-xl text-lg font-[400]">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                  />
                </svg>
                {t("section.services.0")}
              </p>
              <p className="flex items-center hover:text-[#dfbd00] cx:pb-4 pb-1 border-b mr-1 cx:text-xl text-lg font-[400]">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                  />
                </svg>
                {t("section.services.1")}
              </p>
              <p className="flex items-center hover:text-[#dfbd00] cx:pb-4 pb-1 border-b mr-1 cx:text-xl text-lg font-[400]">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                  />
                </svg>
                {t("section.services.2")}
              </p>
              <p className="flex items-center hover:text-[#dfbd00] cx:pb-4 pb-1 border-b mr-1 cx:text-xl text-lg font-[400]">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                  />
                </svg>
                {t("section.services.3")}
              </p>
              <p className="flex items-center hover:text-[#dfbd00] cx:pb-4 pb-1 border-b mr-1 cx:text-xl text-lg font-[400]">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                  />
                </svg>
                {t("section.services.4")}
              </p>
              <p className="flex items-center hover:text-[#dfbd00] cx:pb-4 pb-1 border-b mr-1 cx:text-xl text-lg font-[400]">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                  />
                </svg>
                {t("section.services.5")}
              </p>
              <p className="flex items-center hover:text-[#dfbd00] cx:pb-4 pb-1 border-b mr-1 cx:text-xl text-lg font-[400]">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                  />
                </svg>
                {t("section.services.6")}
              </p>
              <p className="flex items-center hover:text-[#dfbd00] cx:pb-4 pb-1 border-b mr-1 cx:text-xl text-lg font-[400]">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                  />
                </svg>
                {t("section.services.7")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="p-2 cx:p-20 pt-20">
      <div className="flex text-xl cs:text-4xl sm:text-6xl justify-between items-center">
        <h1 className="font-bold w-[40%]">{t("keyFeatures.title")}</h1>
        <h1 className="text-[#dfbd00] font-bold w-[60%] text-end border-b-2 py-5">
          {t("keyFeatures.subtitle")}
        </h1>
      </div>
      <div className="cx:mt-32 grid grid-cols-2 sx:grid-cols-2 gap-1 cs:gap-5 cx:gap-10 cs:grid-cols-3 mt-10  justify-between">
        {t("keyFeatures.features", { returnObjects: true }).map((feature, index) => (
          <div
            key={index}
            className=" flex items-center flex-col  bg-gray-100 border xxl:p-3  p-1 cx:p-10  md:p-20 rounded-3xl justify-between border-gray-200"
          >
            <img className="w-[50px] h-[50px] cs:w-[100px] cs:h-[100px]" src={feature.image} alt="" />
            <h1 className="text-md md:text-2xl text-center font-bold cx:py-5 py-2">{feature.title}</h1>
            <p className="cx:text-md text-[10px]  xxl:text-lg text-center">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="bg-[#516EFF] my-10 p-2 cs:px-20 cs:py-10 text-white text-center">
      <h1 className="text-xl  cs:text-5xl font-bold">{t("section1.title")}</h1>
      <p className="text-sm  cs:text-2xl mt-5  my-10 mx-auto">{t("section1.description")}</p>
      <Button
        className="mt-8 w-[250px] h-[50px] font-bold"
        variant="outlined"
        sx={{
          border: "2px solid white",
          color: "white",
          fontWeight: "bold",
          borderRadius: "10px",
          "&:hover": {
            backgroundColor: "white",
            color: "#516EFF",
          },
        }}
      >
        {t("section1.button")}
      </Button>
    </section>

    </div>
  );
};

export default ServiceSection;
