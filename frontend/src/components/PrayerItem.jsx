import { useDispatch } from "react-redux";
import { deletePrayer } from "../features/prayers/prayerSlice";

function PrayerItem({ prayer }) {
  const dispatch = useDispatch();

  return (
    <div className="">
      <div>{new Date(prayer.createdAt).toLocaleString("en-US")}</div>
      <h2>{prayer.text}</h2>
      <button onClick={() => dispatch(deletePrayer(prayer._id))} className="">
        X
      </button>
    </div>
  );
}

export default PrayerItem;
