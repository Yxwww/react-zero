module.exports = {
    "plugins": [
        "react-hooks"
    ],
    "rules": {
        "react/display-name": ["off"],
        "react-hooks/rules-of-hooks": "error"
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "extends": ["plugin:prettier/recommended"]
    ],
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "node": true
    }
}
