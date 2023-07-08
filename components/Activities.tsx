import { useEffect, useState } from "react";
import { fetchData } from "../api";
import Image from "next/image";

const Activities = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData();

      setActivities(data);
    };
    getData();
  }, []);

  return (
    <section id="activities" className="flex flex-wrap max-w-7xl p-6">
      <div className="flex flex-col w-[200px] h-[300px]">
        <div>
          <Image alt="" src="" width={100} height={100} />
        </div>
        <h4>Activity name</h4>
        <h5>300 kcal burned</h5>
      </div>
    </section>
  );
};

export default Activities;
