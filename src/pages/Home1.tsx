import { useEffect, useState } from "react";
import AdNavigator from "../components/AdNavigator";
import Content from "../components/Content";
import getAdStatusFromServer from "../utils/getAdStatusFromServer";
import initAdStatus from "../utils/initAdStatus";

const Home1 = () => {
  const [adWatched, setAdWatched] = useState(false);

  const navigateToAd = () => {
    window.open("/ad", "_blank", "rel=noopener noreferrer");
  };

  useEffect(() => {
    initAdStatus();
    fetchAdStatus();
  }, []);

  useEffect(() => {
    window.addEventListener("focus", fetchAdStatus);
    return () => {
      document.removeEventListener("focus", fetchAdStatus);
    };
  }, []);

  const fetchAdStatus = async () => {
    if (adWatched) return;
    const res = await getAdStatusFromServer();

    if (res.watched) {
      setAdWatched(() => true);
    }
  };

  return (
    <main>
      <Content />
      <AdNavigator watched={adWatched} onClick={navigateToAd} />
    </main>
  );
};

export default Home1;
