import React from 'react';
// import ReactDOM from 'react-dom';
import _ from 'lodash';
import Renderer from 'react-test-renderer/shallow';
import TU from 'react-dom/test-utils';
import Bucket from 'components/challenge-listing/Listing/Bucket';
import reduxStoreFactory from 'redux-mock-store';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { Tag } from 'topcoder-react-ui-kit';

const store = reduxStoreFactory()();

const expand = jest.fn();
const loadMore = jest.fn();
const setFilterState = jest.fn();
const setSort = jest.fn();

const mockDatas = [{
  bucket: {
    sorts: ['current-phase'],
    filter: {
      status: 'ac',
    },
  },
  expanded: true,
  expand,
  challenges: [
    {
      id: '1',
      status: 'b',
      prizes: [1200, 600],
      totalPrize: 1800,
      users: {},
    },
    {
      id: '2',
      status: 'a',
      technologies: ['a', 'b', 'c'],
      allPhases: [{
        phaseType: 'Registration',
        phaseStatus: 'Open',
      }],
      currentPhases: ['Registration'],
      track: 'DEVELOP',
      subTrack: 'CODE',
      events: [{ eventName: 'Submit' }],
      prizes: [1200, 600],
      totalPrize: 1800,
      users: {},
    }],
  loading: false,
  loadMore,
  setFilterState,
  setSort,
  sort: '',
}, {
  bucket: {
    sorts: ['current-phase'],
    filter: {
      status: 'ac',
    },
  },
  expanded: false,
  expand,
  challenges: [
    {
      id: '1',
      status: 'b',
      prizes: [1200, 600],
      totalPrize: 1800,
      users: {},
    },
    {
      id: '2',
      status: 'a',
      prizes: [1200, 600],
      totalPrize: 1800,
      users: {},
    },
    {
      id: '3',
      status: 'a',
      prizes: [1200, 600],
      totalPrize: 1800,
      users: {},
    },
    {
      id: '4',
      status: 'a',
      prizes: [1200, 600],
      totalPrize: 1800,
      users: {},
    },
    {
      id: '5',
      status: 'a',
      prizes: [1200, 600],
      totalPrize: 1800,
      users: {},
    },
    {
      id: '6',
      status: 'a',
      prizes: [1200, 600],
      totalPrize: 1800,
      users: {},
    },
    {
      id: '7',
      status: 'a',
      prizes: [1200, 600],
      totalPrize: 1800,
      users: {},
    },
    {
      id: '8',
      status: 'a',
      prizes: [1200, 600],
      totalPrize: 1800,
      users: {},
    },
    {
      id: '9',
      status: 'a',
      prizes: [1200, 600],
      totalPrize: 1800,
      users: {},
    },
    {
      id: '10',
      status: 'a',
      prizes: [1200, 600],
      totalPrize: 1800,
      users: {},
    },
    {
      id: '11',
      status: 'a',
      prizes: [1200, 600],
      totalPrize: 1800,
      users: {},
    },
  ],
  loading: true,
  loadMore,
  setFilterState,
  setSort,
  sort: '',
}, {
  bucket: {
    sorts: ['current-phase'],
    filter: {
      status: 'e',
    },
  },
  expanded: false,
  expand,
  challenges: [
  ],
  loading: true,
  setFilterState,
  setSort,
  sort: '',
}];

test('Matches shallow shapshot', () => {
  const renderer = new Renderer();

  _.forEach(mockDatas, (data) => {
    renderer.render((
      <Provider store={store}>
        <StaticRouter context={{}}>
          <Bucket {...data} />
        </StaticRouter>
      </Provider>
    ));
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });
});

class Wrapper extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <Provider store={store}>
        <StaticRouter context={{}}>
          <Bucket {...this.props} />
        </StaticRouter>
      </Provider>
    );
  }
}

const instance = TU.renderIntoDocument((<Wrapper {...mockDatas[0]} />));

test('setFilterState', () => {
  const matches = TU.scryRenderedComponentsWithType(instance, Tag);
  expect(matches).toHaveLength(3);
  /*
  TU.Simulate.click(ReactDOM.findDOMNode(matches[0]));
  expect(setFilterState).toHaveBeenCalledTimes(1);
  TU.Simulate.click(ReactDOM.findDOMNode(matches[1]));
  expect(setFilterState).toHaveBeenCalledTimes(2);
  TU.Simulate.click(ReactDOM.findDOMNode(matches[2]));
  expect(setFilterState).toHaveBeenCalledTimes(3);
  */
});
