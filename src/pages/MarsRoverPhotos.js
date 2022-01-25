import React from "react";
import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import ListBox from "../components/ListBox";
import { useDate } from "../components/Date";
import { ReactComponent as Loader } from "../components/loader.svg";
import MarsPhoto from "../components/MarsPhoto";
import PagePicker from "../components/PagePicker";
import { ReactComponent as PageNotFound } from "../components/undraw_empty_re_opql.svg";

const API_KEY = process.env.REACT_APP_NASA_KEY;
export default function MarsRoverPhotos() {
  const [queryDate, setQueryDate] = useDate(new Date());
  const [loading, setLoading] = useState(false);
  const [sol, setSol] = useState(0);
  const [rover, setRover] = useState("curiosity");
  const [apiData, setApiData] = useState([]);
  const [camera, setCamera] = useState("any");
  const [page, setPage] = useState(1);

  const cameras = [
    "any",
    "fhaz",
    "rhaz",
    "mast",
    "chemcam",
    "mahli",
    "mardi",
    "navcam",
    "pancam",
    "minites",
  ];
  const rovers = ["curiosity", "opportunity", "spirit"];

  useEffect(() => {
    setLoading(true);
    fetchData();

    async function fetchData() {
      console.log(camera);
      // console.log(rover);
      await fetch(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}
        ${
          camera.toLocaleLowerCase() != "any" && `&camera=${camera}`
        }&page=${page}&api_key=${API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => {
          setApiData(data.photos);
          setLoading(false);
        });
    }
  }, [rover, sol, camera, page]);
  return (
    <>
      <NavBar />
      <h1 className="header">Mars Rover Photos</h1>
      {loading ? (
        <Loader id="svg" />
      ) : (
        <>
          <div className="options">
            <ListBox itemsList={cameras} title="cameras" update={setCamera} />
            <ListBox itemsList={rovers} title="rovers" update={setRover} />
            <div className="solCont">
              <label htmlFor="sol">sol</label>
              <input
                id="sol"
                type="number"
                value={sol}
                onChange={(e) => {
                  setSol(e.target.value);
                }}
              />
            </div>
          </div>
          <PagePicker page={page} setPage={setPage} />
          <main>
            {apiData.length == 0 && (
              <div className="page-not-found">
                <PageNotFound />
                <h1>No Photos Found</h1>
              </div>
            )}
            {apiData.map((marsPhoto) => (
              <MarsPhoto
                key={marsPhoto.id}
                imgUrl={marsPhoto.img_src}
                earthDate={marsPhoto.earth_date}
                roverName={marsPhoto.rover.name}
                launchDate={marsPhoto.rover.launch_date}
                landingDate={marsPhoto.rover.landing_date}
                status={marsPhoto.rover.status}
                camera={marsPhoto.camera.full_name}
              />
            ))}
          </main>
        </>
      )}
    </>
  );
}
