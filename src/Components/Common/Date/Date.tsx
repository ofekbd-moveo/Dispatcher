import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import moment from "moment";
import { newsActions } from "../../../store";
import { filterCardsData } from "../../../store/indexFuncs";

export const DatePick = (): JSX.Element => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const dispatch = useDispatch();

  const onChange = (dates: [Date, Date]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);

    if (start && end) {
      const startStr = moment(start).format("yyyy-MM-DD");
      const endStr = moment(end).format("yyyy-MM-DD");
      console.log(startStr);

      dispatch(newsActions.setDate(`from=${startStr}&to=${endStr}&`));
      dispatch(filterCardsData());
    }
  };

  return (
    <DatePicker
      selected={startDate}
      onChange={onChange}
      startDate={startDate}
      endDate={endDate}
      selectsRange
      inline
      dateFormat="YYYY-MM-dd"
    />
  );
};
