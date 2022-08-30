import { relative } from "path";
import React from "react";
import Rectangle1 from "./Rectangle1.png";
export default function Champions({
  selectedItems,
  selectedState,
}: {
  selectedItems: any;
  selectedState: any;
}) {
  const styles = {
    text: {
      marginTop: "4rem",
      fontWeight: "700",
      fontSize: "2rem",
    },

    CharacterDiv: {
      display: "flex",
      justifyContent: "space-evenly",
      marginTop: "0.5rem",
      marginLeft: "26rem",
      marginRight: " 26rem",
    },

    logo: {
      height: " 4rem",
      borderRadius: "100%",
      border: "1px solid blue",
    },
    power: {
      display: "flex",
      justifyContent: "space-evenly",
      height: " 6rem",
      marginTop: "1rem",
      marginLeft: "28rem",
      marginRight: " 28rem",
      fontSize: "1rem",
      position :"relative"
    },
  };
  const removeItem = (x: any) => {
    selectedState(
      selectedItems.filter((item: any) => {
        return item !== x;
      })
    );
    const input = document.getElementById(x.name) as HTMLInputElement;
    input.checked = false;
  };
  return (
    <>
      <div className="container text-center" style={styles.text}>
        Your champions!{" "}
      </div>
      <div style={styles.CharacterDiv}>
        {selectedItems.length > 0 ? (
          selectedItems.map((e: any, i: any) => {
            return (
              <div style={{ position: "relative" }}>
                <img
                  onClick={() => {
                    removeItem(e);
                  }}
                  className="champion-img"
                  key={i}
                  src={e.image}
                  style={styles.logo}
                  alt=""
                />
                <div
                  onClick={() => {
                    removeItem(e);
                  }}
                  className="champion-cover"
                >
                  Remove
                </div>
              </div>
            );
          })
        ) : (
          <p style={{ height: "3rem", minWidth: "15rem", textAlign: "center" }}>
            Please select your champions
          </p>
        )}
      </div>
      <div style={styles.power} >
        <div >
          Power
          <p style={{ textAlign: "center", fontWeight: "bold" , fontSize: "large" }}>
            {selectedItems.length > 0
              ? (
                  selectedItems.reduce(
                    (n: any, { abilities }: { abilities: any }) =>
                      n +
                      abilities.find((x: any) => {
                        return x.abilityName === "Power";
                      }).abilityScore,
                    0
                  ) / selectedItems.length
                ).toFixed(2)
              : 0}
          </p>

          <div style={{ position: "absolute",top:"90%",fontSize:'70%'}}>*, Total are average for squad</div>
        </div>
        <div>
          Mobility
          <p style={{ textAlign: "center" , fontWeight: "bold" , fontSize: "large"}}>
            {selectedItems.length > 0
              ? (
                  selectedItems.reduce(
                    (n: any, { abilities }: { abilities: any }) =>
                      n +
                      abilities.find((x: any) => {
                        return x.abilityName === "Mobility";
                      }).abilityScore,
                    0
                  ) / selectedItems.length
                ).toFixed(2)
              : 0}
          </p>
        </div>
        <img src={Rectangle1} alt="fireSpot" />
        <div>
          Technique
          <p style={{ textAlign: "center" , fontWeight: "bold" , fontSize: "large" }}>
            {selectedItems.length > 0
              ? (
                  selectedItems.reduce(
                    (n: any, { abilities }: { abilities: any }) =>
                      n +
                      abilities.find((x: any) => {
                        return x.abilityName === "Technique";
                      }).abilityScore,
                    0
                  ) / selectedItems.length
                ).toFixed(2)
              : 0}
          </p>
        </div>
        <img src={Rectangle1} alt="fireSpot" />
        <div>
          Survivability
          <p style={{ textAlign: "center"  , fontWeight: "bold" , fontSize: "large"}}>
            {selectedItems.length > 0
              ? (
                  selectedItems.reduce(
                    (n: any, { abilities }: { abilities: any }) =>
                      n +
                      abilities.find((x: any) => {
                        return x.abilityName === "Survivability";
                      }).abilityScore,
                    0
                  ) / selectedItems.length
                ).toFixed(2)
              : 0}
          </p>
        </div>
        <div>
          Energy
          <p style={{ textAlign: "center", fontWeight: "bold" , fontSize: "large" }}>
            {selectedItems.length > 0
              ? (
                  selectedItems.reduce(
                    (n: any, { abilities }: { abilities: any }) =>
                      n +
                      abilities.find((x: any) => {
                        return x.abilityName === "Energy";
                      }).abilityScore,
                    0
                  ) / selectedItems.length
                ).toFixed(2)
              : 0}
          </p>
        </div>
      </div>
     
    </>
  );
}
