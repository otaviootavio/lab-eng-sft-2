import Head from "next/head";
import React from "react";
import CreateTrainingForm from "~/components/CreateTrainingForm";
import NavBar from "~/components/NavBar";
import TrainingList from "~/components/TrainingList";
import { api } from "~/utils/api";

const CreateTraining = () => {
  const { refetch } = api.trainingTemplate.getAllTrainingTemplates.useQuery();

  const handleTrainingCreated = async () => {
    await refetch();
  };

  return (
    <>
      <Head>
        <title>Criar Novo Treino - Risco Maromba</title>
        <meta name="description" content="Página para criar novos treinos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 py-16">
          <h2 className="text-xl font-semibold text-white">
            Criar Novo Treino
          </h2>
          <CreateTrainingForm onTrainingCreated={handleTrainingCreated} />
          <TrainingList />
        </div>
      </main>
    </>
  );
};

export default CreateTraining;
