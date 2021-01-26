import './App.scss';
import Header from './components/Header/Header'
import Content from './components/Content/Content'
const App = () => (
    <div className="app">
        <div className="app__weather">
            <Header />
            <Content />
        </div>
    </div>
)    

export default App;