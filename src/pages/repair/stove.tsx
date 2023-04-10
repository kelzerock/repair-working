import RepairTitle from "@/components/Repair-block/Repair-title/Repair-title.component";
import textData from "@/constants/json/repaire.json";

const StovePage = () => {
  return <RepairTitle data={textData["title-block"].stove} />;
};

export default StovePage;
