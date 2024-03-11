const imageAssets: any = {
    droid: require('../assets/images/droid.jpeg'),
    wookiee: require('../assets/images/wookiee.jpeg'),
    human: require('../assets/images/human.jpeg'),
    noImage: require('../assets/images/no_image.png'),
};

export const handleImage = (key: string) => {
    return imageAssets[key] ?? imageAssets.noImage;
};
