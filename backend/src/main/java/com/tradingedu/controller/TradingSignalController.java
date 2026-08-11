package com.tradingedu.controller;

import com.tradingedu.model.TradingSignal;
import com.tradingedu.repository.TradingSignalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/v1/signals")
public class TradingSignalController {

    @Autowired
    TradingSignalRepository tradingSignalRepository;

    @GetMapping
    @PreAuthorize("hasRole('STUDENT') or hasRole('ADMIN')")
    public List<TradingSignal> getActiveSignals() {
        return tradingSignalRepository.findByStatus(TradingSignal.SignalStatus.ACTIVE);
    }

    @GetMapping("/all")
    @PreAuthorize("hasRole('ADMIN')")
    public List<TradingSignal> getAllSignals() {
        return tradingSignalRepository.findAll();
    }

    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public TradingSignal createSignal(@RequestBody TradingSignal signal) {
        return tradingSignalRepository.save(signal);
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<TradingSignal> updateSignalStatus(@PathVariable("id") Long id, @RequestBody TradingSignal signalDetails) {
        return tradingSignalRepository.findById(id).map(signal -> {
            signal.setStatus(signalDetails.getStatus());
            return ResponseEntity.ok(tradingSignalRepository.save(signal));
        }).orElse(ResponseEntity.notFound().build());
    }
}
