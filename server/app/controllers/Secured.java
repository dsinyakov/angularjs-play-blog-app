////////
// This sample is published as part of the blog article at www.toptal.com/blog
// Visit www.toptal.com/blog and subscribe to our newsletter to read great posts
////////

package controllers;

import play.mvc.Http.Context;
import play.mvc.Result;
import play.mvc.Security;

/**
 * Implements basic authentication
 */
public class Secured extends Security.Authenticator {

  @Override
  public String getUsername(Context ctx) {
    return ctx.session().get("username");
  }

  @Override
  public Result onUnauthorized(Context ctx) {
    return unauthorized();
  }
}
