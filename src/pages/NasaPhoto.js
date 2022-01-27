import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import { ReactComponent as Loader } from "../components/loader.svg";
import DatePicker from "../components/Date";
import { useDate } from "../components/Date";
import { motion } from "framer-motion";

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
  const [queryDate, setQueryDate] = useDate(formatDate(new Date()));
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchPhoto();

    async function fetchPhoto() {
      setQueryDate(formatDate(queryDate));
      if (queryDate > formatDate(new Date())) {
        setQueryDate(formatDate(new Date()));
        return;
      }
      await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA_KEY}&date=${queryDate}`
      )
        .then((res) => res.json())
        .then((data) => {
          setPhotoData(data);
          setLoading(false);
        });
    }
  }, [queryDate]);

  if (!photoData) return <div />;

  return (
    <>
      <NavBar />
      <h1 className="header">Picture Of Day</h1>
      <div className="nasa-photo">
        {loading ? (
          <Loader id="svg" />
        ) : (
          <>
            <motion.div
              initial={{opacity: 0}, {y: "-300px"} }
              animate={{opacity: 1}, {y: 0}}
            >
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
                <DatePicker queryDate={queryDate} setQueryDate={setQueryDate} />
                <h1>{photoData.title}</h1>
                <p className="date">{photoData.date}</p>
                <p className="explanation">{photoData.explanation}</p>
              </div>
            </motion.div>
          </>
        )}
      </div>
    </>
  );
}
