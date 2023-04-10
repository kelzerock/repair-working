import RepairTitle from "@/components/Repair-block/Repair-title/Repair-title.component";
import textData from "@/constants/json/repaire.json";

const OvenPage = () => {
  return <RepairTitle data={textData["title-block"].oven} />;
};

export default OvenPage;
