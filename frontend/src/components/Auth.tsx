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
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <div>
          <div className="text-3xl font-extrabold mt-4">create an account</div>

          <div className="text-slate-400">
            Already have an account?
            <Link className="pl-2 underline" to={"/signin"}>
              Login
            </Link>
          </div>
        </div>
        <LabelledInput
          label="Name"
          placeholder="Ashish BK"
          onChange={function (e) {
            setpostvalue(...postInput);
            name: e.target.value;
          }}
        ></LabelledInput>

        <LabelledInput
          label="Name"
          placeholder="Ashish BK"
          onChange={function (e) {
            setpostvalue(...postInput);
            name: e.target.value;
          }}
        ></LabelledInput>

        <LabelledInput
          label="Name"
          placeholder="Ashish BK"
          onChange={function (e) {
            setpostvalue(...postInput);
            name: e.target.value;
          }}
        ></LabelledInput>
      </div>
    </div>
  );
}

interface LablledinputType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function LabelledInput({
  label,
  placeholder,
  onChange,
}: LablledinputType) {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {label}
      </label>
      <input
        onChange={onChange}
        type="text"
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        required
      />
    </div>
  );
}
