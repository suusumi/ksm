import React, { useEffect, useState } from 'react'
import AppointmentFormView from './view/AppointmentFormView'
import { CreateRegistrationDto } from '../../api/registrations/dto'
import { createRegistation } from '../../api/registrations/request';
import { useParams } from "react-router-dom";

function AppointmentFormScreen() {

  let myService: string | undefined = useParams().service;
  if (myService!== undefined && myService !== "null") {
    var newService: string = myService; 
  } else {
    var newService: string = "";
  }

  let myCategory: string | undefined = useParams().category;
  if (myCategory!== undefined && myCategory !== "null") {
    var newCategory: string = myCategory; 
  } else {
    var newCategory: string = "";
  }

  const [registrations, setRegistrations] = useState<CreateRegistrationDto>({
    fio: '',
    phone: '',
    doctor: newCategory,
    date: '',
    comments: newService,
  });
  const [errorMessage, setErrorMessage] = useState<CreateRegistrationDto>({
    fio: '',
    phone: '',
    doctor: '',
    date: '',
    comments: '',
  });
  const [checked, setChecked] = useState<boolean>(false);
  const [errorCheck, setErrorCheck] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [errorCreate, setErrorCreate] = useState<boolean>(false);
  const [openAllert, setOpenAllert] = useState(false);

  const handleChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  }

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  }

  useEffect(() => {
    if (selectedDate) {
      const tmpDate = new Date(selectedDate);
      setRegistrations({ ...registrations, date: formatDateToString(tmpDate) });
    }
  }, [selectedDate]);

  const formatDateToString = (date: Date | null): string => {
    if (!date) return '';

    const day = date.getDate();
    const month = date.getMonth() + 1; // Месяцы в JavaScript нумеруются с 0, поэтому прибавляем 1 
    const year = date.getFullYear().toString().slice(-2); // Год, только последние 2 цифры

    // Форматируем день и месяц, чтобы они имели ведущий ноль, если они меньше 10.
    const formattedDay = (day < 10) ? `0${day}` : day;
    const formattedMonth = (month < 10) ? `0${month}` : month;

    // Собираем дату в формат "ДД.ММ.ГГГГ".
    const formattedDate = `${formattedDay}.${formattedMonth}.${year}`;

    return formattedDate;
  }

  const validateForm = () => {
    const newErrors = ({
      fio: '',
      phone: '',
      doctor: '',
      date: '',
      comments: '',
    });
    let errorChecked = '';

    if (!registrations.fio) {
      newErrors.fio = 'Заполните это поле';
    }

    if (!registrations.phone) {
      newErrors.phone = 'Заполните это поле';
    }

    if (!registrations.doctor) {
      newErrors.doctor = 'Заполните это поле';
    }

    if (!selectedDate) {
      newErrors.date = 'Заполните это поле';
    }

    if (!checked) {
      errorChecked = 'Подтвердите положение о конфиденциальности';
    }

    setErrorCheck(errorChecked);
    setErrorMessage(newErrors);
    return Object.values(newErrors).every((error) => !error);
  }

  const handleCreateRegistration = () => {
    setOpenAllert(true);
    if (validateForm() && checked) {
      createRegistation(registrations)
      .then((response) => {
        setErrorCreate(false);
      setRegistrations({
        fio: '',
        phone: '',
        doctor: '',
        date: '',
        comments: '',
      });
      setSelectedDate(null);
      setChecked(false);      })
      .catch((error) => {
        console.error(error);
        setErrorCreate(true);
      })
    } else {
      console.log('В данных есть ошибка', registrations);
      setErrorCreate(true);
    }
  }

  const handleRegistrationsChange = (event: any, type: string) => {
    if (type === 'fio') {
      setRegistrations({ ...registrations, fio: event.target.value });
    } else if (type === 'phone') {
      setRegistrations({ ...registrations, phone: event.target.value });
    } else if (type === 'doctor') {
      setRegistrations({ ...registrations, doctor: event.target.value });
    } else if (type === 'date') {
      setRegistrations({ ...registrations, date: event.target.value });
    } else if (type === 'comments') {
      setRegistrations({ ...registrations, comments: event.target.value });
    } else {
      console.log("Что-то пошло не так с сохранением данных в формах: выбран не правильный тип");
    }
  }

  return (
    <AppointmentFormView
      registrations={registrations}
      handleRegistrationsChange={handleRegistrationsChange}
      handleCreateRegistration={handleCreateRegistration}
      errorCreate={errorCreate}
      openAllert={openAllert}
      setOpenAllert={setOpenAllert}
      checked={checked}
      handleChecked={handleChecked}
      errorCheck={errorCheck}
      selectedDate={selectedDate}
      handleChangeDate={handleDateChange}
      formatDateToString={formatDateToString}
      errorMessage={errorMessage}
    />
  )
}

export default AppointmentFormScreen