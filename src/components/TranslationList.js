import React from "react";
import TranslationListItem from "./TranslationListItem";

function TranslationList({ translations }) {
  return (
    <div className="profileText">
      <h1>Last Translations</h1>

      <ol>
        {translations.map((translation, index) => (
          <TranslationListItem key={index} translation={translation} />
        ))}
      </ol>
    </div>
  );
}

export default TranslationList;
