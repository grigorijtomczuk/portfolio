import "@/components/about/styles/socials.css";

import { faGithub, faLinkedin, faStackOverflow, faTelegram } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import info from "@/data/user";

const Socials = () => {
	return (
		<div className="socials">
			<div className="social">
				<a href={info.socials.github} target="_blank" rel="noreferrer">
					<div className="social-icon">
						<FontAwesomeIcon icon={faGithub} className="social-icon" />
					</div>
					<div className="social-text">GitHub</div>
				</a>
			</div>

			<div className="social">
				<a href={info.socials.linkedin} target="_blank" rel="noreferrer">
					<div className="social-icon">
						<FontAwesomeIcon icon={faLinkedin} className="social-icon" />
					</div>
					<div className="social-text">LinkedIn</div>
				</a>
			</div>

			<div className="social">
				<a href={info.socials.stackoverflow} target="_blank" rel="noreferrer">
					<div className="social-icon">
						<FontAwesomeIcon icon={faStackOverflow} className="social-icon" />
					</div>
					<div className="social-text">StackOverflow</div>
				</a>
			</div>

			<div className="divider-wrapper">
				<div className="social">
					<a href={info.socials.telegram} target="_blank" rel="noreferrer">
						<div className="social-icon">
							<FontAwesomeIcon icon={faTelegram} className="social-icon" />
						</div>
						<div className="social-text">Telegram</div>
					</a>
				</div>

				<div className="social">
					<a href={`mailto:${info.main.email}`} rel="noreferrer">
						<div className="social-icon">
							<FontAwesomeIcon icon={faEnvelope} className="social-icon" />
						</div>
						<div className="social-text">Email</div>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Socials;
