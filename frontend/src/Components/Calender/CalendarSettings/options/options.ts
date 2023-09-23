import { useTranslation } from 'react-i18next';

const currentYear = new Date().getFullYear();
export const optionYyears: Record<'value' | 'label', string>[] = [];

for (let year = 1934; year <= currentYear; year++) {
  optionYyears.push({ value: year.toString(), label: year.toString() });
}

export const OptionsMonth = () => {
  const { t } = useTranslation();
  const optionsMonth = [
    {
      value: t('calendar.monthes.january'),
      label: t('calendar.monthes.january'),
    },
    {
      value: t('calendar.monthes.february'),
      label: t('calendar.monthes.february'),
    },
    {
      value: t('calendar.monthes.march'),
      label: t('calendar.monthes.march'),
    },
    {
      value: t('calendar.monthes.april'),
      label: t('calendar.monthes.april'),
    },
    {
      value: t('calendar.monthes.may'),
      label: t('calendar.monthes.may'),
    },
    {
      value: t('calendar.monthes.june'),
      label: t('calendar.monthes.june'),
    },
    {
      value: t('calendar.monthes.july'),
      label: t('calendar.monthes.july'),
    },
    {
      value: t('calendar.monthes.august'),
      label: t('calendar.monthes.august'),
    },
    {
      value: t('calendar.monthes.september'),
      label: t('calendar.monthes.september'),
    },
    {
      value: t('calendar.monthes.october'),
      label: t('calendar.monthes.october'),
    },
    {
      value: t('calendar.monthes.november'),
      label: t('calendar.monthes.november'),
    },
    {
      value: t('calendar.monthes.december'),
      label: t('calendar.monthes.december'),
    },
  ];

  return optionsMonth;
};

export const optionsDays = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
  { value: '5', label: '5' },
  { value: '6', label: '6' },
  { value: '7', label: '7' },
  { value: '8', label: '8' },
  { value: '9', label: '9' },
  { value: '10', label: '10' },
  { value: '11', label: '11' },
  { value: '12', label: '12' },
  { value: '13', label: '13' },
  { value: '14', label: '14' },
  { value: '15', label: '15' },
  { value: '16', label: '16' },
  { value: '17', label: '17' },
  { value: '18', label: '18' },
  { value: '19', label: '19' },
  { value: '20', label: '20' },
  { value: '21', label: '21' },
  { value: '22', label: '22' },
  { value: '23', label: '23' },
  { value: '24', label: '24' },
  { value: '25', label: '25' },
  { value: '26', label: '26' },
  { value: '27', label: '27' },
  { value: '28', label: '28' },
  { value: '29', label: '29' },
  { value: '30', label: '30' },
  { value: '31', label: '31' },
];
