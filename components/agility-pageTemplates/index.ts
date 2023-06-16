import MainTemplate from "./MainTemplate";

// Place Page Templates in allTemplates array below, passing in a name and the component.

const allTemplates = [{ name: "MainTemplate", template: MainTemplate }];

export const getPageTemplate = (templateName:string) => {
	if (!templateName) return null;
	const obj = allTemplates.find(
		(m) => m.name.toLowerCase() === templateName.toLowerCase()
	);
	if (!obj) return null;
	return obj?.template;
};
