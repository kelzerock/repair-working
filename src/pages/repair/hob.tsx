import { Benefits } from "@/components/benefits";
import RepairCalculating from "@/components/Repair-block/Repair-calculating/Repair-calculating.component";
import RepairInfo from "@/components/Repair-block/Repair-info/Repair-info.component";
import RepairTitle from "@/components/Repair-block/Repair-title/Repair-title.component";
import textData from "@/constants/json/repaire.json";
import textDataPrice from "@/constants/json/repaire-price.json";
import RepairPrice from "@/components/Repair-block/Repair-price/RepairPrice.component";
import { Reviews } from "@/components/reviews";

const HobPage = () => {
  return (
    <>
      <RepairTitle data={textData["title-block"].hob} />
      <Benefits />
      <RepairCalculating />
      <RepairInfo />
      <RepairPrice data={textDataPrice.hob.data}/>
      <Reviews />
    </>
  );
};

export default HobPage;
