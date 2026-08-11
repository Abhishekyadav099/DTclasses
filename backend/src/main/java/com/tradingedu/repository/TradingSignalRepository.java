package com.tradingedu.repository;

import com.tradingedu.model.TradingSignal;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TradingSignalRepository extends JpaRepository<TradingSignal, Long> {
    List<TradingSignal> findByStatus(TradingSignal.SignalStatus status);
}
