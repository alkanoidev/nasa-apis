import React from "react";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import styled from "styled-components";

const Toggle = styled.button`
  background: #222222;
  border: 1px solid var(--secondary);
  border-bottom: none;
  font-size: 16px;
  border-radius: 10px 10px 0px 0px;
  width: 100%;
  color: var(--secondary);
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  &:hover {
    cursor: pointer;
  }
`;
const Text = styled.p`
  font-size: 16px;
  text-transform: uppercase;
  height: auto;
  margin: 0px;
`;
const ItemsList = styled.ul`
  position: absolute;
  z-index: 1;
  width: 148px;
  margin: 0px;
  list-style: none;
  padding: 0px;
  border: 1px solid var(--secondary);
  border-top: none;
  border-radius: 0px 0px 10px 10px;
  background: #222222;
  @media screen and (max-width: 600px){
    &{
      width: 100%;
    }
  }
`;
const Item = styled.li`
  width: 100%;
  display: flex;
  justify-content: center;
  color: var(--secondary);
  margin: 0px;
  padding: 0px;
  transition: 0.1s ease;
  &:hover {
    cursor: pointer;
    background: var(--primary);
  }
`;

export default function ListBox({ itemsList, title, update }) {
  const [selected, setSelected] = useState(itemsList[0]);
  const [collapsed, setCollapsed] = useState(true);

  return (
    <>
      <div className="listboxHeader">
        <Toggle
          onClick={() => {
            setCollapsed((prev) => !prev);
          }}
          style={collapsed ? {border: "1px solid var(--secondary)", borderRadius: "10px"} : {border: ""}}
        >
          <div style={{ color: "var(--primary)" }}>
            <Text>{title}</Text>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Text>{selected}</Text>
            {collapsed ? <IoIosArrowDown /> : <IoIosArrowUp />}
          </div>
        </Toggle>
        {!collapsed && (
          <ItemsList>
            {itemsList.map((item) => (
              <Item
                key={item}
                onClick={() => {
                  setSelected(item);
                  update(item);
                  setCollapsed(true);
                }}
              >
                <Text>{item}</Text>
              </Item>
            ))}
          </ItemsList>
        )}
      </div>
    </>
  );
}
