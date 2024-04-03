import React from "react";
import { api } from "~/utils/api";
import AppointmentForm from "./AppointmentForm";
import AppointmentItem from "./AppointmentItem";

const Agenda = () => {
  const { data: appointments, refetch } =
    api.appointment.getAllAppointments.useQuery();

  return (
    <div>
      <AppointmentForm onAppointmentCreated={refetch} />
      <div className="mt-8 space-y-4">
        {appointments?.map((appointment) => (
          <AppointmentItem key={appointment.id} appointment={appointment} />
        ))}
      </div>
    </div>
  );
};

export default Agenda;
