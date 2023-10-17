import React from "react";
import { useParams } from "react-router-dom";

function StudyGuide() {
  let { langID } = useParams();
  return <div>StudyGuide for {langID}</div>;
}

export default StudyGuide;
