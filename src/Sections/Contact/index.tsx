import SectionTitle from '../../components/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Controller } from 'swiper';
import Title from '../../components/Title';
import LinkButton from '../../components/LinkButton';
import { useEffect, useState } from 'react';

const Contact = (): JSX.Element => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [project, setProject] = useState('');
  const [message, setMessage] = useState('');
  const [link, setLink] = useState('');

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
    setLink(`https://wa.me/573164424509?text=${`Nombre:%20${name}%0AEmail:%20${email}%0AProyecto:%20${project}%0AMessage:%20${encodeURIComponent(message)}`}`)
  }, [name, email, project, message])


  return (
    <section className="mb-10 flex flex-col items-center justify-center px-4">
      <SectionTitle customClass="text-white mb-16">Contáctanos</SectionTitle>
      <div className="mx-[auto] grid w-full md:max-w-screen-md md:grid-cols-2">
        <div>
          <div className="mb-8 flex">
            <i className="uil uil-phone mr-3 text-2xl text-white"></i>
            <div>
              <Title customClass="text-white">Llámanos</Title>
              <span className="text-sm text-white">123-456-789</span>
            </div>
          </div>
          <div className="mb-8 flex">
            <i className="uil uil-envelope mr-3 text-2xl text-white"></i>
            <div>
              <Title customClass="text-white">Email</Title>
              <span className="text-sm text-white">alexa@email.com</span>
            </div>
          </div>
          <div className="mb-8 flex">
            <i className="uil uil-map-marker mr-3 text-2xl text-white"></i>
            <div>
              <Title customClass="text-white">Location</Title>
              <span className="text-sm text-white">Medellin - Colombia</span>
            </div>
          </div>
        </div>

        <form className="grid gap-6 lg:w-[460px]">
          <div className="flex flex-col rounded-lg bg-slate-400 p-[0.75rem_1rem_0.25rem]">
            <label className="text-xs text-white">Nombre</label>
            <input
              type="text"
              className="border-none bg-slate-400 pt-1 pr-2 pb-1 pl-0 outline-none"
              value={name}
              onChange={handleName}
            />
          </div>
          <div className="flex flex-col rounded bg-slate-400 p-[0.75rem_1rem_0.25rem]">
            <label className="text-xs text-white">Email</label>
            <input
              type="email"
              className="border-none bg-slate-400 pt-1 pr-2 pb-1 pl-0 outline-none"
              value={email}
              onChange={handleEMail}
            />
          </div>
          <div className="flex flex-col rounded bg-slate-400 p-[0.75rem_1rem_0.25rem]">
            <label className="text-xs text-white">Proyecto</label>
            <input
              type="text"
              className="border-none bg-slate-400 pt-1 pr-2 pb-1 pl-0 outline-none"
              value={project}
              onChange={handleProject}
            />
          </div>
          <div className="flex flex-col rounded bg-slate-400 p-[0.75rem_1rem_0.25rem]">
            <label className="text-xs text-white">Mensaje</label>
            <textarea
              name=""
              id=""
              rows={7}
              className="border-none bg-slate-400 pt-1 pr-2 pb-1 pl-0 outline-none"
              value={message}
              onChange={handleMessage}
            ></textarea>
          </div>
          <LinkButton link={link} icon='uil-message'>Enviar mensaje</LinkButton>
        </form>
      </div>
    </section>
  );
};

export default Contact;
