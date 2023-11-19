import Preloader from "../../components/preloader/Preloader";
import { BannersView } from "./view/BannersView";

export const BannersScreen = () => {
  return (
    <div>
      <Preloader />
      <BannersView />
    </div>
  );
};
