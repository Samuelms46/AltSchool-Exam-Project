import "../styles/DeleteConfirmModel.css";

function DeleteConfirmModal({ isOpen, onClose, onConfirm, todoTitle }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="confirm-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="confirm-icon">⚠️</div>
        <h2>Delete Todo?</h2>
        <p>
          Are you sure you want to delete <strong>"{todoTitle}"</strong>?
          <br />
          This action cannot be undone.
        </p>
        <div className="confirm-actions">
          <button onClick={onClose} className="btn-cancel">
            Cancel
          </button>
          <button onClick={onConfirm} className="btn-delete">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteConfirmModal;
