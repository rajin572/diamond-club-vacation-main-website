import { Fragment } from "react";

/** A description as text. A part written between two double stars is shown in bold (e.g. "**All Yom Tov Night Meals ...**"). */
export function DescriptionText({ text }: { text: string }) {
  return (
    <>
      {text.split("**").map((part, index) => (index % 2 === 1 ? <strong key={index}>{part}</strong> : <Fragment key={index}>{part}</Fragment>))}
    </>
  );
}

export default DescriptionText;
