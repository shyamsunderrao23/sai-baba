import { Routes, Route } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import MilestonesPage from './pages/MilestonesPage'
import VolunteerPage from './pages/VolunteerPage'
import CommitteesPage from './pages/CommitteesPage'
import SchedulePage from './pages/SchedulePage'
import SevaServicePage from './pages/SevaServicePage'
import AartiTimingsPage from './pages/AartiTimingsPage'
import TeachingsPage from './pages/TeachingsPage'
import AssurancesPage from './pages/AssurancesPage'
import GalleryPage from './pages/GalleryPage'
import BlogPage from './pages/BlogPage'
import BlogPostPage from './pages/BlogPostPage'
import FestivalsPage from './pages/FestivalsPage'
import ContactPage from './pages/ContactPage'
import HistoryPage from './pages/HistoryPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="about/milestones" element={<MilestonesPage />} />
        <Route path="about/volunteer" element={<VolunteerPage />} />
        <Route path="about/committees" element={<CommitteesPage />} />
        <Route path="about/schedule" element={<SchedulePage />} />
        <Route path="seva/:slug" element={<SevaServicePage />} />
        <Route path="aarti-timings" element={<AartiTimingsPage />} />
        <Route path="teachings" element={<TeachingsPage />} />
        <Route path="assurances" element={<AssurancesPage />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="blog/:slug" element={<BlogPostPage />} />
        <Route path="festivals" element={<FestivalsPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="history" element={<HistoryPage />} />
        <Route path="history/:slug" element={<HistoryPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
