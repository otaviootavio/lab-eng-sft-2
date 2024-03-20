import { useSession } from "next-auth/react";
import { api } from "~/utils/api";
import Post from "./Post";

function LastPost() {
  const { data: sessionData } = useSession();
  const data = api.post.getLatest.useQuery(undefined, {
    enabled: sessionData?.user !== undefined,
  });

  if (!sessionData) {
    return <div>Unauthorized</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div>{data.isLoading ? "Loading..." : <Post Post={data.data} />}</div>
    </div>
  );
}

export default LastPost;
