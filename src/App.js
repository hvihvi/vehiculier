import React, { Component } from "react";
import mockVehicules from "./vehiculier/mock/mockVehicules";
import Table from "./vehiculier/components/Table";

class App extends Component {
  render() {
    return (
      <div>
        <Table vehicules={mockVehicules} />
      </div>
    );
  }
}

export default App;
