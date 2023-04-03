import {Button} from "./index";
import {expect} from "chai";
import sinon from "sinon";

describe('Button component', () => {
  const labelBtn = 'Test button';
  const classnamesBtn = ['button-test', 'btn-btn'];
  const typeBtn = 'submit';
  const callback = sinon.stub();

  beforeEach(() => {
    callback.reset();
  })

  it('should be rendered', () => {
    new Button({label: labelBtn, className: classnamesBtn})
  });

  it('should render passed label', () => {
    const btn = new Button({label: labelBtn, className: classnamesBtn});

    expect(btn.element?.textContent).to.eq(labelBtn);
  });

  it('should have passed classNames', () => {
    const btn = new Button({label: labelBtn, className: classnamesBtn});

    expect(btn.element?.classList).to.includes(classnamesBtn);
  });

  it('should have submit type', () => {
    const btn = new Button({label: labelBtn, type: typeBtn, className: classnamesBtn});

    expect((btn.element as HTMLButtonElement)?.type).to.eq(typeBtn);
  });

  it ('should be clicked', () => {
    const btn = new Button({label: labelBtn, className: classnamesBtn, events: {click: callback}})

    btn.element?.click();

    expect(callback.called).to.eq(true)
  });

})
