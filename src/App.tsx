import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import LoadingScreen from './components/LoadingScreen';
import ScrollToTop from './components/ScrollToTop';
import { projects } from './data/projects';
import { skills } from './data/skills';
import './i18n';
import { Globe, Smartphone } from 'lucide-react';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const currentProject = selectedProject
    ? projects.find((p) => p.id === selectedProject)
    : null;

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <motion.section
          id="home"
          className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center">
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {t('hero.greeting')}{' '}
              <span className="text-red-500">Alysson Correia</span>
            </motion.h1>
            <motion.p
              className="text-xl sm:text-2xl text-gray-400"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {t('hero.role')}
            </motion.p>
          </div>
        </motion.section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-[#222]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
              {t('skills.title')}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="p-4 sm:p-6 bg-[#2a2a2a] rounded-lg text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <h3 className="text-lg sm:text-xl font-semibold">
                    {skill.name}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
              {t('projects.title')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  className="bg-[#222] rounded-lg overflow-hidden cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  layoutId={project.id}
                  onClick={() => setSelectedProject(project.id)}
                >
                  <img
                    src={project.image}
                    alt={project.title[i18n.language]}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold mb-2">
                        {project.title[i18n.language]}
                      </h3>
                      {project.type === 'app' ? (
                        <Smartphone className="text-[#FF5757]" size={20} />
                      ) : (
                        <Globe className="text-[#FF5757]" size={20} />
                      )}
                    </div>

                    <p className="text-gray-400 mb-4 line-clamp-3">
                      {project.description[i18n.language]}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#222] py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>
            {t('footer.developedBy')}{' '}
            <span className="text-red-500">Alysson Correia</span>
          </p>
          <div className="mt-4">
            <a
              href="https://instagram.com/arcoofc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 hover:text-red-500"
            >
              @arcoofc
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            © 2024 {t('footer.rights')}
          </p>
        </div>
      </footer>

      <ScrollToTop />

      <AnimatePresence>
        {selectedProject && currentProject && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-[#222] p-6 rounded-lg max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto"
              layoutId={selectedProject}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={currentProject.image}
                alt={currentProject.title[i18n.language]}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold mb-4">
                {currentProject.title[i18n.language]}
              </h3>
              <p className="text-gray-400 mb-6">
                {currentProject.description[i18n.language]}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {currentProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                {currentProject.links?.website && (
                  <a
                    href={currentProject.links.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    {t('projects.visitWebsite')}
                  </a>
                )}
                {currentProject.links?.github && (
                  <a
                    href={currentProject.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    {t('projects.viewGithub')}
                  </a>
                )}
                {currentProject.links?.playStore && (
                  <a
                    href={currentProject.links.playStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Google Play
                  </a>
                )}
                {currentProject.links?.appStore && (
                  <a
                    href={currentProject.links.appStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    App Store
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
