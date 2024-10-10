import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

function IndexPage() {
	return (
		<Container
			component="main"
			sx={{
				minHeight: "100vh",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Typography variant="h1">Hello World!</Typography>
		</Container>
	);
}

export function Head() {
	return (
		<>
			<title>
				Sebastián Suárez | Lead Software Engineer | React.js, Node.js test
			</title>
			<meta
				name="title"
				content="Sebastián Suárez | Lead Software Engineer | React.js, Node.js"
			/>
			<meta
				name="description"
				content="Portfolio of a Full-Stack Lead Engineer showcasing expertise in web development, 3D design, and software solutions. Explore projects and skills."
			/>
			<meta property="og:type" content="website" />
			<meta property="og:url" content="https://www.sebsv.com/" />
			<meta
				property="og:title"
				content="Sebastián Suárez | Lead Software Engineer | React.js, Node.js"
			/>
			<meta
				property="og:description"
				content="Portfolio of a Full-Stack Lead Engineer showcasing expertise in web development, 3D design, and software solutions. Explore projects and skills."
			/>
			<meta
				property="og:image"
				content="https://www.sebsv.com/images/icon.png"
			/>
			<meta property="twitter:card" content="summary_large_image" />
			<meta property="twitter:url" content="https://www.sebsv.com/" />
			<meta
				property="twitter:title"
				content="Sebastián Suárez | Lead Software Engineer | React.js, Node.js"
			/>
			<meta
				property="twitter:description"
				content="Portfolio of a Full-Stack Lead Engineer showcasing expertise in web development, 3D design, and software solutions. Explore projects and skills."
			/>
			<meta
				property="twitter:image"
				content="https://www.sebsv.com/images/icon.png"
			/>
			<meta
				name="keywords"
				content="Full-Stack Lead Engineer, Web development portfolio, Software solutions, 3D design, Front-end development, Back-end development, Full-stack projects, Digital portfolio, Software engineering skills, Web and software solutions, Front-end technologies, Back-end technologies, JavaScript, React, Node.js, Cloud deployment, 3D printing design"
			/>
			<meta name="robots" content="index, follow" />
			<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
			<meta name="language" content="English" />
			<meta name="revisit-after" content="1 days" />
			<meta name="author" content="Sebastián Suárez Valencia" />
		</>
	);
}

export default IndexPage;
