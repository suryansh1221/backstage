import FeedPost from '../FeedPost';
import styles from './FeedList.module.css';
import { mockPosts, participantStats } from '../../data/mockData';

export default function FeedList() {
  const yourSubmission = mockPosts.find(post => post.type === 'your-submission');
  const communityPosts = mockPosts.filter(post => post.type !== 'your-submission');

  return (
    <div className={styles.feedList}>
      {/* Your Submission */}
      {yourSubmission && <FeedPost post={yourSubmission} />}

      {/* Community Feed Section */}
      <div className={styles.communitySection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            See what others{' '}
            <div className={styles.avatarStack}>
              <img src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=100&h=100&fit=crop" alt="" className={styles.stackAvatar} />
              <img src="https://images.unsplash.com/photo-1520975958225-1d61f33a2f4a?w=100&h=100&fit=crop" alt="" className={styles.stackAvatar} />
              <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop" alt="" className={styles.stackAvatar} />
            </div>{' '}
            shared
          </h2>
          <p className={styles.participantCount}>
            <b>{participantStats.count}</b> {participantStats.message}
          </p>

           {/* Community Posts */}
        <div className={styles.posts}>
          {communityPosts.map(post => (
            <FeedPost key={post.id} post={post} />
          ))}
        </div>
        </div>
      </div>
    </div>
  );
}
