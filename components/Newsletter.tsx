// components/Footer.tsx
import React, { useEffect, useState } from "react";

const Tabs2 = () => {
  // State for email and form submission status
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState("");

  // Email validation function
  const validateEmail = (email: string): boolean => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,4}\.[0-9]{1,4}\.[0-9]{1,4}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  // Function to handle form submission
  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate the email
    if (!validateEmail(email)) {
      setSubmissionMessage("Please enter a valid email address.");
      setIsSubmitting(false);
      return;
    }

    // Replace with your Mailchimp endpoint URL
    const mailchimpUrl =
      "https://gmail.us21.list-manage.com/subscribe/post?u=9dd6e5e765648fc0d316526e4&id=34de74599f";
    const data = new FormData();
    data.append("EMAIL", email);

    try {
      await fetch(
        "https://gmail.us21.list-manage.com/subscribe/post?u=9dd6e5e765648fc0d316526e4&id=34de74599f",
        {
          method: "POST",
          body: data,
          mode: "no-cors",
        }
      );
      setSubmissionMessage("Thank you for subscribing!");
    } catch (error) {
      setSubmissionMessage("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  const currentYear = new Date().getFullYear();
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const eventCountDown = new Date("July 17, 2024 00:00:00").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const timeleft = eventCountDown - now;

      const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

      if (timeleft < 0) {
        clearInterval(interval);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setCountdown({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="flex flex-col justify-center items-center relative rounded-lg w-full min-h-screen"
      id="home"
    >
      <div className="w-full">
        <img
          className="absolute inset-0 h-full w-full object-cover bg-cover bg-bottom"
          src="https://cdn.discordapp.com/attachments/1204955047516184587/1224128887324414043/DALLE_2024-03-31_18.50.57_-_A_luxurious_scene_depicting_wealth_and_opulence_without_showing_any_faces._The_setting_should_be_an_extravagant_room_filled_with_symbols_of_wealth_l.webp?ex=661c5ddd&is=6609e8dd&hm=2c1e0d70411c3a0be5917340fed97a5019f277f6b171c868a86d18824eb374e7&"
          alt="build your website image"
        />
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-white-950 to-white-900 opacity-40"></div>
      </div>

      <div className="container mx-auto px-4 text-center">
        <div className="relative py-4 sm:py-6 lg:py-9">
          <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold">
            Coming Soon
          </h3>
          <a href="#" className="flex justify-center mx-auto mb-12">
            <img
              src="https://cdn.discordapp.com/attachments/1204955047516184587/1224127931521961984/Grey_Money_Pattern_Motivational_Quotes_Instagram_Post_1.png?ex=661c5cfa&is=6609e7fa&hm=31d1049b5f5ba0ed31e028c87b82b5c28aa1b22eaa5619b6ea682038aeaf2419&"
              alt="logo"
              className="h-12"
            />
          </a>

          {/* Countdown Timer Placeholder */}
          {/* Countdown Timer */}
          <div className="my-10 text-white z-30">
            <div className="flex flex-wrap items-center justify-center">
              <div className="h-40 w-44 flex items-center justify-center after:ps-5 md:after:ps-12 after:text-2xl after:text-gray-300 after:font-extrabold">
                <div className="text-center">
                  <span className="text-3xl md:text-6xl">{countdown.days}</span>
                  <p className="mt-2">days</p>
                </div>
              </div>

              <div className="h-40 w-44 flex items-center justify-center after:ps-5 md:after:ps-12 after:text-2xl after:text-gray-300 after:font-extrabold">
                <div className="text-center">
                  <span className="text-3xl md:text-6xl">
                    {countdown.hours}
                  </span>
                  <p className="mt-2 ">Hours</p>
                </div>
              </div>

              <div className="h-40 w-44 flex items-center justify-center after:ps-5 md:after:ps-12 after:text-2xl after:text-gray-300 after:font-extrabold">
                <div className="text-center">
                  <span className="text-3xl md:text-6xl">
                    {countdown.minutes}
                  </span>
                  <p className="mt-2 ">Minutes</p>
                </div>
              </div>

              <div className="h-40 w-44 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-3xl md:text-6xl">
                    {countdown.seconds}
                  </span>
                  <p className="mt-2 ">Seconds</p>
                </div>
              </div>
            </div>
          </div>

          {/* Subscription Form */}
          <div className="mt-5 md:mt-8 lg:mt-10">
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white">
              Subscribe to get notified!
            </h3>
            <form
              onSubmit={handleSubmit}
              className="w-full flex flex-col sm:flex-row items-center justify-center mt-4 sm:mt-6"
            >
              <div className="border rounded-md border-white-500 shadow-lg">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="sm:w-96 p-4 border-0 focus:outline-none focus:ring-0 text-sm bg-transparent text-white"
                  placeholder="Enter Your Email"
                  autoComplete="off"
                />
                <button
                  type="submit"
                  className="py-2 px-6 me-2 border-0 text-white font-semibold text-sm rounded-md bg-red-800 hover:bg-neutral-900 transition-all duration-500 shadow-md"
                >
                  <div className="flex items-center justify-center gap-1">
                    <p>Submit</p>
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </button>
              </div>
            </form>
            {/* Display Submission Message */}
            {submissionMessage && (
              <div className="text-center mt-4 text-1xl sm:text-2xl md:text-3xl lg:text-4xl ">
                <span
                  className={
                    isSubmitting ? "text-white" : "text-white test-bold"
                  }
                >
                  {submissionMessage}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Wave Animation */}
      <div className="absolute inset-x-0 bottom-0 m-auto h-32 overflow-hidden wave-anim">
        <div className="absolute bottom-0 w-full h-full overflow-hidden z-30 opacity-30">
          <div
            className="wave wave-one"
            style={{
              backgroundImage: "url('assets/images/wave-shape/wave2.png')",
            }}
          ></div>
        </div>
        <div className="absolute bottom-0 w-full h-full overflow-hidden z-20 opacity-40">
          <div
            className="wave wave-two"
            style={{
              backgroundImage: "url('assets/images/wave-shape/wave2.png')",
            }}
          ></div>
        </div>
        <div className="absolute bottom-0 w-full h-full overflow-hidden z-10 opacity-50">
          <div
            className="wave wave-three"
            style={{
              backgroundImage: "url('assets/images/wave-shape/wave3.png')",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Tabs2;
