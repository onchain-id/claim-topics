import _ from 'lodash';

import ClaimTopicsById from './claim_topics.json';

const ClaimTopicsByName = _.fromPairs(Object.entries(ClaimTopicsById).map(([id, claimTopic]: [string, any]) => [claimTopic.name, claimTopic]));

export default {
  ClaimTopicsById,
  ClaimTopicsByName,
}

export {
  ClaimTopicsById,
  ClaimTopicsByName,
};
