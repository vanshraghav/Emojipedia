import React from "react";
import emojipedia from "../emojipedia";
import Entry from "./entry";
function Emoji(one) {
  return (
    <Entry
      key={one.id}
      emoji={one.emoji}
      name={one.name}
      details={one.meaning}
    />
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(Emoji)}</dl>
    </div>
  );
}

export default App;
