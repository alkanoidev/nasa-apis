import React from "react";
import { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Search from "../components/Search";
import PagePicker from "../components/PagePicker";
import styled from "styled-components";
import { ReactComponent as FileTypeNotSupported } from "../components/undraw_void_-3-ggu.svg";
import { motion } from "framer-motion";

export default function IAVLibrary() {
  const [page, setPage] = useState(1);
  const [queryText, setQueryText] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetchAll();

    async function fetchAll() {
      const url = `https://images-api.nasa.gov/search?q=${queryText}&page=${page}`;
      await fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setData(data.collection.items);
          setLoading(false);
        });
    }
  }, [queryText, page]);

  return (
    <>
      <NavBar />
      <h1 className="header">NASA Image and Video Library</h1>
      <div className="IAVL">
        <div>
          <Search queryText={queryText} setQueryText={setQueryText} />
          <PagePicker page={page} setPage={setPage} />
        </div>
        <main id="IAVL-main">
          {data.map((item) => {
            const hasLinks = item.links !== undefined;
            return (
              <ImageOrVideo
                key={item.data[0].nasa_id}
                title={item.data[0].title}
                mediaType={item.data[0].media_type}
                dateCreated={item.data[0].date_created}
                description={item.data[0].description}
                hasLinks={hasLinks}
                links={item.links}
                resources={item.href}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  margin: 30px 0px;
  @media screen and (max-width: 600px) {
    & {
      flex-direction: column;
    }
  }
`;
const Paragraph = styled.p`
  overflow: auto;
  width: 100%;
  height: 100%;
  max-height: 100vh;
`;
function ImageOrVideo({
  title,
  mediaType,
  dateCreated,
  description,
  links,
  hasLinks,
  resources,
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
    >
      <Container>
        {hasLinks && links[0].render === "image" ? (
          <img src={links[0].href} alt={title} id="iavl-image" loading="lazy" />
        ) : (
          <FileTypeNotSupported id="filetypenotsupported" />
        )}

        <div className="iavl-info">
          <h1>{title}</h1>
          <p>Date Created: {dateCreated}</p>
          <Paragraph id="iavl-description">{description}</Paragraph>
          <p>
            All resources <a href={resources}>here</a>
          </p>
        </div>
      </Container>
    </motion.div>
  );
}
