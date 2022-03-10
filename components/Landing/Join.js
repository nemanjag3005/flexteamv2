import React from "react";
import Link from "next/link";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import 'animate.css';

const Join = () => {
  return (
    <div className="bg-secondary bg-cover px-4 py-12 border-t-2 border-gray-800 flex justify-center">
      <div className="flex justify-center px-4 flex-col w-full max-w-7xl">
        <div className="grid md:my-20 grid-cols-1 md:grid-cols-2 md:space-x-4">
          <div>
            <h1 className="z-0 md:mx-auto pointer-events-none mb-2 font-['Airbnb Cereal App'] font-bold opacity-10 text-transparent bg-clip-text bg-gradient-to-r from-primary-metallic to-primary-metallic md:text-8xl text-8xl md:tracking-widestest tracking-mobile-widestest">
              FLEX
            </h1>
            <h1 className="z-0 md:mx-auto pointer-events-none -mb-44 font-['Airbnb Cereal App'] font-bold opacity-10 text-transparent bg-clip-text bg-gradient-to-r from-primary-metallic to-primary-metallic md:text-8xl text-8xl md:tracking-widestest tracking-mobile-widestest">
              TEAM
            </h1>
            <h1 className="text-5xl max-w-3xl md:mx-auto md:text-7xl uppercase text-shadow text-primary italic font-bold mb-6 ">
              Uđi u Flex Team I Promeni Sebi Život.
            </h1>
            <p className="text-lg text-gray-200">
              Clanarina naseg tima je: * 30e (3600rsd) - Standard vip✅ (mesec
              dana od dana uplate)👑 * 100e(11700)- Admin premium✅ (pristup i
              pregled nasih tiketa na koje mi stavljamo pare od kojih je svaki
              ispracen jakim ulogom)
            </p>
            <div className="mx-auto mb-16 md:block hidden mt-8">
              <Link href="/paketi">
                <button className="text-gray-200 font-bold italic mt-4 shadow-xl px-4 py-2 text-2xl md:text-4xl rounded-full hover:-translate-y-2 transform ease-in-out duration-300 bg-gradient-to-b from-primary-metallic">
                  <h1 className="text-transparent bg-clip-text uppercase bg-gradient-to-b from-gray-200 to-gray-400 hover:from-gray-200 hover:to-gray-300">
                    Kako se učlaniti?
                  </h1>
                </button>
              </Link>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 w-full py-8 space-y-6 md:space-y-0 md:space-x-4">
            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce={true}>
              <Link href="paketi">
                <div className="flex items-center cursor-pointer flex-col border-2 border-primary-metallic shadow-xl ease-in-out transform transition duration-300 hover:scale-105">
                  <div className="bg-primary-metallic py-2 w-full text-center">
                    <h1 className="text-shadow italic uppercase text-3xl text-gray-200">
                      Standard Vip
                    </h1>
                  </div>
                  <div className="w-full bg-zinc-800 h-full flex items-center justify-start flex-col py-8 px-4">
                    <h1 className="text-primary-metallic border-b-2 border-gray-200 pb-2 mb-4 text-3xl italic text-shadow">
                      30€
                      <span className="text-gray-200 text-xl italic text-shadow">
                        {" "}
                        / mesečno
                      </span>
                    </h1>
                    <ul className="space-y-4 mt-4">
                      <li className="mb-2">
                        <span className="text-gray-200  text-2xl italic text-shadow flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 mr-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>{" "}
                          Dnevni Tiketi
                        </span>
                      </li>
                      <li className="mb-2">
                        <span className="text-gray-200 flex items-center text-2xl italic text-shadow">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 mr-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>{" "}
                          Dostupnost 24h
                        </span>
                      </li>
                      <li className="mb-2">
                        <span className="text-gray-200 flex items-center text-2xl italic text-shadow">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 mr-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>{" "}
                          Uvid u Naše Tikete
                        </span>
                      </li>
                      <li className="mb-2">
                        <span className="text-gray-200 flex items-center text-2xl italic text-shadow">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 mr-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>{" "}
                          Free Tiketi Sigurnosti
                        </span>
                      </li>
                      <li className="mb-2">
                        <span className="text-gray-200 flex items-center text-2xl italic text-shadow">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 mr-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>{" "}
                          Profit + 45% - 65%
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Link>
              </AnimationOnScroll>
              <AnimationOnScroll animateIn="animate__fadeInUp" delay={200} animateOnce={true}>
              <Link href="paketi">
                <div className="flex cursor-pointer items-center flex-col border-2 border-platinum shadow-xl ease-in-out transform transition duration-300 hover:scale-105">
                  <div className="bg-gradient-to-r via-platinum from-[#01FFFF] to-[#00ECFA] w-full py-2 text-center">
                    <h1 className="text-shadow uppercase italic text-3xl text-gray-200">
                      Admin Premium
                    </h1>
                  </div>
                  <div className="w-full bg-zinc-800 flex items-center justify-start flex-col py-8 px-4">
                    <h1 className="text-primary-metallic text-3xl mb-4 border-b-2 border-gray-200 pb-2 italic text-shadow">
                      100€
                      <span className="text-gray-200 text-xl italic text-shadow">
                        {" "}
                        / mesečno
                      </span>
                    </h1>
                    <ul className="space-y-4 mt-4">
                      <li className="mb-2">
                        <span className="text-gray-200  text-2xl italic text-shadow flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 mr-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>{" "}
                          Dnevni Tiketi
                        </span>
                      </li>
                      <li className="mb-2">
                        <span className="text-gray-200 flex items-center text-2xl italic text-shadow">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 mr-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>{" "}
                          Dostupnost 24h
                        </span>
                      </li>
                      <li className="mb-2">
                        <span className="text-gray-200 flex items-center text-2xl italic text-shadow">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 mr-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>{" "}
                          Uvid u Naše Tikete
                        </span>
                      </li>
                      <li className="mb-2">
                        <span className="text-gray-200 flex items-center text-2xl italic text-shadow">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 mr-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>{" "}
                          Free Tiketi Sigurnosti
                        </span>
                      </li>
                      <li className="mb-2">
                        <span className="text-gray-200 flex items-center text-2xl italic text-shadow">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 mr-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>{" "}
                          Profit + 55% - 125%
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Link>
              </AnimationOnScroll>
            </div>

            <p className="text-gray-200 text-lg mb-2 md:mx-auto">
              Bez obzira na to koji paket uzmete, profit je{" "}
              <span className="text-primary-metallic inline-block">
                garantovan
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 inline-block mb-1 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </span>
              . Razlika je samo u veličini profita!
            </p>
          </div>
        </div>
        <div className="mx-auto mb-16 md:hidden">
          <Link href="/paketi">
            <button className="text-gray-200 font-bold italic mt-4 shadow-xl px-4 py-2 text-2xl md:text-4xl rounded-full hover:-translate-y-2 transform ease-in-out duration-300 bg-gradient-to-b from-primary-metallic">
              <h1 className="text-transparent bg-clip-text uppercase bg-gradient-to-b from-gray-200 to-gray-400 hover:from-gray-200 hover:to-gray-300">
                Kako se učlaniti?
              </h1>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Join;
