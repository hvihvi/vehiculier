import { filterPuissance } from "./VehiculeTable";

it("should only keep vehicles with puissance 6", () => {
  //given
  const vehicules = [{ puissance: 4 }, { puissance: 6 }];
  //when
  const returnedVehicules = filterPuissance(vehicules, 6);
  //then
  expect(returnedVehicules).toEqual([{ puissance: 6 }]);
});
