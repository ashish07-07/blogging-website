import { Link } from "react-router-dom";
import React, { ChangeEvent, useState } from "react"; // Added import for useState
import { Signupinput } from "mediumhelpertools";

export function Auth({ type }: { type: "signup" | "signin" }) {
  const [postInput, setpostvalue] = useState<Signupinput>({
    name: "",
    email: "",
    password: "",
  });
  return (
    <div className="h-screen flex justify-center flex-col bg-white">
      <div className="flex justify-center">
        <div>
          <div className={"px-10"}>
            <div className="text-3xl font-extrabold mt-4  text-black">
              create an account
            </div>

            <div className="text-slate-500">
              {type === "signin"
                ? "Dont have an account"
                : "Already have an account?"}
              <Link
                className="pl-2 underline"
                to={type === "signin" ? "/signup" : "/signin"}
              >
                {type === "signin" ? "signup" : "signin"}
              </Link>
            </div>
          </div>

          <div className={"pt-4"}>
            <LabelledInput
              label="Name"
              placeholder="Ashish BK"
              onChange={function (e) {
                setpostvalue(...postInput);
                name: e.target.value;
              }}
            ></LabelledInput>

            <LabelledInput
              label="email"
              placeholder="bkashishh07@gmail.com"
              onChange={function (e) {
                setpostvalue(...postInput);
                email: e.target.value;
              }}
            ></LabelledInput>

            <LabelledInput
              label="password"
              type={"password"}
              placeholder="password@123"
              onChange={function (e) {
                setpostvalue(...postInput);
                password: e.target.value;
              }}
            ></LabelledInput>

            <button
              type="button"
              className=" w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 pt-4 "
            >
              {type === "signup" ? "signup" : "signin"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

interface LablledinputType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

export function LabelledInput({
  label,
  placeholder,
  onChange,
  type,
}: LablledinputType) {
  return (
    <div>
      <label className="block mb-2 text-sm  text-black font-semibold ">
        {label}
      </label>
      <input
        onChange={onChange}
        type={type || "text"}
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder={placeholder}
        required
      />
    </div>
  );
}