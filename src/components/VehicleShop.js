import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllVehicles } from "../actions/VehicleActions";
import { useState } from "react";
import Vehicle from "./vehilce/Vehicle";
import ButtonAddVehicle from "./vehilce/buttonAddVehicle";

/**
 * Renders the vehicle list page.
 */
function VehicleShop() {
  // Step 1: Get the redux dispatch function
  const dispatch=useDispatch();
  // Step 2: Get the list of vehicles from the store, hint: use useSelector()
  const vehicleList=useSelector((state) => state.vehicleReducerContent.vehicles);
  // Step 3: Initialize state variable for the manufacturer filter, hint: use useState() 
  // ex: const [manufacturerFilter, setManufacturerFilter] = useState("");
  // Step 4: Initialize state variable for the price filter, hint: use useState()
  const [manufacturerFilter, setManufacturerFilter] = useState("");
  const [minPriceFilter, setMinPrice] = useState("");
  const [maxPriceFilter, setMaxPrice] = useState("");
  // Step 5: Dispatch an action to fetch the vehicles when the component mounts, hint: use useEffect()
  // Step 6: Re-fetch the vehicles when the dispatch function changes, hint: use dependecies

  useEffect(()=>{
    dispatch(getAllVehicles());
  },[dispatch]);

  /**
   * Filters the vehicles by manufacturer.
   * @param {Event} e - the change event
   */
  function handleManufacturerChange(e) {
  // Step 7: Update the manufacturer filter state when input changes,
    const newManufacturer=e.target.value;
    setManufacturerFilter(newManufacturer);
  }

  /**
   * Filters the vehicles by price.
   * @param {Event} e - the change event
   */
  function handleMinPriceChange(e) {
    // Step 8: Update the price filter state when input changes
    const newPriceMin=e.target.value;
    setMinPrice(newPriceMin);
  }
  function handleMaxPriceChange(e) {
    // Step 8: Update the price filter state when input changes
    const newPriceMax=e.target.value;
    setMaxPrice(newPriceMax);
  }

  /**
   * Returns a filtered list of vehicles that match the specified filters.
   * @returns {Vehicle[]} the filtered list of vehicles
   */
  function filteredVehicles() {
    return vehicleList.filter((vehicle) => {
      // Step 9: Check if the vehicle's manufacturer matches the filter
        //startsWith
      // Step 10: Check if the vehicle's price is within the filter range
      // Step 11: Return only the vehicles that match both filters
      // return vehicles that match both filters 

      const manufacturerMatch = vehicle.manufacturer.toLowerCase().includes(manufacturerFilter.toLowerCase());
      const minPriceMatch = !minPriceFilter || vehicle.price >= minPriceFilter;
      const maxPriceMatch =!maxPriceFilter || vehicle.price <= maxPriceFilter;

          return manufacturerMatch &&  minPriceMatch && maxPriceMatch;
     
    });
  }

  return (
    <div className="container">
      <div className="m-auto row">
        <div className="container mb-2">
          {/**
           * Step 12: Create the "Create Vehicle" button 
           * This step involves utilizing the Link component from the React Router library to create a navigation link. 
           * The "to" prop is set to "/addVehicle," indicating the target route for navigation. 
           * The className attribute specifies the styling classes for the button, making it visually appealing. 
           * The button itself contains the text "Create a Vehicle."
           */}
           <ButtonAddVehicle/>

        </div>
        <hr />
        <div className="col-md-4 mb-2">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="form-control form-control fw-bold text-decoration-underline" id="manufacturer-addon">
                Manufacturer
              </span>
            </div>
            {/**
             * Step 13: Create Manufacturer Filter Input Field
             * Input Type: The type="text" attribute specifies that this is a text input field.
             * CSS Class: The className="form-control" attribute applies styling from Bootstrap.
             * Placeholder: The placeholder="Filter by Manufacturer" attribute provides a hint text inside the input field, guiding users on its purpose.
             * Value Binding (Two-way Binding): The value={manufacturerFilter} binds the input field's value to the manufacturerFilter state variable.
             * Change Event Handling: The onChange={handleManufacturerChange} attribute associates the input field with the handleManufacturerChange function.
             */}
             <input
              type="text"
              className="form-control form-control"
              id="manufacturerFilter"
              placeholder="Filter by Manufacturer"
              value={manufacturerFilter}
              onChange={handleManufacturerChange}
              />
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text fw-bold text-decoration-underline">
                Price
              </span>
            </div>
            {/**
             * Step 14: Create Price Filter Input Field
             * Input Type: The type="text" attribute specifies that this is a text input field.
             * CSS Class: The className="form-control" attribute applies styling from Bootstrap.
             * Placeholder: The placeholder="Filter by Price" attribute provides a hint text inside the input field, guiding users on its purpose.
             * Value Binding (Two-way Binding): The value={priceFilter} binds the input field's value to the priceFilter state variable.
             * Change Event Handling: The onChange={handlePriceChange} attribute associates the input field with the handlePriceChange function.
             */}
              <input
              type="text"
              className="form-control form-control"
              id="minPriceFilter"
              placeholder="Min Price"
              value={minPriceFilter}
              onChange={handleMinPriceChange}
            />

            {/* Maximum Price Filter */}
            <input
              type="text"
              className="form-control form-control"
              id="maxPriceFilter"
              placeholder="Max Price"
              value={maxPriceFilter}
              onChange={handleMaxPriceChange}
            />
          </div>
        </div>
      </div>
      <br />
      {/* Step 15: Map Filtered Vehicles to JSX Elements 
          hint: call the filteredVehicle function that returns the vehicles list that have already been filtered 
                then map the filetered list to the vehicle element
      */}
      {filteredVehicles().map((vehicle)=>(
         <Vehicle key={vehicle.id} vehicle={vehicle} />
      )
      )}
    </div>
  );
}
export default VehicleShop;
