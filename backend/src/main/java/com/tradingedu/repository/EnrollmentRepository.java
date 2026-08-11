package com.tradingedu.repository;

import com.tradingedu.model.Enrollment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EnrollmentRepository extends JpaRepository<Enrollment, Long> {
    List<Enrollment> findByUserId(Long userId);
    Boolean existsByUserIdAndCourseId(Long userId, Long courseId);
}
