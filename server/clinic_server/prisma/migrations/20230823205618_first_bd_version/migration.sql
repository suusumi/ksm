-- CreateEnum
CREATE TYPE "CategoryType" AS ENUM ('ReceptionAndInspectionAndConsultation', 'BronchoprovocationTest', 'AllergyTests', 'DecisionOTheMedicalCommissionIVF', 'PreGravidalPreparation', 'Other', 'Dermatoscopy', 'Cryodestruction', 'Researches', 'InspectionOfDrivers', 'RegistrationOfSanatoriumAndResortCard', 'MedicalExaminationOfStudents', 'RegistrationOfCertificateSwimmingPoolSportsSection', 'SetOfExaminationsForAdmissionToPhysicalEducationClasses', 'ComprehensiveServices', 'AdaptationProgram', 'IntroductionOfBotulinumToxinAnemia', 'IntroductionOfMedicines', 'OtherProcedures', 'Biopsy', 'Blockade', 'Drainage', 'Inhalations', 'InstillationAndApplication', 'Insufflation', 'FunctionResearch', 'Catheterization', 'TherapeuticManeuver', 'LocalAnemia', 'MassageOfBackWallOfPharynx', 'Otomicroscopy', 'Puncture', 'Washing', 'VariousProcedures', 'Treatment', 'Injections', 'KinesiologicalTaping', 'PRPTherapy', 'SynovialFluidIntake', 'UltrasoundExamination', 'TreatmentAndTherapy', 'Vaccination', 'LaboratoryDiagnostics', 'TakingBlood', 'MedicalCareAtHome', 'MedicalExamination');

-- CreateEnum
CREATE TYPE "ServiceType" AS ENUM ('AllergologyAndImmunology', 'ObstetricsAndGynecology', 'ChildrensSpecialists', 'Gastroenterology', 'Dermatovenerology', 'InfectiousDiseases', 'Cardiology', 'MedicalAndPsychologicalCenter', 'MedicalExaminations', 'Neurology', 'Otorhinolaryngology', 'Ophthalmology', 'PsychiatryAndNarcology', 'Pulmonology', 'Rheumatology', 'CardiovascularSurgery', 'Therapy', 'TraumatologyAndOrthopedics', 'UltrasoundDiagnostics', 'PhysicalTherapy', 'Endocrinology', 'Vaccinoprophylaxis', 'LaboratoryDiagnostics', 'Manipulations', 'MedicalCareAtHome', 'MedicalExaminationOfForeignCitizens');

-- CreateTable
CREATE TABLE "Banners" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "subtitle" TEXT NOT NULL,
    "text_content" TEXT NOT NULL,
    "img_path" TEXT,

    CONSTRAINT "Banners_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Administrators" (
    "id" SERIAL NOT NULL,
    "login" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "full_name" VARCHAR(255),

    CONSTRAINT "Administrators_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Services" (
    "id" SERIAL NOT NULL,
    "type" "ServiceType" NOT NULL DEFAULT 'AllergologyAndImmunology',
    "category" "CategoryType" NOT NULL DEFAULT 'ReceptionAndInspectionAndConsultation',
    "name" TEXT NOT NULL,
    "description" TEXT,
    "price" INTEGER NOT NULL,

    CONSTRAINT "Services_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Specialists" (
    "id" SERIAL NOT NULL,
    "photo_path" TEXT,
    "name" TEXT NOT NULL,
    "post" TEXT,
    "speciality" TEXT,
    "degree" TEXT,

    CONSTRAINT "Specialists_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Administrators_login_key" ON "Administrators"("login");
