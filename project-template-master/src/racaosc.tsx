import React, { useState } from "react";

const MainPage: React.FC = () => {
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
  });

  const handleLogout = () => {
    setProfile({ name: "", email: "" });
  };

  return (
    <div className="flex flex-col w-full h-full p-4">
      <p className="text-lg font-medium">Welcome {profile.name}!</p>
      <p className="text-base font-light">You are signed in.</p>
      <div className="mt-4">
        <p className="text-lg font-medium">Your Profile</p>
        <p className="text-base font-light">Name: {profile.name}</p>
        <p className="text-base font-light">Email: {profile.email}</p>
      </div>
      <button className="bg-red-500 text-white mt-4 p-2 rounded" onClick={handleLogout}>
        Log Out
      </button>
    </div>
  );
};

export default MainPage;
