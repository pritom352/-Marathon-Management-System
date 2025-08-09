import SectionTitle from "../../components/ReusableComponent/SectionTitle";
import Card from "./Card";

const MarathonsSections = ({ marathonsData }) => {
  return (
    <div className="   mt-20">
      <SectionTitle title="Featured Marathons" />

      <div className=" grid grid-cols-1 md:grid-cols-5 lg:grid-cols-4 gap-5 auto-rows-fr  rounded-2xl  ">
        {marathonsData.map((marathonData) => (
          <Card marathonData={marathonData} key={marathonData._id}></Card>
        ))}
      </div>
    </div>
  );
};

export default MarathonsSections;
