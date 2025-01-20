const ModalAlert = ({ content, onClose }) => (
  <div
    className="modal show d-block"
    tabIndex="-1"
    style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Alert</h5>
          <button type="button" className="btn-close" onClick={onClose}></button>
        </div>
        <div className="modal-body wf-bold text-primary">
          <p>{content}</p>
        </div>
        <div className="modal-footer">
          <button className="btn btn-primary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
  );

export default ModalAlert;