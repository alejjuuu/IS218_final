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
              src="https://cdn.discordapp.com/attachments/1204955047516184587/1224127931521961984/Grey_Money_Pattern_Motivational_Quotes_Instagram_Post_1.png?ex=661c5cfa&is=6609e7fa&hm=31d1049b5f5ba0ed31e028c87b82b5c28aa1b22eaa5619b6ea682038aeaf2419&"
              className="w-32"
              alt="Website logo"
            />
            <p className="max-w">
              $TRUMPCOIN has no association with Joe Biden. This token is simply
              a meme coin with no intrinsic value or expectation of financial
              return.
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
          <p>© 2024 $TRUMPCOIN. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
