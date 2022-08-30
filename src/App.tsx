import "./App.css";
// import jsonData from './data/characters.json'
// import type { Character } from './types'
import Navbar from "./components/Navbar";
import Champions from "./components/Champions";
import TableCharacter from "./components/TableCharacter";
import { useState } from "react";
import Characters from "./data/characters.json";

function App() {
  const allItems = Characters;
  const data = Characters;
  const [selected, selectedState] = useState([]);
  var tagList: String[] = [];
  allItems.forEach((x) => {
    x?.tags?.forEach((y) => {
      if (!tagList.includes(y.tag_name)) {
        tagList.push(y.tag_name);
      }
    });
  });
  const [filterList, filterState] = useState([]);
  return (
    <>
      <Navbar />
      <Champions selectedItems={selected} selectedState={selectedState} />
      <TableCharacter
        Characters={data}
        selectedItems={selected}
        selectedState={selectedState}
        tagList={tagList}
        filterList={filterList}
        filterState={filterState}
      />
    </>
  );
}

export default App;
