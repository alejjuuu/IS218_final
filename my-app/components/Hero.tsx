import React, { useState, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";

const Welcome: React.FC = () => {
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);

  return (
    <section
      className="relative overflow-hidden py-28 px-4 bg-gray-900 md:px-8"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1489278353717-f64c6ee8a4d2?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-xl mx-auto text-center relative">
        {/* ... Your existing content ... */}
        <div className="py-4">
          <h3 className="bg-opacity-50 rounded-lg text-5xl text-white font-bold md:text-6xl p-4">
            Clinically Tested Make Up for Your Skin!
          </h3>
          <p className="text-2xl text-white leading-relaxed mt-3">
            Rejuvenate the way you look <br></br>with our clinically tested make
            up
          </p>
        </div>
        <div className="mt-5 items-center justify-center gap-3 sm:flex">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="py-4 px-10 bg-red-500 text-white text-4xl font-semibold rounded-lg shadow-md hover:bg-red-700"
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
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  {/* Modal content */}
                  <div className="mt-3 text-center sm:mt-0 sm:text-left">
                    <Dialog.Title
                      as="h3"
                      className="text-lg leading-6 font-medium text-gray-900"
                    >
                      Modal Title
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Your modal content goes here...
                      </p>
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
