import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import PrayerForm from "../components/PrayerForm";
import PrayerItem from "../components/PrayerItem";
import Spinner from "../components/Spinner";
import { getPrayers } from "../features/prayers/prayerSlice";
import { reset } from "../features/auth/authSlice";
import SearchFriend from "../components/SeachFriend";

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { prayers, isLoading, isError, message } = useSelector(
    (state) => state.prayer
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }

    dispatch(getPrayers());

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section className="heading">
        <h1>Welcome {user && user.name}</h1>
        <p>Prayers Dashboard</p>
      </section>

      <PrayerForm />

      <section className="max-w-lg mx-auto">
        {prayers.length > 0 ? (
          <div className="">
            {prayers.map((prayer) => (
              <PrayerItem key={prayer._id} prayer={prayer} />
            ))}
          </div>
        ) : (
          <h3>You have not created any prayers yet!</h3>
        )}
      </section>

      <SearchFriend />
    </>
  );
}
export default Dashboard;
