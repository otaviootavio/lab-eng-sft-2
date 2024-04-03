import React from "react";
import { api } from "~/utils/api";

const AppointmentForm = ({
  onAppointmentCreated,
}: {
  onAppointmentCreated: any;
}) => {
  const { mutate, error, isSuccess } =
    api.appointment.createAppointment.useMutation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const title = formData.get("title") as string;
    const startTime = new Date(formData.get("start") as string);
    const endTime = new Date(formData.get("end") as string);

    mutate(
      { title, startTime, endTime },
      {
        onSuccess: () => {
          onAppointmentCreated?.();
        },
      },
    );
  };

  return (
    <div className="rounded-xl bg-white p-6 shadow-md">
      <form className="flex flex-col gap-7" onSubmit={handleSubmit}>
        <input
          name="title"
          className="rounded-md px-4 py-2 text-black"
          placeholder="Appointment Title"
        />
        <input
          name="start"
          type="datetime-local"
          className="rounded-md px-4 py-2 text-black"
          placeholder="Start Time"
        />
        <input
          name="end"
          type="datetime-local"
          className="rounded-md px-4 py-2 text-black"
          placeholder="End Time"
        />
        {error && <span className="text-red-500">Error: {error.message}</span>}
        {isSuccess && (
          <span className="text-green-500">
            Appointment created successfully!
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
  );
};

export default AppointmentForm;
