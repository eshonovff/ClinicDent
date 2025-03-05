import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
import { Button } from "@mui/material";
import image1 from "../../assets/Image (1).png"
import image2 from "../../assets/Image (2).png"
import { useScroll } from "../../hooks/ScrollProvider";
const About = () => {
  const { t } = useTranslation();
  const {
    aboutRef,
  } = useScroll();
  const doctors = [
    {
      id: 1,
      name: "Dr. Jeanette Hoff",
      school: "Orthodontic Treatment, Yale Medical School",
      image:
        "https://s3-alpha-sig.figma.com/img/0163/13ce/2cea899424558ceac699b5cf8da7afdf?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=qtIpxfQtKz3phXzbmHI5XCxzaksrJrsfuijdMWKvmsQxo-OOft88dFDjGgwZ~qI6c4KJeUudh3jNwA228qSCX4oR3e54p71Ipkv6EuBy8QoOtskNRf0Byq1kNIgtRy1OIPh73OeMA0rSDYO16aiTx6QuFWKTLl3lJYxmCY~u4BZ4gTNgUYuQ5TkmA~Zeyh5jVOpOfvGKPr6X0rZvFsqkvvPgf2N9pqLlqTmvYBx3V59YNYr0HhdSVNntwNokhax-Q-s41TXgv3ze48WQZS4Ws9vrgY7UbGrI9w56Ql6~KINXZGnDZS70BDDQ-~i3cVvDHS4yt4834qNg-QaOeb2WhA__",
    },
    {
      id: 2,
      name: "Dr. Kristine Nguyen",
      school: "Orthodontic Treatment, Yale Medical School",
      image:
        "https://s3-alpha-sig.figma.com/img/9317/2e4d/910127401abb1f29c27147f873918cb6?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=i3eY21PdtYd8sfZyaiYl~49qwcB95ptdpVIrOz-f9As5vu3zpeNrltJNHcNkqZheQe1roc0pE5NTvABhM~1Fi4uqHQhQnlL9JDrNPoeX2VOs5RponzSTgw9Moq9GqetSflSub3zOS66p~faPDTlItHJPgMtgOybs4gVbJHXapB52MnIAz-FUytLk6juZcF3NllntZoZkkqOFOrIXlnAir8XXchTV7B5rAYrLXdFH6~jv2a-lNWW4UE0CuPrVkXNj9H07IdeSBOYvpAVM7VnVoQwrint4W6OBejXqAFHiI6qLkcd9DWTw3-8YKoW6-f6mRZ~a7mbyX473gfrWm6o24Q__",
    },
    {
      id: 3,
      name: "Dr. Samantha Williams",
      school: "Orthodontic Treatment, Yale Medical School",
      image:
        "https://s3-alpha-sig.figma.com/img/0db2/a698/291325f90028581a7046439f35ca2806?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Ar1OwDPn6T3mWMEku4MJKGpgktLCJejEjEUqO-Ai7T9mhVAQMRd5ujGy43uejtRET59QzUl~q0O6fS-crqOqU9Uh5zhhaY59a5bZae5QhwvVOkcWKT7DBQGYI5phSal5LrfxRj2bAW6VYtEbfUPeoanSglTtPHuvxR~qslxYr2QwU5SvIx6gZQWOSk8Buaij9c27ex4YQoINxgVbaqtgcZzmzQ6rGfqJkI5hGZD5AWsK8KDLHUxQ4CbuiiJMbjtpAf9cAIT94wtDc4MgcNICe9W8pnSRTGjPUL4mHid7csyY5lZN1dYufu~dfvi0qM9lUTDwpLSRcnN-aCKbVT5-Dg__",
    },
    {
      id: 4,
      name: "Dr. Samantha Williams",
      school: "Orthodontic Treatment, Yale Medical School",
      image:
        "https://s3-alpha-sig.figma.com/img/7c92/ff31/a60e044a420ee7cb239eeb8acf5347d0?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bfYNj~SHeZqObfpTfTDvgqMVLfBG97WWEoH235T4NcH0PIZ20DuhIyTWoX0coldp7Te8ol2RrxHqat~PrGS9t4jbCzSJom9QzFLnCLue2Pu1oWA7tQb48RQTQAPTl6~VpWuMH8DeEFu~lavGa~eoHGdMyAYan4A7Q4bqZkYlNOD9tq7hampzHGSeiH2NMHCkGH7FKFXFE9a-TaaoaxhyByRIaurVs64uoqCGvzFxzCHm0vdUM0T3fsd4Nyd1au5zfvYRqIDRmOBjMPJcmRHTAAlSd7HIXLPiMFHcoSFIiW6nYOaZUEhLN7BR8WHGb0FLzGRJmiFXVTdU~GBrpX35nQ__",
    },
    {
      id: 2,
      name: "Dr. Kristine Nguyen",
      school: "Orthodontic Treatment, Yale Medical School",
      image:
        "https://s3-alpha-sig.figma.com/img/9317/2e4d/910127401abb1f29c27147f873918cb6?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=i3eY21PdtYd8sfZyaiYl~49qwcB95ptdpVIrOz-f9As5vu3zpeNrltJNHcNkqZheQe1roc0pE5NTvABhM~1Fi4uqHQhQnlL9JDrNPoeX2VOs5RponzSTgw9Moq9GqetSflSub3zOS66p~faPDTlItHJPgMtgOybs4gVbJHXapB52MnIAz-FUytLk6juZcF3NllntZoZkkqOFOrIXlnAir8XXchTV7B5rAYrLXdFH6~jv2a-lNWW4UE0CuPrVkXNj9H07IdeSBOYvpAVM7VnVoQwrint4W6OBejXqAFHiI6qLkcd9DWTw3-8YKoW6-f6mRZ~a7mbyX473gfrWm6o24Q__",
    },
    {
      id: 3,
      name: "Dr. Samantha Williams",
      school: "Orthodontic Treatment, Yale Medical School",
      image:
        "https://s3-alpha-sig.figma.com/img/0db2/a698/291325f90028581a7046439f35ca2806?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Ar1OwDPn6T3mWMEku4MJKGpgktLCJejEjEUqO-Ai7T9mhVAQMRd5ujGy43uejtRET59QzUl~q0O6fS-crqOqU9Uh5zhhaY59a5bZae5QhwvVOkcWKT7DBQGYI5phSal5LrfxRj2bAW6VYtEbfUPeoanSglTtPHuvxR~qslxYr2QwU5SvIx6gZQWOSk8Buaij9c27ex4YQoINxgVbaqtgcZzmzQ6rGfqJkI5hGZD5AWsK8KDLHUxQ4CbuiiJMbjtpAf9cAIT94wtDc4MgcNICe9W8pnSRTGjPUL4mHid7csyY5lZN1dYufu~dfvi0qM9lUTDwpLSRcnN-aCKbVT5-Dg__",
    },
    {
      id: 4,
      name: "Dr. Samantha Williams",
      school: "Orthodontic Treatment, Yale Medical School",
      image:
        "https://s3-alpha-sig.figma.com/img/7c92/ff31/a60e044a420ee7cb239eeb8acf5347d0?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bfYNj~SHeZqObfpTfTDvgqMVLfBG97WWEoH235T4NcH0PIZ20DuhIyTWoX0coldp7Te8ol2RrxHqat~PrGS9t4jbCzSJom9QzFLnCLue2Pu1oWA7tQb48RQTQAPTl6~VpWuMH8DeEFu~lavGa~eoHGdMyAYan4A7Q4bqZkYlNOD9tq7hampzHGSeiH2NMHCkGH7FKFXFE9a-TaaoaxhyByRIaurVs64uoqCGvzFxzCHm0vdUM0T3fsd4Nyd1au5zfvYRqIDRmOBjMPJcmRHTAAlSd7HIXLPiMFHcoSFIiW6nYOaZUEhLN7BR8WHGb0FLzGRJmiFXVTdU~GBrpX35nQ__",
    },
  ];
  return (
    <div ref={aboutRef}>
      <section  className="p-2 sx:p-10 cx:p-20 ">
        <div className="flex justify-between items-center">
          <h1 className="text-[#dfbd00] sm:text-5xl cs:text-4xl sx:text-2xl text-xl font-bold w-[60%] text-start border-b-2 py-5">
            {t("about.whoWeAre")}
          </h1>
          <h1 className="cs:text-4xl sm:text-5xl text-xl sx:text-2xl text-end font-bold w-[40%]">
            {t("about.historyTitle")}
          </h1>
        </div>

        <div className="flex flex-col xxl:flex-row items-center justify-between mt-10">
          <div className="xxl:w-[50%]">
            <img
              className="w-[100%] xxl:w-[80%] cx:h-[100%]"
              src={image1}
              alt="Our History"
            />
          </div>
          <div className=" xxl:w-[50%] xxl:h-[100%] ks:p-20 bg-gray-100 mt-2 border p-5 text-justify rounded-3xl border-gray-200">
            <h1 className="text-2xl ks:text-4xl font-bold">
              {t("about.sectionTitle")}
            </h1>
            <p className="text-lg ks:text-2xl mt-5">{t("about.description")}</p>
          </div>
        </div>
      </section>

      <section className="bg-[#F8FAFC] p-2 sx:p-5 cx:p-20">
        <div className="flex justify-between items-center">
          <h1 className="sm:text-6xl xxl:text-4xl text-lg sx:text-xl font-bold w-[40%]">
            {t("about.meetBrains")}
          </h1>
          <h1 className="text-[#dfbd00] xxl:text-4xl sm:text-5xl sx:text-xl text-lg font-bold w-[60%] text-end border-b-2 py-5">
            {t("about.meetDoctors")}
          </h1>
        </div>
        <div className="mt-20">
          <Swiper
            spaceBetween={30}
            loop={true}
            className="mySwiper pt-20"
            breakpoints={{
              380: { slidesPerView: 1.5 }, // mb
              500: { slidesPerView: 2.1 }, // sx
              700: { slidesPerView: 2.5 }, // sx
              800: { slidesPerView: 3.1 }, // xxl
              950: { slidesPerView: 3.3 }, // cs
              1200: { slidesPerView: 4 }, // fn
              1300: { slidesPerView: 4.5 }, // fn
              1500: { slidesPerView: 5 }, // fn
              1600: { slidesPerView: 5.5 }, // fn
            }}
          >
            {doctors.map((doctor) => (
              <SwiperSlide key={doctor.id}>
                <div className="flex flex-col bg-gray-100 p-5 rounded-2xl items-center">
                  <img
                    className="w-[200px] rounded-full"
                    src={doctor.image}
                    alt={doctor.name}
                  />
                  <h1 className="text-lg font-bold mt-4">{doctor.name}</h1>
                  <p className="text-sm text-gray-500">{doctor.school}</p>
                  <Button
                    className="w-[250px] h-[50px] font-bold"
                    sx={{
                      border: "2px solid #516EFF",
                      color: "#516EFF",
                      fontWeight: "bold",
                      borderRadius: "10px",
                      marginTop: "20px",
                    }}
                  >
                    {t("about.appointment")}
                  </Button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section  className="bg-[#516EFF] hidden cx:block px-3 py-2">
        <Swiper
          slidesPerView={1.2}
          spaceBetween={30}
          loop={true}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper pt-20"
        >
          {doctors.map((doctor) => (
            <SwiperSlide key={doctor.id}>
              <div className="flex text-white p-5 rounded-2xl items-center">
                <div className="w-[40%]">
                  <img src={image2} alt="" />
                </div>
                <div className="w-[50%]">
                  <h1 className="text-3xl font-bold ">
                    {t("about.clientFeedback")}
                  </h1>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-14 my-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                    />
                  </svg>

                  <p>
                    I’ve seen a lot of Dentists over my lifetime because I’ve
                    had some serious dental issues. But my highest praise goes
                    to Dr. Jonathon Doe and his staffs . I was always very
                    anxious going to the dentist but this time at Digital
                    Implant, my experience was so painless and relaxed their was
                    no discomfort whatsoever.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

    </div>
  );
};

export default About;
