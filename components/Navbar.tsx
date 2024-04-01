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
              src="https://cdn.discordapp.com/attachments/1204955047516184587/1224127931521961984/Grey_Money_Pattern_Motivational_Quotes_Instagram_Post_1.png?ex=661c5cfa&is=6609e7fa&hm=31d1049b5f5ba0ed31e028c87b82b5c28aa1b22eaa5619b6ea682038aeaf2419&"
              width={50}
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
