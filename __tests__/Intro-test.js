import React from 'react'
import 'react-native'
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

import Intro from '../Intro'

test('renders correctly', () => {
  const tree = renderer.create(<Intro />).toJSON()
  expect(tree).toMatchSnapshot()
})
