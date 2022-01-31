/**
 * Object with the WOEID locations to be available on the app's dropdown list.
 *
 * The locations (capital cities) are grouped by continent and it must be set as an attribute of the <select-componet>
 * component. If the attribute is not set or it's value is not available, there will be no options
 * available on the component.
 *
 * The value of the continet attribute must be one of main keys of the following object.
 */
export const locationOptions = {
  eu: [
    { text: 'Amsterdam', value: '727232' },
    { text: 'Berlin', value: '638242' },
    { text: 'Brussels', value: '968019' },
    { text: 'Dublin', value: '560743' },
    { text: 'Edinburgh', value: '19344' },
    { text: 'Lisboa', value: '742676' },
    { text: 'London', value: '44418' },
    { text: 'Madrid', value: '766273' },
    { text: 'Paris', value: '615702' },
    { text: 'Rome', value: '721943' },
    { text: 'Viena', value: '551801' },
    { text: 'Zurich', value: '784794' },
  ],
  af: [
    { text: 'Abidjan', value: '1339615' },
    { text: 'Addis Ababa', value: '1313090' },
    { text: 'Cairo', value: '1521894' },
    { text: 'Cape Town', value: '1591691' },
    { text: 'Casablanca', value: '1532755' },
    { text: 'Kinshasa', value: '1290062' },
    { text: 'Nairobi', value: '1528488' },
    { text: 'Lagos', value: '1398823' },
    { text: 'Windhoek', value: '1466719' },
  ],
};
