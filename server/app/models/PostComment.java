////////
// This sample is published as part of the blog article at www.toptal.com/blog
// Visit www.toptal.com/blog and subscribe to our newsletter to read great posts
////////

package models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import play.db.ebean.Model;

/**
 * Model representing Comments to Blog Posts
 */
@Entity
public class PostComment extends Model {

  @Id
  public Long id;

  @ManyToOne
  @JsonIgnore
  public BlogPost blogPost;

  @ManyToOne
  public User user;

  @Column(columnDefinition = "TEXT")
  public String content;

  public static final Finder<Long, PostComment> find = new Finder<Long, PostComment>(
      Long.class, PostComment.class);

  public static List<PostComment> findAllCommentsByPost(final BlogPost blogPost) {
    return find
        .where()
        .eq("post", blogPost)
        .findList();
  }

  public static List<PostComment> findAllCommentsByUser(final User user) {
    return find
        .where()
        .eq("user", user)
        .findList();
  }

}
