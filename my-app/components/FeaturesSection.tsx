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
                Need <span className="text-red">Information?</span>
              </h5>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold capitalize text-gray-800 mb-1.5">
                Why people are choosing us?
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-500">
                Because we are cool and make your lips grow! <br></br>Need more
                proof?
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
                src="https://64.media.tumblr.com/cd6ef78e2efecaf3ae72f67083967d02/tumblr_mr3ys7Ylan1s5jjtzo1_r1_1280.png"
                alt="Descriptive Alt Text"
                className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto h-auto object-contain"
              />
            </div>

            <div className="my-auto">
              <h2 className="text-3xl text-gray-800 font-bold mb-4">
                Empower Your Smile!
              </h2>
              <p className="text-lg text-gray-500">
                Beyond color, our lipstick boosts lip volume, empowering your
                smile with every wear. Feel the luxury, embrace the confidence.
              </p>
              {/* Feature Description */}
              {/* ... */}
            </div>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-12">
            <div className="my-auto">
              <h2 className="text-3xl text-gray-800 font-bold mb-4">
                Unveil the Magic of Fullness!{" "}
              </h2>
              <p className="text-lg text-gray-500">
                Discover the secret to fuller lips. Our luxurious formula offers
                a harmonious blend of color and growth, unveiling a fuller, more
                enchanting you.
              </p>
              {/* Feature Description */}
              {/* ... */}
            </div>
            <div className="w-full h-full flex justify-center items-center">
              <img
                src="https://www.pngarts.com/files/3/Lipstick-Transparent-Images-1.png"
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
