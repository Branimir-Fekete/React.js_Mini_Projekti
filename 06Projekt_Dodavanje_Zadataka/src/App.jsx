// Uvoz Reactovog useState hooka i komponenti
import { useState } from 'react';
import NewProject from './components/NewProject.jsx';
import NoProjectSelected from './components/NoProjectSelected.jsx';
import ProjectSideBar from './components/ProjectSideBar.jsx';
import SelectedProject from './components/SelectedProject.jsx';

// Glavna funkcija komponente App
function App() {
  // Inicijalizacija stanja projekata i zadataka
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined, // ID odabranog projekta
    projects: [], // Lista projekata
    tasks: [], // Lista zadataka
  });

  // Funkcija za dodavanje novog zadatka
  function handleAddTask(text) {
    setProjectsState((prevState) => {
      const taskId = Math.random(); // Generiranje jedinstvenog ID-a za zadatak
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };

      // Ažuriranje stanja sa novim zadatkom
      return {
        ...prevState,
        selectedProjectId: undefined,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  }

  // Funkcija za brisanje zadatka
  function handleDeleteTask(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }

  // Funkcija za odabir projekta
  function handleSelectProject(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  // Funkcija za započinjanje dodavanja novog projekta
  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  // Funkcija za otkazivanje dodavanja projekta
  function handleCancelAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  // Funkcija za dodavanje novog projekta
  function handleAddProject(projectData) {
    setProjectsState((prevState) => {
      const projectId = Math.random(); // Generiranje jedinstvenog ID-a za projekt
      const newProject = {
        ...projectData,
        id: projectId,
      };

      // Ažuriranje stanja sa novim projektom
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  // Funkcija za brisanje projekta
  function handleDeleteProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      };
    });
  }

  // Pronalazak trenutno odabranog projekta
  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );

  // Logika za određivanje koji sadržaj prikazati
  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectsState.tasks}
    />
  );

  // Uvjeti za prikazivanje određenih komponenata
  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject
        onAdd={handleAddProject}
        onCancel={handleCancelAddProject}
      />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  // JSX povratna vrijednost koja prikazuje sučelje
  return (
    <main className='h-screen my-8 flex gap-8'>
      <ProjectSideBar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
