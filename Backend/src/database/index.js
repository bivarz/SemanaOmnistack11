import knex from 'knex';
import knexConfig from '../../knexfile';

const conection = knex(knexConfig.development);

export default conection;
