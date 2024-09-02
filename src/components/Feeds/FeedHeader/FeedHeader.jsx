import { Text } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";

import ReusableStoryAvatar from "../../reusable/ReusableStoryAvatar";
import ReusableHeader from "../../reusable/ReusableHeader.component";

const LeftSideComponent = (props) => {
	return (
		<>
			<ReusableStoryAvatar size={40} imageUrl={props.item.imageUrl} />
			<Text style={{ fontWeight: "bold" }}>{props.item.username}</Text>
		</>
	);
};

const RightSideComponent = (props) => {
	return <FontAwesome6 name='ellipsis' size={16} color='black' />;
};

const FeedHeader = (props) => {
	return (
		<ReusableHeader
			leftSideComponent={<LeftSideComponent {...props} />}
			rightSideComponent={RightSideComponent(props)} // sama saja dengan diatas
		/>
	);
};

export default FeedHeader;
