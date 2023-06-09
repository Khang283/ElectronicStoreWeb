package backend.dao;

import backend.dto.GetCommentByProductIdDTO;
import backend.models.Comments;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class CommentDAO {
    @Autowired
    private IComment _comment;
    public List<GetCommentByProductIdDTO> getCommentByProductId(int productId) {
        List<GetCommentByProductIdDTO> listCommentDTO =new ArrayList<>();
        List<Comments> listComment = _comment.getListCommentByProductId(productId);

        for (Comments lst: listComment) {
            GetCommentByProductIdDTO comment = new GetCommentByProductIdDTO();

            comment.setCommentDescription(lst.getCommentDescription());
            comment.setCommentId(lst.getCommentId());
            comment.setUserId(lst.getUserId());
            comment.setLikes(lst.getLikes());
            comment.setReplyTo(lst.getReplyTo());

            listCommentDTO.add(comment);
        }

        return listCommentDTO;
    }
}
