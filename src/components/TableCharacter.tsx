import "../App.css";

import Group13 from "./Group13.png";

import React, { useState } from "react";
export default function TableCharacter({
  Characters,
  selectedItems,
  selectedState,
  tagList,
  filterList,
  filterState,
}: {
  Characters: any;
  selectedItems: any;
  selectedState: any;
  tagList: any;
  filterList: any;
  filterState: any;
}) {
  const itemChecked = (e:any, event:any) => {
    debugger
    if(selectedItems.length <= 5){
      if (event.target.checked) {
        selectedState([...selectedItems, e]);
      } else {
        selectedState(
          selectedItems.filter((x:any) => {
            return x !== e;
          })
        );
      }
    }     
    else if(!event.target.checked){
      selectedState(
      selectedItems.filter((x:any) => {
        return x !== e;
      })
    );}else{
      event.target.checked = false
    }
  
  };
  const changeFilterState = async (x:any) => {
    debugger
    if(x == 'All'){
      filterState(
        await filterList.filter((item:any) => {
          return item  == x;
        })
      );
    }
    else{  
    if (filterList.includes(x)) {
      filterState(
        await filterList.filter((item:any) => {
          return item !== x;
        })
      );
    } else {
      await filterState([...filterList, x]);
    }}
  };
  const [checked] = React.useState(true);
  const [search, searchState] = useState("");
  const setSearch = (event:any) => {
    searchState(event.target.value);
  };
  return (
    <div>
      <div style={{ padding: "2rem 8rem", lineHeight: "3rem" }}>
        <div
          className="search-container"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="bg-search"></div>
          <input
            type="text"
            placeholder="Search Characters..."
            onInput={(event) => {
              setSearch(event);
            }}
            className="search-input"
          />
        </div>

        {tagList.map((x:any) => {
          return (
            <button
              onClick={() => {
                changeFilterState(x);
              }}
              type="button"
              className={
                "btn btn-outline-primary rounded-pill btn-sm mx-2" +
                " " +
                (filterList.includes(x) ? "active" : "")
              }
            >
              {filterList.includes(x)?<span> <img src={Group13} alt="fireSpot" /></span>:''}
             {" "}
              {x}
            </button>
          );
        })}
        <button
              onClick={() => {
                changeFilterState('All');
              }}
              type="button"
              className={
                "btn  btn-sm mx-2"
              }
              style={{
                textDecoration: "underline",color:"rgba(153, 153, 153, 1)"
              }}
            > 
              Clear All
            </button>
      </div>
      <div className="tableMargin">
        <table className="table table-sm " style={{ width: "100%" }}>
          <thead>
            <tr>
              <th style={{ width: "1%" }} scope="col">
                Character
              </th>
              <th style={{ width: "20%" }} scope="col"></th>
              <th style={{ width: "20%" }} scope="col">
                Tags
              </th>
              <th style={{ width: "10%" }} scope="col">
                Power
              </th>
              <th style={{ width: "10%" }} scope="col">
                Mobility
              </th>
              <th style={{ width: "10%" }} scope="col">
                Technique
              </th>
              <th style={{ width: "10%" }} scope="col">
                Survivability
              </th>
              <th style={{ width: "10%" }} scope="col">
                Energy
              </th>
            </tr>
          </thead>
          <tbody>
            {Characters.map((e: any, i: number) => {
              var isContained: Boolean = false;
              var isSearched: Boolean = false;
              if (e.tags) {
                e?.tags?.forEach((tag:any) => {
                  if (filterList.includes(tag.tag_name)) {
                    isContained = true;
                  }
                });
              }
              if (
                search === "" ||
                e.name.toLowerCase().includes(search.toLowerCase())
              ) {
                isSearched = true;
              }
              if ((filterList.length < 1 || isContained) && isSearched) {
                return (
                  <tr
                    className={selectedItems.includes(e) ? "selected" : ""}
                    key={i}
                  >
                    <th>
                      {" "}
                      <input
                        className="form-check-input mx-1"
                        type="checkbox"
                        value="true"
                        defaultChecked={
                          selectedItems.includes(e) ? checked : !checked
                        }
                        id={e.name}
                        onChange={(event) => {
                          itemChecked(e, event);
                        }}
                      />
                    </th>
                    <td>
                      <img
                        className="characterLogo"
                        src={e.image}
                        alt="fireSpot"
                      />
                      {e.name}
                    </td>
                    <td>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                         
                        {e.tags
                          ? e.tags.map((tagName:any) => {
                              return (
                                <button
                                  type="button"
                                  className="btn btn-outline-primary rounded-pill btn-sm mx-2"
                                >
                                  {tagName.tag_name}
                                </button>
                              );
                            })
                          : ""}
                      </div>
                    </td>
                    <td  className={e.abilities.map((ability:any) => {
                        if (ability.abilityName === "Power" && ability.abilityScore == 10) {
                          return ability.abilityScore;
                        } 
                      }) == ',,,10,' ? "red" : ''} style={ {  fontWeight: "bold" , fontSize: "large" }}>
                      {e.abilities.map((ability:any) => {
                        if (ability.abilityName === "Power") {
                          return ability.abilityScore;
                        } else {
                          return null;
                        }
                      })}
                    </td>
                    <td className={e.abilities.map((ability:any) => {
                        if (ability.abilityName === "Mobility" && ability.abilityScore == 10) {
                          return ability.abilityScore;
                        } 
                      }) == '10,,,,' ? "red" : ''} style={{  fontWeight: "bold" , fontSize: "large" }}>
                      {e.abilities.map((ability: any) => {
                        if (ability.abilityName === "Mobility") {
                          return ability.abilityScore;
                        } else {
                          return null;
                        }
                      })}
                    </td>
                    <td className={e.abilities.map((ability:any) => {
                        if (ability.abilityName === "Technique" && ability.abilityScore == 10) {
                          return ability.abilityScore;
                        } 
                      }) == ',10,,,' ? "red" : ''} style={{  fontWeight: "bold" , fontSize: "large" }}>
                      {e.abilities.map((ability: any) => {
                        if (ability.abilityName === "Technique") {
                          return ability.abilityScore;
                        } else {
                          return null;
                        }
                      })}
                    </td>
                    <td className={e.abilities.map((ability:any) => {
                        if (ability.abilityName === "Survivability" && ability.abilityScore == 10) {
                          return ability.abilityScore;
                        } 
                      }) == ',,10,,' ? "red" : ''} style={{  fontWeight: "bold" , fontSize: "large" }}>
                      {e.abilities.map((ability: any) => {
                        if (ability.abilityName === "Survivability") {
                          return ability.abilityScore;
                        } else {
                          return null;
                        }
                      })}
                    </td>
                    <td className={e.abilities.map((ability:any) => {
                        if (ability.abilityName === "Energy" && ability.abilityScore == 10) {
                          return ability.abilityScore;
                        } 
                      }) == ',,,,10' ? "red" : ''} style={{  fontWeight: "bold" , fontSize: "large" }} >
                      {e.abilities.map((ability: any) => {
                        if (ability.abilityName === "Energy") {
                          return ability.abilityScore;
                        } else {
                          return null;
                        }
                      })}
                    </td>
                  </tr>
                );
              } else {
                return null;
              }
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
