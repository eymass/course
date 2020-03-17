import { logger } from '../../logger';

export const success = (res, status) => entity => {
  logger.info('[success] Begin');
  if (entity) {
    logger.info('[success] Respond');
    res.status(status || 200).json(entity);
  }
  return null;
};

export const handleSaveResponse = (res, status) => (err, entity) => {
  logger.info('[successAndRespond] begin');
  if (err && !entity) {
    return generalError(err, res);
  }
  if (!err && entity) {
    return res.status(status || 200).json(entity);
  }
  res.end();
};

export const catchSaveError = res => (err, entity) => {
  logger.info('[successAndRespond] begin');
  if (err && !entity) {
    return generalError(err, res);
  }
  return entity;
};

export const successPopulate = (res, status) => (err, entity) => {
  if (err) {
    generalError(err, res);
  }
  if (entity) {
    res.status(status || 200).json(entity);
  }
  return null;
};

export const notFound = (res, type) => (entity) => {
  logger.info('[notFound] begin ' + (type && ('type: ' + type)));
  if (entity) {
    logger.info('[notFound] Entity found return entity');
    return entity;
  }
  logger.info('[notFound] entity is undefined return 404');
  generalError('Entity is not found of type: ' + type, res);
  return null;
};

export const authorOrAdmin = (res, user, userField) => entity => {
  logger.info('[authorOrAdmin] begin');
  if (entity) {
    const isAdmin = user.role === 'admin';
    logger.info('[authorOrAdmin] isAdmin: ' + isAdmin);
    const isAuthor = entity[userField] && entity[userField].equals(user.id);
    logger.info('[authorOrAdmin] isAuthor: ' + isAuthor);
    if (isAuthor || isAdmin) {
      logger.info('[authorOrAdmin] end return entity');
      return entity;
    }
    logger.info('[authorOrAdmin] 401 no entity');
    res.status(401).end();
  }
  return null;
};

export const generalError = (err, res) => {
  logger.info('[generalError] Begin');
  logger.info('[generalError] ' + err);
  res.status(400).json({
    errors: parseErrorObject(err),
    code: 400
  });
  logger.info('[generalError] End.');
  return null;
};

export const catchAndRespond = res => err => {
  logger.info('[catchAndRespond] Begin' + err);
  res.status(400).json({
    errors: parseErrorObject(err),
    code: 400
  });
};

const parseErrorObject = err => {
  if (err.errors) {
    if (err.errors.length) {
      return err.errors;
    }
    return [err.errors];
  }
  return [err];
};
