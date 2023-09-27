import React, { useState, useRef} from "react";
import "./leaderboard.css";
import leaderboardData from "./leaderboard.json";
import {motion} from "framer-motion"
const itemsPerPage = 8;

const Leaderboard = () => {
  const pdfref = useRef();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

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
    setCurrentPage(1); 
  };



  // const customers_table = document.querySelector('#customers_table');


  
  const toCSV = function  (table) {
    const t_heads = table.querySelectorAll('th'),
        tbody_rows = table.querySelectorAll('tbody tr');

    const headings = [...t_heads].map(head => {
        let actual_head = head.textContent.trim().split(' ');
        return actual_head.splice(0, actual_head.length - 1).join(' ').toLowerCase();
    }).join(',') + ',' + 'image name';

    const table_data = [...tbody_rows].map(row => {
        const cells = row.querySelectorAll('td'),
            img = decodeURIComponent(row.querySelector('img').src),
            data_without_img = [...cells].map(cell => cell.textContent.replace(/,/g, ".").trim()).join(',');

        return data_without_img + ',' + img;
    }).join('\n');

    return headings + '\n' + table_data;
}


const csv_btnfun= () => {
  const customers_table = document.querySelector('#customers_table');
    const csv = toCSV(customers_table);
    downloadFile(csv, 'csv', 'customer orders');
}

const toExcel = function (table) {
    const t_heads = table.querySelectorAll('th'),
        tbody_rows = table.querySelectorAll('tbody tr');

    const headings = [...t_heads].map(head => {
        let actual_head = head.textContent.trim().split(' ');
        return actual_head.splice(0, actual_head.length - 1).join(' ').toLowerCase();
    }).join('\t') + '\t' + 'image name';

    const table_data = [...tbody_rows].map(row => {
        const cells = row.querySelectorAll('td'),
            img = decodeURIComponent(row.querySelector('img').src),
            data_without_img = [...cells].map(cell => cell.textContent.trim()).join('\t');

        return data_without_img + '\t' + img;
    }).join('\n');

    return headings + '\n' + table_data;
}

const excel_btnclick = () => {
  const customers_table = document.querySelector('#customers_table');
    const excel = toExcel(customers_table);
    downloadFile(excel, 'excel');
}

const downloadFile = function (data, fileType, fileName = '') {
    const a = document.createElement('a');
    a.download = fileName;
    const mime_types = {
        'json': 'application/json',
        'csv': 'text/csv',
        'excel': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    }
    a.href = `
        data:${mime_types[fileType]};charset=utf-8,${encodeURIComponent(data)}
    `;
    document.body.appendChild(a);
    a.click();
    a.remove();
}


  const toPDF =()=> {
    const customers_table = document.querySelector('#customers_table');
    const html_code = `
    <link rel="stylesheet" href="./leaderboard.css">
    <main class="table" >${customers_table.innerHTML}</main>
    `;

    const new_window = window.open();
    new_window.document.write(html_code);

    setTimeout(() => {
        new_window.print();
        new_window.close();
    }, 400);
}

const toJSON = function (table) {
    let table_data = [],
        t_head = [],

        t_headings = table.querySelectorAll('th'),
        t_rows = table.querySelectorAll('tbody tr');

    for (let t_heading of t_headings) {
        let actual_head = t_heading.textContent.trim().split(' ');

        t_head.push(actual_head.splice(0, actual_head.length - 1).join(' ').toLowerCase());
    }

    t_rows.forEach(row => {
        const row_object = {},
            t_cells = row.querySelectorAll('td');

        t_cells.forEach((t_cell, cell_index) => {
            const img = t_cell.querySelector('img');
            if (img) {
                row_object['customer image'] = decodeURIComponent(img.src);
            }
            row_object[t_head[cell_index]] = t_cell.textContent.trim();
        })
        table_data.push(row_object);
    })

    return JSON.stringify(table_data, null, 4);
}

const json_btnclick= () => {
  const customers_table = document.querySelector('#customers_table');
    const json = toJSON(customers_table);
    downloadFile(json, 'json')
}


  return (
    <>
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    exit={{opacity:0, transition:{duration:0,delay:0}}}
    transition={{delay:0.5,duration:2}}
    >
    <main className="table">
      <section className="table__header">
        <h1>Leaderboard</h1>
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
          ></label>
          <input type="checkbox" id="export-file" />
          <div className="export__file-options">
            <label>Export As &nbsp; ➜</label>
            <label htmlFor="export-file" id="toPDF" onClick={()=>toPDF()}>
              PDF <img src="/images/pdf.png" alt="PDF" />
            </label>
            <label htmlFor="export-file" id="toJSON" onClick={()=>json_btnclick()}>
              JSON <img src="/images/json.png" alt="JSON"  />
            </label>
            <label htmlFor="export-file" id="toCSV" onClick={()=>csv_btnfun()}>
              CSV <img src="/images/csv.png" alt="CSV" />
            </label>
            {/* <label htmlFor="export-file" id="toEXCEL" onClick={()=>excel_btnclick()}>
              EXCEL <img src="/images/excel.png" alt="EXCEL" />
            </label> */}
          </div>
        </div>
      </section>
      <section className="table__body" id="customers_table" ref={pdfref}>
        <table >
          <thead>
            <tr>
              <th>
                {" "}
                Rank<span className="icon-arrow">↑</span>
              </th>
              <th>
                {" "}
                Username <span className="icon-arrow">↑</span>
              </th>
              <th>
                {" "}
                Location <span className="icon-arrow">↑</span>
              </th>
              <th>
                {" "}
                Last Point Date <span className="icon-arrow">↑</span>
              </th>
              {/* <th>
                {" "}
                Status <span className="icon-arrow">↑</span>
              </th> */}
              <th>
                {" "}
                Points <span className="icon-arrow">↑</span>
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
                {/* <td>
                  <p className={`status ${row.Status.toLowerCase()}`}>
                    {row.Status}
                  </p>
                </td> */}
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
    </motion.div></>
  );
};

export default Leaderboard;
