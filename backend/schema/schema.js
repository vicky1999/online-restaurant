const graphql=require('graphql');

const {GraphQLSchema,GraphQLObjectType,GraphQLString, GraphQLID,GraphQLList} = graphql;

const dish=require('../models/dishes');

const DishType=new GraphQLObjectType({
    name: "Dishes",
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        type: {type: GraphQLString},
        description: {type: GraphQLString},
        price: {type: GraphQLString}
    })
})

const RootQuery=new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        name: {
            type: GraphQLString,
            resolve(parent,args) {
                return "Hello World!";
            }
        },
        dish: {
            type: GraphQLList(DishType),
            args: { by: {type: GraphQLString}},
            resolve(parent,args) {
                return dish.find({"by":args.by});
            }
        },
        types: {
            type: GraphQLList(GraphQLString),
            args: {by: {type: GraphQLString}},
            resolve(parent,args) {
                return dish.distinct("type",{"by":args.by});
            }
        },
        dishes: {
            type: GraphQLList(DishType),
            resolve(parent,args) {
                return dish.find();
            }
        }
    }
});

module.exports=new GraphQLSchema({
    query: RootQuery
})
