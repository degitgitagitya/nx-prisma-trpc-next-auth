import { api } from '../trpc/server'
import { CreatePost } from './_components/create-post'

export default async function Index() {
  const latestPost = await api.post.getLatest()

  return (
    <div className='w-full max-w-xs'>
      {latestPost ? (
        <p className='truncate'>Your most recent post: {latestPost.name}</p>
      ) : (
        <p>You have no posts yet.</p>
      )}

      <CreatePost />
    </div>
  )
}
