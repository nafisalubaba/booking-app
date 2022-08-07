import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./hotelsList.css";
import Subscribe from "../../components/subscribe/Subscribe";
import ItemHotels from "../../components/itemHotels/ItemHotels";
import useFetch from "../../hooks/useFetch";
import "../../components/search/search.css";
import "../../components/listHotels/listhotels.css";

const HotelsList = () => {
  const location = useLocation();
  const { from } = location.state;
  const { data, loading, error, reFetch } = useFetch(
    `api/hotels?city=${from}&min=${0}&max=${9999}`
  );

  const handleClick = () => {
    reFetch();
  };

  return (
    <div>
      <Header type="smallHeader" />
      <div className="hotelsContainer">
        <div className="hotelsRow">
          <div className="hotelsCol">
            <div className="listHotels">
              {loading ? (
                <h2>Loading...</h2>
              ) : (
                <>
                  {data.map((item) => (
                    <ItemHotels item={item} key={item._id} />
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <Subscribe />
      <Footer />
    </div>
  );
};

export default HotelsList;
