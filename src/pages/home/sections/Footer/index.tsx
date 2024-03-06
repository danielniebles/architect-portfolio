const Footer = (): JSX.Element => {
  return (
    <footer className="footer flex w-full flex-col items-center bg-terra-green-700 py-10">
      <div className="grid grid-cols-2 gap-10 py-10 px-4 text-white">
        <div>
          <h2 className={`text-lg font-semibold md:text-xl`}>Terra Azul</h2>
          <p>Es una marca registrada de:</p>
          <a
            className="mt-4 flex justify-center"
            href="https://www.linkedin.com/in/javierniebles/"
            target="_blank"
          >
            <img className="h-[80px]" src="/assets/JN/main_logo.svg" alt="" />
          </a>
        </div>
        <div className="grid grid-cols-3 gap-1">
          <a className="text link" href="https://wa.me/573113988081" target="_blank">
            <i className="uil uil-whatsapp text-xl font-normal"></i>
          </a>
          <a href="https://www.instagram.com/terraazulco" target="_blank">
            <i className="uil uil-instagram text-xl font-normal"></i>
          </a>
          <a href="https://www.facebook.com/TerraAzulSAS" target="_blank">
            <i className="uil uil-facebook text-xl font-normal"></i>
          </a>
        </div>
      </div>
      <p className="text-white">&#169; Todos los derechos reservados</p>
    </footer>
  );
};

export default Footer;
