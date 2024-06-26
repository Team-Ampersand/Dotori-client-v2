import styled from '@emotion/styled';
import { Palette } from 'styles/globals';

export const Layer = styled.div`
  * {
    border: none;
    line-height: 3.25em;
    text-align: center;
    text-decoration: none;
  }

  .react-calendar {
    background: ${Palette.BACKGROUND_CARD};
    color: #222;
    border-radius: 1em;
    padding: 1.5em;
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.04);
    font-family: Arial, Helvetica, sans-serif;

    @media (max-width: 951px) and (min-width: 420px) {
      max-width: 380px;
    }
    @media (max-width: 420px) {
      position: fixed;
      width: 100%;
      bottom: 0;
      left: 0;
      border-radius: 1em 1em 0 0;
    }
  }

  .react-calendar__navigation {
    display: flex;
    justify-content: center;

    button {
      color: ${Palette.NEUTRAL_N10};
      min-width: 15%;
      background: none;
      font-size: 16px;
      margin-top: 8px;

      &:disabled {
        background: ${Palette.PRIMARY_P10};
      }
    }

    abbr[title] {
      text-decoration: none;
    }

    span {
      word-break: keep-all;
    }
  }

  .react-calendar__navigation__prev2-button,
  .react-calendar__navigation__prev-button,
  .react-calendar__navigation__next-button,
  .react-calendar__navigation__next2-button {
    display: none;
  }

  .react-calendar__tile.react-calendar__month-view__days__day.react-calendar__month-view__days__day--neighboringMonth {
    pointer-events: none;
  }

  .react-calendar__navigation__label {
    pointer-events: none;
  }

  .react-calendar__month-view__weekdays {
    color: ${Palette.NEUTRAL_N30};
  }

  .react-calendar__month-view__days {
    background: ${Palette.BACKGROUND_BG};
    border-radius: 0.5em;
    font-size: 0.875em;

    button {
      background: transparent;
      color: ${Palette.NEUTRAL_N10};
    }

    .react-calendar__month-view__days__day--neighboringMonth {
      color: ${Palette.NEUTRAL_N30};
    }

    .react-calendar__tile--now {
      background: #ed7878;
      border-radius: 0.5em;
      font-weight: bold;
      color: ${(props: { state: string }) =>
        props.state === 'light' ? '#F2F2F4' : '#fff'};
      font-size: 14px;

      :enabled:focus {
        background: ${Palette.PRIMARY_P10};
        color: ${(props: { state: string }) =>
          props.state === 'light' ? '#F2F2F4' : '#fff'};
      }
    }

    .react-calendar__tile--range {
      background: ${Palette.PRIMARY_P10};
      color: ${(props: { state: string }) =>
        props.state === 'light' ? '#F2F2F4' : '#fff'};
    }
  }

  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background: ${Palette.NEUTRAL_N40};
    color: #6d92c4;
    border-radius: 0.5em;
    font-weight: normal;
  }

  .react-calendar__tile--active {
    background: ${Palette.PRIMARY_P10};
    border-radius: 0.5em;
    font-weight: bold;
    color: ${(props: { state: string }) =>
      props.state === 'light' ? '#F2F2F4' : '#fff'};
    font-size: 12px;

    :enabled:hover,
    :enabled:focus {
      background: ${Palette.PRIMARY_P10};
      color: ${(props: { state: string }) =>
        props.state === 'light' ? '#F2F2F4' : '#fff'};
    }
  }
`;

export const XIcon = styled.div`
  position: absolute;
  top: 2px;
  right: 12px;
  svg {
    width: 20px;
  }
`;
