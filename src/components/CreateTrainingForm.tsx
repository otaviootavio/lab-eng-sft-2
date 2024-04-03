import React from "react";
import { api } from "~/utils/api";

const CreateTrainingForm = ({
  onTrainingCreated,
}: {
  onTrainingCreated: () => void;
}) => {
  const { mutate, error, isSuccess } =
    api.trainingTemplate.createTrainingTemplate.useMutation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;

    mutate(
      { name, description },
      {
        onSuccess: () => {
          onTrainingCreated?.();
        },
      },
    );
  };

  return (
    <div className="rounded-xl bg-white p-6 shadow-md">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          name="name"
          className="rounded-md px-4 py-2 text-black"
          placeholder="Training Name"
        />
        <textarea
          name="description"
          className="rounded-md px-4 py-2 text-black"
          placeholder="Description"
        />
        {error && <span className="text-red-500">Error: {error.message}</span>}
        {isSuccess && (
          <span className="text-green-500">Training created successfully!</span>
        )}
        <button
          type="submit"
          className="rounded-md bg-[#15162c] px-4 py-2 text-white transition-colors hover:bg-[#3A3480]"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateTrainingForm;
