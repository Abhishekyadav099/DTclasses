package com.tradingedu.controller;

import com.tradingedu.model.Course;
import com.tradingedu.model.Lesson;
import com.tradingedu.repository.CourseRepository;
import com.tradingedu.repository.LessonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/v1/courses")
public class CourseController {

    @Autowired
    CourseRepository courseRepository;

    @Autowired
    LessonRepository lessonRepository;

    @GetMapping
    public List<Course> getAllCourses() {
        return courseRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Course> getCourseById(@PathVariable("id") Long id) {
        return courseRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public Course createCourse(@RequestBody Course course) {
        return courseRepository.save(course);
    }

    @GetMapping("/{courseId}/lessons")
    @PreAuthorize("hasRole('STUDENT') or hasRole('ADMIN')")
    public List<Lesson> getCourseLessons(@PathVariable("courseId") Long courseId) {
        return lessonRepository.findByCourseId(courseId);
    }

    @PostMapping("/{courseId}/lessons")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Lesson> addLessonToCourse(@PathVariable("courseId") Long courseId, @RequestBody Lesson lessonRequest) {
        return courseRepository.findById(courseId).map(course -> {
            lessonRequest.setCourse(course);
            return ResponseEntity.ok(lessonRepository.save(lessonRequest));
        }).orElse(ResponseEntity.notFound().build());
    }
}
