import React, {createContext, useContext} from 'react'

const themes = {
    light: {
        foreground: 'blue',
        background: '#eeeeee',
    },
    dark: {
        foreground: '#ffffff',
        background: 'red',
    },
}

//context 생성
const ThemeContext = createContext(themes.light)


const Context = () => {
  return (
    <div>
        Context
        {/* context 제공 */}
        <ThemeContext.Provider value={themes.dark}>
            <Toolbar />
        </ThemeContext.Provider>
    </div>
  )
}

const Toolbar = () => {
    return  <ToolbarBox />
}

const ToolbarBox = () => {

    //context 사용
    const theme = useContext(ThemeContext)

    return  <div style={{background: theme.background}}>ToolbarBox</div>
}

export default Context