import { Switch, Route } from 'react-router-dom'
import Aviso from './pages/Aviso'
import Contacto from './pages/contacto/Contacto'
import Faq from './pages/faq/Faq'
import HomePage from './pages/HomePage'

export default () => <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/contacto" component={Contacto} />
    <Route path="/preguntas-frecuentes" component={Faq} />
    <Route path="/aviso-de-privacidad" component={Aviso} />
</Switch>