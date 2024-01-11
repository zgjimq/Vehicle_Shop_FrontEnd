import React, { useState } from "react";
import { createVehicle } from "../../actions/VehicleActions";
import { useDispatch, useSelector } from "react-redux";

function AddVehicle() {
  // Step 1: Get the redux dispatch function
  
  // Step 2: Get the list of errors from the store, hint: use useSelector()
  const dispatch=useDispatch();
  const errors=useSelector((state) => state.errorReducerContent)
  const [state, setState] = useState({
    manufacturer: "",
    model:"",
    price:"",
    horsePower:"",
    color:"",
    mileage:"",
    productionYear:"",
    transmission:"",
    fuelType:""
  });

  //veq se erroret spo perditesohen menjehere perndryshe eshte ne rregull nese implementohet krejt elementet do largohet edhe errori qe eshte permomentin 
  //Ndonje pyetje?
  //a eshte ksjtu ne rregull veq spo perditsohet shpejt a
  //erroret 
  // kshtu qe po ne rregull eshte veq kur shtohen elementet tjera rregullohet 
  // edeh use effekti dmth edhe heket tanaj?
  // do se ne update erroret perditesohen edhe jem ne rregull 
  // me qka me bo kete useEffect the setState a

    // TODO: Update the component state with the latest 'errors' prop
    //qitu me u perditesu erroret edhe pastaj jemi ne rregull 
    //dmth kthehen erroret qe jan kan ma heret kur krijohet me sukses 
    //qitu kemi me perdor me ban setState state me kan per errors qe me kan [] e zbrazt 
    //Okej do tentoj
    // nese ka pastaj problem me kontakto prap ose me dergo projektin e shoh 
   


  
  
  

  const onChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value
  });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // *Created a new vehicle object with input values from the state
    const newVehicle = {
      manufacturer: state.manufacturer,
      model:state.model,
      price:state.price,
      horsePower:state.horsePower,
      color:state.color,
      mileage:state.mileage,
      productionYear:state.productionYear,
      transmission:state.transmission,
      fuelType:state.fuelType
    };
    dispatch(createVehicle(newVehicle));
  };
  /*
  
  */

  return (
    //-------- JSX ----------
    <div>
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h3 className="text-center">Create Vehicle Form</h3>
              <hr />
              <form onSubmit={onSubmit}>
                {/* TODO: create input text field for manufacurer */}
                <div className="form-group">
                  <input
                    type="text"
                    className={`form-control form-control-lg ${errors.manufacturer ? "is-invalid" :""}`}
                    placeholder="Vehicle Manufacturer"
                    name="manufacturer"
                    value={state.manufacturer}
                    onChange={onChange} // Bind the onChange function
                  />
                  {

                errors.manufacturer && (
                    <p className="invalid-feedback">
                        {errors.manufacturer}
                    </p>
                )
                }
                 



                  <input
                    type="text"
                    className={`form-control form-control-lg ${errors.model ? "is-invalid" :""}`}
                    placeholder="Vehicle model"
                    name="model"
                    value={state.model}
                    onChange={onChange} // Bind the onChange function
                  />
                  {

                  errors.model && (
                      <p className="invalid-feedback">
                          {errors.model}
                      </p>
                  )
                  }


                  <input
                    type="text"
                    className={`form-control form-control-lg ${errors.price ? "is-invalid" :""}`}
                    placeholder="Vehicle price"
                    name="price"
                    value={state.price}
                    onChange={onChange} // Bind the onChange function
                  />
                  {

                  errors.price && (
                      <p className="invalid-feedback">
                          {errors.price}
                      </p>
                  )
                  }


                  <input
                    type="text"
                    className={`form-control form-control-lg ${errors.horsePower ? "is-invalid" :""}`}
                    placeholder="Vehicle PS"
                    name="horsePower"
                    value={state.horsePower}
                    onChange={onChange} // Bind the onChange function
                  />
                  {

                  errors.horsePower && (
                      <p className="invalid-feedback">
                          {errors.horsePower}
                      </p>
                  )
                  }


                  <input
                    type="text"
                    className={`form-control form-control-lg ${errors.color ? "is-invalid" :""}`}
                    placeholder="Vehicle color"
                    name="color"
                    value={state.color}
                    onChange={onChange} // Bind the onChange function
                  />
                  {

                  errors.color && (
                      <p className="invalid-feedback">
                          {errors.color}
                      </p>
                  )
                  }


                  <input
                    type="text"
                    className={`form-control form-control-lg ${errors.mileage ? "is-invalid" :""}`}
                    placeholder="Vehicle mileage"
                    name="mileage"
                    value={state.mileage}
                    onChange={onChange} // Bind the onChange function
                  />
                  {

                    errors.mileage && (
                        <p className="invalid-feedback">
                            {errors.mileage}
                        </p>
                    )
                    }




                  <input
                    type="text"
                    className={`form-control form-control-lg ${errors.productionYear ? "is-invalid" :""}`}
                    placeholder="Vehicle Production Year"
                    name="productionYear"
                    value={state.productionYear}
                    onChange={onChange} // Bind the onChange function
                  />
                  {

                  errors.productionYear && (
                      <p className="invalid-feedback">
                          {errors.productionYear}
                      </p>
                  )
                  }



                  <input
                    type="text"
                    className={`form-control form-control-lg ${errors.transmission ? "is-invalid" :""}`}
                    placeholder="Vehicle transmission"
                    name="transmission"
                    value={state.transmission}
                    onChange={onChange} // Bind the onChange function
                  />
                 {

                    errors.transmission && (
                        <p className="invalid-feedback">
                            {errors.transmission}
                        </p>
                    )
                    }




                  <input
                    type="text"
                    className={`form-control form-control-lg ${errors.fuelType ? "is-invalid" :""}`}
                    placeholder="Fuel type"
                    name="fuelType"
                    value={state.fuelType}
                    onChange={onChange} // Bind the onChange function
                  />
                  {

                  errors.fuelType && (
                      <p className="invalid-feedback">
                          {errors.fuelType}
                      </p>
                  )
                  }

                </div>
               
                <input type="submit" className="btn btn-outline-primary btn-lg">
                </input>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    //------------ JSX --------------
  );
}

export default AddVehicle;
