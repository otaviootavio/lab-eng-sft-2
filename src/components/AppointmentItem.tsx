import React from "react";
import { formatDistanceToNow } from "date-fns";

type TrainingTemplate = {
  id: number;
  name: string;
  description: string | null;
  createdAt: Date;
  updatedAt: Date;
  createdById: string;
};

type Appointment = {
  id: number;
  title: string;
  startTime: Date;
  endTime: Date;
  userId: string;
  trainingTemplateId: number | null;
  trainingTemplate: TrainingTemplate | null;
};

const AppointmentItem = ({ appointment }: { appointment: Appointment }) => {
  const formatRelativeTime = (date: Date) =>
    `${formatDistanceToNow(new Date(date))} ago`;

  return (
    <div className="mx-auto max-w-lg overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 to-teal-500 shadow-lg">
      <div className="p-6 text-white">
        <h3 className="text-lg font-bold">{appointment.title}</h3>
        <p className="mt-1 text-sm">Appointment ID: {appointment.id}</p>
        <p className="mt-2">
          Starts: {formatRelativeTime(appointment.startTime)}
        </p>
        <p>Ends: {formatRelativeTime(appointment.endTime)}</p>
        {appointment.trainingTemplate && (
          <>
            <div className="mt-4">
              <p className="font-semibold">
                Training: {appointment.trainingTemplate.name}
              </p>
              {appointment.trainingTemplate.description && (
                <p className="mt-1 text-sm">
                  Description: {appointment.trainingTemplate.description}
                </p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AppointmentItem;
