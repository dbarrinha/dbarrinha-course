import Accessibility from "./Accessibility"
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
    </>
  )
}

export default App
