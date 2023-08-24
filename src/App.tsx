import { useState } from "react"

import logo from "./assets/images/logo.svg"
import searchIcon from "./assets/images/icon-search.svg"

import "./css/App.css"
import FontSelect from './components/FontSelect'
import Entry from './components/Entry'
import NightModeToggle from "./components/NightModeToggle"

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([])

  const [currentFont, setCurrentFont] = useState("Sans Serif");
  const [nightMode, setNightMode] = useState(false);

  const nightModeToggle = () => {
    setNightMode(!nightMode);
  }

  const fetchEntry = async () => {
    if(searchValue === "")
      return;

    const res = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + searchValue);
    const data = await res.json();
    setSearchResult(data);
    console.log(data);
    console.log(searchResult)
  }

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      fetchEntry();
    }
  }

  return (
    <div id="app" className={currentFont === "Sans Serif" ? "Sans-Serif" : currentFont}>
      <header>
        <nav>
          <img src={logo} alt="logo" />
          <div className="controls-holder">
            <FontSelect currentFont={currentFont} setCurrentFont={setCurrentFont} />
            <NightModeToggle nightMode={nightMode} setNightMode={nightModeToggle} />
          </div>
        </nav>
        <div id="search-bar-holder">
          <input
          id='search-bar'
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
          <></>
          :
          searchResult.map((el, i) => {
            return(<Entry entryObj={el}/>);
          })
        }
      </main>
    </div>
  )
}

export default App
