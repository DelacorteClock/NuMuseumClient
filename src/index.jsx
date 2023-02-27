import {createRoot} from 'react-dom/client';
import MainView from './components/main-view/main-view';
import './index.scss';

const NuMuseumApp = function () {
    return <MainView />;
};

//Get app root
const container = document.querySelector("#root");
const root = createRoot(container);

root.render(<NuMuseumApp />);