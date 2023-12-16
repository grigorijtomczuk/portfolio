import "@/pages/styles/contact.css";

import Footer from "@/components/common/footer";
import INFO from "@/data/user";
import Logo from "@/components/common/logo";
import NavBar from "@/components/common/navBar";
import Socials from "@/components/about/socials";
import { useEffect } from "react";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		document.title = `Связаться | ${INFO.main.title}`;
	}, []);

	return (
		<>
			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={40} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">Студент.</div>

						<div className="subtitle contact-subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, velit placeat harum iste deserunt libero temporibus impedit sunt ducimus molestiae, odit non rem necessitatibus modi iusto fugit laboriosam. Natus, ipsam dolorem. Ut ad incidunt, dolore eligendi provident atque ipsum veritatis nihil commodi saepe sunt ab maiores rem facere ratione mollitia adipisci repellat totam magni quasi. Consectetur veniam possimus ducimus pariatur odit laudantium in itaque dicta! At, odio id? Ab excepturi veritatis in illum cum est odio provident laudantium veniam ducimus quam dolores qui accusantium iusto quasi ut distinctio doloribus obcaecati perspiciatis, dignissimos blanditiis, magnam atque facere. Dolorem atque et amet!</div>
					</div>

					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
						</div>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;
