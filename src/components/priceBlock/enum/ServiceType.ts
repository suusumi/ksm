enum ServiceType {
  AllergologyAndImmunology = "Аллергология и иммунология",
  ObstetricsAndGynecology = "Акушерство и гинекология",
  ChildrensSpecialists = "Детские специалисты",
  Gastroenterology = "Гастроэнтерология",
  Dermatovenerology = "Дерматовенерология",
  InfectiousDiseases = "Инфекционные заболевания",
  Cardiology = "Кардиология",
  MedicalAndPsychologicalCenter = "Медико-психологический центр",
  MedicalExaminations = "Медицинские осмотры",
  Neurology = "Неврология",
  Otorhinolaryngology = "Оториноларингология",
  Ophthalmology = "Офтальмология",
  PsychiatryAndNarcology = "Психиатрия и наркология",
  Pulmonology = "Пульмонология",
  Rheumatology = "Ревматология",
  CardiovascularSurgery = "Сердечно-сосудистая хирургия",
  Therapy = "Терапия",
  TraumatologyAndOrthopedics = "Травматология и ортопедия",
  UltrasoundDiagnostics = "Ультразвуковая диагностика",
  PhysicalTherapy = "Физиотерапия",
  Endocrinology = "Эндокринология",
  Vaccinoprophylaxis = "Вакцинопрофилактика",
  LaboratoryDiagnostics = "Лабораторная диагностика",
  Manipulations = "Манипуляции",
  MedicalCareAtHome = "Медицинская помощь на дому",
  MedicalExaminationOfForeignCitizens = "Медицинский осмотр иностранных граждан",
}

type ServiceTypeMap = {
  [key: string]: string;
};

export default ServiceType as ServiceTypeMap;
