import Swal from 'sweetalert2';
export default function CoffeeCard({ coffee }) {
  const {_id, name, quantity, supplier, taste, category, details, photo } = coffee;
  
  const handleDelete = id =>{
    console.log(id);
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            // title: "Deleted!",
            // text: "Your file has been deleted.",
            // icon: "success"
            
          });
          console.log('Delete confirm');
        }
      });
  }
  
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img src={photo} alt="Movie" />
        </figure>
        <div className="flex justify-between w-full p-4">
          <div>
            <h2 className="card-title">{name}</h2>
            <p>{quantity}</p>
            <p>{supplier}</p>
            <p>{taste}</p>
            <p>{category}</p>
          </div>
          <div className="card-actions justify-end">
            <div className="join join-vertical space-y-4">
              <button className="btn join-item">View</button>
              <button className="btn join-item">Edit</button>
              <button onClick={() => handleDelete(_id)} className="btn join-item bg-red-500">X</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
