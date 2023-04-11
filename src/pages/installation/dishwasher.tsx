import Installation from "@/components/Installation/Installation.component";
import textData from "@/constants/json/installation.json"


const DishwasherPageInstall = () => {
  return (
    <>
<Installation data={textData.dishwasher.data} />
    </>
  );
};

export default DishwasherPageInstall;
