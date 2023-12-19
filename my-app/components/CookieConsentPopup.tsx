import React, { useState, useEffect } from "react";

declare function gtag(command: string, ...args: any[]): void;

const CookieConsentPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (consent === null) {
      setShowPopup(true);
    } else if (consent === "accepted") {
      initGoogleAnalytics();
    }
  }, []);

  const initGoogleAnalytics = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(["js", new Date()]);
    window.dataLayer.push(["config", "UA-253480078-1"]);
  };

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    initGoogleAnalytics();
    setShowPopup(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setShowPopup(false);
  };

  if (!showPopup) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 mx-4 md:mx-auto md:max-w-2xl p-6">
      <div className="p-6 bg-gray-100 border border-gray-300 rounded-xl shadow-lg dark:bg-gray-900 dark:border-gray-800">
        <div className="grid md:flex md:items-center gap-y-4 md:gap-y-0 md:gap-x-6">
          <div className="md:max-w-md">
            <h2 className="text-lg text-gray-800 dark:text-white">
              <span className="font-semibold">We use cookies</span> to analyze
              our traffic and create a smooth user experience.
            </h2>
          </div>
          <div className="flex gap-x-4">
            <button
              type="button"
              onClick={handleReject}
              className="py-2 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-gray-300 text-gray-800 shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all text-md dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
            >
              Reject
            </button>
            <button
              type="button"
              onClick={handleAccept}
              className="py-2 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-black text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition-all text-md dark:focus:ring-gray-700"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsentPopup;
