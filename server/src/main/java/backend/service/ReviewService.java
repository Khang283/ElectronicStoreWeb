package backend.service;

import backend.dao.ReviewDAO;
import backend.dto.GetCommentByProductIdDTO;
import backend.dto.GetReviewDTO;
import backend.dto.UpdateReviewDTO;
import backend.dto.addReviewDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewService {
    @Autowired
    private ReviewDAO reviewDAO;

    public List<GetReviewDTO> getReviewByProductId(int productId) {
        List<GetReviewDTO> listReviewDTO = reviewDAO.getReviewByProductId(productId);
        if(listReviewDTO == null || listReviewDTO.isEmpty()){
            return null;
        }
        return listReviewDTO;
    }

    public boolean insertReview(addReviewDTO review) {
        return reviewDAO.insertReview(review);
    }

    public boolean updateReview(UpdateReviewDTO review) {
        return reviewDAO.updateReview(review);
    }

    public boolean deleteReview(Long reviewId) {
        return reviewDAO.deleteReview(reviewId);
    }
}
