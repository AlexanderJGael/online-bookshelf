const { saveBook } = require('../controllers/user-controller');
const { User } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
	Query: {
		me: async (parent, args, context) => {
			if (context.user) {
				const userData = await User.findOne({ _id: context.user._id }).select(
					'-__v -password'
				);
				return userData;
			}
		},
	},

	Mutation: {
		addUser: async (parents, { username, email, password }) => {
			const user = await User.create({ username, email, password });
			const token = signToken(user);
			return { token, user };
		},

		login: async (parent, { email, password }) => {
			const user = await User.findOne({ email });

			if (!user) {
				throw AuthenticationError;
			}

			const correctPw = await user.isCorrectPassword(password);

			if (!correctPw) {
				throw AuthenticationError;
			}

			const token = signToken(user);

			return { token, user };
		},

		saveBook: async (parent, { book }, context) => {
			if (context.user) {
				return User.findOneAndUpdate(
					{ _id: context.user._id },
					{
						$addToSet: { savedBooks: book },
					},
					{
						new: true,
						runValidators: true,
					}
				);
			}
			throw AuthenticationError;
		},

		removeBook: async (parent, { bookId }, context) => {
			if (context.user) {
				return User.findOneAndUpdate(
					{ _id: context.user._id },
					{
						$pull: { savedBooks: { bookId: bookId }},
					},
					{ new: true }
				);
			}
			throw AuthenticationError;
		},
	},
};

module.exports = resolvers;
