import { Switch, Route } from 'react-router-dom'
import Contacto from './pages/contacto/Contacto'
import HomePage from './pages/HomePage'

export default () => <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/contacto" component={Contacto} />
</Switch>