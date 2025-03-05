import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useScroll } from "../../hooks/ScrollProvider";

const Register = () => {
  const { t } = useTranslation();
     const {
      RegisterRef,
      } = useScroll();
  return (
    <div ref={RegisterRef} className="m-10 my-32 p-12 rounded-3xl bg-[#216583]">
      <h1 className="text-white text-3xl font-semibold text-center mb-6">
        {t("newsletter.title")}
      </h1>
      <div className="space-y-4 flex justify-center flex-wrap ">
        <input
          className="p-4 rounded-lg bg-[#588fa7] placeholder:text-white text-white focus:outline-none focus:ring-2 focus:ring-[#216583] w-[350px] mr-10 text-lg"
          type="text"
          placeholder={t("newsletter.placeholderName")}
        />
        <input
          className="p-4 rounded-lg bg-[#588fa7] placeholder:text-white text-white focus:outline-none focus:ring-2 focus:ring-[#216583] w-[350px] mr-10 text-lg"
          type="text"
          placeholder={t("newsletter.placeholderEmail")}
        />
        <Button
          sx={{
            p: "20px 40px", // Padding
            borderRadius: "8px", // Rounded corners
            backgroundColor: "white", // Background color
            color: "black", // Text color
            fontSize: "1rem", // Font size to match input
            fontWeight: "500", // Font weight
            height: "56px", // Height to match input
            "&:hover": {
              backgroundColor: "#588fa7",
              color: "white", // Background color on hover
            },
            transition: "background-color 0.3s ease", // Transition effect
          }}
        >
          {t("newsletter.subscribeButton")}
        </Button>
      </div>
    </div>
  );
};

export default Register;
