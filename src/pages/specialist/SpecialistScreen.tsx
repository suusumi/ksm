import React from "react";
import { useParams } from "react-router-dom";
import SpecialistDataView from "./SpecialistDataView"; // Предполагается, что SpecialistDataView находится в том же каталоге

function SpecialistScreen() {
  const { id } = useParams<{ id: string }>();

  // Если id задан, отображаем информацию о специалисте
  if (id) {
    return <SpecialistDataView />;
  }

  // Возможно, вы хотите добавить обработку случая, когда id не задан
  return <div>Не задан идентификатор специалиста</div>;
}

export default SpecialistScreen;
