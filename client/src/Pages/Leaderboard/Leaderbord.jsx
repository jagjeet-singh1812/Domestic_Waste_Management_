import React, { useState } from "react";
import "./leaderboard.css";
import leaderboardData from "./leaderboard.json";
import { saveAs } from "file-saver";
import * as XLSX from "xlsx";

const itemsPerPage = 6;

const Leaderboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const [exportOptionsVisible, setExportOptionsVisible] = useState(false);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Filter data based on search input
  const filteredData = leaderboardData.filter((row) =>
    row.Customer.Name.toLowerCase().includes(searchInput.toLowerCase())
  );

  const visibleData = filteredData.slice(startIndex, endIndex);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
    setCurrentPage(1); // Reset to the first page when searching
  };

  const handleExportClick = () => {
    setExportOptionsVisible((prev) => {
      return prev === true ? false : true;
    });
  };

  const handleExportJSON = () => {
    const jsonData = JSON.stringify(visibleData, null, 2);
    const blob = new Blob([jsonData], { type: "application/json" });
    saveAs(blob, "leaderboard.json");
    window.location.reload();
  };

  const handleExportCSV = () => {
    const csvData = visibleData.map((row) => {
      return {
        Id: row.Id,
        Customer: row.Customer.Name,
        Location: row.Location,
        "Order Date": row["Order Date"],
        Status: row.Status,
        Amount: row.Amount,
      };
    });

    const ws = XLSX.utils.json_to_sheet(csvData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Leaderboard");
    XLSX.writeFile(wb, "leaderboard.csv");
    window.location.reload();
  };

  return (
    <main className="table">
      <section className="table__header">
        <h1>Leader Board</h1>
        <div className="input-group">
          <input
            type="search"
            placeholder="Search Data..."
            value={searchInput}
            onChange={handleSearchChange}
          />
          <img src="/images/search.png" alt="Search" />
        </div>
        <div className="export__file">
          <label
            htmlFor="export-file"
            className="export__file-btn"
            title="Export File"
            onClick={handleExportClick}
          ></label>
          <input type="checkbox" id="export-file" />
          {exportOptionsVisible && (
            <div className="export__file-options">
              <label>Export As &nbsp; ➜</label>

              <label
                onClick={handleExportJSON}
                htmlFor="export-file"
                id="toJSON"
              >
                JSON <img src="/images/json.png" alt="JSON" />
              </label>
              <label onClick={handleExportCSV} htmlFor="export-file" id="toCSV">
                CSV <img src="/images/csv.png" alt="CSV" />
              </label>
            </div>
          )}
        </div>
      </section>
      <section className="table__body">
        <table>
          <thead>
            <tr>
              <th>
                {" "}
                Id <span className="icon-arrow">↑</span>
              </th>
              <th>
                {" "}
                Customer <span className="icon-arrow">↑</span>
              </th>
              <th>
                {" "}
                Location <span className="icon-arrow">↑</span>
              </th>
              <th>
                {" "}
                Order Date <span className="icon-arrow">↑</span>
              </th>
              <th>
                {" "}
                Status <span className="icon-arrow">↑</span>
              </th>
              <th>
                {" "}
                Amount <span className="icon-arrow">↑</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {visibleData.map((row) => (
              <tr key={row.Id}>
                <td>{row.Id}</td>
                <td>
                  <img src={row.Customer.Image} alt={row.Customer.Name} />
                  {row.Customer.Name}
                </td>
                <td>{row.Location}</td>
                <td>{row["Order Date"]}</td>
                <td>
                  <p className={`status ${row.Status.toLowerCase()}`}>
                    {row.Status}
                  </p>
                </td>
                <td>
                  <strong>{row.Amount}</strong>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination">
          <span className="page-info">
            Page {currentPage} of {totalPages}
          </span>
          <button
            className="page-button"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            className="page-button"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </section>
    </main>
  );
};

export default Leaderboard;
