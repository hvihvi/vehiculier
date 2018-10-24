import React from "react";
import PropTypes from "prop-types";

const Table = ({ vehicules }) => (
  <table>
    <thead>
      <tr>
        <th>modèle</th>
        <th>boiteVitesses</th>
        <th>energieLibelle</th>
        <th>carrosserieLibelle</th>
        <th>puissance</th>
      </tr>
    </thead>
    <tbody>
      {vehicules.map(vehicule => (
        <tr key={vehicule.id}>
          <td>
            {vehicule.marqueLibelle +
              " " +
              vehicule.modeleLibelle +
              " " +
              vehicule.version}
          </td>
          <td>{vehicule.boiteVitesses}</td>
          <td>{vehicule.energieLibelle}</td>
          <td>{vehicule.carrosserieLibelle}</td>
          <td>{vehicule.puissance + " cv"}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

Table.proptypes = {
  vehicules: PropTypes.arrayOf().isRequired
};

export default Table;
