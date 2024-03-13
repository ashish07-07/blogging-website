import { Appbar } from "../components/Appbar";

export function Publish() {
  return (
    <div>
      <Appbar></Appbar>
      <div className="flex justify-center w-full">
        <div className="max-w-screen-lg w-full">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            emial
          </label>
          <input
            type="text"
            className=" w-full bg-grey-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Title"
          ></input>
        </div>
      </div>
    </div>
  );
}
