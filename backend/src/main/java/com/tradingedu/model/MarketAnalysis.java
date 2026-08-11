package com.tradingedu.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Entity
@Table(name = "market_analysis")
@Data
@NoArgsConstructor
public class MarketAnalysis {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String description;

    @Column(columnDefinition = "TEXT")
    private String image;

    @Column(name = "video_url", columnDefinition = "TEXT")
    private String videoUrl;

    @CreationTimestamp
    @Column(name = "date", updatable = false)
    private LocalDateTime date;
}
