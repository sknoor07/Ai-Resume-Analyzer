
import React from "react";
import Welcomebanner from "./_components/welcomebanner";
import AiTools from "./_components/AiTools";
import History from "./_components/History";
function Dashboard() {
    return (
        <div>
            <Welcomebanner />
            <AiTools/>
            <History/>
        </div>
    );
}
export default Dashboard;