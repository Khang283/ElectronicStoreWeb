package backend.dao;

import backend.dto.GetReviewDTO;
import backend.dto.InsertAssetDTO;
import backend.dto.InsertSpecDTO;
import backend.dto.addReviewDTO;
import backend.models.Review;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class ReviewDAO {
    @Autowired
    private  IReview _review;
    @Autowired
    private  IUser _user;

    public List<GetReviewDTO> getReviewByProductId (int productId) {
        List<GetReviewDTO> listReviewDTO = new ArrayList<>();
        List<Review> listReview = _review.getReviewByProductId(productId);

        for (Review lst: listReview) {
            GetReviewDTO reviewDTO = new GetReviewDTO();
            reviewDTO.setReviewContent(lst.getReviewContent());
            reviewDTO.setReviewRating(lst.getReviewRating());
            reviewDTO.setReviewId(lst.getReviewId());
            reviewDTO.setLikes(lst.getLikes());
            reviewDTO.setUserId(lst.getUserId());
            reviewDTO.setUserName(_user.getUserByID(Math.toIntExact(lst.getUserId())).getUsername());

            listReviewDTO.add(reviewDTO);
        }

        return listReviewDTO;
    }

    public boolean insertReview(addReviewDTO review) {
        try {
            _review.insertReview(review.getReviewContent(), review.getReviewRating(), review.getUserId(), review.getProductId());
        }
        catch(Exception e){
            System.out.println("Error: "+e);
        }
        return true;
    }
}
