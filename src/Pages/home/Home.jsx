import { Button } from "@mui/material"
import { useTranslation } from "react-i18next";
import image1 from "../../assets/Illustration.png"
import { useScroll } from "../../hooks/ScrollProvider";


const Home = () => {
  const { t } = useTranslation();
    const {
      HomeRef,
    } = useScroll();

  return (
    <div ref={HomeRef}>
      
      <section  className=" flex ks:px-20 mt-12 flex-col-reverse cs:flex-row justify-between items-center p-2 text-center">
        <div className="cs:w-[50%]">
          <h1 className="font-bold text-xl ks:text-4xl ks:pb-5 sm:text-6xl l:text-3xl">
            {t("hero.title")}
          </h1>
          <p className=" hidden ph:block l:text-xl ks:pb-5 text-[#777777]">
            {t("hero.description")}{" "}
          </p>
          <div className=" flex justify-center mt-2">
            <Button
              className=" w-[150px] cx:w-[250px]"
              variant="contained"
              sx={{
                backgroundColor: "#516EFF",
                fontWeight: "bold",
                borderRadius: "10px",
              }}
            >
              {t("hero.getStarted")}
            </Button>
            <div className=" hidden ph:block ph:ml-5">
              <Button
                className="w-[150px] cx:w-[250px]"
                variant="outlined"
                sx={{
                  border: "2px solid #516EFF",
                  color: "#516EFF",
                  fontSize: { mb: "10px", cx: "19px" },
                  fontWeight: "bold",
                  borderRadius: "10px",
                }}
              >
                {t("hero.learnMore")}
              </Button>
            </div>
          </div>
        </div>

        <div className="cs:w-[50%]">
          <img
            className="w-[200px] l:w-[400px] cx:w-[80%]"
            src={image1}
            alt=""
          />
        </div>
      </section>
    </div>
  )
}

export default Home
