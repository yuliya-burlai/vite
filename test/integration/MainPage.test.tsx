import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import { renderWithContexts } from '../helpers/render.helpers';
import { MainPage } from '../../src/components/MainPage';
import { findByText, waitFor } from '@testing-library/dom';

describe('MainPage', () => {
  it('displays posts', async () => {
    renderWithContexts(<MainPage />, { reactQuery: true});

    screen.debug();

    expect(await screen.findByText('Hello Vite + React 18!')).toBeInTheDocument();

    // expect(await screen.findByText('First post')).toBeInTheDocument();
  });
});