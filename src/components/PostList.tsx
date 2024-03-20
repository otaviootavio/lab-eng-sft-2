import React from "react";
import Post from "./Post";
import { useSession } from "next-auth/react";
import { api } from "~/utils/api";

const PostsList = () => {
  const { data: sessionData } = useSession();
  const { data: posts } = api.post.getAllUserPost.useQuery(undefined, {
    enabled: sessionData?.user !== undefined,
  });
  return (
    <div className="space-y-4">
      {posts && posts.length > 0 ? (
        posts?.map((post) => <Post key={post.id} Post={post} />)
      ) : (
        <Post Post={null} />
      )}
    </div>
  );
};

export default PostsList;
