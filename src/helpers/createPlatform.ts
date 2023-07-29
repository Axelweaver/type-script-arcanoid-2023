import { Platform } from '../sprites';
import {
    PLATFORM_SPEED,
    PLATFORM_WIDTH,
    PLATFORM_HEIGHT,
    PLATFORM_STARTX,
    PLATFORM_COLOR
} from '../setup';

export default function createPlatform (canvasHeight: number): Platform {
    // Create a Platform
    const platform = new Platform(
        PLATFORM_SPEED,
        PLATFORM_WIDTH,
        PLATFORM_HEIGHT,
        {
            x: PLATFORM_STARTX,
            y: canvasHeight - PLATFORM_HEIGHT - 5
        },
        PLATFORM_COLOR
    );

    return platform;
}
