import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import { ReactComponent as Loader } from "./loader.svg";

const formatDate = (date) => {
  let d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
};

export default function NasaPhoto() {
  const [photoData, setPhotoData] = useState(null);
  const [startDate, setStartDate] = useState(formatDate(new Date()));
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchPhoto();

    async function fetchPhoto() {
      setStartDate(formatDate(startDate));
      if (startDate > formatDate(new Date())) {
        setStartDate(formatDate(new Date()));
        return;
      }
      // const res = await fetch(
      //   `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_KEY}&date=${startDate}`
      // );
      fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_KEY}&date=${startDate}`
      )
        .then((res) => res.json())
        .then((data) => {
          setPhotoData(data);
          setLoading(false);
        });
      // const data = await res.json();
      // setPhotoData(data);
    }
  }, [startDate]);

  if (!photoData) return <div />;

  return (
    <>
      <NavBar startDate={startDate} setStartDate={setStartDate} />
      <div className="nasa-photo">
        {loading ? (
          <Loader id="svg" />
        ) : (
          <>
            {photoData.media_type === "image" ? (
              <img
                src={photoData.url}
                alt={photoData.title}
                className="photo"
              />
            ) : (
              <iframe
                title="space-video"
                src={photoData.url}
                frameBorder="0"
                gesture="media"
                allow="encrypted-media"
                allowFullScreen
                className="photo"
              />
            )}

            <div>
              <h1>{photoData.title}</h1>
              <p className="date">{photoData.date}</p>
              <p className="explanation">{photoData.explanation}</p>
            </div>
          </>
        )}
      </div>
    </>
  );
}
