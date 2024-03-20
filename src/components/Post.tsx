import React from "react";
import { formatDistanceToNow } from "date-fns";

type Props = {
  Post:
    | {
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        createdById: string;
      }
    | null
    | undefined;
};

const Post = (props: Props) => {
  const { Post } = props;
  const formatRelativeTime = (date: Date) =>
    `${formatDistanceToNow(new Date(date))} ago`;

  return (
    <div className="mx-auto overflow-hidden rounded-xl bg-white shadow-md">
      <div className="p-8">
        {!!Post ? (
          <>
            <div className="text-sm font-semibold tracking-wide text-indigo-500">
              Post ID: {Post.id}
            </div>
            <a className="mt-1 block text-lg font-medium leading-tight text-black hover:underline">
              {Post.name}
            </a>
            <p className="mt-2 text-xs text-gray-500">
              Created At: {formatRelativeTime(Post.createdAt)}
            </p>
            <p className="mt-1 text-xs text-gray-500">
              Last Updated: {formatRelativeTime(Post.updatedAt)}
            </p>
          </>
        ) : (
          <>No post available</>
        )}
      </div>
    </div>
  );
};

export default Post;
