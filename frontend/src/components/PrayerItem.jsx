import { useDispatch } from "react-redux";
import { deletePrayer } from "../features/prayers/prayerSlice";

function PrayerItem({ prayer }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center mb-4 max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-md">
      <span className="flex-1">
        <div>{new Date(prayer.createdAt).toLocaleString("en-US")}</div>
        <h2 className="text-2xl font-bold">{prayer.text}</h2>
      </span>
      <button
        onClick={() => dispatch(deletePrayer(prayer._id))}
        className="text-red-500"
      >
        X
      </button>
    </div>
  );
}

export default PrayerItem;
