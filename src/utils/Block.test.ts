import proxyquire from 'proxyquire';
import { expect } from 'chai';
import sinon from 'sinon';
import type BlockType from './Block'

const eventBusMock = {
  on: sinon.stub(),
  emit: sinon.stub(),
}

const { default: Block } = proxyquire('./Block', {
  './EventBus': {
    EventBus: class {
      emit = eventBusMock.emit;
      on = eventBusMock.on;
    }
  }
}) as { default: typeof BlockType };

describe ('Block', () => {
  class ComponentMock extends Block {}
  beforeEach(() => {

    eventBusMock.on.reset();
    eventBusMock.emit.reset();
  })

  it('should fire init event on initialization',  () => {
    new ComponentMock('div', {});

    expect(eventBusMock.emit.calledWith('init')).to.eq(true);
  });

  it ("should fire protected componentDidMount on CDM dispatch", () => {
    class ComponentMock extends Block {
      componentDidMount() {
        return true;
      }
    }

    const component = new ComponentMock('div', {});

    component.dispatchComponentDidMount();

    expect(eventBusMock.emit.calledWith('flow:component-did-mount')).to.eq(true);
  });

  it ("should fire protected componentDidUpdate on CDU dispatch", () => {
    class ComponentMock extends Block {
      componentDidUpdate() {
        return true;
      }
    }

    const component = new ComponentMock('div', {});

    component.setProps({test:1});

    expect(eventBusMock.emit.calledWith('flow:component-did-update')).to.eq(true);
  });
});
