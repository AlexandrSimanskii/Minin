import { useSearchUsersQuery } from "../store/gitHub/github.api";
import { useEffect, useState } from "react";
import { useDebounce } from "../hooks/debounce";
const Home = () => {
  const [search, setSearch] = useState("");
  const debounse = useDebounce(search);
  const { isLoading, isError, data } = useSearchUsersQuery("vladilen");
  useEffect(() => {
    console.log(debounse);
  }, [debounse]);

  return (
    <div className="home">
      <div className="container">
        <div className="home__inner">
          <h1 className="home-title">home</h1>
          {isError && <p className="home-error">Something went wrong...</p>}
          <div className="home-search">
            <input
              className="home-search__input"
              type="text"
              placeholder="Search for GitHub username..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className="home-search__dropdown">hgjhgjgkhkujg</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
// function useDebounce() {
//   throw new Error("Function not implemented.");
// }
