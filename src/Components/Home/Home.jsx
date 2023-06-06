import React from "react";
import Navbar from "../Navbar/Navbar";
import HomePage from "../HomePage/HomePage";
import DealsPage from "../DealsPage/DealsPage"
import SeasonalPage from "../SeasonalPage/SeasonalPage";
import MenPage from "../Men/MenPage";
import WomenPage from "../Women/WomenPage"
import Footer from "../Footer/Footer";
import FabricPage from "../Fabric/FabricPage";
import Visited from "../Visited/Visited"
import CoppyRight from "../CoppyRight/CoppyRight";
import "./Home.css"
 
function Home() {
  return <div className="homemain-container-allcomponent">
{/* <Navbar /> */}
<HomePage />
<DealsPage />

<SeasonalPage />
<MenPage />
<WomenPage />
<FabricPage />
<Visited />
<Footer />
<CoppyRight />
 {/* <div style={{marginTop:"1000px"}}><SeasonalPage /></div> */}

  </div>;
}

export default Home;
