import React from "react";

function Pagination({ paginationData }) {
  const pages = paginationData.pages;
  const current = paginationData.page;
  const pagesArray = getPageElements(pages, current)
  return (
    <footer className="footer container is-max-desktop">
      <nav className="pagination is-centered" role="navigation" aria-label="pagination">
        <ul className="pagination-list">
          {pagesArray.map((item, index) => { return <li key={index}>{item}</li> })}
        </ul>
      </nav>
    </footer>
  )
}


const getPageElements = (pages, current) => {
  const ellipcis = <span className="pagination-ellipsis">&hellip;</span>;
  let elementsArray = [];
  if (pages < 5) {
    //render all without ellipces
    for (let index = 1; index <= pages; index++) {
      elementsArray.push(getListItem(index, current))
    }
  } else {
    //first page
    if (current === 1) {
      //together with 2 and 3
      for (let index = 1; index <= 3; index++) {
        elementsArray.push(getListItem(index, current));
      }
    } else if (current > 2) {
      elementsArray.push(getListItem(1, current));
      current !== 3 && elementsArray.push(ellipcis);
    }
    //render three middle pages
    if (current > 1 && current !== pages) {
      for (let index = current - 1; index <= current + 1; index++) {
        elementsArray.push(getListItem(index, current));
      }

    }
    //last page
    if (current === pages) {
      //three last pages together
      for (let index = pages - 2; index <= pages; index++) {
        elementsArray.push(getListItem(index, current));
      }
    } else if (current < pages - 1) {
      //append last page separately
      current !== pages - 2 && elementsArray.push(ellipcis);
      elementsArray.push(getListItem(pages, current));

    }

    return elementsArray;
  }
}

const getListItem = (index, current) => {

  return (

    <a href={`index.html?page=${index}`}
      aria-label={`Goto page ${index}`}
      className={index === current ? "pagination-link is-current" : "pagination-link"}
      aria-current={index === current ? "page" : ""}>
      {index}
    </a>

  )
}

export default Pagination;