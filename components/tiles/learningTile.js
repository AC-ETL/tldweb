import React from "react";

const LearningTile = ({ data }) => {
  console.log(data, "LearningTile");
  return (
    <>
      <div className="xl:w-[93.25%] lg:w-[99%] md:w-[87.3%] w-[38%]  h-[35px] rounded-[12px] border-[#1C2D56] border-[1px] flex">
        <p className="text-[#1C2D56] text-[16px] leading-[19px] font-medium my-[7.5px] mx-auto ">
          {data}
        </p>
      </div>
    </>
  );
};
export default LearningTile;
