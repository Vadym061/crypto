import { useEffect } from "react";

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  actions,
  subtitle,
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="ui-modal">
      <div className="ui-modal__overlay" onClick={onClose} />
      <div className="ui-modal__content">
        <div className="corner-top-right"></div>
        <div className="corner-bottom-left"></div>

        <div className="ui-modal__container">
          <button
            className="ui-modal__close-button"
            onClick={onClose}
            aria-label="Close modal"
            type="button"
          >
            &#10005;
          </button>

          {title && <h3 className="ui-modal__heading heading h4">{title}</h3>}
          {subtitle && <p className="ui-modal__subtitle">{subtitle}</p>}

          <div className="ui-modal__body">{children}</div>

          <div className="ui-modal__footer">
            {actions || (
              <button
                className="ui-modal__btn ui-modal__btn--close"
                onClick={onClose}
              >
                Close
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
