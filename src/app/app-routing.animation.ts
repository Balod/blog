import { animate, group, query, style, transition, trigger } from "@angular/animations";

export const routAnimation = trigger(
    'routAnimation',
    [
        transition('* <=> *', [
            query(':enter', [style({ opacity: 0 })]),
            group([
                query(':leave', [
                    animate(
                        '1000ms ease',
                        style({ opacity: 0 })
                    )
                ], {optional: true}),
                query(':enter', [
                    animate(
                        '1000ms ease',
                        style({ opacity: 1 })
                    ),
                ]),
            ])
        ]),
    ]
);
