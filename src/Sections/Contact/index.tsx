import LinkButton from '../../components/LinkButton';
import { useEffect, useState } from 'react';
import Input from '../../components/Input';
import { useInView } from 'react-intersection-observer';

const Contact = ({
  setSectionInView,
}: {
  setSectionInView: (value: string) => void;
}): JSX.Element => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [project, setProject] = useState('');
  const [message, setMessage] = useState('');
  const [link, setLink] = useState('');
  const { ref, inView } = useInView({ threshold: 1 });

  useEffect(() => {
    setSectionInView(inView ? 'contact' : '');
  }, [inView]);

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEMail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleProject = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProject(event.target.value);
  };

  const handleMessage = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  };

  useEffect(() => {
    setLink(
      `https://wa.me/573113988081?text=${`Nombre:%20${name}%0AEmail:%20${email}%0AProyecto:%20${project}%0AMessage:%20${encodeURIComponent(
        message
      )}`}`
    );
  }, [name, email, project, message]);

  return (
    <section
      className="flex justify-center bg-terra-blue-800 p-2 pt-[7rem] pb-[6rem]"
      id="contact"
      ref={ref}
    >
      <div className="flex flex-wrap justify-center sm:max-w-[540px] lg:max-w-[1140px]">
        <div className="mb-14 mr-4 w-full lg:w-[40%]">
          <div className="text-sm font-bold text-terra-green">CONTÁCTANOS</div>
          <h2 className="mb-2 font-[Montserrat] text-3xl text-white">
            Envíanos un mensaje llenando el formulario
          </h2>
          <p className="mb-2 mt-8 text-white">
            Para nosotros es un placer atenderte. Por eso te ofrecemos diferentes medios
            para responder a cada una de tus solicitudes de la manera que más te convenga
          </p>
          <div className="mt-8 flex items-center text-xl text-white">
            <a
              className="text link flex items-center"
              href="https://www.instagram.com/terraazulco"
              target="_blank"
            >
              <i className="uil uil-instagram mr-3 text-2xl text-terra-green"></i>
              terraazulco
            </a>
          </div>
          <div className="flex items-center text-xl text-white">
            <a
              className="text link flex items-center"
              href="https://twitter.com/terraazul_co"
              target="_blank"
            >
              <i className="uil uil-twitter-alt mr-3 text-2xl text-terra-green"></i>
              terraazul_co
            </a>
          </div>
          <div className="flex items-center text-white">
            <i className="uil uil-envelope mr-3 text-2xl text-terra-green"></i>
            contacto@terraazul.co
          </div>
          <div className="flex items-center text-xl text-white">
            <a
              className="text link flex items-center"
              href="https://wa.me/573113988081"
              target="_blank"
            >
              <i className="uil uil-whatsapp mr-3 text-2xl text-terra-green"></i>
              311-398-80-81
            </a>
          </div>
        </div>
        <div className="flex w-full justify-center p-2 lg:w-1/2">
          <form className="grid w-full gap-6">
            <Input value={name} onChange={handleName} type="text" label="Nombre" />
            <Input value={email} onChange={handleEMail} type="email" label="E-Mail" />
            <Input
              value={project}
              onChange={handleProject}
              type="text"
              label="Proyecto"
            />
            <div className="flex flex-col rounded border border-terra-blue bg-terra-blue p-[0.75rem_1rem_0.25rem]">
              <label className="text-base font-normal text-white">Mensaje</label>
              <textarea
                name=""
                id=""
                rows={5}
                className="resize-none border-none bg-terra-blue pt-1 pr-2 pb-1 pl-0 text-white outline-none"
                value={message}
                onChange={handleMessage}
              ></textarea>
            </div>
            <LinkButton link={link} icon="uil-message" type="secondary">
              Enviar mensaje
            </LinkButton>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
