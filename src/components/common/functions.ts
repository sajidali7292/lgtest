export const hexToRgb = (hex) => {
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
        return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        }
        : null;
}

export const luminance = (rgbColor) => {
    var currentColor = 0.2126 * Math.pow(rgbColor.r / 255, 2.2) + 0.7152 * Math.pow(
        rgbColor.g / 255,
        2.2
    ) + 0.0722 * Math.pow(rgbColor.b / 255, 2.2);
    return currentColor;
}

export const contrastColor = (fColor, bgColor, hexColor, oColor) => {
    var contrastRatio = 0;
    if (fColor > bgColor) {
        contrastRatio = Number((fColor + 0.05) / (bgColor + 0.05));
    } else {
        contrastRatio = Number((bgColor + 0.05) / (fColor + 0.05));
    }

    if (contrastRatio > 12) {
        return 'rgb(' + (
            hexColor.r - 60
        ) + ',' + (
            hexColor.g - 70
        ) + ',' + (
            hexColor.b + 50
        ) + ')';
    } else {
        return oColor;
    }
}