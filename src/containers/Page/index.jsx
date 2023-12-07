import React, { useEffect, useState } from "react";
import { Layout } from "..";
import { Wrapper } from "../commonStyled";
import {
	bigScreen,
	mediumScreen,
	tabletWidth,
	mobileWidth,
	getScreenDimensions,
	isScreenInPortrait,
} from "../../utils";
import { Articles } from "../../components";

const Page = () => {
	const [show, setShow] = useState(false);
	const _dimensions = getScreenDimensions();
	const {
		height,
		width,
		isPortrait,
		isMini,
		isMobile,
		isTablet,
		isSmallScreen,
		isMediumScreen,
		isBigScreen,
	} = _dimensions;

	useEffect(() => {}, []);

	useEffect(() => {
		setShow(true);
	}, []);

	const [dimensions, setDimensions] = useState({
		height: window.innerHeight,
		width: window.innerWidth,
		isBigScreen,
		isMediumScreen,
		isSmallScreen,
		isTablet,
		isMobile,
		isPortrait: isScreenInPortrait(),
	});

	useEffect(() => {
		const debouncedHandleResize = () => {
			setDimensions({
				height: window.innerHeight,
				width: window.innerWidth,
				isBigScreen,
				isMediumScreen,
				isSmallScreen,
				isTablet,
				isMobile,
				isPortrait: isScreenInPortrait(),
			});
		};

		const changeOrientation = () => {
			const isPortrait = isScreenInPortrait();
			setTimeout(
				() => setDimensions({ ...dimensions, isPortrait: isPortrait }),
				400
			);
		};

		window.addEventListener("resize", debouncedHandleResize);
		window.addEventListener("orientationchange", changeOrientation);
		return (_) => {
			window.removeEventListener("resize", debouncedHandleResize);
			window.removeEventListener("orientationchange", changeOrientation);
		};
	}, []);

	return (
		<Wrapper show={show ? 1 : 0}>
			{dimensions.isPortrait ? (
				<Layout dimensions={dimensions}>
					<Articles dimensions={dimensions} />
				</Layout>
			) : (
				<Layout dimensions={dimensions}>
					<Articles dimensions={dimensions} />
				</Layout>
			)}
		</Wrapper>
	);
};

export default Page;
