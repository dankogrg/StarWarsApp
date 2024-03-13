const imageAssets: any = {
    droid: require('../assets/images/droid.jpeg'),
    wookiee: require('../assets/images/wookiee.jpeg'),
    human: require('../assets/images/human.jpeg'),
    noImage: require('../assets/images/no_image.png'),
    f1: require('../assets/images/the_phantom_menace.jpeg'),
    f2: require('../assets/images/attack_of_the_clones.jpeg'),
    f3: require('../assets/images/revenge_of_the_sith.jpeg'),
    f4: require('../assets/images/a_new_hope.jpeg'),
    f5: require('../assets/images/the_empire_strikes_back.jpeg'),
    f6: require('../assets/images/return_of_the_jedi.jpeg'),
    f7: require('../assets/images/the_force_awakens.jpeg'),
    f8: require('../assets/images/the_last_jedi.jpeg'),
    f9: require('../assets/images/the_rise_of_skywalker.jpeg'),
};

export const handleImage = (key: string) => {
    return imageAssets[key] ?? imageAssets.noImage;
};

export const convertToLocaleDateAndTime = (date: string, locale: string) => {
    const dateObj = new Date(date);

    return `${dateObj.toLocaleDateString(locale)} ${dateObj.toLocaleTimeString(
        locale,
    )}`;
};
