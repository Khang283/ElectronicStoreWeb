package backend.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class GetCommentByProductIdDTO {
    private Long commentId;
    private Long userId;
    private String commentDescription;
    private Long likes;
    private String replyTo;

}
