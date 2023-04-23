import { useState } from "react";
import { useDispatch } from "react-redux";
import { createPrayer } from "../features/prayers/prayerSlice";

function PrayerForm() {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(createPrayer({ text }));
    setText("");
  };

  return (
    <form className="w-full max-w-lg mx-auto" onSubmit={onSubmit}>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-text-1"
          >
            Your prayer:
          </label>
          <input
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="text"
            placeholder="Type your prayer here..."
            name="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default PrayerForm;
