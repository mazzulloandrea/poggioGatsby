import styled, { css } from "styled-components";

export const Wrapper = styled.section`
	margin: 5% 0;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

export const Article = styled.article`
	float: left;
	width: 50%;
	height: ${(props) => props.height || "60vh"};
	${(props) =>
		props.ismobile || props.ismini
			? css`
					width: 100%;
			  `
			: css``};
	${(props) =>
		props.istablet
			? css`
					width: 100%;
			  `
			: css``};
	${(props) => (props.issmallscreen ? css`` : css``)};
	${(props) => (props.isbigscreen ? css`` : css``)};
	${(props) =>
		props.fullwidth
			? css`
					width: 100%;
					padding: 5vh 0;
			  `
			: css``};
	${(props) =>
		props.full
			? css`
					margin: 50px 0;
					width: 100vw;
					> img {
						width: 100%;
					}
			  `
			: css``}
`;

export const TextWrapper = styled.div`
	padding: 5%;
	${(props) =>
		props.issmallscreen
			? props.isportrait
				? css``
				: css`
						padding: 4%;
				  `
			: css``}
	${(props) => (props.ismobile ? css`` : css``)};
`;

export const TitleWrapper = styled.div`
	margin-top: -5%;
	padding-bottom: 0;
	display: flex;
	align-items: center;
	height: 6vh;
`;

export const titleImgRules = css`
	background-size: contain;
	background-repeat: no-repeat;
`;

export const Title = styled.div`
	background: ${(props) => (props.src ? `url(${props.src})` : "")};
	${titleImgRules}
	height: 100%;
	width: 100%;
`;

export const SubTitle = styled.div`
	background: ${(props) => (props.src ? `url(${props.src})` : "")};
	${titleImgRules}
	height: 6vh;
	width: 100%;
	margin: 4% 0;
`;

export const Text = styled.p`
	font-family: "Times new roman";
	flex-wrap: wrap;
	${(props) =>
		props.ismobile
			? css`
					font-size: 1.2em;
			  `
			: css``}
	${(props) =>
		props.istablet
			? css`
					font-size: 1.5em;
			  `
			: css``}
  ${(props) =>
		props.issmallscreen
			? props.isportrait
				? css`
						font-size: 1.3em;
				  `
				: css`
						font-size: 1.1em;
				  `
			: css``}
  ${(props) =>
		props.ismediumscreen
			? css`
					font-size: 1.7em;
			  `
			: css``}
  ${(props) =>
		props.isbigscreen
			? css`
					font-size: 1.9em;
			  `
			: css``}
`;

export const Img = styled.img`
	${(props) =>
		props.spaceTop
			? css`
					padding-top: 100px;
			  `
			: css``}
	${(props) =>
		props.ismobile || props.ismini
			? props.isportrait
				? css`
						width: 100%;
						margin: 0 auto;
				  `
				: css``
			: css``}
`;

export const ImgBkg = styled.div`
	width: 100%;
	height: 100%;
	background: ${(props) => (props.src ? `url(${props.src})` : "")};
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	${(props) =>
		props.ismobile
			? props.isportrait
				? css`
						font-size: 1em;
				  `
				: css`
						font-size: 1em;
				  `
			: css``};
	${(props) =>
		props.istablet
			? css`
					font-size: 1em;
			  `
			: css``};

	${(props) => (props.ismobile && !props.isportrait ? css`` : css``)}
	${(props) => (props.full ? css`` : css``)}
`;

export const ImgMap = styled.img`
	width: 100%;
	height: auto;
	margin: 5vh 0;
`;
