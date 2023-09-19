import React from "react";
import { Past3Months, RankingComponent, SmallInfoCard } from "../components"

const Overview = () => {
	return (
		<div className="w-full h-full grid grid-cols-2 items-center content-center gap-4">
			<Past3Months />
			<SmallInfoCard />
			<RankingComponent />
			<SmallInfoCard />
		</div>
	);
};

export default Overview;
