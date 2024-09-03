import { FontAwesome6 } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

const HeaderLeftSide = () => (
	<Text
		style={{
			fontSize: 35,
			fontFamily: "StyleScript-Regular",
			textAlignVertical: "center",
			// paddingVertical: 10,
		}}
	>
		Instagram
	</Text>
);

const HeaderRightSide = () => (
	<View style={{ flexDirection: "row", gap: 9 * 2, alignItems: "center" }}>
		<TouchableOpacity activeOpacity={0.2}>
			<FontAwesome6 name='square-plus' size={24} color='black' />
		</TouchableOpacity>
		<TouchableOpacity activeOpacity={0.2}>
			<FontAwesome6 name='heart' size={24} color='black' />
		</TouchableOpacity>
		<TouchableOpacity activeOpacity={0.2}>
			<FontAwesome6 name='comment' size={24} color='black' />
		</TouchableOpacity>
	</View>
);

const Header = () => {
	return (
		<View
			style={{
				flexDirection: "row",
				justifyContent: "space-between",
				paddingHorizontal: 10,
				// backgroundColor: "yellow",
			}}
		>
			<HeaderLeftSide />
			<HeaderRightSide />
		</View>
	);
};

export default Header;
