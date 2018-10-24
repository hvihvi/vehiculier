import Table from "../components/Table";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    vehicules: filterPuissance(
      state.vehiculier.vehicules,
      state.vehiculier.selectedPuissance
    )
  };
};

// Visible for testing
export const filterPuissance = (vehicules, puissance) =>
  vehicules.filter(v => v.puissance === puissance);

export default connect(mapStateToProps)(Table);
