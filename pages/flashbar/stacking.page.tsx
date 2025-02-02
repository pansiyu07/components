// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
import * as React from 'react';
import ScreenshotArea from '../utils/screenshot-area';
import Flashbar, { FlashbarProps } from '~components/flashbar';

const noop = () => void 0;

const items: FlashbarProps.MessageDefinition[] = [
  {
    dismissible: true,
    onDismiss: noop,
    dismissLabel: 'Dismiss',
    type: 'success',
    header: 'Instance created',
  },
  {
    type: 'warning',
    header: 'Something weird may have happened...',
  },
  {
    type: 'error',
    header: 'Unrecoverable error',
    content: 'It all broke, like, really bad.',
  },
];

export default function FlashbarStacking() {
  return (
    <>
      <h1>Flashbar items should have correct spacing between them</h1>
      <ScreenshotArea disableAnimations={true}>
        <Flashbar items={items} />
      </ScreenshotArea>
    </>
  );
}
