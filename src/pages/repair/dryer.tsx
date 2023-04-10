import RepairTitle from "@/components/Repair-block/Repair-title/Repair-title.component";
import textData from "@/constants/json/repaire.json";

const DryerPage = () => {
  return <RepairTitle data={textData["title-block"].dryer} />;
};

export default DryerPage;
