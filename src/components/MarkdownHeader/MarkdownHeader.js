/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * @emails react-core
 * @flow
 */

import Flex from 'components/Flex';
import React from 'react';
import {colors, fonts, media} from 'theme';

const MarkdownHeader = ({title}: {title: string}) => (
  <Flex type="header" halign="space-between" valign="baseline">
    <h1
      css={{
        color: colors.dark,
        marginBottom: 0,
        marginTop: 100, // BLM
        ...fonts.header,

        [media.size('medium')]: {
          marginTop: 100, // BLM
        },

        [media.greaterThan('large')]: {
          marginRight: 200,
          marginTop: 100, // BLM
          marginLeft: 240,
        },
      }}>
      {title}
    </h1>
  </Flex>
);

export default MarkdownHeader;
