import { SyntheticEvent, useState } from "react";
import styles from "./CTS.module.css";
import Header from "./header";
import pokemon from "./pokemon";
import minisearch from "minisearch";

const pokemonNatures = [
  "Adamant",
  "Bashful",
  "Brave",
  "Bold",
  "Calm",
  "Careful",
  "Docile",
  "Gentle",
  "Hardy",
  "Hasty",
  "Impish",
  "Jolly",
  "Lax",
  "Lonely",
  "Mild",
  "Modest",
  "Naive",
  "Naughty",
  "Quiet",
  "Quirky",
  "Rash",
  "Relaxed",
  "Sassy",
  "Serious",
  "Timid",
];

export const statsShort = ["HP", "Atk", "Def", "SpA", "SpD", "Spe"];
// Search for a pokemon in any shop
const CTS = () => {
  const [ivs, setIvs] = useState<any>({
    HP: 31,
    Atk: 31,
    Def: 31,
    SpA: 31,
    SpD: 31,
    Spe: 31,
  });
  const [evs, setEvs] = useState<any>({
    ev_HP: 0,
    ev_Atk: 31,
    ev_Def: 0,
    ev_SpA: 0,
    ev_SpD: 0,
    ev_Spe: 0,
  });
  const [searchRes, setSearchRes] = useState<any>([]);
  const [pokemonName, setPokemonName] = useState("");

  const search = new minisearch({
    fields: ["name", "id"],
    storeFields: ["name", "type", "id"],
  });

  search.addAll(pokemon);

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const data = new FormData(e.target as HTMLFormElement);
    const formData = Object.fromEntries(data.entries());
  };
  const onChange = (e: SyntheticEvent) => {
    // Update output when input changes
    if (e.target instanceof HTMLInputElement) {
      if (e.target.name[0] !== "e") {
        let newValue = ivs;
        newValue[e.target.name] = e.target.value;
        setIvs({ ...newValue });
      } else {
        let newValue = evs;
        newValue[e.target.name] = e.target.value;
        setEvs({ ...newValue });
      }
    }
  };

  const onSearch = (e: SyntheticEvent) => {
    if (e.target instanceof HTMLInputElement) {
      const results = search.autoSuggest(e.target.value, { fuzzy: 0.2 });
      setSearchRes(results);
    }
  };

  return (
    <>
      <Header />
      <div>
        <form onSubmit={onSubmit} onChange={onChange}>
          <h1 className="text-4xl text-center mt-5 ">
            {" "}
            <span className="font-bold">CTS</span>: find any Pokémon!
          </h1>
          <div className={styles.container}>
            <div
              className={styles.input_container}
              style={{ gridRow: "span 2" }}
            >
              <label htmlFor="pokemonName">
                Pokémon Name <span style={{ color: "red" }}>*</span>
              </label>
              <input
                required={true}
                className={styles.input}
                value={pokemonName}
                onChange={(e) => {
                  setPokemonName(e.target.value);
                  onSearch(e);
                }}
                type="text"
                name="pokemonName"
              />
              <div
                className={
                  styles.search_results + " bg-blue-300 rounded text-black"
                }
              >
                {searchRes.slice(0, 10).map((res: any, idx: number) => (
                  <div
                    key={idx}
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setPokemonName(res.suggestion);
                      setSearchRes([]);
                    }}
                  >
                    {res.suggestion}
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.input_container}>
              <label htmlFor="iv">Test IV</label>
              <input className={styles.input} type="slider" name="iv" />
            </div>
            <div className={styles.input_container}>
              <label htmlFor="nature">Nature</label>
              <div className="inline-block relative w-64">
                <select
                  name="nature"
                  className="block appearance-none w-full bg-gray-800 border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                >
                  {pokemonNatures.map((e, idx) => (
                    <option key={idx} value={e}>
                      {e}
                    </option>
                  ))}
                  <option>awd</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className={styles.slider}>
              <h2 className="text-2xl text-center">IVs</h2>
              {statsShort.map((e, idx) => (
                <div key={idx} className={styles.slider_container}>
                  <label
                    htmlFor={e}
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    <p style={{ width: "20px" }}>{e}</p>
                  </label>
                  <input
                    name={e}
                    type="range"
                    defaultValue="31"
                    step="1"
                    min="0"
                    max="31"
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                  />
                  <p style={{ width: "10px" }}>{ivs[e]}</p>
                </div>
              ))}
            </div>
            <div className={styles.big_slider}>
              <h2 className="text-2xl text-center">EVs</h2>
              {statsShort.map((e, idx) => (
                <div key={idx} className={styles.slider_container}>
                  <label
                    htmlFor={e}
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    <p style={{ width: "20px" }}>{e}</p>
                  </label>
                  <input
                    name={"ev_" + e}
                    type="range"
                    defaultValue="0"
                    step="1"
                    min="0"
                    max="255"
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                  />
                  <p style={{ width: "10px" }}>{evs["ev_" + e]}</p>
                </div>
              ))}
            </div>
            <div className="flex align-center justify-center my-[30%]">
              <button
                type="submit"
                className="bg-blue-300 hover:bg-blue-600 text-blue-900 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded text-2xl"
              >
                Find!
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default CTS;
