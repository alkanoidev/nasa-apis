import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";

const PagePickerContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  padding-top: 20px;
`;
const PagePicker1 = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Button = styled.button`
  background: transparent;
  outline: none;
  border: none;
  color: var(--secondary);
  font-size: 20px;
  &:hover {
    cursor: pointer;
  }
`;
export default function PagePicker({ page, setPage }) {
  return (
    <PagePickerContainer>
      <PagePicker1>
        <Button
          onClick={() => {
            setPage((prev) => {
              if (prev == 0) {
                return 1;
              }
              return --prev;
            });
          }}
        >
          <IoIosArrowBack />
        </Button>
        <h3>{page}</h3>
        <Button
          onClick={() => {
            setPage((prev) => {
              return ++prev;
            });
          }}
        >
          <IoIosArrowForward />
        </Button>
      </PagePicker1>
    </PagePickerContainer>
  );
}
