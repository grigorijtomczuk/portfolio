import React from "react";

// ! Dangerous and unsecure HTML injection, but I don't know how to interpret HTML tags from user data texts in other way
function renderHtml(rawHtml: string) {
	return React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHtml } });
}

export { renderHtml };
