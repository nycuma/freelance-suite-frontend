import React, { Component } from "react";
import {
  Col,
  Card,
  Collection,
  CollectionItem,
  Button
} from "react-materialize";
import "./Clients.css";

class Clients extends Component {
  render() {
    return (
      <div className={this.props.displayClients}>
        <Collection className="center">
          <div className="closediv">
            <button className="closebutton" onClick={this.props.buttonClick2}>
              X
            </button>
          </div>
          <Col m={6} s={12}>
            <div className="header" textClassName="white-text">
              <p>Clients</p>
            </div>
          </Col>

          <Button floating fab="vertical" icon="add" className="green" tiny>
            <Button floating icon="insert_chart" className="red" />
          </Button>

          <div className="flex">
            <div>Name</div>
            <div>Revenue</div>
            <div>Rating</div>
          </div>
          <CollectionItem />
          <CollectionItem className="flexcol">
            <div>Client 1</div> <div>$3400</div>
            <div>4.2</div>
          </CollectionItem>
          <CollectionItem className="flexcol">
            <div>Client 1</div> <div>$3400</div>
            <div>4.2</div>
          </CollectionItem>
          <CollectionItem className="flexcol">
            <div>Client 1</div> <div>$3400</div>
            <div>4.2</div>
          </CollectionItem>
          <CollectionItem className="flexcol">
            <div>Client 1</div> <div>$3400</div>
            <div>4.2</div>
          </CollectionItem>
          <CollectionItem />
        </Collection>
      </div>
    );
  }
}
export default Clients;
