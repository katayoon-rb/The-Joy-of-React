import { createContext } from 'react'

const ProjectContext = createContext()

export const ProjectProvider = ({ children }) => {
  const project = [
    {
      id: 1,
      text: 'Wordle Project',
      link: 'https://katywordleproject.vercel.app/'
    },
    {
      id: 2,
      text: 'Toast Project',
      link: 'https://katytoastproject.vercel.app/'
    },
    {
      id: 3,
      text: 'Blog Project',
      link: 'https://katynextjsblog.vercel.app/'
    }
  ]

  return (
    <ProjectContext.Provider
      value={{ project }}
    >
      {children}
    </ProjectContext.Provider>
  )
}

export default ProjectContext
