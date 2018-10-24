import mockVehicules from "../mock/mockVehicules";

const initialState = {
  vehicules: mockVehicules,
  selectedPuissance: 6
};

const vehiculier = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default vehiculier;
