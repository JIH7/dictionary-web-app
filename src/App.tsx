import { useState, useEffect } from "react"

import logo from "./assets/images/logo.svg"
import searchIcon from "./assets/images/icon-search.svg"

import "./css/App.css"
import FontSelect from './components/FontSelect'
import Entry from './components/Entry'
import NightModeToggle from "./components/NightModeToggle"
import NoDefinitions from "./components/NoDefinitions"

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const [errorMsg, setErrorMsg] = useState("");

  const [currentFont, setCurrentFont] = useState("Sans Serif");
  const [nightMode, setNightMode] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setNightMode(prefersDark);
  }, []);

  useEffect(() => {
    document.body.className = nightMode ? 'dark' : '';
  }, [nightMode]);

  const nightModeToggle = () => {
    setNightMode(!nightMode);
  }

  const fetchEntry = async () => {
    setSearchResult([]);

    if(searchValue === "") {
      setErrorMsg("Whoops, can't be empty...")
      return;
    }

    const res = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + searchValue);
    const data = await res.json();

    if (data.title === "No Definitions Found" || !data) {
      setErrorMsg("no defs");
      return;
    }

    setErrorMsg("");
    setSearchResult(data);
  }

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      fetchEntry();
    }
  }

  return (
    <div id="app" className={`${currentFont === "Sans Serif" ? "Sans-Serif" : currentFont} ${nightMode ? "dark" : ""}`}>
      <header>
        <nav>
          <img src={logo} alt="logo" />
          <div className="controls-holder">
            <FontSelect currentFont={currentFont} setCurrentFont={setCurrentFont} />
            <div className="divider-vertical"></div>
            <NightModeToggle nightMode={nightMode} setNightMode={nightModeToggle} />
          </div>
        </nav>
        <div id="search-bar-holder">
          <input
          id='search-bar'
          className={errorMsg === "Whoops, can't be empty..." ? "search-err" : ""}
          placeholder="Search for any word..." 
          type="text"
          onKeyUp={handleKeyUp}
          onChange={(e) => setSearchValue(e.target.value)} />
          <button>
            <img onClick={() => fetchEntry()} src={searchIcon} alt="search" />
          </button>
        </div>
      </header>
      <main>
        {
          (Array.isArray(searchResult) && searchResult.length === 0) ?
          <>
            {
              errorMsg === "" ?
              <></>
              :
              <>
                {
                  errorMsg === "no defs" ?
                  <>
                    <NoDefinitions />
                  </>
                  :
                  <>
                    <p className="error-text">{errorMsg}</p>
                  </>
                }
              </>
            }
          </>
          :
          searchResult.map((el) => {
            return(<Entry entryObj={el}/>);
          })
        }
      </main>
    </div>
  )
}

export default App
