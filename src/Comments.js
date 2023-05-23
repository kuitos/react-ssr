/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { once } from 'lodash';
import { getResource } from './data';

let getNewResource = once(() => getResource().comments);

export default function Comments() {
  console.log('render Comments');

  const resource = getNewResource();
  const comments = resource.read();

  if (resource?.status !== 'pending') {
    getNewResource = once(() => getResource().comments);
  }

  console.log('prevResource.status', resource?.status);

  return (
    <>
      {comments.map((comment, i) => (
        <p className="comment" key={i}>
          {comment}
        </p>
      ))}
    </>
  );
}
