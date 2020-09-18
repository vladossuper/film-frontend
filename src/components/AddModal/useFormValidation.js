import { useState, useEffect } from 'react';

export const useFormValidation = (errors) => {
  const [titleError, handleTitleError] = useState(false);
  const [releaseYearError, handleReleaseYearError] = useState(false);
  const [formatError, handleFormatError] = useState(false);
  const [starsError, handleStarsError] = useState(false);

  useEffect(() => {
    if (errors.title && errors.title.type === 'required') {
      handleTitleError(true);
    } else {
      handleTitleError(false);
    }
    
    if (errors.release_year && errors.release_year.type === 'required') {
      handleReleaseYearError(true);
    } else {
      handleReleaseYearError(false)
    }

    if (errors.format && errors.format.type === 'required') {
      handleFormatError(true);
    } else {
      handleFormatError(false);
    }

    if (errors.stars && errors.stars.type === 'required') {
      handleStarsError(true);
    } else {
      handleStarsError(false);
    }
    
  }, [errors.title, titleError, errors.release_year, errors.format, errors.stars]);

  return {
    titleError,
    releaseYearError,
    formatError,
    starsError
  }
}