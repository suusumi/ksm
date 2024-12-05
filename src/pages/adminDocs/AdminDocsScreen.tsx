import {AdminDocsView} from "./view/AdminDocsView";
import {useEffect, useState} from "react";
import {createDoc, deleteDocById, fetchAllDocs, updateDocById} from "../../api/docs/request";
import {CreateDocDto, DocsDto} from "../../api/docs/dto";
import {DialogCreateDocument} from "../../components/dialogs/DialogCreateDocument";
import {ConfirmDeleteDialog} from "../../components/dialogs/ConfirmDeleteDialog";

export const AdminDocsScreen = () => {
    const [documents, setDocuments] = useState<DocsDto[]>();
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [currentDocument, setCurrentDocument] = useState<CreateDocDto | null>(null);
    const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState(false);
    const [documentToDelete, setDocumentToDelete] = useState<DocsDto | null>(null)

    useEffect(() => {
        fetchAllDocs()
            .then((response) => response.json() as Promise<DocsDto[]>) // Указание типа для данных
            .then((data) => {
                setDocuments(data);
            })
            .catch((error) => console.error(error));

    }, []);

    const loadDocuments = async () => {
        try {
            const response = await fetchAllDocs();
            const data = await response.json(); // Декодируем JSON из ответа
            setDocuments(data);
        } catch (error) {
            console.error("Ошибка при загрузке документов:", error);
        }
    };

    const handleOpenDialog = (document?: DocsDto) => {
        setCurrentDocument(
            document
                ? {
                    id: document.id,
                    name: document.name,
                    description: document.description,
                    file_name: document.file_name
                }
                : {name: "", description: "", file_name: ""} // Для создания нового документа
        );
        setIsDialogOpen(true);
    };


    const handleCloseDialog = () => {
        setIsDialogOpen(false);
    };

    const normalizeLink = (link: string): string => {
        if (!/^https?:\/\//i.test(link)) {
            return `http://${link}`; // Добавляем `http://` по умолчанию
        }
        return link;
    };

    const handleSaveDocument = async () => {
        if (!currentDocument) return;

        try {
            // Нормализация ссылки перед сохранением
            const normalizedDocument = {
                ...currentDocument,
                file_name: normalizeLink(currentDocument.file_name),
            };

            if (normalizedDocument.id) {
                await updateDocById(normalizedDocument.id, normalizedDocument);
                console.log("Документ обновлен:", normalizedDocument);
            } else {
                await createDoc(normalizedDocument);
                console.log("Документ создан:", normalizedDocument);
            }

            setIsDialogOpen(false);
            await loadDocuments(); // Перезагрузка списка документов
        } catch (error) {
            console.error("Ошибка при сохранении документа:", error);
        }
    };

    const handleDeleteIconClick = (document: DocsDto) => {
        setDocumentToDelete(document);
        setIsConfirmDialogOpen(true);
    };

    const handleDeleteConfirm = async () => {
        if (!documentToDelete) return;

        try {
            await deleteDocById(documentToDelete.id);
            setIsConfirmDialogOpen(false);
            setDocumentToDelete(null);
            await loadDocuments(); // Обновить список после удаления
        } catch (error) {
            console.error("Ошибка при удалении документа:", error);
        }
    };

    return (
        <>
            <AdminDocsView
                data={documents}
                handleOpenDialog={handleOpenDialog}
                handleDeleteIconClick={handleDeleteIconClick} // Передача функции для удаления
            />
            {/* Модальное окно для создания/редактирования документа */}
            {isDialogOpen && (
                <DialogCreateDocument
                    open={isDialogOpen}
                    handleClose={handleCloseDialog}
                    createDocument={currentDocument || { name: "", description: "", file_name: "" }} // Страховка от null
                    handleChangeDocumentForm={(event, field) =>
                        setCurrentDocument((prev) =>
                            prev ? { ...prev, [field]: event.target.value } : null
                        )
                    }
                    handleClickOpen={() => setIsDialogOpen(true)}
                    handleCreateDocument={handleSaveDocument}
                />
            )}
            {/* Модальное окно подтверждения удаления */}
            {isConfirmDialogOpen && documentToDelete && (
                <ConfirmDeleteDialog
                    open={isConfirmDialogOpen}
                    onClose={() => setIsConfirmDialogOpen(false)} // Закрыть окно
                    onConfirm={handleDeleteConfirm} // Подтвердить удаление
                    documentName={documentToDelete.name} // Имя удаляемого документа
                />
            )}
        </>
    );

};
