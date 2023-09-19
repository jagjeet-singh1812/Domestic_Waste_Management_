import React, { useEffect, useState } from 'react';
import "./lead.css"
import data from "./data.json"

function Leaderboard() {
  const pageSize = 10; // Number of items per page
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  useEffect(() => {
    setLeaderboardData(data);
  }, []);

  // Filter data based on the search query
  const filteredData = leaderboardData.filter(item =>
    item.familyName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const visibleData = filteredData.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to the first page when the search query changes
  };

  return (
    <div className="leaderboard-container">

      {/* Add a search input */}
      <h1>Waste Management Leaderboard</h1>
      <div className="search-container">
        <div className="div">
        <input
          type="text"
          className="search-input"
          placeholder="Search by Family Name"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button className="search-button">Search</button>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Family Name</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {visibleData.map((item) => (
            <tr key={item.rank}>
              <td className="rank">{item.rank}</td>
              <td className="family-name">{item.familyName}</td>
              <td className="points">
                <span>{item.points}</span>
                &nbsp;
                <i className="fa-solid fa-cannabis icon_leader"></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous Page
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next Page
        </button>
      </div>
    </div>
  );
}

export default Leaderboard;
