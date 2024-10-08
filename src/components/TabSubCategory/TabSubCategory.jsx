import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Rating from "react-rating";
import {
  FaArrowRight,
  FaCheckCircle,
  FaHeart,
  FaSortAmountDownAlt,
  FaStar,
  FaTheaterMasks,
  FaThumbsUp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import swal from "sweetalert";
import AOS from "aos";
import "aos/dist/aos.css";

const TabSubCategory = () => {
  const { user } = useContext(AuthContext);

  const handleViewDetails = () => {
    if (!user) {
      swal(
        "Login Alert!",
        "You are not logged in, Please login first to View Details!",
        "warning"
      );
    }
  };

  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabSelect = (index) => {
    setSelectedTab(index);
  };

  const [sportCars, setSportCars] = useState([]);
  const [trucks, setTrucks] = useState([]);
  const [miniFireTrucks, setMiniFireTrucks] = useState([]);

  useEffect(() => {
    fetch("https://pixieplay-server-djy8.vercel.app/toys/Sports%20Car")
      .then((res) => res.json())
      .then((data) => {
        setSportCars(data);
      });

    fetch("https://pixieplay-server-djy8.vercel.app/toys/Truck")
      .then((res) => res.json())
      .then((data) => {
        setTrucks(data);
      });
    fetch("https://pixieplay-server-djy8.vercel.app/toys/Mini%20Fire%20Truck")
      .then((res) => res.json())
      .then((data) => {
        setMiniFireTrucks(data);
      });

    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true, // Apply animations only once
    });
  }, []);

  return (
    <div className="mb-10">
      <Tabs selectedIndex={selectedTab} onSelect={handleTabSelect}>
        <TabList className="flex justify-center gap-4 tabs tabs-boxed">
          <Tab
            className={`tab tab-lifted font-bold ${
              selectedTab === 0 ? "active" : ""
            }`}
            style={{ backgroundColor: selectedTab === 0 ? "#e0a82e" : "" }}
          >
            Sports Car
          </Tab>
          <Tab
            className={`tab tab-lifted font-bold ${
              selectedTab === 1 ? "active" : ""
            }`}
            style={{ backgroundColor: selectedTab === 1 ? "#e0a82e" : "" }}
          >
            Truck
          </Tab>
          <Tab
            className={`tab tab-lifted font-bold ${
              selectedTab === 2 ? "active" : ""
            }`}
            style={{ backgroundColor: selectedTab === 2 ? "#e0a82e" : "" }}
          >
            Mini Fire Truck
          </Tab>
        </TabList>

        <TabPanel>
          <div className="flex flex-col  md:flex-row justify-center items-center gap-3">
            {sportCars.map((car, index) => (
              <div
                key={car._id}
                className="card card-compact w-96 bg-base-100 shadow-xl"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <figure>
                  <img className="h-72" src={car.pictureURL} alt="Sport Car" />
                </figure>
                <div className="card-body">
                  <h2
                    className=" card-title tooltip tooltip-top"
                    data-tip={car.toyName}
                  >
                    {car.toyName.length > 20
                      ? car.toyName.substring(0, 50) + "......"
                      : car.toyName}
                  </h2>
                  <p className="font-semibold font-mono text-lg">
                    Price: {car.price} BDT
                  </p>
                  <p className="font-semibold font-mono text-lg">
                    Rating:{" "}
                    <Rating
                      title={car.rating}
                      initialRating={car.rating}
                      readonly
                      placeholderSymbol={<FaStar className="icon" />}
                      fullSymbol={<FaStar color="#FFD700" className="icon" />}
                      emptySymbol={<FaStar color="#C4C4C4" className="icon" />}
                    />
                  </p>
                  <div className="card-actions justify-end">
                    <Link to={`./toy/${car._id}`}>
                      <button
                        onClick={handleViewDetails}
                        className="btn btn-primary"
                      >
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex flex-col  md:flex-row justify-center items-center gap-3">
            {trucks.map((car, index) => (
              <div
                key={car._id}
                className="card card-compact w-96 bg-base-100 shadow-xl"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <figure>
                  <img className="h-72" src={car.pictureURL} alt="Sport Car" />
                </figure>
                <div className="card-body">
                  <h2
                    className=" card-title tooltip tooltip-top"
                    data-tip={car.toyName}
                  >
                    {car.toyName.length > 20
                      ? car.toyName.substring(0, 50) + "......"
                      : car.toyName}
                  </h2>
                  <p className="font-semibold font-mono text-lg">
                    Price: {car.price} BDT
                  </p>
                  <p className="font-semibold font-mono text-lg">
                    Rating:{" "}
                    <Rating
                      title={car.rating}
                      initialRating={car.rating}
                      readonly
                      placeholderSymbol={<FaStar className="icon" />}
                      fullSymbol={<FaStar color="#FFD700" className="icon" />}
                      emptySymbol={<FaStar color="#C4C4C4" className="icon" />}
                    />
                  </p>
                  <div className="card-actions justify-end">
                    <Link to={`toy/${car._id}`}>
                      <button
                        onClick={handleViewDetails}
                        className="btn btn-primary"
                      >
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex flex-col  md:flex-row justify-center items-center gap-3">
            {miniFireTrucks.map((car, index) => (
              <div
                key={car._id}
                className="card card-compact w-96 bg-base-100 shadow-xl"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <figure>
                  <img className="h-72" src={car.pictureURL} alt="Sport Car" />
                </figure>
                <div className="card-body">
                  <h2
                    className=" card-title tooltip tooltip-top"
                    data-tip={car.toyName}
                  >
                    {car.toyName.length > 50
                      ? car.toyName.substring(0, 50) + "......"
                      : car.toyName}
                  </h2>
                  <p className="font-semibold font-mono text-lg">
                    Price: {car.price} BDT
                  </p>
                  <p className="font-semibold font-mono text-lg">
                    Rating:{" "}
                    <Rating
                      title={car.rating}
                      initialRating={car.rating}
                      readonly
                      placeholderSymbol={<FaStar className="icon" />}
                      fullSymbol={<FaStar color="#FFD700" className="icon" />}
                      emptySymbol={<FaStar color="#C4C4C4" className="icon" />}
                    />
                  </p>
                  <div className="card-actions justify-end">
                    <Link to={`toy/${car._id}`}>
                      <button
                        onClick={handleViewDetails}
                        className="btn btn-primary"
                      >
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabSubCategory;
