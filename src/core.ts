
interface ZenUML {
  // Resolve after rendering is finished. All three parameters are cached for one ZenUML
  // instance.
  render: (code: string, theme: string, el: Element | undefined) => Promise<ZenUML>
}

function render(code: string, them: string, el: Element | undefined): Promise<ZenUML> {
  return new Promise((resolve, reject) => {
    resolve({} as ZenUML)
  })
}

export {
  render
}