import { css } from '@emotion/react';

import { theme } from 'utils/theme';

export const styles = {
  firstViewStyles: css``,
  hoge: css`
    max-width: 768px;
    margin: 0 auto;
  `,
  iamContainerStyles: css`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 143px;
    gap: 26px;
  `,
  iamBackgroundColor: css`
    display: inline-block;
    width: fit-content;
    padding-left: 39px;
    padding-right: 13px;
    background-color: ${theme.color.white};
    border-radius: 0 8px 8px 0;
  `,
  iam: css`
    font-size: 3em;
    color: ${theme.color.black};
  `,
  iamWhite: css`
    padding-left: 39px;
    font-size: 2em;
    color: ${theme.color.white};
    gap: 13px;
    @media (min-width: 1290px) {
      width: 90%;
    }
  `,
  myName: css`
    font-size: 40px;
  `,
  pageStyles: css`
    padding: 32px;
    color: #333;
  `,
  headingStyles: css`
    font-size: 2em;
    color: #333;
  `,
  headingAccentStyles: css`
    color: #663399;
  `,
  paragraphStyles: css`
    margin-bottom: 48px;
    font-size: 1.25em;
    line-height: 1.6;
  `,
  doclistStyles: css`
    margin-left: 0;
    list-style-type: none;
  `,
  docLinkStyle: css`
    text-decoration: none;
    color: #663399;
  `,
  linkStyle: css`
    text-decoration: none;
    color: #663399;
  `,
  listItemStyles: css`
    margin-bottom: 16px;
  `,
  codeStyles: css`
    font-family: 'Courier New', Courier, monospace;
    background-color: #f4f4f4;
    padding: 4px;
  `,
  badgeStyle: css`
    background-color: #663399;
    color: #fff;
    padding: 4px 6px;
    border-radius: 4px;
    font-size: 0.75em;
    font-weight: bold;
    margin-left: 8px;
  `,
  descriptionStyle: css`
    color: #999;
  `,
  listStyles: css`
    margin-left: 0;
    list-style-type: none;
  `,
};
