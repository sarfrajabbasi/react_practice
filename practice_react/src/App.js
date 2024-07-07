import './App.css';
import Login from './component/conditonal-rendering/Login';
import ControlledForm from './component/controlled-comp/ControlledForm';
import ControlledInput from './component/controlled-comp/ControlledInput';
import ControlledSelect from './component/controlled-comp/ControlledSelect';
import ControlledTextArea from './component/controlled-comp/ControlledTextArea';
import NameList from './component/list-rendering/NameList';
import PropsParent from './component/props/PropsParent';
import Header from './component/styles/Header';
function App() {
  return (
    <div className="App">
      <PropsParent></PropsParent>
      <Login></Login>
      <NameList></NameList>
      <Header></Header>
      <ControlledInput></ControlledInput>
      <ControlledTextArea></ControlledTextArea>
      <ControlledSelect></ControlledSelect>
      <ControlledForm></ControlledForm>
    </div>
  );
}
 
export default App;
