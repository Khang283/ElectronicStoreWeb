package backend.controllers;

import backend.dto.*;
import backend.service.CommentService;
import backend.service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api")
public class ReviewController {
    @Autowired
    private ReviewService reviewService;
    @GetMapping("/v1/product/{productId}/review")
    public ResponseEntity<List<GetReviewDTO>> getReviewByProductId(@PathVariable("productId")int productId) {
        List<GetReviewDTO> listReviewDTO = new ArrayList<>();
        listReviewDTO =reviewService.getReviewByProductId(productId);

        if (listReviewDTO == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(listReviewDTO.stream().collect(Collectors.toList()));
    }

    @PostMapping("/v1/product/addreview")
    public ResponseEntity<String>insertReview(@RequestBody addReviewDTO insertReviewDTO){
        if (reviewService.insertReview(insertReviewDTO)) {
            return ResponseEntity.ok("Đã thêm thành công");
        }
        return ResponseEntity.badRequest().build();
    }

    @PutMapping("/v1/product/updatereview")
    public ResponseEntity<String>updateReview(@RequestBody UpdateReviewDTO updateReviewDTO){
        if (reviewService.updateReview(updateReviewDTO)) {
            return ResponseEntity.ok("Đã sửa thành công");
        }
        return ResponseEntity.badRequest().build();
    }

    @DeleteMapping("/v1/product/deletereview/{reviewId}")
    public ResponseEntity<String>deleteReview(@PathVariable("reviewId") int reviewId){
        if (reviewService.deleteReview((long) reviewId)) {
            return ResponseEntity.ok("Đã xóa thành công");
        }
        return ResponseEntity.badRequest().build();
    }
}
