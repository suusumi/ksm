import React, { useEffect, useState } from 'react'
import AppointmentFormView from './view/AppointmentFormView'
import { CreateRegistrationDto } from '../../api/registrations/dto'
import Swal from 'sweetalert2';
import { createRegistation } from '../../api/registrations/request';

function AppointmentFormScreen() {
  const [registrations, setRegistrations] = useState<CreateRegistrationDto>({
    fio: '',
    phone: '',
    doctor: '',
    date: '',
    comments: '',
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

  const handleChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  }

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  }

  useEffect(() => {
    if (selectedDate) {
      const tmpDate = new Date(selectedDate);
      setRegistrations({ ...registrations, date: formatDateToString(tmpDate)});
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
    if (validateForm() && checked) {
      createRegistation(registrations)
      .catch((error) => {
        console.error(error);
        Swal.fire({
          title: 'Opps...',
          icon: 'error',
          text: 'Что-то пошло не так, попробуйте позже',
          confirmButtonColor: '#288e81'
      });
      return;
      });

      Swal.fire({
        title: 'Good...',
        icon: 'success',
        text: 'Запись на прием зарегестрирована. Ожидайте звонка от регистратуры.',
        confirmButtonColor: '#288e81'
      })
    } else {
      console.log('В данных есть ошибка', registrations);
      Swal.fire({
        title: 'Opps...',
        icon: 'error',
        text: 'Попробуйте перепроверить вводимые данные и попробовать снова!',
        confirmButtonColor: '#288e81'
    })
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