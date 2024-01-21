import './modal.css'
import close_icon from './x-close.png'

const Modal = ({handleClose, show, children}) => {
	const showHideClassName = show ? "modal display-block" : "modal display-hide"


	return(
    <div className={showHideClassName}>
      <section className="modal-main"> 
        <button type="button" onClick={handleClose}>
          <img src={close_icon} alt="close_modal"></img>
        </button>
      {children}
      </section>
    </div>
	)
}

export default Modal;