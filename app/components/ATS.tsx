import React from "react";

interface ATSProps {
  score: number;
  suggestions: { type: "good" | "improve"; tip: string }[];
}

const ATS = ({ score, suggestions }: ATSProps) => {
  const getGradientClass = () => {
    if (score > 69) return "from-green-100";
    if (score > 49) return "from-yellow-100";
    return "from-red-100";
  };

  const getIconPath = () => {
    if (score > 69) return "/icons/ats-good.svg";
    if (score > 49) return "/icons/ats-warning.svg";
    return "/icons/ats-bad.svg";
  };

  return (
    <div
      className={`bg-gradient-to-r ${getGradientClass()} to-white rounded-2xl shadow-md p-6`}
    >
      <div className="flex items-center gap-4 mb-4">
        <img src={getIconPath()} alt="ATS Icon" className="w-8 h-8" />
        <h3 className="text-2xl font-bold">ATS Score - {score}/100</h3>
      </div>

      <div className="mb-4">
        <h4 className="text-lg font-semibold mb-2">ATS Compatibility</h4>
        <p className="text-gray-600 mb-4">
          Your resume's compatibility with Applicant Tracking Systems (ATS) that
          employers use to filter candidates.
        </p>
      </div>

      <ul className="space-y-2 mb-4">
        {suggestions.map((suggestion, index) => (
          <li key={index} className="flex items-start gap-2">
            <img
              src={
                suggestion.type === "good"
                  ? "/icons/check.svg"
                  : "/icons/warning.svg"
              }
              alt={suggestion.type}
              className="w-4 h-4 mt-1"
            />
            <span className="text-sm">{suggestion.tip}</span>
          </li>
        ))}
      </ul>

      <p className="text-sm text-gray-500 italic">
        Keep improving your ATS score to increase your chances of getting
        noticed by employers.
      </p>
    </div>
  );
};

export default ATS;
