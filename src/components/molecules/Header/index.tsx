"use client";

import React, { useContext, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { VscMenu } from "react-icons/vsc";
import { RiCloseLine } from "react-icons/ri";
import { navLinks } from "./data";
import { cn } from "@/base/libs/utils";
import ArtsyLogo from "@/components/atom/artsy-logo";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  const handleToggle = () => {
    setIsOpen((c) => !c);
  };

  return (
    <nav
      role="site navigation"
      className="container py-4 lg: flex items-center lg:justify-between"
    >
      <div className="flex items-center justify-between w-full relative">
        <VscMenu onClick={handleToggle} className="z-50 lg:hidden " size={28} />
        <ArtsyLogo />

        {/* show the nav when isOpen */}
        <div
          className={cn(
            "max-lg:px-10 fixed top-0 transition bottom-0 right-0 flex-col w-full lg:w-max gap-8 pt-6 lg:pt-0 z-50 bg-white lg:static lg:items-center lg:flex-col",
            !isOpen && "max-lg:hidden"
          )}
        >
          <div className="z-[60 flex justify-between  lg:hidden items-center pb-[3.125rem]">
            <ArtsyLogo />
            <RiCloseLine onClick={handleToggle} className=" " size={52} />
          </div>
          <div className="w-16 h-16 bg-blue rounded-full absolute right-8 bottom-16 shadow-7xl flex items-center justify-center">
            <svg
              width="29"
              height="29"
              viewBox="0 0 29 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 29V2.9C0 2.1025 0.2842 1.41955 0.8526 0.85115C1.42003 0.283716 2.1025 0 2.9 0H26.1C26.8975 0 27.5805 0.283716 28.1489 0.85115C28.7163 1.41955 29 2.1025 29 2.9V20.3C29 21.0975 28.7163 21.7805 28.1489 22.3489C27.5805 22.9163 26.8975 23.2 26.1 23.2H5.8L0 29Z"
                fill="white"
              />
            </svg>
          </div>
          <ul
            className="flex flex-col gap-8 lg:gap-12 lg:flex-row  font-normal  text-2xl"
            role="nav items list"
          >
            {navLinks.map((navLink) => (
              <Link
                onClick={() => {
                  handleToggle();
                  setActiveSection(navLink.name);
                }}
                href={navLink.urlPath}
                key={navLink.name}
                className={
                  activeSection === navLink.name
                    ? "lg:border-b-2 lg:border-1 lg:border-black"
                    : ""
                }
              >
                <li>{navLink.name}</li>
              </Link>
            ))}
          </ul>
        </div>

        <div className="flex items-center">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.9741 33.947C24.6309 33.9464 27.211 33.0571 29.3038 31.4206L35.8836 38L38 35.8837L31.4202 29.3043C33.0577 27.2114 33.9476 24.6308 33.9483 21.9735C33.9483 15.3716 28.5764 10 21.9741 10C15.3719 10 10 15.3716 10 21.9735C10 28.5754 15.3719 33.947 21.9741 33.947ZM21.9741 12.9934C26.9269 12.9934 30.9547 17.021 30.9547 21.9735C30.9547 26.926 26.9269 30.9536 21.9741 30.9536C17.0213 30.9536 12.9935 26.926 12.9935 21.9735C12.9935 17.021 17.0213 12.9934 21.9741 12.9934Z"
              fill="#333333"
            />
          </svg>
          <Link href="/cart">
            <svg
              width="49"
              height="49"
              viewBox="0 0 49 49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="41.5" cy="12.5" r="2.5" fill="#E31616" />

              <path
                d="M18.9 38.5C18.0556 38.5 17.3333 38.1433 16.7333 37.4298C16.1333 36.7173 15.8333 35.8685 15.8333 34.8833V20.4556L13.4 13.6111H10.5V10.5H15.2L17.4 16.7222H37.1C37.6111 16.7222 38 16.9685 38.2667 17.4611C38.5333 17.9537 38.5444 18.4593 38.3 18.9778L34.5 27.65C35.6333 27.8574 36.5836 28.4667 37.3507 29.4778C38.1169 30.4889 38.5 31.6815 38.5 33.0556C38.5 34.5593 38.0502 35.8426 37.1507 36.9056C36.2502 37.9685 35.1556 38.5 33.8667 38.5C32.5556 38.5 31.4502 37.9685 30.5507 36.9056C29.6502 35.8426 29.2 34.5593 29.2 33.0556C29.2 32.537 29.2556 32.0574 29.3667 31.6167C29.4778 31.1759 29.6333 30.7481 29.8333 30.3333L25.4667 29.8667L21.4667 36.8667C21.1778 37.3852 20.8053 37.787 20.3493 38.0722C19.8942 38.3574 19.4111 38.5 18.9 38.5ZM31.6333 27.4167L34.9333 19.8333L18.5 19.8722L20.1667 24.5C20.3444 25.0185 20.628 25.4525 21.0173 25.802C21.4058 26.1525 21.8556 26.3537 22.3667 26.4056L31.6333 27.4167ZM18.9333 35.35C18.9778 35.35 19.0778 35.2852 19.2333 35.1556L22.4667 29.5556C21.3778 29.4259 20.5222 29.121 19.9 28.6409C19.2778 28.1618 18.8111 27.663 18.5 27.1444V34.9222C18.5 35.0519 18.5444 35.1556 18.6333 35.2333C18.7222 35.3111 18.8222 35.35 18.9333 35.35ZM33.8333 35.3889C34.4111 35.3889 34.8889 35.1618 35.2667 34.7076C35.6444 34.2544 35.8333 33.7037 35.8333 33.0556C35.8333 32.3815 35.6444 31.8241 35.2667 31.3833C34.8889 30.9426 34.4111 30.7222 33.8333 30.7222C33.2778 30.7222 32.8058 30.9426 32.4173 31.3833C32.028 31.8241 31.8333 32.3815 31.8333 33.0556C31.8333 33.7037 32.028 34.2544 32.4173 34.7076C32.8058 35.1618 33.2778 35.3889 33.8333 35.3889ZM31.6333 27.4167L22.3667 26.4056L31.6333 27.4167Z"
                fill="#333333"
              />
            </svg>
          </Link>
          <Link href="drop">
            <svg
              className="hidden md:block"
              width="46"
              height="49"
              viewBox="0 0 46 49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M35.707 28.293L33 25.586V22C32.9969 19.5218 32.075 17.1328 30.4126 15.295C28.7502 13.4571 26.4654 12.3009 24 12.05V10H22V12.05C19.5346 12.3009 17.2498 13.4571 15.5874 15.295C13.925 17.1328 13.0031 19.5218 13 22V25.586L10.293 28.293C10.1055 28.4805 10.0001 28.7348 10 29V32C10 32.2652 10.1054 32.5196 10.2929 32.7071C10.4804 32.8946 10.7348 33 11 33H18V33.777C17.9782 35.0456 18.4254 36.2777 19.2558 37.237C20.0862 38.1964 21.2414 38.8156 22.5 38.976C23.1952 39.0449 23.8971 38.9676 24.5606 38.749C25.2241 38.5304 25.8345 38.1753 26.3525 37.7066C26.8706 37.2379 27.2848 36.666 27.5685 36.0277C27.8522 35.3893 27.9992 34.6986 28 34V33H35C35.2652 33 35.5196 32.8946 35.7071 32.7071C35.8946 32.5196 36 32.2652 36 32V29C35.9999 28.7348 35.8946 28.4805 35.707 28.293ZM26 34C26 34.7956 25.6839 35.5587 25.1213 36.1213C24.5587 36.6839 23.7956 37 23 37C22.2044 37 21.4413 36.6839 20.8787 36.1213C20.3161 35.5587 20 34.7956 20 34V33H26V34ZM34 31H12V29.414L14.707 26.707C14.8945 26.5195 14.9999 26.2652 15 26V22C15 19.8783 15.8429 17.8434 17.3431 16.3431C18.8434 14.8429 20.8783 14 23 14C25.1217 14 27.1566 14.8429 28.6569 16.3431C30.1571 17.8434 31 19.8783 31 22V26C31.0001 26.2652 31.1054 26.5195 31.293 26.707L34 29.414V31Z"
                fill="#333333"
              />
            </svg>
          </Link>
        </div>
      </div>
    </nav>
  );
}
