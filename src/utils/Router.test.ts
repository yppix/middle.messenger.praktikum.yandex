import Router, {BlockConstructable} from "./Router";
import {expect} from "chai";
import sinon from "sinon";
import {Routes} from "../static/route/route";

describe ('Router component', () => {
  const originalHistoryBack = global.window.history.back;
  const originalHistoryForward = global.window.history.forward;

  global.window.history.back = () => {
    if (typeof window.onpopstate === 'function') {
      window.onpopstate({currentTarget: window} as unknown as PopStateEvent);
    }
  };
  global.window.history.forward = () => {
    if (typeof window.onpopstate === 'function') {
      window.onpopstate({currentTarget: window} as unknown as PopStateEvent);
    }
  }

  after(() => {
    global.window.history.back = originalHistoryBack;
    global.window.history.forward = originalHistoryForward;
  });

  const getContentFake = sinon.fake.returns(document.createElement('div'));
  const dispatchComponentWillUnmountSt = sinon.stub();
  const dispatchComponentDidMountSt = sinon.stub();

  const BlockMock = class {
    dispatchComponentDidMount= dispatchComponentWillUnmountSt;
    dispatchComponentWillUnmount = dispatchComponentDidMountSt;
    getContent = getContentFake;
  } as unknown as BlockConstructable;

  it('use() should return Router instance', () => {
    const result = Router.use(Routes.Index, BlockMock);

    expect(result).to.eq(Router);
  });

  it('should render a page on start', () => {
    Router.use(Routes.Index, BlockMock).start();

    expect(getContentFake.callCount).to.eq(1);
  });


  it('should render a page on history back action', () => {
    Router.use(Routes.Index, BlockMock).start();

    Router.back();

    expect(getContentFake.callCount).to.eq(1);
  });

  it('should render a page on history forward action', () => {
    Router.use(Routes.Index, BlockMock).start();

    Router.forward();

    expect(getContentFake.callCount).to.eq(1);
  });

  it ('should render a page on go action', () => {
    Router
      .use(Routes.Index, BlockMock)
      .use(Routes.Profile, BlockMock)
      .start();

    Router.go(Routes.Profile);

    expect(getContentFake.callCount).to.eq(2);
  });
})
