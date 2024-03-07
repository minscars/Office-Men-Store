import { Button } from '@material-tailwind/react';

import { TrashIcon } from '@heroicons/react/24/outline';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { toast } from 'react-toastify';
// import { useDispatch } from 'react-redux';
// import { deleteUser } from "../../../../../../redux/request/userRequest";

const DeleteModal = ({ open, onClose }) => {
  // const dispatch = useDispatch();

  // const handleDelete = () => {
  //   deleteUser(userId, dispatch).then(res => {
  //     onHide()
  //     toast.success("Deleted successfully")
  //     onDeleteSubmit()
  //   }).catch((error) => {
  //     toast.error("Something went wrong")
  //     console.log("Internal Error", error)
  //   });
  // }

  return (
    <Dialog open={open} onClose={onClose} className="rounded-lg">
      <DialogContent>
        <TrashIcon className="mx-auto text-red-500 w-20 h-20" />
      </DialogContent>

      <DialogTitle >{'Are you sure delete product?'}</DialogTitle>

      <div className="flex items-center justify-center gap-5 mb-5">
        <div className="flex items-center justify-center gap-5">
          <Button onClick={onClose}>Disagree</Button>
          <Button color="red" className="justify-center" onClick={onClose} autoFocus>
            Agree
          </Button>
        </div>
      </div>
    </Dialog>

    //   <Modal open={show} onClose={() => setOpen(false)}>
    //   <div className="text-center w-60">
    //     <TrashIcon className="mx-auto text-red-500 w-20 h-20" />
    //     <div className="mx-auto my-4 w-48">
    //       <h3 className="text-lg font-black text-gray-800">Confirm Delete</h3>
    //       <p className="text-sm text-gray-500">
    //         Are you sure you want to delete {selectedProduct && selectedProduct.name}?
    //       </p>
    //     </div>
    //     <div className="flex gap-4">
    //       <Button color="red" className="btn btn-danger w-full" onClick={deleteProduct}>
    //         Delete
    //       </Button>
    //       <Button className="btn btn-light w-full" onClick={() => setOpen(false)}>
    //         Cancel
    //       </Button>
    //     </div>
    //   </div>
    // </Modal>
  );
};

export default DeleteModal;
