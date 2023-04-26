import Installation from "@/components/Installation/Installation.component";
import textData from "@/constants/json/installation.json"


const WasherPageInstall = () => {
  return (
    <>
<Installation data={textData.washer.data} />
    </>
  );
};

export default WasherPageInstall;
