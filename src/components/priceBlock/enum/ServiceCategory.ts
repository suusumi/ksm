enum ServiceCategory {
  ReceptionAndInspectionAndConsultation = "Прием (осмотр, консультация)",
  BronchoprovocationTest = "Бронхопровакционная проба",
  AllergyTests = "Анализы на аллергию",
  DecisionOTheMedicalCommissionIVF = "Решение врачебной комиссии (ЭКО)",
  PreGravidalPreparation = "Предгравиальная подготовка",
  Other = "Другое",
  Dermatoscopy = "Дерматоскопия",
  Cryodestruction = "Криодеструкция",
  Researches = "Исследования",
  InspectionOfDrivers = "Осмотр водителей",
  RegistrationOfSanatoriumAndResortCard = "Оформление санаторно-курортной карты",
  MedicalExaminationOfStudents = "Медицинский осмотр студентов",
  RegistrationOfCertificateSwimmingPoolSportsSection = "Оформление справки (бассейн, спортивная секция)",
  SetOfExaminationsForAdmissionToPhysicalEducationClasses = "Комплекс обследований по допуску к занятиям физической культурой",
  ComprehensiveServices = "Комплексные услуги",
  AdaptationProgram = "Программа адаптационная",
  IntroductionOfBotulinumToxinAnemia = "Введение ботулинического токсина",
  IntroductionOfMedicines = "Введение лекарственных средств",
  OtherProcedures = "Прочие процедуры",
  Biopsy = "Биопсия",
  Blockade = "Блокада",
  Drainage = "Дренаж",
  Inhalations = "Ингаляции",
  InstillationAndApplication = "Инстилляция и аппликация",
  Insufflation = "Инсуффляция",
  FunctionResearch = "Исследование функции",
  Catheterization = "Катетеризация",
  TherapeuticManeuver = "Лечебный маневр",
  LocalAnemia = "Локальная анемизация",
  MassageOfBackWallOfPharynx = "Массаж задней стенки глотки",
  Otomicroscopy = "Отомикроскопия",
  Puncture = "Пункция",
  Washing = "Промывание",
  VariousProcedures = "Различные процедуры",
  Treatment = "Лечение",
  Injections = "Инъекции",
  KinesiologicalTaping = "Кинезиологическое тейпирование",
  PRPTherapy = "PRP-терапия",
  SynovialFluidIntake = "Забор синовиальной жидкости",
  UltrasoundExamination = "Ультразвуковое исследование",
  TreatmentAndTherapy = "Лечение и терапия",
  Vaccination = "Вакцинация",
  LaboratoryDiagnostics = "Лабораторная диагностика",
  TakingBlood = "Взятие крови",
  MedicalCareAtHome = "Медицинская помощь на дому",
  MedicalExamination = "Медицинское освидетельствование",
}

type ServiceCategoryMap = {
  [key: string]: string;
};

export default ServiceCategory as ServiceCategoryMap;