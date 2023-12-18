import * as React from "react";

const Footer = () => {
  const footerNavs = [
    {
      href: "/",
      name: "",
    },
  ];
  return (
    <footer className="pt-10">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="justify-between sm:flex">
          <div className="space-y-6">
            <img
              src="https://cdn.discordapp.com/attachments/1171568516235804802/1181718906004590723/foreveryou.png?ex=6582147e&is=656f9f7e&hm=1da73adcd85048e8d399a33f9b8cd13b14129a924f21a0cbe4a4344db804dea5&"
              className="w-32"
              alt="Website logo"
            />
            <p className="max-w-md">
              Get yourself the best make up ever clinically tested.
            </p>
            <ul className="flex flex-wrap items-center gap-4 text-sm sm:text-base">
              {footerNavs.map((item, idx) => (
                <li
                  key={idx}
                  className="text-gray-800 hover:text-gray-500 duration-150"
                >
                  <a href={item.href}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 py-10 border-t md:text-center">
          <p>© 2023 ForeverYou. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
