import React from "react";
import { formatDistanceToNow } from "date-fns";

type AppointmentProps = {
  appointment: {
    id: number;
    title: string;
    startTime: Date;
    endTime: Date;
  };
};

const AppointmentItem: React.FC<AppointmentProps> = ({ appointment }) => {
  const formatRelativeTime = (date: Date) =>
    `${formatDistanceToNow(new Date(date))} ago`;

  return (
    <div className="mx-auto overflow-hidden rounded-xl bg-white shadow-md">
      <div className="p-8">
        <div className="text-sm font-semibold tracking-wide text-indigo-500">
          Appointment ID: {appointment.id}
        </div>
        <a className="mt-1 block text-lg font-medium leading-tight text-black hover:underline">
          {appointment.title}
        </a>
        <p className="mt-2 text-xs text-gray-500">
          Starts: {formatRelativeTime(appointment.startTime)}
        </p>
        <p className="mt-1 text-xs text-gray-500">
          Ends: {formatRelativeTime(appointment.endTime)}
        </p>
      </div>
    </div>
  );
};

export default AppointmentItem;
