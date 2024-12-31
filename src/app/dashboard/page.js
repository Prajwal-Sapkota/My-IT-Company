"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    
    if(userData){
      setUser(JSON.parse(userData));

      
    }else{
      setUser(null);
    }
    
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("user");

    router.push("/login");
  }

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 text-center">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Please log in to access the dashboard.</h2>
          <button
            onClick={() => router.push ("/login")} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mt-4">
              Go to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-4">
          Welcome, {user.name}!
        </h1>
        <div className="space-y-4">
          <p className="text-lg text-gray-700">
            <strong>Email:</strong> {user.email}
          </p>
          <p className="text-lg text-gray-700">
            <strong>Phone:</strong> {user.phone}
          </p>
          <p className="text-lg text-gray-700">
            <strong>Date of Birth:</strong> {user.dob}
          </p>
          <p className="text-lg text-gray-700">
            <strong>Gender:</strong> {user.gender}
          </p>
        </div>
        < button onClick={handleLogout}  className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 mt-6">
            Log Out
        
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
