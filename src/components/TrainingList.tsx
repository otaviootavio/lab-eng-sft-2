import React from "react";
import { api } from "~/utils/api";
import TrainingItem from "~/components/TrainingItem";

const TrainingList = () => {
  const { data: trainings, refetch } =
    api.trainingTemplate.getAllTrainingTemplates.useQuery();

  const handleTrainingDeleted = () => {
    refetch();
  };

  if (!trainings) return <div>Loading...</div>;

  return (
    <div className="flex flex-col gap-4">
      {trainings &&
        trainings.map((training) => (
          <TrainingItem
            key={training.id}
            training={training}
            onTrainingDeleted={handleTrainingDeleted}
          />
        ))}
    </div>
  );
};

export default TrainingList;
