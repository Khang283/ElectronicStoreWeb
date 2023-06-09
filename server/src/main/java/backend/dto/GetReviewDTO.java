package backend.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class GetReviewDTO {
    private Long reviewId;
    private String reviewContent;
    private Long reviewRating;
    private Long userId;
    private String userName;
    private Long likes;


}
