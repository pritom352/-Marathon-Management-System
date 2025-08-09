import SectionTitle from "../../components/ReusableComponent/SectionTitle";
import img1 from "../../assets/img-1.webp";
import img2 from "../../assets/img-2.webp";

const RunningBenefits = () => {
  return (
    <section className="mt-20  ">
      <SectionTitle title="Running's Benefit's" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT PART */}
        <div>
          <h4 className=" text-2xl mb-2">
            The Benefits of <br></br>Running
          </h4>
          <p className="  mb-6 ">
            Running is more than just a workout — it’s a path to a healthier
            body, a stronger mind, and a happier life. Whether you’re chasing a
            personal best or simply enjoying the rhythm of your feet on the
            road, running has something for everyone.
          </p>

          {/* Images side by side */}
          <div className="flex gap-4">
            <img
              src={img1}
              alt="Runner"
              className="rounded-lg w-1/2 object-cover"
            />
            <img
              src={img2}
              alt="Marathon"
              className="rounded-lg w-1/2 object-cover"
            />
          </div>
        </div>
        {/* RIGHT PART - Q&A */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-primary">
              01. Run Towards a Better You
            </h3>
            <p className=" ">
              Improve cardiovascular health, boost endurance, and build a
              stronger body with every step.
            </p>
            <hr className="my-4 border-gray-300 dark:border-gray-600" />
          </div>

          <div>
            <h3 className="text-xl font-semibold text-primary">
              02. The Science of Strength
            </h3>
            <p className=" ">
              Running strengthens muscles, bones, and joints, keeping your body
              resilient over time.
            </p>
            <hr className="my-4 border-gray-300 dark:border-gray-600" />
          </div>

          <div>
            <h3 className="text-xl font-semibold text-primary">
              03. The Mental Benefits of Running
            </h3>
            <p className=" ">
              Reduce stress, boost mood, and sharpen focus through consistent
              running.
            </p>
            <hr className="my-4 border-gray-300 dark:border-gray-600" />
          </div>

          <div>
            <h3 className="text-xl font-semibold text-primary">
              04. The Unexpected Rewards of Running
            </h3>
            <p className=" ">
              Experience community, personal growth, and life-changing moments
              on the road.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RunningBenefits;
