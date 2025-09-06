import React, { useState } from "react";
import "./App.css"; // put your styles here

const App = () => {
  const [message, setMessage] = useState(
    "Your well-being is our priority. Access support and resources tailored for you."
  );

  const handleScheduleClick = () => {
    setMessage("Great! We'll find a counselor for you. Check your inbox for confirmation.");
  };

  const handleHelplineClick = () => {
    setMessage("Remember, immediate support is available 24/7. You are not alone.");
  };

  return (
    <div className="relative flex size-full min-h-screen flex-col overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        {/* HEADER */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[var(--c-secondary)] px-6 sm:px-10 py-4">
          <div className="flex items-center gap-3">
            <div className="size-6 text-[var(--c-primary)]">
              <svg
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2C6.48 2 2 6.48..."></path>
              </svg>
            </div>
            <h1 className="text-xl font-bold">Wellness Hub</h1>
          </div>
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center justify-around gap-6 text-sm font-medium text-[var(--c-text)]">
              <a className="hover:text-[var(--c-primary)]" href="#">
                Home
              </a>
              <a className="hover:text-[var(--c-primary)]" href="#">
                Services
              </a>
              <a className="hover:text-[var(--c-primary)]" href="#">
                Resources
              </a>
              <a className="hover:text-[var(--c-primary)]" href="#">
                About
              </a>
            </nav>
            <button className="md:hidden">
              <span className="material-symbols-outlined">menu</span>
            </button>
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
              style={{
                backgroundImage:
                  "url('https://placehold.co/40x40/007bff/fff?text=S')",
              }}
            />
          </div>
        </header>

        {/* MAIN */}
        <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 text-center">
          <div className="max-w-2xl w-full">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--c-text)]">
              Welcome, Sarah
            </h2>
            <p className="mt-4 text-lg text-[var(--c-text)]/80">{message}</p>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-lg mx-auto">
              {/* Schedule */}
              <div className="bg-[var(--c-card-bg)] border border-[var(--c-secondary)] rounded-2xl p-8 flex flex-col items-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-[var(--c-primary-light)] p-4 rounded-full mb-4">
                  <span className="material-symbols-outlined text-4xl text-[var(--c-primary)]">
                    event_available
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">Schedule an Appointment</h3>
                <p className="text-[var(--c-text)]/70 mb-6">
                  Book a confidential session with one of our counselors.
                </p>
                <button
                  onClick={handleScheduleClick}
                  className="w-full rounded-full h-12 px-6 bg-[var(--c-primary)] text-white font-bold hover:opacity-90"
                >
                  Schedule Now
                </button>
              </div>

              {/* Helpline */}
              <div className="bg-[var(--c-card-bg)] border border-[var(--c-secondary)] rounded-2xl p-8 flex flex-col items-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-[var(--c-secondary-light)] p-4 rounded-full mb-4">
                  <span className="material-symbols-outlined text-4xl text-[var(--c-text)]">
                    support_agent
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">Access Helpline</h3>
                <p className="text-[var(--c-text)]/70 mb-6">
                  Immediate support is available 24/7. You are not alone.
                </p>
                <button
                  onClick={handleHelplineClick}
                  className="w-full rounded-full h-12 px-6 bg-[var(--c-secondary)] text-[var(--c-text)] font-bold hover:bg-opacity-80"
                >
                  Call Helpline
                </button>
              </div>
            </div>
          </div>
        </main>

        {/* FOOTER */}
        <footer className="text-center py-6 text-sm text-[var(--c-text)]/60 border-t border-[var(--c-secondary)]">
          <p>© 2024 University Wellness Hub. All Rights Reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
