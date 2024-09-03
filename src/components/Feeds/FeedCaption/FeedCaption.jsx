import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

//TODO: branch name suggestion: challenge-hari-ketiga
// TODO: buat agar text more-nya sejajar dengan caption, sebelum di klik more itu caption yang tampil maksimal 2 baris
// TODO: dan setelah di klik more nya, semua caption tampil
const FeedCaption = (props) => {
	const [showAll, setShowAll] = useState(false);
	const moreHandler = () => {
		setShowAll(!showAll);
	};

	return (
		<View
			style={{ flexDirection: "row", marginVertical: 10, flexWrap: "wrap" }}
		>
			<Text numberOfLines={showAll ? 0 : 2} style={{ fontWeight: "bold" }}>
				{props.item.username + " "}
				<Text style={{ fontWeight: "normal" }} onPress={moreHandler}>
					{props.item.feed.caption}
				</Text>
			</Text>
			{showAll === false && (
				<TouchableOpacity
					style={{ alignItems: "center" }}
					onPress={moreHandler}
				>
					<Text style={{ color: "gray" }}>more</Text>
				</TouchableOpacity>
			)}
		</View>
	);
};

export default FeedCaption;
