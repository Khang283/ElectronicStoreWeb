package backend.controllers;

import backend.dto.GetCommentByProductIdDTO;
import backend.dto.GetProductByIdDTO;
import backend.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api")
public class CommentsController {
    @Autowired
    private CommentService commentService;
    @GetMapping("/v1/product/{productId}/comment")
    public ResponseEntity<List<GetCommentByProductIdDTO>> getCommentByProductId(@PathVariable("productId")int productId) {
        List<GetCommentByProductIdDTO> listCommentDTO = new ArrayList<>();
        listCommentDTO = commentService.getCommentList(productId);

        if (listCommentDTO == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(listCommentDTO.stream().collect(Collectors.toList()));
    }
}
