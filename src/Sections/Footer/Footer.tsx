import Title from '../../components/Title';

const Footer = (): JSX.Element => {
  return (
    <footer className="footer flex flex-col items-center bg-light-blue py-10">
      <div className="grid grid-cols-2 gap-10 py-10 px-4">
        <div>
          <Title>Javier Niebles</Title>
          <p>Arquitecto - Urbanista</p>
        </div>
        <div className="grid grid-cols-3 gap-1">
          <a className="text link" href="https://wa.link/ozr341" target="_blank">
            <i className="uil uil-whatsapp text-xl font-normal"></i>
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <i className="uil uil-instagram text-xl font-normal"></i>
          </a>
          <a href="https://twitter.com/" target="_blank">
            <i className="uil uil-twitter-alt text-xl font-normal"></i>
          </a>
        </div>
      </div>
      <p>&#169; Todos los derechos reservados</p>
    </footer>
  );
};

export default Footer;
