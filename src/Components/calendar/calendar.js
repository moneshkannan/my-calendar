import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState, EditingState, IntegratedEditing } from '@devexpress/dx-react-scheduler';
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


export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentDate: new Date(),
      isLoading: true,
      data: []
    };
    this.currentDateChange = (currentDate) => { this.setState({ currentDate }); };
  }


  componentDidMount() {

    const userId = localStorage.getItem("id");

    axios.get(`${API}/fetch_user_id/${userId}`).then(res => {
      let newArr = []
      res.data.response.events.forEach(element => {
        newArr.push({ ...element.eventDetails, id: element.eventDetails._id })
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





  commitChanges = ({ deleted }) => {

    this.setState({ isLoading: true });

    const token = localStorage.getItem("token");

    axios.delete(`${API}/schedule/delete/${deleted}`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      }
    }).then(res => {

      let newArr = []
      newArr = this.state.data.filter(e => e.id !== deleted)

      this.setState({ data: newArr })

      Notification.show(res.data);
      this.setState({ isLoading: false });
    }).catch(err => {
      if (err.response) {
        Notification.show(err.response.data);
        this.setState({ isLoading: false });
      }
    })

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
