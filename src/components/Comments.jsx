import { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { useCallback, useMemo } from "react";
import {
	Image,
	ScrollView,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import ReusableStoryAvatar from "./reusable/ReusableStoryAvatar";
import getPostDateText from "../utils/postDateText";

// Data and snap points for BottomSheet
const data = [
	{
		username: "Juan Dwiky",
		imageUrl:
			"https://i.pinimg.com/736x/e8/02/e7/e802e799104b921a6b6520b01032abd4.jpg",
		comment:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, temporibus, aliquam reprehenderit ut soluta quis amet non architecto at commodi a nisi. Provident repellendus expedita, eos quas consequatur nihil facilis est hic deserunt assumenda quo perspiciatis esse ratione ad ex eum sint unde. Illum, perferendis distinctio beatae at eum quidem. At sequi quae nulla odit praesentium exercitationem quas nihil soluta aspernatur nemo eligendi reiciendis quam, ipsa ratione laborum, voluptatibus nisi a quis facere. A laboriosam, illo quis quaerat porro, eaque facere impedit odit incidunt ea animi quasi quas! Soluta eaque recusandae expedita dolores.",
		postDate: Date.now() - 60 * 60 * 24 * 1000 * 199,
		hasActiveStory: true,
	},
	{
		username: "asdf",
		imageUrl:
			"https://i.pinimg.com/736x/e8/02/e7/e802e799104b921a6b6520b01032abd4.jpg",
		comment:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, temporibus, aliquam reprehenderit ut soluta quis amet non architecto at commodi a nisi. Provident repellendus expedita, eos quas consequatur nihil facilis est hic deserunt assumenda quo perspiciatis esse ratione ad ex eum sint unde. Illum, perferendis distinctio beatae at eum quidem. At sequi quae nulla odit praesentium exercitationem quas nihil soluta aspernatur nemo eligendi reiciendis quam, ipsa ratione laborum, voluptatibus nisi a quis facere. A laboriosam, illo quis quaerat porro, eaque facere impedit odit incidunt ea animi quasi quas! Soluta eaque recusandae expedita dolores.",
		postDate: Date.now() - 60 * 60 * 24 * 1000 * 199,
		hasActiveStory: false,
	},
	{
		username: "1234",
		imageUrl:
			"https://i.pinimg.com/736x/e8/02/e7/e802e799104b921a6b6520b01032abd4.jpg",
		comment:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, temporibus, aliquam reprehenderit ut soluta quis amet non architecto at commodi a nisi. Provident repellendus expedita, eos quas consequatur nihil facilis est hic deserunt assumenda quo perspiciatis esse ratione ad ex eum sint unde. Illum, perferendis distinctio beatae at eum quidem. At sequi quae nulla odit praesentium exercitationem quas nihil soluta aspernatur nemo eligendi reiciendis quam, ipsa ratione laborum, voluptatibus nisi a quis facere. A laboriosam, illo quis quaerat porro, eaque facere impedit odit incidunt ea animi quasi quas! Soluta eaque recusandae expedita dolores.",
		postDate: Date.now() - 60 * 60 * 24 * 1000 * 199,
		hasActiveStory: true,
	},
];

const Comments = () => {
	const renderItem = useCallback(({ item }) => {
		const postDateText = getPostDateText(item.postDate);
		return (
			<View
				style={{
					flexDirection: "row",
					paddingHorizontal: 16,
					paddingVertical: 8,
					gap: 16,
					// backgroundColor: "lightgrey",
					overflow: "hidden",
					// borderWidth: 2,
					// borderColor: "black",
				}}
			>
				<ReusableStoryAvatar
					size={40}
					imageUrl={item.imageUrl}
					hasActiveStory={item.hasActiveStory}
				/>
				<View style={{ flexDirection: "column", flex: 1 }}>
					<Text style={{ textAlign: "justify" }}>
						<Text style={{ fontWeight: "bold" }}>{item.username + " "}</Text>
						<Text style={{}}>{item.comment}</Text>
					</Text>
					<View
						style={{
							flex: 1,
							flexDirection: "row",
							alignItems: "center",
							gap: 8,
							marginTop: 8,
						}}
					>
						<Text style={{ color: "gray" }}>{postDateText}</Text>
						<TouchableOpacity>
							<Text style={{ color: "gray" }}>Reply</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		);
	}, []);

	return (
		<>
			<BottomSheetFlatList
				data={data}
				keyExtractor={(i) => i.username}
				renderItem={renderItem}
			/>
			<View style={{ flexDirection: "column" }}>
				<ScrollView horizontal>
					<Text
						style={{
							padding: 16,
							borderColor: "lightgray",
							borderBottomWidth: 1,
							borderTopWidth: 1,
							fontSize: 35,
							letterSpacing: 8,
						}}
						numberOfLines={1}
					>
						😊😂🤣❤😍😒👌😘💕😁👍🙌
					</Text>
				</ScrollView>
				<View
					style={{
						flex: 0,
						flexDirection: "row",
						alignItems: "center",
						padding: 16,
						gap: 8,
					}}
				>
					<ReusableStoryAvatar size={40} imageUrl={data[0].imageUrl} />
					<TextInput
						placeholder='Comment as Hadiat'
						style={{ padding: 8, flexGrow: 1 }}
					/>
					<TouchableOpacity>
						<Text>Post</Text>
					</TouchableOpacity>
				</View>
			</View>
		</>
	);
};

export default Comments;
