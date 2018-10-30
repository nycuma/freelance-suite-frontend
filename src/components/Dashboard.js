import React from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "./Dashboard.css";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import TimeTracker from "./TimeTracker";
import { Button, NavItem, Dropdown } from "react-materialize";
import Charts from "./Charts";
import Clients from "./Clients";

const ResponsiveGridLayout = WidthProvider(Responsive);

class Dashboard extends React.Component {
  state = {
    display: "invisible",
    chartdisplay: "invisible",
    closebutton: "invisible",
    clientsdisplay: "invisible"
  };

  appear = () => {
    this.setState({ display: "" });
  };
  disappear() {
    this.setState({ display: "invisible" });
  }
  appearChart = () => {
    this.setState({ chartdisplay: "" });
    this.setState({ closebutton: "closebutton" });
  };
  disappearChart() {
    this.setState({ chartdisplay: "invisible" });
    this.setState({ closebutton: "invisible" });
  }
  appearClients() {
    this.setState({ clientsdisplay: "" });
  }
  disappearClients() {
    this.setState({ clientsdisplay: "invisible" });
  }

  render() {
    var layouts = {
      lg: [
        { x: 0, y: 0, w: 2, h: 2 },
        { x: 0, y: 2, w: 2, h: 2 },
        { x: 0, y: 4, w: 2, h: 2 }
      ]
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
          }
        >
          <NavItem onClick={() => this.appear()}>Tracker</NavItem>

          <NavItem onClick={() => this.appearChart()}>Charts</NavItem>

          <NavItem onClick={() => this.appearClients()}>Clients</NavItem>
        </Dropdown>

        <ResponsiveGridLayout
          className="layout"
          layouts={layouts}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 5.2, md: 6, sm: 6, xs: 4, xxs: 2 }}
          rowHeight={345}
          autoSize={true}
          draggableCancel="input, green"
        >
          <div key="1" className={this.state.display}>
            <TimeTracker
              displayState={display}
              buttonClick={this.disappear.bind(this)}
            />
          </div>

          <div key="2" className={this.state.chartdisplay}>
            <div className="divclose">
              <button
                className={this.state.closebutton}
                onClick={() => this.disappearChart()}
              >
                X
              </button>
            </div>

            <Charts displayChart={chartdisplay} />
          </div>

          <div key="3" className={this.state.clientsdisplay}>
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
