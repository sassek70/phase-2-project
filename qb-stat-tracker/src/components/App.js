import { useEffect, useState } from "react";
import Header from "./Header";
import QBList from "./QBList";

const playerUrl = `http://localhost:4000/quarterbacks`


function App() {
  const [playerList, setPlayerList] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [searchValue, setSearchValue] = useState(true)
  
  useEffect (() => {
    fetch(playerUrl)
    .then(res => res.json())
    .then((playerArray) => setPlayerList(playerArray))

  },[])

  function changeSearch(text) {
    setSearchTerm(text)
  }
  function changeSearchValue() {
    setSearchValue(!searchValue)
  }
  const filteredPlayersByName = playerList.filter(player => player.name.toLowerCase().includes(searchTerm.toLowerCase()))
  const filteredPlayersByTeam = playerList.filter(player => player.team.toLowerCase().includes(searchTerm.toLowerCase()))
  
  return (
    <div>
      <Header changeSearch = {changeSearch} changeSearchValue = {changeSearchValue} searchValue = {searchValue}
      />
      <QBList playerList={searchValue ? filteredPlayersByName : filteredPlayersByTeam}/>
    </div>
  )


}

export default App;
