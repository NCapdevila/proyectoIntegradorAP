
package com.portfolio.nrc.Service;

import com.portfolio.nrc.Entity.Persona;
import com.portfolio.nrc.Interface.IPersonaService;
import com.portfolio.nrc.Repository.IPersonaRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ImpPersonaService implements IPersonaService{
    @Autowired IPersonaRepository iPersonaRepository;
    @Override
    public List<Persona> getPersona() {
       List <Persona> person = iPersonaRepository.findAll();
       return person;
    }

    @Override
    public void savePersona(Persona persona) {
        iPersonaRepository.save(persona);
    }

    @Override
    public void deletePersona(Long id) {
        iPersonaRepository.deleteById(id);
    }

    @Override
    public Persona findPersona(Long id) {
        Persona persona = iPersonaRepository.findById(id).orElse(null);
        return persona;
    }   

} 
