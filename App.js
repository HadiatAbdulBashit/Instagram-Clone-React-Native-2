import { config } from "@tamagui/config/v3";
import { useFonts } from "expo-font";
import { useCallback, useState } from "react";
import { FlatList, RefreshControl, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";

import { createTamagui, TamaguiProvider } from "tamagui";
import { StatusBar } from "expo-status-bar";
import Header from "./src/components/Header";
import Stories from "./src/components/Stories";
import Feeds from "./src/components/Feeds";

SplashScreen.preventAutoHideAsync();

const tamaguiConfig = createTamagui(config);

const App = () => {
	const [fontsLoaded, fontError] = useFonts({
		// @ts-ignore
		Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
		// @ts-ignore
		InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
		// @ts-ignore
		"StyleScript-Regular": require("./assets/fonts/StyleScript-Regular.ttf"),
	});

	const [isRefreshing, setIsRefreshing] = useState(false);

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded || fontError) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded, fontError]);

	if (!fontsLoaded && !fontError) {
		return null;
	}

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
			<Feeds />
		</>
	);

	const onRefresh = () => {
		console.log("App refreshed");
		setIsRefreshing(true);
		setTimeout(() => {
			setIsRefreshing(false);
		}, 2000);
	};

	return (
		<SafeAreaProvider>
			<SafeAreaView style={{ flex: 1 }}>
				<TamaguiProvider config={tamaguiConfig}>
					<StatusBar style='light' backgroundColor='black' />
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
							<RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
						}
					/>
				</TamaguiProvider>
			</SafeAreaView>
		</SafeAreaProvider>
	);
};

export default App;
