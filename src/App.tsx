import Accessibility from "./Accessibility"
import ContextApi from "./ContextApi"
import DropDownProtal from "./DropDownProtal"
import NativeForm from "./NativeForm"
import Rerender from "./Rerender"
import Section from "./Section"

function App() {

  return (
    <>
      <Section title="Dropdown com portal">
        <DropDownProtal />
      </Section>
      <Section title="Form nativo">
        <NativeForm />
      </Section>
      <Section title="Re-renders desnecessários">
        <Rerender />
      </Section>
      <Section title="Acessibilidade">
        <Accessibility />
      </Section>
      <Section title="ContextApi">
        <ContextApi />
      </Section>
    </>
  )
}

export default App
