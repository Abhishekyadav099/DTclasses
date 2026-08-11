package com.tradingedu.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "trading_signals")
@Data
@NoArgsConstructor
public class TradingSignal {

    public enum SignalStatus {
        ACTIVE, COMPLETED, FAILED
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "stock_name", nullable = false, length = 100)
    private String stockName;

    @Column(name = "entry_price", nullable = false, precision = 10, scale = 2)
    private BigDecimal entryPrice;

    @Column(name = "stop_loss", nullable = false, precision = 10, scale = 2)
    private BigDecimal stopLoss;

    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal target;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private SignalStatus status = SignalStatus.ACTIVE;

    @CreationTimestamp
    @Column(name = "date", updatable = false)
    private LocalDateTime date;
}
