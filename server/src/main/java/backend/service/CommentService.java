package backend.service;

import backend.dao.CommentDAO;
import backend.dto.GetCommentByProductIdDTO;
import backend.dto.ProductListDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentService {
    @Autowired
    private CommentDAO commentDAO;

    public List<GetCommentByProductIdDTO> getCommentList (int productId) {
        List<GetCommentByProductIdDTO>commentListDTOS = commentDAO.getCommentByProductId(productId);
        if(commentListDTOS == null || commentListDTOS.isEmpty()){
            return null;
        }
        return commentListDTOS;
    }
}
