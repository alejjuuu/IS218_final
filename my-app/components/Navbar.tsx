import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [state, setState] = useState(false);

  const navigation = [{ title: "", path: "/customers" }];

  return (
    <nav className="bg-white w-full border-b md:border-0 md:static">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <a href="" aria-label="Main website page">
            <img
              src="https://cdn.discordapp.com/attachments/1171568516235804802/1181718906004590723/foreveryou.png?ex=6582147e&is=656f9f7e&hm=1da73adcd85048e8d399a33f9b8cd13b14129a924f21a0cbe4a4344db804dea5&"
              width={120}
              height={50}
              alt="Website logo"
            />
          </a>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => {
              return (
                <li key={idx} className="text-gray-600 hover:text-indigo-600">
                  <a href={item.path}>{item.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
