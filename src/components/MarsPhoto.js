import styled from "styled-components";

const Span = styled.span`
  color: #008bf7;
  font-size: 18px;
  padding-right: 10px;
`;
export default function MarsPhoto({
  imgUrl,
  earthDate,
  roverName,
  launchDate,
  landingDate,
  status,
  camera,
}) {
  return (
    <div className="mars-rover-photos">
      <img id="image" src={imgUrl} alt="photo" />
      <div className="info">
        <p className="date">
          <Span>Earth date: </Span>
          {earthDate}
        </p>
        <div className="rover-info">
          <h1>
            <Span>Rover Name:</Span>
            {roverName}
          </h1>
          <p>
            <Span>Launch date:</Span>
            {launchDate}
          </p>
          <p>
            <Span>Landing date:</Span>
            {landingDate}
          </p>
          <p>
            <Span>Status:</Span>
            {status}
          </p>
        </div>
        <p>
          <Span>Camera full name:</Span>
          {camera}
        </p>
      </div>
    </div>
  );
}
