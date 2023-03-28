import styled from '@emotion/styled';
import { Palette } from 'styles/globals';

export const Layer = styled.div`
  * {
    border: none;
    line-height: 3.25em;
    text-align: center;
  }

  .react-calendar {
    min-width: 380px;
    max-width: 380px;
    background: ${Palette.BACKGROUND_CARD};
    color: #222;
    border-radius: 0.5em;
    padding: 1.5em;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
    font-family: Arial, Helvetica, sans-serif;
  }

  .react-calendar__navigation {
    display: flex;
    justify-content: center;

    button {
      color: ${Palette.NEUTRAL_N10};
      min-width: 44px;
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
      color: ${Palette.NEUTRAL_N10};
      font-size: 12px;

      :enabled:hover,
      :enabled:focus {
        background: #ed7878;
        color: ${Palette.NEUTRAL_N10};
      }
    }

    .react-calendar__tile--range {
      background: ${Palette.PRIMARY_P10};
      color: ${Palette.NEUTRAL_N10};
    }
  }

  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background: ${Palette.NEUTRAL_N40};
    color: #6d92c4;
    border-radius: 0.5em;
  }

  .react-calendar__tile--active {
    background: ${Palette.PRIMARY_P10};
    border-radius: 0.5em;
    font-weight: bold;
    color: ${Palette.NEUTRAL_N10};
    font-size: 12px;

    :enabled:hover,
    :enabled:focus {
      background: ${Palette.PRIMARY_P10};
      color: ${Palette.NEUTRAL_N10};
    }
  }
`;
