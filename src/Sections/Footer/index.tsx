import Title from '../../components/Title';

const Footer = (): JSX.Element => {
  return (
    <footer className="footer flex flex-col items-center bg-terra-green-700 py-10 w-full">
      <div className="grid grid-cols-2 gap-10 py-10 px-4 text-white">
        <div>
          <Title>Terra Azul</Title>
          <p>Es una marca registrada de:</p>
          <div className='flex justify-center mt-4'>

          <img className='h-[80px]' src="assets/JN/main_logo.svg" alt="" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-1">
          <a className="text link" href="https://wa.me/573113988081" target="_blank">
            <i className="uil uil-whatsapp text-xl font-normal"></i>
          </a>
          <a href="https://www.instagram.com/terraazulco" target="_blank">
            <i className="uil uil-instagram text-xl font-normal"></i>
          </a>
          <a href="https://twitter.com/terraazul_co" target="_blank">
            <i className="uil uil-twitter-alt text-xl font-normal"></i>
          </a>
        </div>
      </div>
      <p className='text-white'>&#169; Todos los derechos reservados</p>
    </footer>
  );
};

export default Footer;
