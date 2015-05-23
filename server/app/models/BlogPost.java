////////
// This sample is published as part of the blog article at www.toptal.com/blog
// Visit www.toptal.com/blog and subscribe to our newsletter to read great posts
////////

package models;

import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import play.data.validation.Constraints;
import play.db.ebean.Model;

/**
 * Model representing Blog Post
 */
@Entity
public class BlogPost extends Model {

  @Id
  public Long id;

  @Column(length = 255, nullable = false)
  @Constraints.MaxLength(255)
  @Constraints.Required
  public String subject;

  @Column(columnDefinition = "TEXT")
  @Constraints.Required
  public String content;

  @ManyToOne
  public User user;

  public Long commentCount;

  @OneToMany(cascade = CascadeType.ALL)
  public List<PostComment> comments;

  public static final Finder<Long, BlogPost> find = new Finder<Long, BlogPost>(
      Long.class, BlogPost.class);

  public static List<BlogPost> findBlogPostsByUser(final User user) {
    return find
        .where()
        .eq("user", user)
        .findList();
  }

  public static BlogPost findBlogPostById(final Long id) {
    return find
        .where()
        .eq("id", id)
        .findUnique();
  }

}
