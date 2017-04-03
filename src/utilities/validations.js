export const required = value => value ? undefined : 'Required';
const minimumLength = numberOfCharacters =>
  value => {
    return value && value.length < numberOfCharacters
      ? `Must be ${numberOfCharacters} characters or more`
      : undefined;
  };
export const minimumLength7 = minimumLength(7);
