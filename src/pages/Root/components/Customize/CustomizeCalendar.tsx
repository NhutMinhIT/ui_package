import { styled } from '@mui/material/styles';
import styles from './style/calendar.module.css'
import {
    DateCalendar,
    LocalizationProvider,
    PickersCalendarHeaderProps,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { FC, memo } from "react";
import { dayOfWeekFormatter } from "../../utils/datePicker";
import { TStyledComponentsProps } from "../../types";
import { CALENDAR_FIXED_WEEK_NUMBER } from "../../constant";
import {
    SkipNext,
    SkipPrevious
} from "@mui/icons-material";
import dayjs, { Dayjs } from "dayjs";
import {
    Box,
    Typography
} from "@mui/material";
import { CustomizedButtonIcon } from '..';

const CustomizeCalendar = styled(DateCalendar)`   

   .MuiDayCalendar-header {
   position: relative;
   z-index: 1;
        display: flex;
        justify-content: space-between;
        width: 100%;
    }   
    .MuiDayCalendar-weekDayLabel{
        font-weight: 600;
    }

    .MuiDayCalendar-weekContainer {
        justify-content: space-between;
        position: sticky;
        z-index: 10;
        min-height: 2.5rem;
    }      
    .MuiPickersDay-root {
        border-radius: 0.5rem;   
        font-weight: 600;
        width: 2.8rem !important;
        height: 2.8rem !important;
        overflow-y: hidden;
        margin:0px;
    }      

    .MuiPickersDay-root:hover{
        background-color:rgb(73, 152, 241);
        border-radius: 0.5rem;
        color:white;
        font-weight: 700;
    } 
    .MuiPickersDay-root:focus{
        background-color:rgb(73, 152, 241);
        border-radius: 0.5rem;
        color:white;
        font-weight: 700;
    }

    .MuiPickersSlideTransition-root{
        overflow: hidden;       
    }
   
`
const CALENDER_VALUE_MONTH_NUMBER: number = 1
const CALENDAR_HEADER_FORMAT: string = 'MMM YYYY'

const StyledComponents: FC<TStyledComponentsProps> = ({ value, onChangeDate, renderButtonToday, ...props }) => {
    const renderCustomeHeader = (props: PickersCalendarHeaderProps<Dayjs>) => {
        const { currentMonth, onMonthChange } = props;

        const selectNextMonth = (): void => onMonthChange(currentMonth.add(CALENDER_VALUE_MONTH_NUMBER, 'month'), 'left');
        const selectPreviousMonth = (): void =>
            onMonthChange(currentMonth.subtract(CALENDER_VALUE_MONTH_NUMBER, 'month'), 'right');

        return (
            <Box className={styles.boxHeaderCalendar}>
                <CustomizedButtonIcon
                    onClick={selectPreviousMonth}
                >
                    <SkipPrevious />
                </CustomizedButtonIcon>

                <Typography
                    className={styles.textHeaderCalendar}
                >
                    {currentMonth.format(CALENDAR_HEADER_FORMAT)}
                </Typography>

                <CustomizedButtonIcon
                    onClick={selectNextMonth}
                >
                    <SkipNext />
                </CustomizedButtonIcon>
                {renderButtonToday()}
            </Box>
        )
    }


    return (
        <LocalizationProvider
            dateAdapter={AdapterDayjs}
        >
            <CustomizeCalendar
                {...props}
                value={dayjs(value)}
                showDaysOutsideCurrentMonth
                fixedWeekNumber={CALENDAR_FIXED_WEEK_NUMBER}
                dayOfWeekFormatter={dayOfWeekFormatter}
                onChange={onChangeDate}
                slots={{
                    calendarHeader: renderCustomeHeader
                }}
            />
        </LocalizationProvider>
    )
}
export default memo(StyledComponents)