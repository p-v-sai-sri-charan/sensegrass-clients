import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { Toast } from 'primereact/toast';
import { useDispatch } from 'react-redux';
import { login } from '../features/user/userSlice';
import axiosInstance from '../utils/axiosInstance';
import Cookies from 'js-cookie';

        

function Login() {
    const [phone, setPhone] = useState("");
    const [otp, setOtp] = useState(["", "", "", ""]);
    const otpInputRefs = useRef([]);
    const toast = useRef(null);
    const [hasError, setHasError] = useState(false);
    const [enterOtp, setEnterOtp] = useState(false);
    const [resOtp, setResOtp] = useState("");
    const navigate = useNavigate();
  
    const dispatch = useDispatch();
  
    const handlePhoneChange = (e) => {
      const { value } = e.target;
      const numericValue = value.replace(/\D/g, ""); // Remove non-numeric characters
  
      setPhone(numericValue);
      setHasError(numericValue.length !== 10);
    };
  
    const handleOtpChange = (
      e,
      index
    ) => {
      const { value } = e.target;
      if (/^\d*$/.test(value)) {
        setOtp((prevOtp) => {
          const newOtp = [...prevOtp];
          newOtp[index] = value;
          return newOtp;
        });
  
        if (value !== "" && index < otpInputRefs.current.length - 1) {
          otpInputRefs.current[index + 1].focus();
        }
      }
    };
  
    const handleKeyDown = (
      e,
      index
    ) => {
      if (e.key === "Backspace") {
        if (otp[index] === "" && index > 0) {
          otpInputRefs.current[index - 1].focus();
        }
      }
    };
  
    const onSignup = async (e) => {
      e.preventDefault();
      await axiosInstance
        .post("/api/v1/auth/login", {
          phone: phone,
          otp: otp.join(""),
        })
        .then((response) => {
          dispatch(login(response.data.data));
          console.log(response.data.data);
          Cookies.set("token", response.data.data.token);

          toast.current.show({severity:'success', summary: 'Success', detail:'Login Successful', life: 3000});
          navigate("/");
        })
        .catch((error) => {
          toast.current.show({severity:'error', summary: 'Login Failed', detail:error.message, life: 3000});
        });
    };
  
    const onSendOtp = async (e) => {
      e.preventDefault();
      await axiosInstance
        .post("/api/v1/auth/requestotp", {
          phone: phone,
        })
        .then((response) => {
          toast.current.show({severity:'success', summary: 'OTP sent', detail:'OTP sent to your mobile number', life: 3000});
          setResOtp(response.data.otp);
          setEnterOtp(true);
        })
        .catch((error) => {
          console.log(error);
          toast.current.show({severity:'error', summary: 'Otp sending Failed', detail:error.message, life: 3000});
        });
    };
  
    return (
      <div className="flex flex-wrap w-full">
        <Toast ref={toast} />
        <div className="flex flex-col w-full md:w-1/2">
          <div className="flex justify-center pt-12 md:justify-start md:pl-12 md:-mb-24">
            <img src="https://sensegrass.com/images/path0-copy-min-p-500.png" alt="logo" className="w-16 h-16" />
          </div>
          <div className="flex flex-col justify-center px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32">
            {!enterOtp && <p className="text-3xl text-center">Welcome.</p>}
            <div className="flex flex-col pt-3 md:pt-8 gap-4">
              {!enterOtp && (
                <>
                  <div className="flex flex-col pt-4">
                    <div className="flex relative ">
                      <span className=" inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                        <i className="pi pi-phone" />
                      </span>
                      <input
                        type="text"
                        id="design-login-phone"
                        className=" flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        placeholder="Enter your phone number"
                        value={phone}
                        onChange={handlePhoneChange}
                        maxLength={10}
                        aria-label="Please enter your Phone number"
                      />
                    </div>
                    {hasError && (
                      <p className="pl-9 pt-4">
                        Please enter a 10-digit phone number.
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-black shadow-md hover:text-black hover:bg-white focus:outline-none focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={onSendOtp}
                    disabled={hasError || phone.length !== 10}
                  >
                    <span className="w-full">Submit</span>
                  </button>
                </>
              )}
              {enterOtp && (
                <>
                  <div className="flex flex-col pt-4 justify-center items-center">
                    <div>
                      <p className="text-2xl text-center pb-4">Enter OTP as {resOtp}</p>
                    </div>
                    <div className="space-x-4">
                      {Array.from({ length: 4 }, (_, index) => (
                        <input
                          key={index}
                          type="text"
                          className="w-12 h-12 text-center border border-gray-300 rounded focus:outline-none focus:ring focus:ring-purple-600"
                          maxLength={1}
                          value={otp[index]}
                          onChange={(e) => handleOtpChange(e, index)}
                          onKeyDown={(e) => handleKeyDown(e, index)}
                          ref={(ref) => (otpInputRefs.current[index] = ref)}
                          autoFocus={index === 0}
                          aria-label="Please enter otp sent to your phone number"
                        />
                      ))}
                    </div>
                  </div>
  
                  <button
                    type="submit"
                    className="w-full px-4 py-2 text-base font-semibold text-center text-white transition duration-200 ease-in bg-black shadow-md hover:text-black hover:bg-white focus:outline-none focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={onSignup}
                    disabled={otp.some((value) => value === "")}
                  >
                    <span className="w-full">Submit</span>
                  </button>
                </>
              )}
            </div>
            <div className="pt-12 pb-12 text-center">
              <p>
              <Link to="/"> Wanna go home ? <span>Click me... !!!</span></Link>
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2 shadow-2xl">
          <img
            className="hidden object-cover w-full h-screen md:block"
            src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/04/05/19/pp-soil-rf-gettyc.jpg"
            alt="loginbg"
          />
        </div>
      </div>
    );
  }

export default Login