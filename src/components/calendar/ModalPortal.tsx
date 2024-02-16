import ReactDOM from 'react-dom';

interface ModalPortalProps {
  children: React.ReactNode;
}

const ModalOverlay = ({ children }: ModalPortalProps) => {
  return <div>{children}</div>;
};

const ModalPortal = ({ children }: ModalPortalProps) => {
  const el = document.getElementById('modal');

  if (!el) {
    return null;
  }

  return (
    <>{ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, el)}</>
  );
};

export default ModalPortal;
