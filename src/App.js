import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { NavBar, Footer, Sidebar, Theme } from './components';
import {
  Ecommerce,
  Orders,
  Employees,
  Customers,
  Board,
  Editor,
  Calendar,
  ColorPicker,
  Line,
  Area,
  Bar,
  Pie,
  Financial,
  ColorMapping,
  Pyramid,
  Stacked,
} from './pages';
import './App.css';

const App = () => {
  const activeMenu = true;
  return (
    <main>
      <BrowserRouter>
        <section className="flex relative dark:bg-main-dark-bg">
          <aside className="fixed right-4 bottom-4" style={{ zIndex: '1' }}>
            <TooltipComponent content="Settings" position="top">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
                style={{ backgroundColor: 'red', borderRadius: '50%' }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </aside>
          {activeMenu && (
            <section className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </section>
          )}
          <nav
            className={`dark:bg-main-bg bg-main-bg min-h-screen ${
              activeMenu ? 'w-full' : 'w-72'
            }}`}
          >
            <section className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              NavBar
            </section>
          </nav>
          <section>
            <Routes>
              <Route path="/" element={<Ecommerce />} />
              <Route path="/ecommerce" element={<Ecommerce />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/kanban-board" element={<Board />} />
              <Route path="/editor" element={<Editor />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/color-picker" element={<ColorPicker />} />
              <Route path="/line-chart" element={<Line />} />
              <Route path="/area-chart" element={<Area />} />
              <Route path="/bar-chart" element={<Bar />} />
              <Route path="/pie-chart" element={<Pie />} />
              <Route path="/financial-chart" element={<Financial />} />
              <Route path="/color-mapping-chart" element={<ColorMapping />} />
              <Route path="/pyramid-chart" element={<Pyramid />} />
              <Route path="/stacked-chart" element={<Stacked />} />
            </Routes>
          </section>
        </section>
      </BrowserRouter>
    </main>
  );
};

export default App;
