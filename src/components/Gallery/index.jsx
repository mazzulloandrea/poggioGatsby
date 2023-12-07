import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
// import { useLocation } from "react-router-dom";
import ImageGallery from 'react-image-gallery';
import { galleries, background, playIcon } from '../../assets';
import ReactPlayer from 'react-player';
import { removeTrailingSlash } from '../../utils';
import { PlayerContainer } from './styled';
import 'react-image-gallery/styles/css/image-gallery.css'; // gallery css
import './style.css';

const Gallery = ({ dimensions }) => {
  const { isBigScreen, isMediumScreen, isSmallScreen, isTablet, isMobile, isPortrait } = dimensions;
  const [loadedGif, setLoadedGif] = useState(false);
  const [playing, setPlaying] = useState(false);
  const containerRef = useRef(null);
  const galleryRef = useRef(null);
  const videoRef = useRef(null);

  const swipeToVideo = useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash.includes('#video') && galleryRef) {
      if (containerRef && containerRef.current) {
        containerRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      } else {
        document.querySelector('#video').scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      setTimeout(() => galleryRef.current.slideToIndex(1), 1000);
    }
  }, [typeof window !== 'undefined' && window.location.hash, galleryRef]);

  const renderVideo = useCallback(
    (videoSrc, backVideoImage) => {
      return (
        <>
          <img id="video" src={background} className="image-gallery-image" />
          {videoSrc && (
            <PlayerContainer
              isbigscreen={isBigScreen ? 1 : 0}
              ismediumscreen={isMediumScreen ? 1 : 0}
              issmallscreen={isSmallScreen ? 1 : 0}
              istablet={isTablet ? 1 : 0}
              ismobile={isMobile ? 1 : 0}
              isportrait={isPortrait ? 1 : 0}
            >
              <ReactPlayer
                ref={videoRef}
                url={videoSrc}
                controls={true}
                playing={{ playing }}
                width="100%"
                height="700px"
                light={
                  <img src={backVideoImage.original.original} alt="" className="fake-image-video" />
                }
                playIcon={
                  <img
                    src={playIcon}
                    alt=""
                    style={{
                      position: 'absolute',
                      width: '20%',
                      heigjt: 'auto',
                    }}
                    onClick={() => {
                      setPlaying(true);
                    }}
                  />
                }
                config={{
                  file: {
                    attributes: {
                      controlsList: 'nodownload',
                    },
                  },
                }}
                // Disable right click
                onContextMenu={e => e.preventDefault()}
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
              />
            </PlayerContainer>
          )}
        </>
      );
    },
    [playing],
  );

  const images = useMemo(() => {
    let galleriesName =
      typeof window !== 'undefined' &&
      window.location.pathname.substring(1, window.location.pathname.length);
    if (!galleries[galleriesName]) galleriesName = 'tradizione';
    const list = galleries[galleriesName].list.map(el => ({ original: el }));
    const gif = galleries[galleriesName].gif;
    const videoSrc = galleries[galleriesName].video;

    if (
      typeof window !== 'undefined' &&
      ['/', '/tradizione'].includes(removeTrailingSlash(window.location.pathname))
    ) {
      list[1] = {
        original: list[1],
        renderItem: () => renderVideo(videoSrc, list[1]),
      };
    }
    return {
      list,
      gif,
    };
  }, [typeof window !== 'undefined' && window.location.pathname]);

  const arrowProps = {
    height: '10vw',
    width: '10vw',
    marginBottom:
      dimensions && dimensions.isMobile
        ? '50px'
        : dimensions && dimensions.isTablet
        ? '120px'
        : '17vh',
  };

  const changeGif = useCallback(() => {
    if (
      typeof window !== 'undefined' &&
      typeof window !== 'undefined' &&
      window.location.href.includes(removeTrailingSlash(window.location.pathname)) &&
      !loadedGif
    ) {
      setLoadedGif(true);
      const gifElement = document.querySelector('.image-gallery-image');
      gifElement.src = images.gif;
      gifElement.parentElement.classList.add('grow');
    }
  }, [typeof window !== 'undefined' && window.location.pathname, loadedGif]);

  const loadGif = evt => {
    if (evt.target.src.includes(images.list[0].original)) {
      setTimeout(() => {
        changeGif();
      }, 2500);
    }
  };

  const enterFullscreen = useCallback(async () => {
    const elemFullscreen = document.documentElement;
    const galleryContainer = document.querySelector('.image-gallery');
    galleryContainer.classList.add('fullscreen-modal');

    if (elemFullscreen.requestFullscreen) {
      await elemFullscreen.requestFullscreen();
    } else if (elemFullscreen.webkitRequestFullscreen) {
      /* Safari */
      await elemFullscreen.webkitRequestFullscreen();
    } else if (elemFullscreen.msRequestFullscreen) {
      /* IE11 */
      await elemFullscreen.msRequestFullscreen();
    }
    window.screen?.orientation?.lock('landscape');
  }, []);

  const exitFullscreen = useCallback(async () => {
    window.screen?.orientation?.lock('portrait');
    const galleryContainer = document.querySelector('.image-gallery');
    galleryContainer.classList.remove('fullscreen-modal');
    if (document.exitFullscreen) {
      await document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      /* Safari */
      await document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      /* IE11 */
      await document.msExitFullscreen();
    }
  }, []);

  const changeOrientation = isFullscreen => {
    if (isFullscreen) {
      enterFullscreen();
    } else {
      exitFullscreen();
    }
  };

  return (
    <div ref={containerRef}>
      <ImageGallery
        id="galleryContainer"
        className="galleryContainer"
        showFullscreenButton={true}
        useBrowserFullscreen={false}
        showPlayButton={false}
        items={images.list}
        ref={galleryRef}
        onImageLoad={loadGif}
        renderLeftNav={(onClick, disabled) => (
          <button className="image-gallery-icon image-gallery-left-nav">
            <img
              className="image-gallery-svg"
              src={galleries.galleryCustom.arrowSx}
              onClick={onClick}
              disabled={disabled}
              style={arrowProps}
            />
          </button>
        )}
        renderRightNav={(onClick, disabled) => (
          <button className="image-gallery-icon image-gallery-right-nav">
            <img
              className="image-gallery-svg"
              src={galleries.galleryCustom.arrowDx}
              onClick={onClick}
              disabled={disabled}
              style={arrowProps}
            />
          </button>
        )}
        renderFullscreenButton={(onClick, isFullscreen) => (
          <button
            className="image-gallery-icon image-gallery-fullscreen-button"
            onClick={() => {
              onClick();
              setTimeout(() => {
                dimensions.isMobile && changeOrientation(!isFullscreen);
              }, 400);
            }}
          >
            {isFullscreen ? (
              <galleries.galleryCustom.resizescreenIcon />
            ) : (
              <galleries.galleryCustom.fullscreenIcon />
            )}
          </button>
        )}
      />
    </div>
  );
};

export default Gallery;
