import React from "react";
import Expand from "./expand";

function App() {
  return (
    <div style={{ width: "400px", margin: "auto", textAlign: "center" }}>
      

      <Expand
        question="What is React?"
        answer="React is a JavaScript library used to build user interfaces, especially single-page applications (SPAs).
                It helps create fast and dynamic web pages."
      />

      <Expand
        question="What is a Component?"
        answer="A component is a reusable piece of UI.
        Example: a button, navbar, card, footer, etc."
      />
      <Expand
        question="What is Props?"
        answer="In React, props are used to pass information from one component to another."
      />

      <Expand
        question="What is State?"
        answer="State is an object that holds dynamic data about a component that can change over time."
      />

      <Expand
        question="What is JSX?"
        answer="JSX is a syntax extension that looks like HTML and is used to describe the UI structure in React components."
      />

      

      <Expand
        question="What are Hooks?"
        answer="Hooks are functions that let you use state and other React features in functional components (e.g., useState, useEffect)."
      />

      <Expand
        question="What is useState?"
        answer="useState is a Hook that lets you add state to functional components and update it over time."
      />

      <Expand
        question="What is useEffect?"
        answer="useEffect is a Hook for running side effects in functional components, like data fetching or subscribing to events."
      />
    </div>
  );
}

export default App;
