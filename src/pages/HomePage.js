import React from 'react';
import Article from "../components/Article"
const articles = [
  {
    id: 1,
    title: "Zagadki Starego Rynku w Poznaniu",
    author: "Adam Granops",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In sed, quia unde sunt inventore quos perspiciatis minima totam asperiores. Pariatur dicta veniam dolore aspernatur saepe quis exercitationem distinctio placeat autem."

  },
  {
    id: 2,
    title: "Nowa Podziemna Trasa na Poznańskiej Cytadeli",
    author: "Zenon Bagiński",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In sed, quia unde sunt inventore quos perspiciatis minima totam asperiores. Pariatur dicta veniam dolore aspernatur saepe quis exercitationem distinctio placeat autem."

  },
  {
    id: 3,
    title: "Nowe odkrycie archeologiczne na Ostrowie Tumskim",
    author: "Waldemar Kolasiński",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. In sed, quia unde sunt inventore quos perspiciatis minima totam asperiores. Pariatur dicta veniam dolore aspernatur saepe quis exercitationem distinctio placeat autem."

  }
]

const HomePage = () => {
  const artList = articles.map(article => (
    <Article key={article.id} {...article} />
  ))
  return (
    <>
      <div className='home'>
        <h1>Najnowsze Artykuły dotyczące Poznania</h1>
        {artList}
      </div>
    </>
  );
}

export default HomePage;