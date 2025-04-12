import "@/components/about/styles/socials.css";

import { faGithub, faLinkedin, faTelegram } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LeetCodeIcon from "@/components/icons/LeetCodeIcon";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import info from "@/data/user";

const Socials = () => {
	return (
		<div className="socials">
			<div className="social">
				<a href={info.socials.github} target="_blank" rel="noreferrer">
					<FontAwesomeIcon icon={faGithub} className="social-icon" />
					<div className="social-text">GitHub</div>
				</a>
			</div>

			<div className="social">
				<a href={info.socials.linkedin} target="_blank" rel="noreferrer">
					<FontAwesomeIcon icon={faLinkedin} className="social-icon" />
					<div className="social-text">LinkedIn</div>
				</a>
			</div>

			<div className="social">
				<a href={info.socials.leetcode} target="_blank" rel="noreferrer">
					<LeetCodeIcon className="social-icon" />
					<div className="social-text">LeetCode</div>
				</a>
			</div>

			<div className="divider-wrapper">
				<div className="social">
					<a href={info.socials.telegram} target="_blank" rel="noreferrer">
						<FontAwesomeIcon icon={faTelegram} className="social-icon" />
						<div className="social-text">Telegram</div>
					</a>
				</div>

				<div className="social">
					<a href={`mailto:${info.main.email}`} rel="noreferrer">
						<FontAwesomeIcon icon={faEnvelope} className="social-icon" />
						<div className="social-text">Email</div>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Socials;
