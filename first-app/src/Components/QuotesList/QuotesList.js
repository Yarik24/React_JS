import "./QuotesListStyle.css";

function QuotesList({ quotes }) {
  return (
    <div className="quotes">
      <p className="quotes_p">   
        Send a blank message to get a quote from a random anime.
        Or enter the name of the anime in Latin for a quote from a specific anime.
      </p>
      <ul className="quotes__ul">
        {quotes
          ? quotes.map((el, index) => (
              <li key={index} className="quotes__item">
                <p className="quotes__anime">
                  <b>Anime</b>: {el.anime}
                </p>
                <p className="quotes__character">
                  <b>Character</b>: {el.character}
                </p>
                <p className="quotes__quote">
                  <b>Quote</b>: {el.quote}
                </p>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
}

export default QuotesList;