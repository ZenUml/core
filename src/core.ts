interface IZenUml {
  get code(): string | undefined;
  get theme(): string | undefined;
  // Resolve after rendering is finished.
  render: (code: string | undefined, theme: string | undefined) => Promise<IZenUml>
}

export default class ZenUml implements IZenUml{
  private el: Element;
  private _code: string | undefined;
  private _theme: string | undefined;

  constructor(el: Element) {
    this.el = el;
  }

  render(code: string | undefined, theme: string | undefined): Promise<IZenUml> {
    this._code = code || this._code;
    this._theme = theme || this._theme;
    return Promise.resolve(this);
  }

  get code(): string | undefined {
    return this._code;
  }

  get theme(): string | undefined{
    return this._theme;
  }
}