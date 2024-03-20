import React from "react";
import { api } from "~/utils/api";

const PostForm = () => {
  const { mutate, error } = api.post.create.useMutation();

  return (
    <div>
      <div className="rounded-xl bg-white p-6 shadow-md">
        <form
          className="flex flex-col gap-7"
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            mutate({ name: formData.get("name") as string });
          }}
        >
          <input
            name="name"
            className="rounded-md px-4 py-2 text-black"
            placeholder="Enter post title..."
          />
          {error?.data?.zodError?.fieldErrors.title && (
            <span className="text-red-500">
              {error.data.zodError.fieldErrors.title}
            </span>
          )}
          <button
            type="submit"
            className="rounded-md bg-[#15162c] px-4 py-2 text-white transition-colors hover:bg-[#3A3480]"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostForm;
