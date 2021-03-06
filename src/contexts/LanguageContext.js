import React, { createContext, useState} from 'react';

export const LanguageContext = createContext();

export function LanguageProvider(props) {
    const [language, setLanguage] = useState("spanish");
        // this.state = { language: "spanish" };
        // this.changeLanguage = this.changeLanguage.bind(this);

    const changeLanguage = (e) => setLanguage(e.target.value);
    // changeLanguage(e) {
    //     this.setState({ language: e.target.value});
    // }

        return (
            <LanguageContext.Provider value={{language, changeLanguage}}>
                {props.children}
            </LanguageContext.Provider>
        );

}

// export const withLanguageContext = Component => props => (
//     <LanguageContext.Consumer>
//         {value => <Component languageContext={value} {...props} />}
//     </LanguageContext.Consumer>
// )