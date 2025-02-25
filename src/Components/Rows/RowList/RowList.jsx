import React from 'react'
import "./RowList.css"
import Row from '../Row/Row'
import requests from '../../Utils/requests'

function RowList() {
    return (
        <>
            <Row
                title="NETFLIX ORIGINALS"
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow={true}
            />
            <Row
                title="TRENDING NOW"
                fetchUrl={requests.fetchTrending}
                isLargeRow={true}
            />
            <Row
                title="TOP RATED MOVIES"
                fetchUrl={requests.fetchTopRatedMovies}
                isLargeRow={true}
            />
            <Row
                title="ACTION MOVIES"
                fetchUrl={requests.fetchActionMovies}
                isLargeRow={true}
            />
            <Row
                title="COMEDY MOVIES"
                fetchUrl={requests.fetchComedyMovies}
                isLargeRow={true}
            />
            <Row
                title="HORROR MOVIES"
                fetchUrl={requests.fetchHorrorMovies}
                isLargeRow={true}
            />
            <Row
                title="ROMANCE MOVIES"
                fetchUrl={requests.fetchRomanceMovies}
                isLargeRow={true}
            />
            <Row
                title="DOCUMENTARIES"
                fetchUrl={requests.fetchDocumentaries}
                isLargeRow={true}
            />
            <Row
                title="TV SHOW"
                fetchUrl={requests.fetchTVShow}
                isLargeRow={true}
            />
        </>
    );
}

export default RowList