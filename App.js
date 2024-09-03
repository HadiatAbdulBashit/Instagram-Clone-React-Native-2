import { config } from "@tamagui/config/v3";
import { useFonts } from "expo-font";
import { useCallback, useMemo, useRef, useState } from "react";
import { Button, FlatList, RefreshControl, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";
import BottomSheet from "@gorhom/bottom-sheet";
import { createTamagui, TamaguiProvider } from "tamagui";
import { StatusBar } from "expo-status-bar";

import Header from "./src/components/Header";
import Stories from "./src/components/Stories";
import Feeds from "./src/components/Feeds";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Comments from "./src/components/Comments";

SplashScreen.preventAutoHideAsync();

const tamaguiConfig = createTamagui(config);

const App = () => {
	// Load fonts
	const [fontsLoaded, fontError] = useFonts({
		// @ts-ignore
		Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
		// @ts-ignore
		InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
		// @ts-ignore
		"StyleScript-Regular": require("./assets/fonts/StyleScript-Regular.ttf"),
	});

	const [isRefreshing, setIsRefreshing] = useState(false);
	const sheetRef = useRef(null);
	const snapPoints = useMemo(() => ["25%", "50%", "100%"], []);

	// Handle hiding the splash screen
	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded || fontError) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded, fontError]);

	// Handle refresh control
	const onRefresh = useCallback(() => {
		console.log("App refreshed");
		setIsRefreshing(true);
		setTimeout(() => {
			setIsRefreshing(false);
		}, 2000);
	}, []);

	// BottomSheet callbacks
	const handleSheetChange = useCallback((index) => {
		console.log("handleSheetChange", index);
	}, []);

	const handleSnapPress = useCallback((index) => {
		sheetRef.current?.snapToIndex(index);
	}, []);

	const handleClosePress = useCallback(() => {
		sheetRef.current?.close();
	}, []);

	const handleOpenPress = useCallback(() => {
		sheetRef.current?.open();
	}, []);

	// Return null while fonts are loading or an error occurs
	if (!fontsLoaded && !fontError) {
		return null;
	}

	console.log(sheetRef.current);

	// Main content component
	const ContentComponent = () => (
		<>
			<Header />
			<Stories />
			<View
				style={{
					width: "100%",
					height: 1,
					backgroundColor: "lightgray",
					flexDirection: "row",
					marginVertical: 10,
				}}
			/>
			<Feeds showComment={handleSnapPress} />
		</>
	);

	return (
		<SafeAreaProvider>
			<SafeAreaView style={{ flex: 1 }}>
				<GestureHandlerRootView style={{ flex: 1 }}>
					<TamaguiProvider config={tamaguiConfig}>
						<StatusBar style='light' backgroundColor='black' />
						<View>
							<FlatList
								data={[{}]}
								renderItem={ContentComponent}
								contentContainerStyle={{
									justifyContent: "flex-start",
									flex: 1,
									backgroundColor: "white",
								}}
								onLayout={onLayoutRootView}
								refreshControl={
									<RefreshControl
										refreshing={isRefreshing}
										onRefresh={onRefresh}
									/>
								}
							/>
							<BottomSheet
								ref={sheetRef}
								snapPoints={snapPoints}
								onChange={handleSheetChange}
							>
								<Comments />
							</BottomSheet>
						</View>
					</TamaguiProvider>
				</GestureHandlerRootView>
			</SafeAreaView>
		</SafeAreaProvider>
	);
};

export default App;
