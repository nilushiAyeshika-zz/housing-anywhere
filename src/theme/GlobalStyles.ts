import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	*:focus {
		outline: none;
	}

	html {
		font-size: 62.5%;
	}

  body {
    font-size: 1.6rem;
  }

	html, body, #root {
		background-color: #FFF;
	}

	body, textarea, button {
		font-family: 'Roboto', sans-serif;
	}

	a {
		text-decoration:none;

		&.link {
			color: #333;
			text-decoration: underline;
		}
	}

	input::placeholder, textarea::placeholder {
		color: #aaa;
	}

	/* Chrome, Safari, Edge, Opera */
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
	-webkit-appearance: none;
	margin: 0;
	}

	/* Firefox */
	input[type=number] {
	-moz-appearance: textfield;
	}

	.offline-wrapper-overlay {
		position: absolute;
		top: 0;
		right: 0;
		height: 100%;
		width: 100%;
		z-index: 99;
		background: rgba(0, 0, 0, 0.7);
	}
`
