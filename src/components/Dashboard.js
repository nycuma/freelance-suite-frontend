import React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import './Dashboard.css';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import TimeTracker from './TimeTracker';
import { Button, NavItem, Dropdown } from 'react-materialize';
import Charts from './Charts';
import Clients from './Clients';

const ResponsiveGridLayout = WidthProvider(Responsive);

class Dashboard extends React.Component {
  state = {
    display: 'invisible',
    chartdisplay: 'invisible',
    closebutton: 'invisible',
    clientsdisplay: 'invisible',
  };

  appear = () => {
    this.setState({ display: '' });
  };
  disappear() {
    this.setState({ display: 'invisible' });
  }
  appearChart = () => {
    this.setState({ chartdisplay: 'display' });
    this.setState({ closebutton: 'closebutton' });
  };
  disappearChart() {
    this.setState({ chartdisplay: 'invisible' });
    this.setState({ closebutton: 'invisible' });
  }
  appearClients() {
    this.setState({ clientsdisplay: '' });
  }
  disappearClients() {
    this.setState({ clientsdisplay: 'invisible' });
  }

  render() {
    var layouts = {
      lg: [
        { x: 0, y: 0, w: 2, h: 2 },
        { x: 0, y: 2, w: 2, h: 2 },
        { x: 0, y: 4, w: 2, h: 2 },
      ],
    };

    var display = this.state.display;
    var chartdisplay = this.state.chartdisplay;
    var clientsdisplay = this.state.clientsdisplay;

    return (
      <div>
        <Dropdown
          trigger={
            <Button
              floating
              large
              className="green right"
              waves="light"
              icon="add"
            />
          }>
          <NavItem onClick={() => this.appear()}>Tracker</NavItem>

          <NavItem onClick={() => this.appearChart()}>Charts</NavItem>

          <NavItem onClick={() => this.appearClients()}>Clients</NavItem>
        </Dropdown>

        <ResponsiveGridLayout
          className="layout"
          layouts={layouts}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 5.2, md: 6, sm: 6, xs: 4, xxs: 2 }}
          draggableCancel="input, green"
          margin={[0, 0]}>
          <div
            key="1"
            className={this.state.display}
            data-grid={{
              i: '1',
              x: 0,
              y: 0,
              w: 1,
              h: 2.3,
              minH: 2.3,

              maxH: 2.3,
            }}>

            <TimeTracker
              displayState={display}
              buttonClick={this.disappear.bind(this)}
            />
          </div>

          <div
            key="2"
            className={this.state.chartdisplay}
            data-grid={{ i: '2', x: 3, y: 0, w: 1, h: 2.3, minW: 1 }}>
            <div className="divclose">
              <button
                className={this.state.closebutton}
                onClick={() => this.disappearChart()}>
                X
              </button>
            </div>

            <Charts displayChart={chartdisplay} />
          </div>

          <div
            key="3"
            className={this.state.clientsdisplay}
            data-grid={{ i: '3', x: 1, y: 0, w: 2, h: 1.7, minW: 2 }}>
            <Clients
              displayClients={clientsdisplay}
              buttonClick2={this.disappearClients.bind(this)}
            />
          </div>
        </ResponsiveGridLayout>
      </div>
    );
  }
}
export default Dashboard;
