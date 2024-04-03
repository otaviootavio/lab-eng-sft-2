import React from "react";
import { api } from "~/utils/api";

type TrainingProps = {
  training: {
    id: number;
    name: string;
    description: string | null;
    createdAt: Date;
  };
  onTrainingDeleted: () => void;
};

const TrainingItem: React.FC<TrainingProps> = ({
  training,
  onTrainingDeleted,
}) => {
  const { mutate: deleteTraining, isLoading } =
    api.trainingTemplate.deleteTrainingTemplate.useMutation();

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this training?")) {
      deleteTraining({ id: training.id }, { onSuccess: onTrainingDeleted });
    }
  };

  return (
    <div className="mx-auto overflow-hidden rounded-xl bg-white shadow-md">
      <div className="p-8">
        <div className="text-sm font-semibold tracking-wide text-indigo-500">
          Training ID: {training.id}
        </div>
        <a className="mt-1 block text-lg font-medium leading-tight text-black hover:underline">
          {training.name}
        </a>
        <p className="mt-2 text-sm text-gray-500">
          Description: {training.description}
        </p>
        <button
          onClick={handleDelete}
          disabled={isLoading}
          className="mt-4 rounded-md bg-red-500 px-4 py-2 text-white transition-colors hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TrainingItem;
