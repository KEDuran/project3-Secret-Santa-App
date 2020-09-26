import React from "react";
import { Row, Tooltip } from "antd";
import { SettingFilled, GiftFilled } from "@ant-design/icons";
import DetailCard from "./../../components/DetailCard/DetailCard";
import ResponsiveColumn from "./../../components/ResponsiveColumn";
import { AddButton } from "./../../components/Button";
import { Link } from "react-router-dom";
import "./style.css";

const dbEventsData = () => {};

const getActions = (data) => {
	return [
		// Icon buttons for future use
		<span>
			<Tooltip
				title={
					data.role === "organizer"
						? "Manage Your Gift Exchange"
						: "Add Gifts for Secret Santa"
				}
			>
				{data.role === "organizer" ? (
					<SettingFilled style={{ fontSize: "24px", color: "#2c6e49" }} />
				) : (
					<GiftFilled style={{ fontSize: "24px", color: "#2c6e49" }} />
				)}
			</Tooltip>
		</span>,
	];
};

const partyList = (eventsData) =>
	eventsData.map((data, index) => (
		<ResponsiveColumn key={index} lg={8}>
			<DetailCard
				title={data.description}
				actions={getActions(data)}
				date={data.date}
				startTime={data.startTime}
				location={data.location}
				participants={data.participants}
			/>
		</ResponsiveColumn>
	));

const EventsPage = () => {
	return (
		<div>
			<Row gutter={[30, 30]} style={{ padding: 30 }}>
				{partyList(dbEventsData)}
			</Row>
			<div className="center">
				<Row gutter={[30, 30]} style={{ padding: 20 }}>
					<ResponsiveColumn>
						<Link to="events/create">
							<AddButton text="Create New Event" />
						</Link>
					</ResponsiveColumn>
				</Row>
			</div>
		</div>
	);
};

export default EventsPage;
