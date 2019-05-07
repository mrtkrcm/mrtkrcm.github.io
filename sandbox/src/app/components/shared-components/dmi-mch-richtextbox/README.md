# Instructions

- **View components in Nexus**
https://nexus.dminc-gtc.com/nexus/#browse/browse/components:npm-registry

- **Component name**
dmi-mch-richtextbox

- ** To add the package**
yarn add https://nexus.dminc-gtc.com/nexus/repository/npm-registry/dmi-mch-richtextbox/-/dmi-mch-richtextbox-1.0.9.tgz -W

- **Switching to Nexus as the package source**
npm set registry https://nexus.dminc-gtc.com/nexus/repository/npm-registry/

- ** Switching to NPM as the package source**
npm config set registry https://registry.npmjs.org/

- **Deployment**
any commit in the sandbox will make an automatic deploy in Nexus.

- **Jenkins Pipeline**
https://jbackend.dminc-gtc.com/job/mch-mfp-fe-modules-cd-pipeline

## Example
```
import RichTextEditor from 'dmi-mch-richtextbox'

const Module = () => {
  const [isLoading, setLoading] = React.useState(true)

  React.useEffect(() => {
    setLoading(false)
  }, [])

  return (
    <RichTextEditor
      name='test'
      data='test'
      customHandler={(e) => {
        e.editor.getData()
      }}
    />
  )
}

export default Module
```
****