import React from "react";
import { cn } from "~/lib/utils";
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionContent,
} from "./Accordion";

// Helper component for score badge
const ScoreBadge = ({ score }: { score: number }) => {
  const getBadgeStyles = () => {
    if (score > 69) {
      return {
        bgColor: "bg-green-100",
        textColor: "text-green-600",
        icon: "/icons/check.svg",
      };
    } else if (score > 39) {
      return {
        bgColor: "bg-yellow-100",
        textColor: "text-yellow-600",
        icon: "/icons/warning.svg",
      };
    } else {
      return {
        bgColor: "bg-red-100",
        textColor: "text-red-600",
        icon: "/icons/warning.svg",
      };
    }
  };

  const { bgColor, textColor, icon } = getBadgeStyles();

  return (
    <div
      className={cn(
        "flex items-center gap-1.5 px-2 py-0.75 rounded-full",
        bgColor
      )}
    >
      <img src={icon} alt="status" className="w-3 h-3" />
      <span className={cn("text-xs font-medium", textColor)}>{score}/100</span>
    </div>
  );
};

// Helper component for category header
const CategoryHeader = ({
  title,
  categoryScore,
}: {
  title: string;
  categoryScore: number;
}) => {
  return (
    <div className="flex items-center justify-between w-full gap-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      <ScoreBadge score={categoryScore} />
    </div>
  );
};

// Helper component for category content
const CategoryContent = ({
  tips,
}: {
  tips: { type: "good" | "improve"; tip: string; explanation: string }[];
}) => {
  return (
    <div className="space-y-4">
      {/* Tips grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {tips.map((tip, index) => (
          <div key={index} className="flex items-start gap-2">
            <img
              src={
                tip.type === "good" ? "/icons/check.svg" : "/icons/warning.svg"
              }
              alt={tip.type}
              className="w-4 h-4 mt-1 flex-shrink-0"
            />
            <span className="text-sm font-medium">{tip.tip}</span>
          </div>
        ))}
      </div>

      {/* Explanation boxes */}
      <div className="space-y-3">
        {tips.map((tip, index) => (
          <div
            key={index}
            className={cn(
              "p-3 rounded-lg border-l-4",
              tip.type === "good"
                ? "bg-green-50 border-green-400"
                : "bg-red-50 border-red-400"
            )}
          >
            <p className="text-sm text-gray-700">{tip.explanation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Details = ({ feedback }: { feedback: Feedback }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">Detailed Feedback</h2>

      <Accordion allowMultiple>
        <AccordionItem id="tone-style">
          <AccordionHeader itemId="tone-style">
            <CategoryHeader
              title="Tone & Style"
              categoryScore={feedback.toneAndStyle?.score || 0}
            />
          </AccordionHeader>
          <AccordionContent itemId="tone-style">
            <CategoryContent tips={feedback.toneAndStyle?.tips || []} />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem id="content">
          <AccordionHeader itemId="content">
            <CategoryHeader
              title="Content"
              categoryScore={feedback.content?.score || 0}
            />
          </AccordionHeader>
          <AccordionContent itemId="content">
            <CategoryContent tips={feedback.content?.tips || []} />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem id="structure">
          <AccordionHeader itemId="structure">
            <CategoryHeader
              title="Structure"
              categoryScore={feedback.structure?.score || 0}
            />
          </AccordionHeader>
          <AccordionContent itemId="structure">
            <CategoryContent tips={feedback.structure?.tips || []} />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem id="skills">
          <AccordionHeader itemId="skills">
            <CategoryHeader
              title="Skills"
              categoryScore={feedback.skills?.score || 0}
            />
          </AccordionHeader>
          <AccordionContent itemId="skills">
            <CategoryContent tips={feedback.skills?.tips || []} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Details;
