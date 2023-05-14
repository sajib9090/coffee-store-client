import React, { useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {

  const updatedCoffee = useLoaderData()
  const navigate = useNavigate()
  const [error, setError] = useState('')

    const handleUpdateCoffee = event => {
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

        fetch(`http://localhost:5000/newCoffee/${updatedCoffee._id}`, {
          method: 'PUT',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(addCoffee)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if( data.modifiedCount > 0 ) {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Edited updated',
              showConfirmButton: false,
              timer: 1500
            })
            navigate('/')
          }
          if(data.modifiedCount == 0){
            setError('No changed yet')
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
        <h2 className="text-[#374151] text-5xl pb-6">Update Coffee</h2>
        <p className="max-w-3xl mx-auto">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
      </div>
      <div>
        <form onSubmit={handleUpdateCoffee} className="max-w-4xl mx-auto bg-slate-400 px-4 py-8 mb-6">
          <div className="flex justify-between space-x-6 ">
            <div className="w-[50%]">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <label className="input-group input-group-vertical">
                <input
                  type="text"
                  name="name"
                  defaultValue={updatedCoffee.name}
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
                  defaultValue={updatedCoffee.supplier}
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
                  defaultValue={updatedCoffee.category}
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
                  defaultValue={updatedCoffee.chef}
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
                  defaultValue={updatedCoffee.taste}
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
                  defaultValue={updatedCoffee.details}
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
                  defaultValue={updatedCoffee.photo}
                  placeholder="Enter photo url"
                  className="input input-bordered"
                />
              </label>
              <p className='text-red-700 pt-4'>{error}</p>
          <input type="submit" value="Add coffee" className="w-[100%] bg-black text-white mt-6 py-3 rounded-md cursor-pointer" />
        </form>
      </div>
    </div>
    );
};

export default UpdateCoffee;