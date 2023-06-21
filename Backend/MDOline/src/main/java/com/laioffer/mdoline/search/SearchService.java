


@Service

public abstract class SearchService {
    DoctorService doctorService;

    public searchService(DoctorService doctorService) {
        this.doctorService = doctorService;
    }
    DoctorEntity searchDoctorByName(String firstname,String lastname) {
        doctorService.voidfunction(name)
    }
    List<DoctorEntity> searchDoctorBySpec(String spec) {
        doctorService.voidfunction(name)
    }
    List<DoctorEntity> searchDoctorByAll() {
        doctorService.voidfunction(name)
    }
}