import Swal from 'sweetalert2'

export default function AddCoffee() {

  const handleAddCoffee = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const newCoffee = {name,quantity,supplier,taste,category,details,photo}
    console.log(newCoffee);

    // send data to the server
    fetch('http://localhost:5000/coffee',{
      method: 'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(newCoffee)
    })
    .then(res =>res.json())
    .then(data => {
      console.log(data);
      if(data.insertedId){
        Swal.fire({
          title: 'Success',
          text: 'Coffee Added Successfully',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      }
    })
  }

  return (
    <div className="bg-[#F4F3F0] p-24">
      <h2 className="text-3xl font-extrabold ">Add a coffee</h2>

      <form onSubmit={handleAddCoffee}>
        <div className="md:flex gap-4 mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Enter coffee name"
                className="input input-bordered md:w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <label className="input-group">
              <input
                name="quantity"
                type="text"
                placeholder="Quantity"
                className="input input-bordered md:w-full"
              />
            </label>
          </div>
        </div>
        <div className="md:flex gap-4 mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Supplier</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="supplier"
                placeholder="Enter coffee supplier"
                className="input input-bordered md:w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Taste</span>
            </label>
            <label className="input-group">
              <input
                name="taste"
                type="text"
                placeholder="Enter coffee taste"
                className="input input-bordered md:w-full"
              />
            </label>
          </div>
        </div>
        <div className="md:flex gap-4 mb-6">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="category"
                placeholder="Enter coffee category"
                className="input input-bordered md:w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <label className="input-group">
              <input
                name="details"
                type="text"
                placeholder="Enter coffee details"
                className="input input-bordered md:w-full"
              />
            </label>
          </div>
        </div>
        <div className="">
          <div className="form-control w-full mb-6">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                placeholder="Enter photo URL"
                className="input input-bordered md:w-full"
              />
            </label>
          </div>
        </div>
        
        <input type="submit" value="Add Coffee" className="btn btn-block bg-gray-900 text-white"  />

      </form>
    </div>
  );
}
