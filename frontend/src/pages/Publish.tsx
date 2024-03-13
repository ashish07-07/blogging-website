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
            className="w-full bg-grey-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Title"
          ></input>

          <TextBox></TextBox>
        </div>
      </div>
    </div>
  );
}

function TextBox() {
  return (
    <form>
      <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 ">
        <div className="flex items-center justify-between px-3 py-2 border-b dark:border-gray-600">
          <div className="px-4 py-2 bg-white rounded-b-lg w-full">
            <label htmlFor="editor" className="sr-only">
              Publish post
            </label>
            <textarea
              id="editor"
              rows={5} // Adjust the number of rows for a smaller height
              className=" focus-outline-none block w-full px-0 py-1 text-sm text-black-800 bg-transparent border-0 dark:text-black dark:placeholder-gray-400"
              placeholder="Write an article..."
              required
            />
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800 pt-3 ml-2"
      >
        Publish post
      </button>
    </form>
  );
}
