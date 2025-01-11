import React from 'react';
 
const LocaleContext = React.createContext();
 
export const LocaleProvider = LocaleContext.Provider;
export const LocaleConsumer = LocaleContext.Consumer;
 
export default LocaleContext;

// <LocaleConsumer>
//    {({ locale, toggleLocale }) => {
//      
//    }}
//  </LocaleConsumer>; 

//  <LocaleConsumer>
//     {({ locale, toggleLocale }) => {
//       return (
//         <ThemeConsumer>
//             {({ theme, toggleTheme }) => {
      
//             }}
//         </ThemeConsumer>
//       )
//     }}
// </LocaleConsumer>; 