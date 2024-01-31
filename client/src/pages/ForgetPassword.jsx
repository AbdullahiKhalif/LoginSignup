import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useForgetPasswprdMutation } from "../Features/api/authApiSlice";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const [forgetPasswprd] = useForgetPasswprdMutation();



  const handleForgetPassword = async(event) => {
    event.preventDefault();
    const { error, data } = await forgetPasswprd({ email });
    if (!error) {
      navigate('/login');
    alert("Success✅ Check Your Email To Remember");
    
    } else {
    //   toast.error(error.data);
      alert(error.data);
      
    }
  };
  return (
    <div className="fixed top-0 h-full left-0 right-0 bg-[#F3F4F6]">
      <div className="flex justify-center items-center px-8 py-32 lg:py-16">
        <div className="bg-white shadow-lg rounded-lg w-96 h-auto p-10">
          <form onSubmit={handleForgetPassword}>
            <div className="m-2">
              <p>
                To reset your password, submit your username or your email
                address below. If we can find you in the database, an email will
                be sent to your email address, with instructions how to get
                access again.
              </p>
            </div>
            <div className="form-group py-4">
              <label htmlFor="" className="font-bold">
                Search by email address <span className="text-gray-500">*</span>
              </label>

              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                name="email"
                placeholder="Enter Email"
                className="w-full bg-white shadow p-3 rounded-md outline-none mt-2 focus:bg-slate-100"
              />
            </div>

            <div className="form-group mt-6">
              <button
                type="submit"
                className="bg-green-900 w-full p-3 rounded-md text-center text-white hover:bg-green-800"
              >
                Submit
              </button>
            </div>
          </form>
          <div className="flex flex-col items-center mt-4"></div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
