import React from "react";

const ScoreBadge = ({ score }: { score: number }) => {
  const getBadgeStyles = () => {
    if (score > 69) {
      return {
        bgColor: "bg-green-100",
        textColor: "text-green-600",
        label: "Strong",
      };
    } else if (score > 49) {
      return {
        bgColor: "bg-yellow-100",
        textColor: "text-yellow-600",
        label: "Good Start",
      };
    } else {
      return {
        bgColor: "bg-red-100",
        textColor: "text-red-600",
        label: "Needs Work",
      };
    }
  };

  const { bgColor, textColor, label } = getBadgeStyles();

  return (
    <div className={`px-2.5 py-0.75 rounded-full ${bgColor}`}>
      <p className={`text-sm font-medium ${textColor}`}>{label}</p>
    </div>
  );
};

export default ScoreBadge;
