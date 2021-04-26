import React from "react";

const Search = ({ name, setName, handleOnSubmit }) => {
  return (
    <div className="row mt-3">
      <div className="col-md-12">
        <form onSubmit={(e) => handleOnSubmit(e)}>
          <div className="form-group">
            <label>Movie Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-secondary">
            Search Movie
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
