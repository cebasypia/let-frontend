import React from 'react';
import { useGetTimeline } from 'hooks/useGetTimeline';
import Tag from 'components/atoms/Tag';
import NextTweetsButton from 'components/molecules/NextTweetsButton';
import TweetList from 'components/templates/TweetList';

type Props = {
  screenName: string;
};

const Timeline: React.FC<Props> = ({ screenName }) => {
  const { tweets, isLoading, getNextTimeline } = useGetTimeline(screenName);

  return (
    <>
      <Tag title="Tweets" />
      <TweetList tweets={tweets} />
      {!!tweets.length && (
        <NextTweetsButton
          isLoading={isLoading}
          onClick={() => getNextTimeline(tweets[tweets.length - 1].id)}
        />
      )}
      {!tweets.length && !isLoading && <div>Tweet not found</div>}
    </>
  );
};

export default Timeline;
