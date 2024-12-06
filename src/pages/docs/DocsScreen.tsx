import React, {useEffect} from 'react'
import {DocsView} from './view/DocsView'
import {DocsDto} from "../../api/docs/dto";
import {fetchAllDocs} from "../../api/docs/request";

export const DocsScreen = () => {

  const [documents, setDocuments] = React.useState<DocsDto[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  useEffect(() => {
    const loadDocuments = async () => {
      try {
        const response = await fetchAllDocs();
        const data = await response.json();
        setDocuments(data); // Сохраняем полученные данные
      } catch (err) {
        console.error("Ошибка загрузки документов:", err);
        setError("Не удалось загрузить документы. Попробуйте позже.");
      } finally {
        setLoading(false);
      }
    };

    loadDocuments();
  }, []);

  return (
    <DocsView documents={documents} loading={loading} error={error} />
  )
}

