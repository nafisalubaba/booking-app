import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "./city.css";

const City = () => {
  const { data, loading, error } = useFetch(
    "api/hotels/bycity?cities=Dhaka,Chittagong,Barisal,Khulna,Sylhet"
  );
  //console.log(data);

  return (
    <div className="cities">
      <h2 className="cityTitle">Explore Bangladesh</h2>
      <p className="cityDesc">These popular destinations have a lot to offer</p>
      <div className="cityImages">
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          <>
            <div className="cityImage">
              <Link to="/hotels-list" state={{ from: "Dhaka" }}>
                <div className="cityImg">
                  <img
                    src="https://images.pexels.com/photos/8863235/pexels-photo-8863235.jpeg?cs=srgb&dl=pexels-ferdous-hasan-8863235.jpg&fm=jpg"
                    alt="Dhaka"
                  />
                </div>
                <h4 className="cityImgTitle">Dhaka</h4>
                <span className="cityImgProperties">{data[0]} properties</span>
              </Link>
            </div>
            <div className="cityImage">
              <Link to="/hotels-list" state={{ from: "Chittagong" }}>
                <div className="cityImg">
                  <img
                    src="https://images.pexels.com/photos/11668555/pexels-photo-11668555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="Chittagong"
                  />
                </div>
                <h4 className="cityImgTitle">Chittagong</h4>
                <span className="cityImgProperties">{data[1]} properties</span>
              </Link>
            </div>
            <div className="cityImage">
              <Link to="/hotels-list" state={{ from: "Barisal" }}>
                <div className="cityImg">
                  <img src="./assets/images/ac.jpg" alt="Barisal" />
                </div>
                <h4 className="cityImgTitle">Barishal</h4>
                <span className="cityImgProperties">{data[2]} properties</span>
              </Link>
            </div>
            <div className="cityImage">
              <Link to="/hotels-list" state={{ from: "Khulna" }}>
                <div className="cityImg">
                  <img src="./assets/images/le.jpg" alt="Khulna" />
                </div>
                <h4 className="cityImgTitle">Khulna</h4>
                <span className="cityImgProperties">{data[3]} properties</span>
              </Link>
            </div>
            <div className="cityImage">
              <Link to="/hotels-list" state={{ from: "Sylhet" }}>
                <div className="cityImg">
                  <img src="./assets/images/ns.jpeg" alt="Sylhet" />
                </div>
                <h4 className="cityImgTitle">Sylhet</h4>
                <span className="cityImgProperties">{data[4]} properties</span>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default City;
