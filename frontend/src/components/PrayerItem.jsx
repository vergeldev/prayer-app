import { useDispatch } from "react-redux";
import { deletePrayer } from "../features/prayers/prayerSlice";
import { FaTrash } from "react-icons/fa";

function PrayerItem({ prayer }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center mb-4 max-w-md mx-auto bg-white rounded-lg border-2 p-4">
      <span className="flex-1 ">
        <p className="text-xl font-bold test whitespace-wrap">{prayer.text}</p>
        <div className="text-xs text-gray-400 mt-4">
          {new Date(prayer.createdAt).toLocaleString("en-US")}
        </div>
      </span>
      <button
        onClick={() => dispatch(deletePrayer(prayer._id))}
        className="text-red-500"
      >
        <FaTrash />
      </button>
    </div>
  );
}

export default PrayerItem;
