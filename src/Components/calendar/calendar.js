import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState, EditingState, IntegratedEditing} from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  Toolbar,
  DateNavigator,
  Appointments,
  TodayButton,
  AppointmentTooltip,
} from '@devexpress/dx-react-scheduler-material-ui';
import axios from "axios";
import API from "../../service/api";
import Notification from "../../service/NotificationService";
import Navbar from '../Navbar/Navbar';
import Loader from '../Loader/Loader';

const SHIFT_KEY = 16;

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isShiftPressed: false,
      currentDate: new Date(),
      isLoading: true,
      data: []
    };
    this.currentDateChange = (currentDate) => { this.setState({ currentDate }); };

    this.commitChanges = this.commitChanges.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
  }


  componentDidMount() {

    const userId = localStorage.getItem("id");

    axios.get(`${API}/fetch_user_id/${userId}`).then(res => {
      let newArr = []
      res.data.response.events.forEach(element => {
        newArr.push(element.eventDetails)
      });
      this.setState({ data: newArr })
      this.setState({ isLoading: false });
    }).catch(err => {
      if (err.response) {
        Notification.show(err.response.data);
        this.setState({ isLoading: false });
      }
    })
  }
  


//  componentDidMount() {
//         window.addEventListener('keydown', this.onKeyDown);
//      window.addEventListener('keyup', this.onKeyUp);
//   }

  componentWillUnmount() {
    window.removeEventListener('keydown');
    window.removeEventListener('keyup');
  }

  onKeyDown(event) {
    if (event.keyCode === SHIFT_KEY) {
      this.setState({ isShiftPressed: true });
    }
  }

  onKeyUp(event) {
    if (event.keyCode === SHIFT_KEY) {
      this.setState({ isShiftPressed: false });
    }
  }



  commitChanges({ added, changed, deleted })   {
    this.setState((state) => {
      let { data } = state;
      const { isShiftPressed } = this.state;
      if (added) {
        const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
        data = [...data, { id: startingAddedId, ...added }];
      }
      if (changed) {
        if (isShiftPressed) {
          const changedAppointment = data.find(appointment => changed[appointment.id]);
          const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
          data = [
            ...data,
            { ...changedAppointment, id: startingAddedId, ...changed[changedAppointment.id] },
          ];
        } else {
          data = data.map(appointment => (
            changed[appointment.id]
              ? { ...appointment, ...changed[appointment.id] }
              : appointment));
        }
      }
      if (deleted !== undefined) {
        data = data.filter(appointment => appointment.id !== deleted);
      }
      return { data };
    });
  }




  render() {
    const { data, currentDate } = this.state;

    return (
      <>
        <Navbar active={true} />
        <div style={{ marginTop: "5rem" }}></div>

        { this.state.isLoading ? <Loader /> :

          <Paper>
            <Scheduler
              data={data}
              height={660}
            >
              <ViewState
                currentDate={currentDate}
                onCurrentDateChange={this.currentDateChange}
              />
              <EditingState
            onCommitChanges={this.commitChanges}
          />
          <IntegratedEditing />
              <WeekView
                startDayHour={9}
                endDayHour={21}
              />
              <Toolbar />
              <DateNavigator />
              <TodayButton />
              <Appointments />
              <AppointmentTooltip
            showDeleteButton
          />
            </Scheduler>
          </Paper>
        }
      </>
    );
  }
}
