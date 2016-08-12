import '../packages/nova-i18n-en-us/lib/en_US.js';
import '../packages/nova-rss/lib/export.js';
import '../packages/nova-notifications/lib/export.js';
import '../packages/nova-search/lib/export.js';
import '../packages/nova-voting/lib/export.js';

import './routes';

import TelescopeImport from 'nova-lib';
import PostsImport from 'nova-posts';
import CommentsImport from 'nova-comments';
import UsersImport from 'nova-users';
import CategoriesImport from 'nova-categories';

window.Telescope = TelescopeImport;
window.Posts = PostsImport;
window.Comments = CommentsImport;
window.Users = UsersImport;
window.Categories = CategoriesImport;

/*
nova:core # do not remove!

############ Optional Packages ############

nova:users
nova:posts
nova:comments
nova:categories
# nova:forms # loaded by Webpack

nova:settings
nova:newsletter
nova:search
nova:notifications
nova:getting-started
nova:voting
nova:embedly
nova:api
nova:rss
nova:kadira
nova:email
nova:subscribe

############ Customizable Packages ############

# nova:base-components # loaded by Webpack
# nova:base-styles
# nova:base-routes

# nova:email-templates

nova:i18n-en-us

accounts-password
# accounts-twitter
# accounts-facebook

############ Debug Packages ############

# nova:debug
*/