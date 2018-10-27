import React from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "./Dashboard.css";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import TimeTracker from "./TimeTracker";
import { Button, NavItem, Dropdown, Icon } from "react-materialize";
import Charts from "./Charts";

const ResponsiveGridLayout = WidthProvider(Responsive);

class Dashboard extends React.Component {
  state = {
    display: "invisible",
    chartdisplay: "invisible",
    closebutton: "invisible"
  };

  appear = () => {
    this.setState({ display: "" });
  };
  disappear() {
    this.setState({ display: "invisible" });
  }
  appearChart = () => {
    this.setState({ chartdisplay: "" });
    this.setState({ closebutton: "alignclose" });
  };
  disappearChart() {
    this.setState({ chartdisplay: "invisible" });
    this.setState({ closebutton: "invisible" });
  }

  render() {
    var layouts = {
      lg: [
        { x: 0, y: 0, w: 1, h: 2 },
        { x: 2, y: 0, w: 3, h: 5 },
        { x: 4, y: 5, w: 3, h: 4 },
        { x: 6, y: 9, w: 3, h: 2 },
        { x: 8, y: 11, w: 3, h: 4 },
        { x: 8, y: 15, w: 4, h: 4 },
        { x: 0, y: 2, w: 1, h: 2 },
        { x: 2, y: 5, w: 2, h: 5 },
        { x: 4, y: 9, w: 2, h: 5 },
        { x: 6, y: 27, w: 3, h: 5 },
        { x: 8, y: 22, w: 1, h: 3 }
      ]
    };

    var display = this.state.display;
    var chartdisplay = this.state.chartdisplay;

    return (
      <div>
        <Dropdown
          trigger={
            <Button
              floating
              large
              className="red right"
              waves="light"
              icon="add"
            />
          }
        >
          <NavItem onClick={() => this.appear()}>Tracker</NavItem>

          <NavItem onClick={() => this.appearChart()}>Charts</NavItem>

          <NavItem>three</NavItem>
        </Dropdown>

        <ResponsiveGridLayout
          className="layout"
          layouts={layouts}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 5, md: 6, sm: 6, xs: 4, xxs: 2 }}
          rowHeight={425}
          autoSize={true}
        >
          <div key="1">
            <TimeTracker
              displayState={display}
              buttonClick={this.disappear.bind(this)}
            />
          </div>

          <div key="2">
            <a
              href="#!"
              className={this.state.closebutton}
              onClick={() => this.disappearChart()}
            >
              <Icon>close</Icon>
            </a>

            <Charts displayChart={chartdisplay} />
          </div>

          <div key="3" />
        </ResponsiveGridLayout>
      </div>
    );
  }
}
export default Dashboard;
