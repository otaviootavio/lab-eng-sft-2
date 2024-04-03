import React from "react";
import { api } from "~/utils/api";

interface AppointmentFormProps {
  onAppointmentCreated: () => void;
}

const AppointmentForm: React.FC<AppointmentFormProps> = ({
  onAppointmentCreated,
}) => {
  const trainingTemplatesQuery =
    api.trainingTemplate.getAllTrainingTemplates.useQuery();
  const createAppointmentMutation =
    api.appointment.createAppointment.useMutation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const title = formData.get("title") as string;
    const startTime = formData.get("start")
      ? new Date(formData.get("start") as string)
      : null;
    const endTime = formData.get("end")
      ? new Date(formData.get("end") as string)
      : null;
    const trainingTemplateId = formData.get("trainingTemplateId")
      ? parseInt(formData.get("trainingTemplateId") as string)
      : null;

    if (
      !title ||
      !startTime ||
      !endTime ||
      isNaN(trainingTemplateId ?? 0) ||
      !trainingTemplateId
    ) {
      console.error("Invalid form data");
      return;
    }

    createAppointmentMutation.mutate(
      { title, startTime, endTime, trainingTemplateId },
      {
        onSuccess: () => {
          onAppointmentCreated();
        },
      },
    );
  };

  if (trainingTemplatesQuery.isLoading) return <p>Loading...</p>;
  if (trainingTemplatesQuery.error)
    return (
      <p>Error fetching templates: {trainingTemplatesQuery.error.message}</p>
    );

  return (
    <div className="mx-auto max-w-lg rounded-xl bg-gradient-to-r from-green-500 to-blue-600 p-6 shadow-lg">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-white">
        <input
          name="title"
          placeholder="Workout Title (e.g., Leg Day)"
          className="rounded-md px-4 py-2 text-black"
          required
        />
        <input
          name="start"
          type="datetime-local"
          className="rounded-md px-4 py-2 text-black"
          required
        />
        <input
          name="end"
          type="datetime-local"
          className="rounded-md px-4 py-2 text-black"
          required
        />
        <select
          name="trainingTemplateId"
          className="rounded-md px-4 py-2 text-black"
          defaultValue=""
          required
        >
          <option value="">Select Training Template</option>
          {trainingTemplatesQuery.data?.map((template) => (
            <option key={template.id} value={template.id}>
              {template.name}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="mt-4 rounded-md bg-[#15162c] px-4 py-2 transition-colors hover:bg-[#3A3480] hover:shadow-lg"
        >
          Schedule Workout
        </button>
        {createAppointmentMutation.error && (
          <p className="mt-2 text-red-400">
            Error: {createAppointmentMutation.error.message}
          </p>
        )}
        {createAppointmentMutation.isSuccess && (
          <p className="mt-2 text-green-400">Workout scheduled successfully!</p>
        )}
      </form>
    </div>
  );
};

export default AppointmentForm;
