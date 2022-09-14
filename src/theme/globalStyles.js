import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
	margin: 0;
	padding: 0;
	font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

html {
	height: -webkit-fill-available
}

body {
    background: ${({ theme }) => theme.body};
    color: #ebf4f1;
    height: 100vh;
	min-height: -webkit-fill-available;
    margin: 0;
    padding: 0;
	transition: all 0.25s linear;
  }

.App {
	display: flex;
	flex-direction: column;
	height: 100vh;
}

.icon {
	height: 55px;
	justify-self: center;
	align-self: center;
}

#social-icon:hover {
	stroke: #fff;
	cursor: pointer;
}

a {
	text-decoration: none;
}

@media (max-width: 1340px) {
	.App {
		min-height: 100vh;
		height: unset;
	}

	.icon {
		height: 47.5px;
	}
}

@media (max-width: 380px) {
	.icon {
		height: 40px;
	}
}

@media (max-height: 880px) {
    .icon {
		height: 47.5px;
	}
  }

@media (max-height: 750px) {
    .App {
		min-height: 100vh;
	height: unset;
	}
  }

`
