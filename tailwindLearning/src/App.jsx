import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);
  let passwordRef = useRef(null);
  const getPassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    if (numbers) str += "0123456789";
    if (symbols) str += "!@#$%^&*()_+";
    for (let i = 1; i <= length; i++) {
      let index = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(index);
    }
    setPassword(pass);
  }, [length, numbers, symbols, setPassword]);

  const CopyToclipBoard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    getPassword();
  }, [getPassword, length, numbers, symbols]);

  return (
    <>
      <div className="bg-slate-300 text-slate-800 px-5 py-5 rounded-lg mt-10 shadow-lg w-1/3 mx-auto">
        <h1 className="text-4xl text-center pb-4">Password Generator</h1>
        <div className="flex justify-center gap-5 ">
          <input
            type="text"
            name="password"
            value={password}
            placeholder="password"
            className="rounded-md px-5 py-2 w-full bg-slate-100 outline-none"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={CopyToclipBoard}
            type="button"
            className="bg-slate-500 rounded-md py-1 px-3 text-slate-50"
          >
            Copy
          </button>
        </div>
        <div className="flex justify-between gap-2 mt-5 items-center ">
          <input
            type="range"
            min={8}
            max={16}
            value={length}
            className="cursor-pointer w-1/4"
            onChange={(e) => setLength(e.target.value)}
          />
          <label htmlFor="range">Length: {length}</label>
          <div className="flex justify-center items-center gap-2">
            <input
              type="checkbox"
              id="numbers"
              className="w-5 h-5"
              value={numbers}
              onChange={() => setNumbers((prev) => !prev)}
            />
            <label htmlFor="numbers">Numbers</label>
          </div>
          <div className="flex justify-center items-center gap-2">
            <input
              type="checkbox"
              id="symbols"
              value={symbols}
              className="w-5 h-5"
              onChange={() => setSymbols((prev) => !prev)}
            />
            <label htmlFor="symbols">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
