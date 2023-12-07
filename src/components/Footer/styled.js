import styled, { css } from 'styled-components';

export const BackgroundContainerRules = css`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const FooterStyled = styled.footer`
  height: 15vh;
  background: ${props => (props.src ? `url(${props.src})` : '')};
  ${BackgroundContainerRules}
  display: flex;
  align-items: center;
  padding: 10px 30px;
  ${props =>
    props.ismini
      ? css`
          padding: 10px;
          height: 35vh;
        `
      : css``}
  ${props =>
    props.ismobile
      ? props.isportrait
        ? css`
            height: 40vh;
            padding: 0;
            flex-direction: row;
          `
        : css`
            height: 40vh;
            padding: 0;
            flex-direction: row;
          `
      : css``}
  ${props =>
    props.istablet
      ? props.isportrait
        ? css`
            height: 15vh;
            align-items: flex-start;
          `
        : css`
            height: 15vh;
          `
      : css``}
`;

export const footerArticle = styled.div`
  width: 20%;
  color: white;
  padding: 0 2%;
`;

const footerArticleTablet = css`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Address = styled(footerArticle)`
  ${footerArticleTablet}
  ${props =>
    props.ismini
      ? css`
          width: 100%;
        `
      : css``}
  ${props =>
    props.ismobile
      ? css`
          display: block;
          width: 100%;
        `
      : css``}
`;

export const Address2 = styled(footerArticle)`
  ${props =>
    props.ismini
      ? css`
          width: 100%;
        `
      : css``}
  ${props => (props.istablet ? footerArticleTablet : css``)}
  ${props =>
    props.ismobile
      ? css`
          display: block;
          width: 100%;
          > article {
          }
        `
      : css``}
`;

export const BackToHome = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  ${props =>
    props.ismini
      ? css`
          width: 90%;
          height: 50%;
          margin: 0 auto;
        `
      : css``}
  ${props =>
    props.ismobile
      ? props.isportrait
        ? css`
            width: 100%;
            height: 55%;
          `
        : css`
            width: 100%;
            padding: 0;
          `
      : css``}
  ${props =>
    props.istablet
      ? css`
          > div:first-child {
            margin-top: 10px;
          }
        `
      : css``}
`;

export const ContactContainer = styled(Address2)`
  width: 20%;
  text-align: center;
  ${props =>
    props.ismini
      ? css`
          width: 100%;
          text-align: left;
          height: 50%;
          > article {
            > p {
              text-align: left;
            }
          }
        `
      : css``}
  ${props =>
    props.ismobile
      ? props.isportrait
        ? css`
            height: 50%;
            width: 100%;
            > article {
              > p {
                text-align: left;
              }
            }
          `
        : css`
            width: 100%;
            height: 50%;
            > article {
              > p {
                text-align: left;
              }
            }
          `
      : css``}
      ${props =>
    props.istablet
      ? css`
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: center;
        `
      : css``}
`;

export const Logo = styled.div`
  height: 100%;
  width: 100%;
  background: ${props => (props.src ? `url(${props.src})` : '')};
  ${BackgroundContainerRules}
  background-size: contain;
`;

export const Marchio = styled.div`
  height: 100%;
  width: 100%;
  background: ${props => (props.src ? `url(${props.src})` : '')};
  ${BackgroundContainerRules}
  background-size: contain;
`;

export const Links = styled(footerArticle)`
  ${footerArticleTablet}
  ${props =>
    props.ismini
      ? css`
          width: 100%;
          height: 50%;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-end;
        `
      : css``}
  ${props =>
    props.ismobile
      ? props.isportrait
        ? css`
            width: 100%;
            height: 50%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
          `
        : css`
            width: 100%;
            height: 50%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: end;
          `
      : css``}
			${props =>
    props.istablet
      ? props.isportrait
        ? css``
        : css`
            height: 100%;
            justify-content: space-evenly;
            > article > p {
              margin: 0;
            }
          `
      : css``}
`;

export const MapLink = styled.article`
  ${props => (props.istablet ? footerArticleTablet : css``)};
  ${props =>
    props.istablet
      ? css`
          p {
            text-align: center;
          }
        `
      : css``}
`;

export const VideoLink = styled(MapLink)`
  margin: 5px 0;
  ${props =>
    props.ismini
      ? css`
          margin: 0;
        `
      : css``}
  ${props =>
    props.ismobile
      ? props.isportrait
        ? css`
            margin: 0;
            margin: 2vh 0 0 0;
          `
        : css`
            margin: 0;
            margin-top: 8px;
          `
      : css``}
`;

export const ArticleText = styled.p`
  text-align: center;
  font-family: 'Times New Roman';
  font-size: 0.9em;
  line-height: 1.1em;
  ${props =>
    props.ismobile
      ? props.isportrait
        ? css`
            text-align: center;
            font-size: 1em;
            padding-top: 7px;
          `
        : css`
            margin: 0;
          `
      : css``}
  ${props =>
    props.istablet
      ? css`
          font-size: 1em;
        `
      : css``}
`;

export const Underline = styled(ArticleText)`
  text-decoration: underline;
  cursor: pointer;
  color: white;
  ${props =>
    props.ismobile
      ? props.isportrait
        ? css``
        : css`
            margin: 0;
          `
      : css``}
`;

/** MOBILE FOOTER */
export const Left = styled.div`
  width: 50%;
  height: 100%;
  padding: 10px 15px;
  ${props =>
    props.ismini
      ? css`
          padding: 0;
          padding-right: 8px;
        `
      : css``}
  ${props =>
    props.ismobile
      ? props.isportrait
        ? css`
            box-sizing: border-box;
            padding: 30px;
          `
        : css`
            padding-top: 0;
            padding-bottom: 0;
            width: 30%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
          `
      : css``}
`;

export const Right = styled(Left)`
  padding-top: 0;
  border-left: 1px solid white;
  box-sizing: border-box;
  margin: 15px 0;
  box-sizing: border-box;
  height: calc(100% - 30px);
  ${props =>
    props.ismini
      ? css`
          padding-left: 5px;
        `
      : css``}
  ${props => (props.ismobile ? (props.isportrait ? css`` : css``) : css``)}
`;

export const Center = styled(Right)`
  width: 40%;
  padding: 0 15px;
`;
