import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const AllCoffee = ({ coffee, allCoffee, setAllCoffee }) => {
  // console.log(coffee);

  const { _id, name, supplier, photo, taste } = coffee;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Swal.fire(
        //   'Deleted!',
        //   'Your file has been deleted.',
        //   'success'
        // )
        fetch(`http://localhost:5000/newCoffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if(data.deletedCount > 0) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
              const remaining = allCoffee.filter(cof => cof._id !== _id)
              setAllCoffee(remaining)
            }
          });
      }
    });
  };
  return (
    <div className="max-w-7xl mx-auto">
      <div className="card card-side bg-base-100 shadow-xl p-4">
        <figure>
          <img src={photo} alt="" className="h-[250px]" />
        </figure>
        <div className="flex justify-between items-center md:w-[400px] px-6">
          <div>
            <p>{name}</p>
            <p>{supplier}</p>
            <p>{taste}</p>
          </div>
          <div className="flex flex-col">
            <button className="btn mb-2">details</button>
            <Link to={`/updateCoffee/${_id}`}><button className="btn mb-2">edit</button></Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn bg-red-600"
            >
              delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCoffee;
