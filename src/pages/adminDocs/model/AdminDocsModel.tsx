import {CreateDocDto, DocsDto} from "../../../api/docs/dto";

export interface AdminDocsModel {
    data: DocsDto[] | undefined;
    handleOpenDialog: (document?: DocsDto) => void;
    handleDeleteIconClick: (document: DocsDto) => void;
}
