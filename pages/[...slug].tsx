import Layout from "components/common/Layout"
import {getAgilityPageProps, getAgilityPaths} from "@agility/nextjs/node"
import getModuleData from "../lib/module-data";

import {GetStaticProps, GetStaticPaths} from "next"
import { AgilityPageProps, ComponentWithInit } from "@agility/nextjs"

// getStaticProps function fetches data for all of your Agility Pages and Next.js will pre-render these pages at build time

export const getStaticProps: GetStaticProps<AgilityPageProps> = async ({preview, params, locale, defaultLocale, locales}) => {
	// place all global here
	const globalComponents = {

	}

	const agilityProps = await getAgilityPageProps({
		preview,
		params,
		locale,
		getModule: getModuleData,
		defaultLocale,
		globalComponents
	})

	if (!agilityProps) {
		// We throw to make sure this fails at build time as this is never expected to happen
		throw new Error(`Page not found`)
	}

	return {
		// return all props
		props: agilityProps,

		// Next.js will attempt to re-generate the page when a request comes in, at most once every 10 seconds
		// Read more on Incremental Static Regenertion here: https://nextjs.org/docs/basic-features/data-fetching#incremental-static-regeneration
		revalidate: 10,
	}
}

// Next.js will statically pre-render all the paths from Agility CMS
export const getStaticPaths: GetStaticPaths = async ({defaultLocale, locales}) => {
	//get the paths configured in agility
	let agilityPaths = await getAgilityPaths({
		preview: false,
		locales,
		defaultLocale,
	})

	return {
		paths: agilityPaths,
		fallback: true,
	}
}

const AgilityPage = (props:AgilityPageProps) => {
	return <Layout {...props} />
}

export default AgilityPage
