import React from 'react';
import './HomeScreen.scss';
import Nav from '../Components/Nav';
import Banner from '../Components/Banner';
import requests from '../request';
import Row from '../Components/Row';

function HomeScreen() {
  return (
    <div className="homeScreen">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaris" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default HomeScreen;
