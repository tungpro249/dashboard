import * as React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import { ClickAwayListener } from "@mui/material";

function MDDatePicker({
  label,
  date,
  handleChooseDate,
  error,
  className,
}: {
  label: string;
  date: Date | null;
  handleChooseDate: (value: Date | null) => void;
  error?: string;
  className?: string;
}) {
  const [value, setValue] = useState<Dayjs | null>(date ? dayjs(date) : null);

  const handleDateChange = (newValue: Dayjs | null) => {
    if (newValue) {
      setValue(newValue);
      handleChooseDate(newValue.toDate()); // Chuyển Dayjs thành Date trước khi truyền ra ngoài
    } else {
      setValue(null);
      handleChooseDate(null);
    }
  };

  return (
    <ClickAwayListener onClickAway={() => {}} mouseEvent="onMouseDown">
      <div style={{ width: "100%" }}>
        {/* <LocalizationProvider dateAdapter={AdapterDayjs}> */}
          <DatePicker
            label={label}
            value={value}
            onChange={handleDateChange}
            renderInput={(params) => (
              <TextField {...params} error={!!error} helperText={error} className={className} />
            )}
            fullWidth
            maxDate={dayjs()} // Chuyển đổi maxDate thành Dayjs
            minDate={dayjs().subtract(1, "year")} // Chuyển đổi minDate thành Dayjs
          />
        {/* </LocalizationProvider> */}
      </div>
    </ClickAwayListener>
  );
}

export default MDDatePicker;
