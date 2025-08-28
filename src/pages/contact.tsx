import "@/pages/styles/contact.css";

import Footer from "@/components/common/footer";
import Image from "@/components/common/image";
import Logo from "@/components/common/logo";
import Socials from "@/components/about/socials";
import info from "@/data/user";
import { renderHtml } from "@/utils/utils";
import { useEffect } from "react";

const Contact = () => {
	const QRCode = info.contact.qrCode;

	// Scroll into top page view when switching nav tabs (in case the page is longer than 1 viewport hight)
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		document.title = `Контакты ${info.main.titleSeparator} ${info.main.title}`;
	}, []);

	return (
		<>
			<div className="page-content">
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							{/* FIXME: put logo on navbar layer to get rid of duplicate logo elements */}
							<Logo size={40} />
						</div>
					</div>

					<div className="contact-main">
						<div className="contact-left-side">
							<div className="title contact-title">{info.contact.title}</div>
							<div className="subtitle contact-subtitle">
								{renderHtml(info.contact.description)}
							</div>
						</div>
						<div className="contact-right-side">
							<div className="contact-qr-container">
								<div className="contact-qr-profile-image-container">
									<Image
										className="contact-qr-profile-image"
										src="https://cdn4.telesco.pe/file/FHFYGK1FOwmBZ5bQTsBe9pioo6iBShWl0ok7bbEZavpHahME1lBydfiD9cSjcFGE6wvjB38yuVhRiIy6DHXTA5X1wFxI8EbnuBWXFKdYH_s4bXmZqWVQ4JLE1yJWCvFn3WWWvLlSlmrB_xna1T9CF19HlRCAekF_3gLMtnbpEEYDFx7_1ah7dbXdJXsnPCCydSpQdh1nBexWQXsv7932_1xToYMQ3QjD1HSENonsmXeHrfBVHxBBdvwhAWbEkIRWvtpnF7fPF-pwnhMIahesPsOWgjWlQ84hS88Os9Sgd1D_RbFVVu44dRirdYOy-sAJ31cElaA5OLzU-CA7LbSajw.jpg"
									/>
								</div>
								<div className="contact-qr-image">
									<QRCode />
								</div>
								<a
									className="contact-qr-link alternative-link subtitle"
									href={info.socials.telegram}
									target="_blank"
								>
									<sparkly-text number-of-sparkles="5">
										@grigorijtomczuk
									</sparkly-text>
								</a>
							</div>
							<div className="contact-socials">
								<Socials />
							</div>
						</div>
					</div>
				</div>
				<div className="page-footer">
					<Footer />
				</div>
			</div>
		</>
	);
};

export default Contact;
