import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { IoIosSearch } from "react-icons/io";
import { FaAngleDoubleRight } from "react-icons/fa";

const Container = styled.div`
  display: flex;
  border: 1px solid var(--primary);
  border-radius: 10px;
  padding: 5px 10px;
  gap: 10px;
  background: #222222;
  align-items: center;
`;

export default function Search({ setQueryText, queryText }) {
  const [input, setInput] = useState("");
  return (
    <Container>
      <IoIosSearch style={{ fontSize: "24px" }} />
      <input
        type="text"
        id="search"
        placeholder="Search for nasa images and videos"
        onChange={(e) => {
          setInput(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setQueryText(input);
          }
        }}
      />
      {input.length > 0 && (
        <button
          className="IAVL-submit"
          type="button"
          onClick={(e) => {
            setQueryText(input);
          }}
        >
          <FaAngleDoubleRight />
        </button>
      )}
    </Container>
  );
}
