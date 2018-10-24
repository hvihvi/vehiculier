import React from "react";

const Table = ({ vehicules }) => (
  <table>
    <thead>
      <tr>
        <th>modeleLibelle</th>
        <th>marqueLibelle</th>
        <th>carrosserie</th>
        <th>carrosserieLibelle</th>
        <th>puissance</th>
        <th>codeEnergie</th>
        <th>energieLibelle</th>
        <th>nbPlaces</th>
        <th>version</th>
        <th>valeur</th>
        <th>genre</th>
        <th>boiteVitesses</th>
        <th>anneeCommercialisationDebut</th>
        <th>anneeCommercialisationFin</th>
        <th>classePrixActuelle</th>
        <th>codeMarque</th>
        <th>codeModele</th>
        <th>id</th>
        <th>groupeActuel</th>
      </tr>
    </thead>
    <tbody>
      {vehicules.map(vehicule => (
        <tr>
          <td>{vehicule.modeleLibelle}</td>
          <td>{vehicule.marqueLibelle}</td>
          <td>{vehicule.carrosserie}</td>
          <td>{vehicule.carrosserieLibelle}</td>
          <td>{vehicule.puissance}</td>
          <td>{vehicule.codeEnergie}</td>
          <td>{vehicule.energieLibelle}</td>
          <td>{vehicule.nbPlaces}</td>
          <td>{vehicule.version}</td>
          <td>{vehicule.valeur}</td>
          <td>{vehicule.genre}</td>
          <td>{vehicule.boiteVitesses}</td>
          <td>{vehicule.anneeCommercialisationDebut}</td>
          <td>{vehicule.anneeCommercialisationFin}</td>
          <td>{vehicule.classePrixActuelle}</td>
          <td>{vehicule.codeMarque}</td>
          <td>{vehicule.codeModele}</td>
          <td>{vehicule.id}</td>
          <td>{vehicule.groupeActuel}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;
