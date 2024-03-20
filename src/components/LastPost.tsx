import { useSession } from "next-auth/react";
import { api } from "~/utils/api";
import Post from "./Post";

function LastPost() {
  const { data: sessionData } = useSession();
  const data = api.post.getLatest.useQuery(undefined, {
    enabled: sessionData?.user !== undefined,
  });

  return <div>{<Post Post={data.data} />}</div>;
}

export default LastPost;
