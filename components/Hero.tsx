import React, { useState, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";

const Welcome: React.FC = () => {
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);

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
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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

  return (
    <section
      className="hero-image relative overflow-hidden py-12 sm:py-20 md:py-28 px-4 bg-gray-900 md:px-8 lg:px-12"
      style={{
        backgroundImage: `url('https://cdn.discordapp.com/attachments/1204955047516184587/1224120593725526076/Colorful_Earth_Day_Money_Printable_3.png?ex=661c5624&is=6609e124&hm=16fb243c268de2c209baf63902761a11a20f2cbf601ba149b1193caf21d43ba5&')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.9,
      }}
    >
      <div className="max-w-md sm:max-w-lg md:max-w-xl mx-auto text-center relative">
        {/* ... Your existing content ... */}
        <div className="py-4">
          <h3 className="bg-opacity-50 rounded-lg text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black font-bold p-4">
            TrumpCoin For The People
          </h3>
          <p className="text-lg sm:text-xl md:text-2xl text-black leading-relaxed mt-3">
            We will give back to the community to{" "}
            <br className="hidden md:block" />
            help those in need.{" "}
          </p>
        </div>
        <div className="mt-5 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="py-2 sm:py-4 px-4 sm:px-10 bg-yellow-500 text-black text-lg sm:text-4xl font-semibold rounded-lg shadow-md hover:bg-red-700 transition duration-300"
          >
            Get a Free Example
          </button>
        </div>
      </div>

      {/* Modal */}
      <Transition.Root show={open} as={React.Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={() => setOpen(false)}
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75" />
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 text-center">
                  <a href="" aria-label="Main website page">
                    <img
                      src="https://cdn.discordapp.com/attachments/1171568516235804802/1181718906004590723/foreveryou.png?ex=6582147e&is=656f9f7e&hm=1da73adcd85048e8d399a33f9b8cd13b14129a924f21a0cbe4a4344db804dea5&"
                      width={120}
                      height={50}
                      alt="Website logo"
                    />
                  </a>
                  {/* Modal content */}
                  <div className="mt-3 text-center sm:mt-0 sm:text-left">
                    <Dialog.Title
                      as="h3"
                      className="text-3xl leading-6 font-medium text-gray-900"
                    >
                      Subscribe to our newsletter<br></br>
                    </Dialog.Title>
                    <div className="mt-2">
                      <form
                        onSubmit={handleSubmit}
                        className="w-full flex items-center justify-center mt-7 "
                      >
                        <div className="border rounded-md border-neutral-500 shadow-lg">
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="sm:w-96 p-4 border-0 focus:outline-none focus:ring-0 text-sm bg-transparent"
                            placeholder="Enter Your Email"
                            autoComplete="off"
                          />
                          <button
                            type="submit"
                            className="py-2 px-6 me-2 border-0 text-white font-semibold text-sm rounded-md bg-neutral-800/60 hover:bg-neutral-800 transition-all duration-500"
                          >
                            <div className="flex items-center justify-center gap-1">
                              <p>Submit</p>
                              <i className="fa-solid fa-arrow-right"></i>
                            </div>
                          </button>
                        </div>
                      </form>
                      {submissionMessage && (
                        <div className="text-center mt-4 text-3xl">
                          <span
                            className={
                              isSubmitting
                                ? "text-yellow-500"
                                : "text-white-500 test-bold"
                            }
                          >
                            {submissionMessage}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none sm:mt-0 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </section>
  );
};

export default Welcome;
