import { Injectable } from '@angular/core';
import { TooltipOptions } from '../../tooltipOptions';

@Injectable({
  providedIn: 'root'
})
export class TooltipService {

  constructor() { }

  setPosition(
    element: HTMLElement,
    tooltipElement: HTMLElement,
    options: TooltipOptions
  ) {

    setTimeout(() => {

      const elementRect = element.getBoundingClientRect();
      const toolTipRect = tooltipElement.getBoundingClientRect();
      const toolTipStyle = tooltipElement.style;

      let verticalPos: number, horizontalPos: number;
      verticalPos = horizontalPos = 0;

      switch (options.position) {

        case 'top': {

          verticalPos = elementRect.top - toolTipRect.height - options.offsetInPx;
          horizontalPos = elementRect.left + (elementRect.width - toolTipRect.width) / 2;

          break;

        }
        case 'right': {

          verticalPos = elementRect.top + (elementRect.height - toolTipRect.height) / 2;
          horizontalPos = elementRect.left + elementRect.width + options.offsetInPx;

          break;

        }
        case 'bottom': {

          verticalPos = elementRect.top + elementRect.height + options.offsetInPx;
          horizontalPos = elementRect.left + (elementRect.width - toolTipRect.width) / 2;

          break;

        }
        case 'left': {

          verticalPos = elementRect.top + (elementRect.height - toolTipRect.height) / 2;
          horizontalPos = elementRect.left - toolTipRect.width - options.offsetInPx;

          break;

        }

      }

      toolTipStyle.top = `${verticalPos}px`;
      toolTipStyle.left = `${horizontalPos}px`;

      tooltipElement.classList.add(`tooltip-${options.position}`);

    }, options.delay);

  }

}
