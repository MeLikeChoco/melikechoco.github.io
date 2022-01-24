export type TooltipPosition = 'top' | 'right' | 'bottom' | 'left';

export type TooltipOptions = {

    position: TooltipPosition;
    delay: number;
    offsetInPx: number;

};

export function getDefaultTooltipOptions(): TooltipOptions {
    return {
        position: 'top',
        delay: 0,
        offsetInPx: 10
    }
}