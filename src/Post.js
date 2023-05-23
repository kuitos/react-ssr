/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { once } from 'lodash';
import { getResource } from './data';

let getNewResource = once(() => getResource().posts);

export default function Post() {

  const resource = getNewResource();
  const posts = resource.read();

  if (resource?.status !== 'pending') {
    getNewResource = once(() => getResource().posts);
  }

  return (
    <>
      <h1>Hello world</h1>
      {
        posts.map((post, i) => (
          <p key={i}>
            {post}
          </p>
        ))
      }
    </>
  );
}
