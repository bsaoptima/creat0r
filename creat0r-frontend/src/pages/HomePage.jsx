import React from "react";

const HomePage = () => {

  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-y-10 h-screen p-20">
        <p className="text-5xl font-trip font-extrabold">Manage all your accounts on a single platform</p>
        <button className="">
          <a href="/accounts">
            <p className="font-trip font-semibold">Get Started</p>
          </a>
        </button>
      </div>
    </div>
  );
};

export default HomePage;