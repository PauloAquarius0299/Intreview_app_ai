import InterviewCard from "./InterviewCard";
import { Interview } from "@/types";

type Props = {
  interviews: Interview[];
};

const InterviewList = ({ interviews }: Props) => {
  return (
    <div className="flex flex-wrap gap-4">
      {interviews.map((interview, index) => (
        <InterviewCard key={interview.id} {...interview} index={index} />
      ))}
    </div>
  );
};

export default InterviewList;