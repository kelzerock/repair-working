import RepairTitle from "@/components/Repair-block/Repair-title/Repair-title.component";
import textData from "@/constants/json/repaire.json";

const DishwasherPage = () => {
  return <RepairTitle data={textData["title-block"].dishwasher} />;
};

export default DishwasherPage;
