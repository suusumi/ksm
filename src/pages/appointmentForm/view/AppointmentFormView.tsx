import { FormControlLabel, FormGroup, Grid, Checkbox, TextField, Typography, Button, Input, FormControl, OutlinedInput, InputLabel, FormHelperText, styled } from '@mui/material'
import React from 'react'
import { AppointmentFormViewProps } from '../model/AppointmentsFormModel'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import 'dayjs/locale/de'
import { TextMaskCustom } from '../../../components/TextMaskCustom/TextMaskCustom'

const styles = {
  text: {
    fontFamily: 'PT Sans',
    fontSize: '22px',
    color: 'black'
  },
  error: {
    fontFamily: 'PT Sans',
    fontSize: '20px',
    color: 'red'
  },
  button: {
    color: 'white',
    backgroundColor: '#288e81',
    borderRadius: '30px',
    fontSize: '16px',
    textTransform: 'none',
    height: '60px',
    padding: '1px 60px',
    display: { xs: 'flex', sm: 'flex', lg: 'flex' },
    whiteSpace: 'nowrap',
    '&:hover': {
      backgroundColor: '#1a665d',
    },
  }
}

export const AppointmentFormView: React.FC<AppointmentFormViewProps> = (props) => {
  return (
    <Grid container direction={'row'} marginBottom={3}>
      <Grid item xs={1} md={2} lg={3} />
      <Grid item xs={10} md={8} lg={6}>
        <Grid container direction={'column'} spacing={3} marginBottom={2}>
          <Grid item xs={2}>
            <Typography style={styles.text} mb={1}>ФИО</Typography>
            <TextField
              id='input-fio'
              variant='outlined'
              fullWidth
              label='ФИО'
              value={props.registrations.fio}
              onChange={(event) => props.handleRegistrationsChange(event, 'fio')}
              error={!!props.errorMessage.fio}
              helperText={props.errorMessage.fio}
              InputProps={{ sx: { borderRadius: '10px' } }}
            />
          </Grid>

          <Grid item xs={2}>
            <Typography style={styles.text} mb={1}>Ваш телефон</Typography>
            <FormControl variant="outlined" error={!!props.errorMessage.phone} fullWidth>
              <InputLabel htmlFor="component-outlined">+7(999)999-99-99</InputLabel>
              <OutlinedInput
                id='input-phone'
                fullWidth
                label='+7(999)999-99-99'
                value={props.registrations.phone}
                onChange={(event) => props.handleRegistrationsChange(event, 'phone')}
                inputComponent={TextMaskCustom as any}
                style={{ borderRadius: '10px' }}
              />
              <FormHelperText id="component-error-text">
                {props.errorMessage.phone}
              </FormHelperText>
            </FormControl>
          </Grid>

          <Grid item xs={2}>
            <Typography style={styles.text} mb={1}>К какому врачу вы хотите записаться?</Typography>
            <TextField
              id='input-doctor'
              fullWidth
              variant='outlined'
              label='Доктор/специальность'
              value={props.registrations.doctor}
              onChange={(event) => props.handleRegistrationsChange(event, 'doctor')}
              error={!!props.errorMessage.doctor}
              helperText={props.errorMessage.doctor}
              InputProps={{ sx: { borderRadius: '10px' } }}
            />
          </Grid>

          <Grid item xs={2} >
            <Typography style={styles.text} mb={1}>Когда Вам удобно попасть на прием?</Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='de'>
              <DatePicker
              slotProps={{textField: { 
                InputProps: {sx: { borderRadius: '10px'}},
                error: !!props.errorMessage.date,
                helperText: props.errorMessage.date }}}
                sx={{ borderRadius: '10px' }}
                label="ДД.ММ.ГГГГ"
                value={props.selectedDate}
                disablePast
                onChange={props.handleChangeDate}
              />
            </LocalizationProvider>
          </Grid>

          <Grid item xs={2}>
            <Typography style={styles.text}>Комментарий</Typography>
            <TextField
              id="input-comment"
              fullWidth
              multiline
              variant='outlined'
              label="Комментарий"
              value={props.registrations.comments}
              onChange={(event) => props.handleRegistrationsChange(event, 'comments')}
              InputProps={{ sx: { borderRadius: '10px' } }}
            />
          </Grid>

          <Grid item xs={2}>
            <Grid container direction={'column'} justifyContent={'center'} alignItems={'center'} spacing={2}>
              <Grid item>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox
                      checked={props.checked}
                      onChange={props.handleChecked}
                    />}
                    label={<Typography textAlign={'center'}>Отправляя данные, подтверждаю, что ознакомлен(а) и согласен(согласна) с политикой конфиденциальности.</Typography>}
                  />
                </FormGroup>
              </Grid>

              {props.errorCheck !== '' && <Grid item>
                <Typography style={styles.error}>{props.errorCheck}</Typography>
              </Grid>}

              <Grid item>
                <Button
                  sx={styles.button}
                  onClick={props.handleCreateRegistration}
                >Записаться на прием</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={1} md={2} lg={3} />
    </Grid >
  )
}

export default AppointmentFormView