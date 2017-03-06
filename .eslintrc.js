module.exports = {
	'parser': 'babel-eslint',
	'extends': [
		'keystone-react',
	],
	'rules': {
		'react/jsx-indent': 0,
		'react/jsx-no-bind': 0,
		'react/jsx-boolean-value': 0,
		'react/sort-comp': 0,
	},
	'globals': {
		'$FlowFixMe': false,
	}
};