import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  Toolbar,
  DateNavigator,
  Appointments,
  TodayButton,
} from '@devexpress/dx-react-scheduler-material-ui';



import { appointments } from '../../data/appointments';
import Navbar from '../Navbar/Navbar';


export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {

      currentDate: new Date(),
      startDate: new Date(2021, 5, 28, 9, 35),
      data: appointments
    };
    this.currentDateChange = (currentDate) => { this.setState({ currentDate }); };
  }

  render() {
    const { data, currentDate } = this.state;

    return (
      <>
        <Navbar active={true} />
        <div style={{ marginTop: "5rem" }}></div>
        <Paper>
          <Scheduler
            data={data}
            height={660}
          >
            <ViewState
              currentDate={currentDate}
              onCurrentDateChange={this.currentDateChange}
            />
            <WeekView
              startDayHour={9}
              endDayHour={20}
            />
            <Toolbar />
            <DateNavigator />
            <TodayButton />
            <Appointments />
          </Scheduler>
        </Paper>
      </>
    );
  }
}
