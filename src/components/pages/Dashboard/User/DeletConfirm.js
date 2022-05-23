import React from 'react';
import toast from 'react-hot-toast';

const DeletConfirmModal = ({setDeletOrder, deletOrder, refetch}) => {
    const {name, email, _id} = deletOrder;
    console.log(_id, name,'delet Confirm')

    const handleDelete = () => {
        fetch(`http://localhost:5000/orders/${_id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    // toast.success(`Doctor: ${name} is deleted.`)
                    setDeletOrder(null);
                    refetch();
                }
            })
    }
    return (
    <div>
            {/* // <!-- The button to open modal --> */}
        
        
        {/* // <!-- Put this part before </body> tag --> */}
        <input type="checkbox" id="delet-confirm-modal" class="modal-toggle" />
        <div class="modal modal-bottom sm:modal-middle">
          <div class="modal-box">
            <h3 class="font-bold text-lg text-red-500">Are You sure you want to delet  </h3>
            <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
            <div class="modal-action">
            <button onClick={() => handleDelete()} class="btn btn-xs btn-error">Delete</button>
              <label for="delet-confirm-modal" class="btn">Cancel</label>
            </div>
          </div>
        </div>
    </div>
    );
};

export default DeletConfirmModal;