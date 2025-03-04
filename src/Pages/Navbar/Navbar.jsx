import { Button, Drawer } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [flag, setFlags] = useState("/src/assets/russia.png");
  const { t, i18n } = useTranslation();

  const handleflag = (event) => {
    i18n.changeLanguage(event.target.value);
    if (event.target.value === "tj") {
      setFlags("/src/assets/tajikistan.png");
    } else if (event.target.value === "ru") {
      setFlags("/src/assets/russia.png");
    } else if (event.target.value === "en") {
      setFlags("/src/assets/united-kingdom.png");
    }
  };
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <div className="flex cs:sticky top-0 cs:backdrop-blur-3xl flex-col  ks:px-20 z-50">

      <nav className="hidden cs:block py-5 border-b-1 border-[#52525B]">
        <ul className="flex text-lg ks:text-xl  text-[#52525B] font-bold justify-between items-center">
          <li className="w-[30%]">
            <a href="#">
              <img src="/src/assets/Logo (1).png" alt="" />
            </a>
          </li>
          <li>
            <a className="hover:text-[#516EFF]" href="#">
              {t("nav.Home")}
            </a>
          </li>
          <li>
            <a className="hover:text-[#516EFF]" href="#">
              {t("nav.Services")}
            </a>
          </li>
          <li>
            <a className="hover:text-[#516EFF]" href="#">
              {t("nav.About")}
            </a>
          </li>
          <li>
            <a className="hover:text-[#516EFF]" href="#">
              {t("nav.Register")}
            </a>
          </li>
          <li>
            <Button variant="contained" sx={{ backgroundColor: "#516EFF" }}>
              {t("nav.Appointment")}
            </Button>
          </li>
          <div className="flex">
            <img className="w-[30px]" src={flag} alt="" />
            <select
              className="outline-none text-[#516EFF] font-bold bg-transparent backdrop-blur-2xl"
              onClick={handleflag}
            >
              <option className="bg-[#516EFF] text-white" value="ru">
                RU
              </option>
              <option className="bg-[#516EFF] text-white" value="tj">
                TJ
              </option>
              <option className="bg-[#516EFF] text-white" value="en">
                EN
              </option>
            </select>
          </div>
        </ul>
      </nav>




      

      <nav className="flex z-50 fixed top-0 w-full bg-transparent backdrop-blur-2xl px-5 cs:hidden items-center py-2 justify-between">
        <div className="flex items-center mr-[50%]">
          <Button onClick={toggleDrawer(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          </Button>

          <Drawer open={open} onClose={toggleDrawer(false)}>
            <div className="p-5 w-[200px]">
              <img src="/src/assets/Logo (1).png" alt="" />
              <div className="flex py-2">
                <img className="w-[30px]" src={flag} alt="" />
                <select
                  className="outline-none text-[#516EFF] font-bold bg-transparent backdrop-blur-2xl"
                  onClick={handleflag}
                >
                  <option className="bg-[#516EFF] text-white" value="ru">
                    RUSSIAN
                  </option>
                  <option className="bg-[#516EFF] text-white" value="tj">
                    TAJIK
                  </option>
                  <option className="bg-[#516EFF] text-white" value="en">
                    ENGLISH
                  </option>
                </select>
              </div>
            </div>
          </Drawer>

          <img className="w-[120px]" src="/src/assets/Logo (1).png" alt="" />
        </div>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#516EFF",
            height: { mb: "20px", md: "50px", xs: "40px" },
          }}
        >
          {t("nav.Appointment")}
        </Button>
      </nav>

      <footer className="fixed cs:hidden bottom-0 left-0 w-full bg-transparent z-50 backdrop-blur-2xl shadow-2xl">
        <div className="flex justify-evenly px-5 py-2">
        <Button className="flex flex-col">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
          home
        </Button>
        <Button  className="flex flex-col">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
            />
          </svg>
          Service
        </Button>

        <Button  className="flex flex-col">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
          Appoinment
        </Button>
        <Button  className="flex flex-col">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
          Profile
        </Button>
        </div>
      </footer>
    </div>
  );
};

export default Navbar;
