import React from 'react';
import cn from 'classnames';

import { StepItem } from './index';

interface StepProps {
  step: StepItem;
  current?: Boolean;
  active?: Boolean;
  isFirst?: Boolean;
  onClick: Function;
}

export function Step({ step, current, active, isFirst, onClick }: StepProps) {
  return (
    <li
      className={cn(
        'tw-flex tw-items-center tw-cursor-pointer tw-transition tw-duration-700 tw-ease-in-out',
        {
          'tw-opacity-25': !active,
          'tw-font-bold': current,
        },
      )}
      style={{ height: 64 }}
      onClick={() => onClick()}
    >
      <div style={{ width: 36 }}>
        <span className="tw-flex tw-items-center tw-justify-center tw-w-5 tw-h-5 tw-border tw-rounded-50% tw-transform tw-relative tw-border-transparent">
          {!isFirst && (
            <span
              className="tw-h-8 tw-bg-white tw-absolute tw--top-1.5 tw-left-0 tw-right-0 tw-mx-auto tw-transform tw--translate-y-full tw--translate-x-1/2"
              style={{ width: 1 }}
            ></span>
          )}
          <span
            className={cn(
              'tw-absolute tw-border-white tw-rounded-50% tw-bg-white tw-inline-block tw-transition tw-duration-700 tw-ease-in-out',
              {
                'tw-w-2 tw-h-2': !active,
                'tw-w-2.5 tw-h-2.5': !!active,
                'tw-scale-0': step?.icon,
                'tw-scale-100': !step?.icon,
              },
            )}
          ></span>

          <span
            className={cn(
              'tw-absolute tw-flex tw-items-center tw-justify-center tw-transform tw-border-white tw-w-4 tw-h-4 tw-rounded-50% tw-transition tw-duration-700 tw-ease-in-out',
              {
                'tw-scale-0': !step?.icon,
                'tw-scale-125': step?.icon,
              },
            )}
          >
            {step?.icon}
          </span>
        </span>
      </div>

      {step?.title || step.stepTitle}
    </li>
  );
}
