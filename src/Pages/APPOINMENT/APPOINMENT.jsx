import { Button } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import image1 from "../../assets/Image (3).png"
import { useScroll } from "../../hooks/ScrollProvider";


const countryCodes = [
  { code: "+992", country: "Tajikistan" },
    { code: "+1", country: "USA" },
    { code: "+7", country: "Russia/Kazakhstan" },
    { code: "+33", country: "France" },
    { code: "+44", country: "United Kingdom" },
    { code: "+49", country: "Germany" },
    { code: "+81", country: "Japan" },
    { code: "+82", country: "South Korea" },
    { code: "+86", country: "China" },
    { code: "+91", country: "India" },
    { code: "+98", country: "Iran" },
    { code: "+993", country: "Turkmenistan" },
    { code: "+994", country: "Azerbaijan" },
    { code: "+996", country: "Kyrgyzstan" },
    { code: "+998", country: "Uzbekistan" },
  ];

const APPOINMENT = () => {
 const {t}= useTranslation();
    const {
      AppointmentRef,
       } = useScroll();

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        date: "",
        doctor: "",
        message: "",
        agree: false,
      });
    
      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
          ...formData,
          [name]: type === "checkbox" ? checked : value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
      };
    


  return (
    <div ref={AppointmentRef}>
      <section className="p-2 cx:p-20">
        <div className="flex justify-between items-center">
          <h1 className="text-[#dfbd00] sm:text-5xl cs:text-4xl sx:text-2xl text-xl font-bold w-[60%] text-start border-b-2 py-5">
            MAKE AN APPOINMENT
          </h1>
          <h1 className="cs:text-4xl sm:text-5xl text-xl sx:text-2xl text-end font-bold w-[40%]">
            Consult with our Doctor
          </h1>
        </div>

        <div className="mt-26 flex flex-col cs:flex-row">
            <div className=" w-[100%] flex justify-center cx:w-[50%]">
                <img className="w-[70%] h-[100%]" src={image1} alt="" />
            </div>
            <div className=" w-[100%] cs:w-[50%] flex items-center justify-center">
            <form
      onSubmit={handleSubmit}
      className="w-4xl mx-auto p-8 bg-white shadow-lg rounded-xl"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-lg font-medium mb-2">{t("appointment.name")}</label>
          <input
            type="text"
            name="name"
            placeholder={t("appointment.fullname")}
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg text-lg"
          />
        </div>
        <div>
          <label className="block text-lg font-medium mb-2">{t("appointment.phone")}</label>
          <div className="flex">
            <select 
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
              className="p-3 border w-[90px] rounded-l-lg text-lg bg-gray-100"
            >
              {countryCodes.map((item) => (
                <option key={item.code} value={item.code}>
                  {item.code} ({item.country})
                </option>
              ))}
            </select>
            <input
              type="tel"
              name="phone"
              placeholder=" 009-11-22-33"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 border rounded-r-lg text-lg"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div>
          <label className="block text-lg font-medium mb-2">{t("appointment.date")}</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg text-lg"
          />
        </div>
        <div>
          <label className="block text-lg font-medium mb-2">{t("appointment.doctor")}</label>
          <select
            name="doctor"
            value={formData.doctor}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg text-lg"
          >
            <option>{t("appointment.doctor1")}</option>
            <option>{t("appointment.doctor2")}</option>
            <option>{t("appointment.doctor3")}</option>
          </select>
        </div>
      </div>

      <div className="mt-6">
        <label className="block text-lg font-medium mb-2">{t("appointment.message")}</label>
        <textarea
          name="message"
          placeholder={t("appointment.messagePlaceholder")}
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg text-lg"
        ></textarea>
      </div>

      <div className="flex items-center mt-6">
        <input
          type="checkbox"
          name="agree"
          checked={formData.agree}
          onChange={handleChange}
          className="mr-3 w-5 h-5"
        />
        <label className="text-lg">{t("appointment.privacyPolicy")}</label>
      </div>

      <Button
  type="submit"
  sx={{
    width: '100%', // Full width
    marginTop: '24px', // Top margin
    backgroundColor: '#516EFF', // Background color
    color: 'white', // Text color
    padding: '12px', // Padding
    borderRadius: '8px', // Rounded corners
    fontSize: '1.125rem', // Font size
    '&:hover': {
      backgroundColor: '#3b5bdb', // Background color on hover
    },
  }}
>
  {t("appointment.confirm")}
</Button>

    </form>
            </div>
        </div>
        
      </section>
    </div>
  );
};

export default APPOINMENT;
