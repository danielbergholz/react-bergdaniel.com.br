/* eslint-disable no-param-reassign */
import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { IoMdDownload } from 'react-icons/io';
import PerfectScrollbar from 'react-perfect-scrollbar';

import {
  Container,
  Video,
  UpperTitle,
  Download,
  FlexboxLeft,
  FlexboxRight,
  NextVideos,
  NextVideoTitle,
} from './styles';
import api from '../../../services/api';
import Loading from '../../../components/Loading';

interface LocationState {
  courseName: string;
  playlistId: string;
  slidesLink: string;
}

interface Video {
  snippet: {
    title: string;
    mediumTitle: string;
    shortTitle: string;
    position: number;
    description: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
  };
}

const VideoPlayer: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Video[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<Video>({
    snippet: { position: 0 },
  } as Video);

  const { state } = useLocation<LocationState>();

  useEffect(() => {
    api
      .get('/playlistItems', {
        params: {
          part: 'snippet',
          key: 'AIzaSyCKVwDesbjwt8D8AgTBcWuttCe0eu8dECM',
          maxResults: 50,
          playlistId: state.playlistId,
        },
      })
      .then((response) => {
        const filteredData: Video[] = response.data.items.filter(
          (video: Video) => video.snippet.title !== 'Private video',
        );

        if (filteredData[0].snippet.title.includes('-')) {
          filteredData.forEach((element: Video) => {
            const { title } = element.snippet;
            const splitTitle = title.split('- ')[1];
            const splitSplitTitle = splitTitle.split(':')[0];

            element.snippet.mediumTitle = splitTitle;
            element.snippet.shortTitle = splitSplitTitle;
          });
        }

        setData(filteredData);

        setSelectedVideo(response.data.items[0]);

        setLoading(false);
      });
  }, [state.playlistId]);

  const changeVideo = useCallback(
    (id: number) => {
      setSelectedVideo(data[id]);
    },
    [data],
  );

  return (
    <>
      {loading === true ? (
        <Loading />
      ) : (
        <Container>
          <FlexboxLeft>
            <p>{state.courseName}</p>
            <UpperTitle>
              <strong>
                {selectedVideo.snippet.mediumTitle ||
                  selectedVideo.snippet.title}
              </strong>
              {state.slidesLink !== '' && (
                <a
                  href={state.slidesLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download>
                    <span>Download</span>
                    <IoMdDownload color="#D4AE8B" size={28} />
                  </Download>
                </a>
              )}
            </UpperTitle>
            <iframe
              title="videoPlayer"
              src={`https://www.youtube.com/embed/videoseries?list=${state.playlistId}&index=${selectedVideo.snippet.position}&rel=0`}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <span>{selectedVideo.snippet.description}</span>
          </FlexboxLeft>
          <FlexboxRight>
            <NextVideoTitle>
              <strong>Próximas aulas</strong>
            </NextVideoTitle>
            <NextVideos>
              <PerfectScrollbar>
                {data.map((video) => {
                  const { position, thumbnails, shortTitle } = video.snippet;
                  return (
                    <Video
                      key={String(position)}
                      onClick={(): void => changeVideo(position)}
                    >
                      <img src={thumbnails.medium.url} alt="" />
                      <span>{shortTitle}</span>
                    </Video>
                  );
                })}
              </PerfectScrollbar>
            </NextVideos>
          </FlexboxRight>
        </Container>
      )}
    </>
  );
};

export default VideoPlayer;
