import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const AddCoffee = () => {

    const handleAddCoffee = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const supplier = form.supplier.value;
        const category = form.category.value;
        const chef = form.chef.value;
        const taste = form.taste.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const addCoffee = {name, supplier, category, chef, taste, details, photo}
        // console.log(addCoffee);

        fetch('http://localhost:5000/newCoffee', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },

            body: JSON.stringify(addCoffee)
        })
         .then(res => res.json())
         .then(data => {
            console.log(data);
            if(data.insertedId){
              form.reset()
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Coffee added successfully',
                showConfirmButton: false,
                timer: 1500
              })
            }
         })
    }
  return (
    <div className="max-w-7xl mx-auto ">
      <div className="text-center">
        <Link to="/" className="font-bold py-6">
          Home
        </Link>
      </div>

      <div className="text-center py-6">
        <h2 className="text-[#374151] text-5xl pb-6">Add New Coffee</h2>
        <p className="max-w-3xl mx-auto">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
      </div>
      <div>
        <form onSubmit={handleAddCoffee} className="max-w-4xl mx-auto bg-slate-400 px-4 py-8 mb-6">
          <div className="flex justify-between space-x-6 ">
            <div className="w-[50%]">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <label className="input-group input-group-vertical">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter coffee name"
                  className="input input-bordered w-[100%]"
                />
              </label>
              <label className="label">
                <span className="label-text">Supplier</span>
              </label>
              <label className="input-group input-group-vertical">
                <input
                  type="text"
                  name="supplier"
                  placeholder="Enter supplier name"
                  className="input input-bordered"
                />
              </label>
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <label className="input-group input-group-vertical">
                <input
                  type="text"
                  name="category"
                  placeholder="Enter category name"
                  className="input input-bordered"
                />
              </label>
            </div>
            <div className="w-[50%]">
              <label className="label">
                <span className="label-text">Chef</span>
              </label>
              <label className="input-group input-group-vertical">
                <input
                  type="text"
                  name="chef"
                  placeholder="Enter chef name"
                  className="input input-bordered"
                />
              </label>
              <label className="label">
                <span className="label-text">Taste</span>
              </label>
              <label className="input-group input-group-vertical">
                <input
                  type="text"
                  name="taste"
                  placeholder="Enter taste"
                  className="input input-bordered"
                />
              </label>
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <label className="input-group input-group-vertical">
                <input
                  type="text"
                  name="details"
                  placeholder="Enter details"
                  className="input input-bordered"
                />
              </label>
            </div>
          </div>
          <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <label className="input-group input-group-vertical">
                <input
                  type="text"
                  name="photo"
                  placeholder="Enter photo url"
                  className="input input-bordered"
                />
              </label>
          <input type="submit" value="Add coffee" className="w-[100%] bg-black text-white mt-6 py-3 rounded-md cursor-pointer" />
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
