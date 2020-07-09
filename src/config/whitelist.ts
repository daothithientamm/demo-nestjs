
/**
 *  PAYLOAD WHITELIST
 *
 */
// for cats route
const CATS = {
  cats: {
    create: [
        'id',
        'name',
        'age',
        'breed'
    ],
  },
};


export const WHITELIST = {
  ...CATS,
};
