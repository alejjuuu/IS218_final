import React from "react";

const FeaturesSection = () => {
  return (
    <section
      id="features"
      style={{
        backgroundImage: `url()`,
      }}
      className="py-24 bg-primary/5 relative after:absolute after:bg-fixed after:bg-cover after:inset-0 after:blur-2xl after:-z-10"
    >
      <div className="container">
        <div className="w-full">
          <div className="flex text-center items-center justify-center mb-16">
            <div className="max-w-2xl mx-auto text-center">
              <h5 className="capitalize text-lg text-red-800 font-medium mb-2">
                A Smart <span className="text-red">Investment</span>
              </h5>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold capitalize text-gray-800 mb-1.5">
                Join the Trumpcoin Revolution?
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-500">
                Invest in Your Future and Support <br></br>Your Ideals
              </p>
            </div>
          </div>
        </div>

        {/* First Feature Block */}
        {/* Feature Blocks */}
        <div className="space-y-32">
          {/* First Feature Block */}
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-12">
            <div className="w-full h-full flex justify-center items-center">
              <img
                src="https://cdn.discordapp.com/attachments/1204955047516184587/1224127931521961984/Grey_Money_Pattern_Motivational_Quotes_Instagram_Post_1.png?ex=661c5cfa&is=6609e7fa&hm=31d1049b5f5ba0ed31e028c87b82b5c28aa1b22eaa5619b6ea682038aeaf2419&"
                alt="Descriptive Alt Text"
                className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto h-auto object-contain"
              />
            </div>

            <div className="my-auto">
              <h2 className="text-3xl text-gray-800 font-bold mb-4">
                Maximize Your Gains
              </h2>
              <p className="text-lg text-gray-500">
                Trumpcoin offers a thrilling investment opportunity in the
                volatile cryptocurrency market. With its potential for rapid
                growth, fueled by media buzz and a strong community, it's more
                than just a political token—it's a chance to diversify your
                assets and reap significant returns.
              </p>
              {/* Feature Description */}
              {/* ... */}
            </div>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-12">
            <div className="my-auto">
              <h2 className="text-3xl text-gray-800 font-bold mb-4">
                Join the Movement !{" "}
              </h2>
              <p className="text-lg text-gray-500">
                Trumpcoin is not just an investment; it's a way to participate
                in a collective expression of ideals and be part of a dynamic
                digital ecosystem.
              </p>
              {/* Feature Description */}
              {/* ... */}
            </div>
            <div className="w-full h-full flex justify-center items-center">
              <img
                src="https://cdn.discordapp.com/attachments/1204955047516184587/1224176402434363415/Grey_Money_Pattern_Motivational_Quotes_Instagram_Post_2.png?ex=661c8a1e&is=660a151e&hm=342790de7cb137150beac107db7ea28fb305d1a805cd3fdbe2c93129b9dd2b74&"
                alt="Descriptive Alt Text"
                className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto h-auto object-contain"
              />
            </div>
          </div>
          {/* Additional Feature Blocks */}
          {/* ... */}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
