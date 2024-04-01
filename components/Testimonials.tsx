import React from "react";

const Experience: React.FC = () => {
  const toggleDropdown = (buttonElement: any) => {
    const dropdownContent = buttonElement.currentTarget.nextElementSibling;
    dropdownContent.style.display =
      dropdownContent.style.display === "block" ? "none" : "block";
  };

  return (
    <section className="justify-center items-center bg-stone-50 flex flex-col px-5">
      <div className="flex w-full max-w-[1200px] flex-col items-stretch mt-32 mb-24 max-md:max-w-full max-md:my-10">
        <h1 className="text-slate-950 text-4xl font-semibold leading-[56px] max-md:max-w-full">
          Customer Reviews
        </h1>
        <div className="mt-16 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[56%] max-md:w-full max-md:ml-0">
              <div className="items-start flex grow flex-col max-md:max-w-full max-md:mt-10">
                <div className="items-stretch flex w-[143px] max-w-full gap-2 self-start">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/798e9f86-598d-457f-9924-bb19e4962728?apiKey=796642a8b3144216a1ed2f8fd952e556&"
                    className="aspect-square object-contain object-center w-8 overflow-hidden shrink-0 max-w-full"
                    alt="Profile Picture"
                  />
                  <div className="text-slate-950 text-2xl font-semibold leading-6 self-center grow whitespace-nowrap my-auto">
                    smushsi
                  </div>
                </div>
                <div className="self-stretch text-slate-950 text-3xl italic font-medium leading-10 tracking-wide mt-12 max-md:max-w-full max-md:mt-10">
                  “We have choosed epiSolve against competitors based on the
                  Customers reviews. After 9 months of using their software we
                  have never regreted. Right now we are more effective in
                  communication and managing the customer flows.”
                </div>
                <div className="items-stretch flex w-[390px] max-w-full gap-2 mt-6 self-start">
                  <div className="text-slate-950 text-center text-lg font-medium leading-7">
                    Laura Klamrs,
                  </div>
                  <div className="text-slate-950 text-opacity-50 text-center text-lg font-medium leading-7 whitespace-nowrap">
                    Marketing Manager @Firehose
                  </div>
                </div>
                <a
                  href="#"
                  className="text-slate-950 text-sm font-semibold leading-5 whitespace-nowrap justify-center items-center border-[color:var(--background-c-6,rgba(7,16,25,0.10))] w-[193px] max-w-full mt-12 px-5 py-2 rounded-lg border-2 border-solid self-start max-md:mt-10"
                >
                  Read Customer Story
                </a>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[44%] ml-5 max-md:w-full max-md:ml-0">
              <div className="justify-center items-stretch self-stretch bg-slate-950 bg-opacity-10 flex grow flex-col w-full mx-auto rounded-lg max-md:max-w-full max-md:mt-10">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/027ae0cf-1d97-43cb-9bd3-3c7029daa886?apiKey=796642a8b3144216a1ed2f8fd952e556&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/027ae0cf-1d97-43cb-9bd3-3c7029daa886?apiKey=796642a8b3144216a1ed2f8fd952e556&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/027ae0cf-1d97-43cb-9bd3-3c7029daa886?apiKey=796642a8b3144216a1ed2f8fd952e556&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/027ae0cf-1d97-43cb-9bd3-3c7029daa886?apiKey=796642a8b3144216a1ed2f8fd952e556&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/027ae0cf-1d97-43cb-9bd3-3c7029daa886?apiKey=796642a8b3144216a1ed2f8fd952e556&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/027ae0cf-1d97-43cb-9bd3-3c7029daa886?apiKey=796642a8b3144216a1ed2f8fd952e556&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/027ae0cf-1d97-43cb-9bd3-3c7029daa886?apiKey=796642a8b3144216a1ed2f8fd952e556&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/027ae0cf-1d97-43cb-9bd3-3c7029daa886?apiKey=796642a8b3144216a1ed2f8fd952e556&"
                  className="aspect-[0.92] object-contain object-center w-full overflow-hidden max-md:max-w-full"
                  alt="Product Image"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="justify-between items-center flex w-full gap-5 mt-16 pl-20 py-2 max-md:max-w-full max-md:flex-wrap max-md:mt-10 max-md:pl-5">
          <div className="items-stretch flex gap-4 my-auto">
            <div className="bg-slate-950 bg-opacity-10 w-12 shrink-0 h-0.5" />
            <div className="bg-slate-950 bg-opacity-10 w-12 shrink-0 h-0.5" />
          </div>
          <div className="items-stretch self-stretch flex justify-between gap-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a798b7e3-560a-442f-934d-03413039fe92?apiKey=796642a8b3144216a1ed2f8fd952e556&"
              className="aspect-square object-contain object-center w-6 justify-center items-center overflow-hidden shrink-0 max-w-full"
              alt="Social Media Icon"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3192266b-6ed2-418d-84e5-692b27f3fed8?apiKey=796642a8b3144216a1ed2f8fd952e556&"
              className="aspect-square object-contain object-center w-6 justify-center items-center overflow-hidden shrink-0 max-w-full"
              alt="Social Media Icon"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
