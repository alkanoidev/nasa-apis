import styled from "styled-components";
import { motion } from "framer-motion";

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
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.2 }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      className="mars-rover-photos"
    >
      <img id="image" src={imgUrl} alt="photo" loading="lazy" />
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
    </motion.div>
  );
}
