import { schemaComposer } from "graphql-compose";
import UserModel from "./models/user";
import ReviewListModel from "./models/reviewList";
import ProjectModel from "./models/project";
import PointOutModel from "./models/pointout";
import CheckListModel from "./models/checkList";
import { composeWithMongoose } from "graphql-compose-mongoose";

const customizationOptions = {};
const User = composeWithMongoose(UserModel, customizationOptions);
const ReviewList = composeWithMongoose(ReviewListModel, customizationOptions);
const Project = composeWithMongoose(ProjectModel, customizationOptions);
const Pointout = composeWithMongoose(PointOutModel, customizationOptions);
const CheckList = composeWithMongoose(CheckListModel, customizationOptions);

schemaComposer.Query.addFields({
    userById: User.getResolver('findById'),
    userByIds: User.getResolver('findByIds'),
    userOne: User.getResolver('findOne'),
    userMany: User.getResolver('findMany'),
    userCount: User.getResolver('count'),
    userPagination: User.getResolver('pagination'),
    reviewListById: ReviewList.getResolver('findById'),
    reviewListByIds: ReviewList.getResolver('findByIds'),
    reviewListOne: ReviewList.getResolver('findOne'),
    reviewListMany: ReviewList.getResolver('findMany'),
    reviewListCount: ReviewList.getResolver('count'),
    reviewListPagination: ReviewList.getResolver('pagination'),
    projectById: Project.getResolver('findById'),
    projectByIds: Project.getResolver('findByIds'),
    projectOne: Project.getResolver('findOne'),
    projectMany: Project.getResolver('findMany'),
    projectCount: Project.getResolver('count'),
    projectPagination: Project.getResolver('pagination'),
    pointoutById: Pointout.getResolver('findById'),
    pointoutByIds: Pointout.getResolver('findByIds'),
    pointoutOne: Pointout.getResolver('findOne'),
    pointoutMany: Pointout.getResolver('findMany'),
    pointoutCount: Pointout.getResolver('count'),
    pointoutPagination: Pointout.getResolver('pagination'),
    checkListByIds: CheckList.getResolver('findByIds'),
    checkListOne: CheckList.getResolver('findOne'),
    checkListMany: CheckList.getResolver('findMany'),
    checkListCount: CheckList.getResolver('count'),
    checkListPagination: CheckList.getResolver('pagination'),
});

schemaComposer.Mutation.addFields({
    userCreate: User.getResolver('createOne'),
    userCreateMany: User.getResolver('createMany'),
    userUpdateById: User.getResolver('updateById'),
    userUpdateOne: User.getResolver('updateOne'),
    userUpdateMany: User.getResolver('updateMany'),
    userRemoveById: User.getResolver('removeById'),
    userRemoveOne: User.getResolver('removeOne'),
    userRemoveMany: User.getResolver('removeMany'),
    reviewListCreate: ReviewList.getResolver('createOne'),
    reviewListCreateMany: ReviewList.getResolver('createMany'),
    reviewListUpdateById: ReviewList.getResolver('updateById'),
    reviewListUpdateOne: ReviewList.getResolver('updateOne'),
    reviewListUpdateMany: ReviewList.getResolver('updateMany'),
    reviewListRemoveById: ReviewList.getResolver('removeById'),
    reviewListRemoveOne: ReviewList.getResolver('removeOne'),
    reviewListRemoveMany: ReviewList.getResolver('removeMany'),
    projectCreate: Project.getResolver('createOne'),
    projectCreateMany: Project.getResolver('createMany'),
    projectUpdateById: Project.getResolver('updateById'),
    projectUpdateOne: Project.getResolver('updateOne'),
    projectUpdateMany: Project.getResolver('updateMany'),
    projectRemoveById: Project.getResolver('removeById'),
    projectRemoveOne: Project.getResolver('removeOne'),
    projectRemoveMany: Project.getResolver('removeMany'),
    pointoutCreate: Pointout.getResolver('createOne'),
    pointoutCreateMany: Pointout.getResolver('createMany'),
    pointoutUpdateById: Pointout.getResolver('updateById'),
    pointoutUpdateOne: Pointout.getResolver('updateOne'),
    pointoutUpdateMany: Pointout.getResolver('updateMany'),
    pointoutRemoveById: Pointout.getResolver('removeById'),
    pointoutRemoveOne: Pointout.getResolver('removeOne'),
    pointoutRemoveMany: Pointout.getResolver('removeMany'),
    checkListCreate: CheckList.getResolver('createOne'),
    checkListCreateMany: CheckList.getResolver('createMany'),
    checkListUpdateById: CheckList.getResolver('updateById'),
    checkListUpdateOne: CheckList.getResolver('updateOne'),
    checkListUpdateMany: CheckList.getResolver('updateMany'),
    checkListRemoveById: CheckList.getResolver('removeById'),
    checkListRemoveOne: CheckList.getResolver('removeOne'),
    checkListRemoveMany: CheckList.getResolver('removeMany'),
});

const buildAsyncSchema = async () => { return schemaComposer.buildSchema()};

export default buildAsyncSchema;