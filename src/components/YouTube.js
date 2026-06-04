import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import PageTitle from './PageTitle'

const Wrapper = styled.section`
  width: 100%;
  padding: ${props => props.theme.spacing.xxl} ${props => props.theme.spacing.md};
  background: ${props => props.theme.colors.white};
`

const Inner = styled.div`
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
`

const Subtitle = styled.p`
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  margin: -2.5rem auto 0 auto;
  text-align: center;
  line-height: 1.6;
  color: ${props => props.theme.colors.text};
`

const VideoGrid = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: 2.5em 0 0 0;
  padding: 0;
  list-style: none;
`

const VideoItem = styled.li`
  display: flex;
  flex-flow: column;
  width: 100%;
  margin: 0 0 1em 0;
  overflow: hidden;
  border: 1px solid ${props => props.theme.colors.secondary};
  border-radius: 2px;
  background: ${props => props.theme.colors.white};
  transition: background ${props => props.theme.transitions.default};

  &:hover {
    background: ${props => props.theme.colors.tertiary};
  }

  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    flex: 0 0 49%;
    margin: 0 0 2vw 0;
  }

  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    flex: 0 0 32%;
  }
`

const Frame = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: ${props => props.theme.colors.secondary};
`

const Thumbnail = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform ${props => props.theme.transitions.default};
`

const PlayIcon = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 68px;
  height: 48px;
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.75);
  transform: translate(-50%, -50%);
  transition: background ${props => props.theme.transitions.default};

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    border-style: solid;
    border-width: 10px 0 10px 17px;
    border-color: transparent transparent transparent #fff;
    transform: translate(-50%, -50%);
  }
`

const Facade = styled.button`
  position: absolute;
  inset: 0;
  padding: 0;
  border: 0;
  cursor: pointer;
  background: transparent;

  &:hover ${Thumbnail},
  &:focus-visible ${Thumbnail} {
    transform: scale(1.04);
  }

  &:hover ${PlayIcon},
  &:focus-visible ${PlayIcon} {
    background: #f00;
  }
`

const Player = styled.iframe`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
`

const VideoCaption = styled.h3`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;

  /* Reserve space for 3 lines so every card is the same height.
     border-box: 3 lines (1.4 line-height) + 1rem top/bottom padding. */
  min-height: calc(4.2em + 2rem);
  margin: 0;
  padding: 1rem;
  font-size: 1.25em;
  font-weight: 600;
  line-height: 1.4;
  color: ${props => props.theme.colors.base};
`

const WatchLink = styled.a`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #111;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

export const buildEmbedUrl = id =>
  `https://www.youtube.com/embed/${id}`

export const buildThumbnailUrl = id =>
  `https://i.ytimg.com/vi/${id}/mqdefault.jpg`

const YouTube = ({ content }) => {
  const [playingId, setPlayingId] = useState(null)
  const [errors, setErrors] = useState({})
  const playerRef = useRef(null)
  const playingIdRef = useRef(null)
  const videos = content?.videos || []

  playingIdRef.current = playingId

  useEffect(() => {
    if (playingId && playerRef.current) {
      playerRef.current.focus()
    }
  }, [playingId])

  useEffect(() => {
    const handler = e => {
      if (e.origin !== 'https://www.youtube.com') return
      try {
        const data = JSON.parse(e.data)
        if (data.event === 'onError') {
          const id = data.info?.videoId ?? playingIdRef.current
          if (id) setErrors(prev => ({ ...prev, [id]: true }))
        }
      } catch {}
    }
    window.addEventListener('message', handler)
    return () => window.removeEventListener('message', handler)
  }, [])

  if (videos.length === 0) {
    return null
  }

  return (
    <Wrapper>
      <Inner>
        <PageTitle as="h2" small>
          {content.title}
        </PageTitle>
        {content.subtitle && <Subtitle>{content.subtitle}</Subtitle>}
        <VideoGrid>
          {videos.map(video => (
            <VideoItem key={video.id}>
              <Frame>
                {playingId === video.id && !errors[video.id] ? (
                  <Player
                    ref={playerRef}
                    src={buildEmbedUrl(video.id)}
                    title={video.title}
                    allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                    allowFullScreen
                  />
                ) : playingId === video.id ? (
                  <WatchLink
                    href={`https://www.youtube.com/watch?v=${video.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Watch on YouTube
                  </WatchLink>
                ) : (
                  <Facade
                    type="button"
                    aria-label={`Play video: ${video.title}`}
                    onClick={() => setPlayingId(video.id)}
                  >
                    <Thumbnail
                      src={buildThumbnailUrl(video.id)}
                      alt={video.title}
                      loading="lazy"
                    />
                    <PlayIcon aria-hidden="true" />
                  </Facade>
                )}
              </Frame>
              <VideoCaption>{video.title}</VideoCaption>
            </VideoItem>
          ))}
        </VideoGrid>
      </Inner>
    </Wrapper>
  )
}

export default YouTube
