import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  protected housingLocationList: HousingLocation[] = [
    {
      id: 0,
      name: 'Toshiba e-STUDIO 339cs',
      imageSrc: `https://toshibasa.co.za/wp-content/uploads/toshiba-e-STUDIO339CS-3.webp`,
      color: true,
      functions: ['copy', 'print', 'scan', 'fax'],
      specs: {
        printSpeed: 'up to 33ppm A4',
        paperSize: 'A4',
        display: '10.9cm e-task colour touchscreen',
        memory: '6GB max',
        scanFeatures: [
          'dual scan',
          'single pass document feed',
          'scan to and print from USB',
        ],
        additionalFeatures: ['Email/FTP/Windows network folder'],
      },
    },
    {
      id: 1,
      name: 'Toshiba e-STUDIO 330AC',
      imageSrc: `https://toshibasa.co.za/wp-content/uploads/330AC_400AC_-award-e1726671269121.webp`,
      color: true,
      functions: ['copy', 'print', 'scan'],
      specs: {
        printSpeed: '33ppm',
        paperSize: null,
        display: '10.1” TabletStyle touchscreen',
        memory: null,
        scanFeatures: [
          'dual scan document feeder',
          'scan to and print from USB',
        ],
        additionalFeatures: [
          'Advanced e-BRIDGE Next Technology',
          'MultiStation print enabler',
          'Smart mobile & cloud connectivity',
          'Toshiba’s secure hard disk',
        ],
      },
    },
    {
      id: 2,
      name: 'Toshiba e-STUDIO 2021/2521AC',
      imageSrc: `https://toshibasa.co.za/wp-content/uploads/toshiba-estudio-2020-2.webp`,
      color: true,
      functions: ['copy', 'print', 'scan'],
      specs: {
        printSpeed: '20/25ppm full colour/B&W',
        paperSize: 'A4/A3',
        display: '10.1” customizable touchscreen',
        memory: '4GB RAM + 128GB SSD',
        scanFeatures: ['scan to file/USB/email'],
        additionalFeatures: [
          'Network print with universal driver',
          '10,000 user codes',
          'Low power mode',
          'Optional saddle stitch finishing',
          'Paper storage indicator',
        ],
      },
    },
    {
      id: 3,
      name: 'Toshiba e-STUDIO 3025-4525AC',
      imageSrc: `https://toshibasa.co.za/wp-content/uploads/toshiba-estudio-3025AC-1.webp`,
      color: true,
      functions: ['copy', 'print', 'scan'],
      specs: {
        printSpeed: '30/35/45ppm colour',
        paperSize: 'A4/A3',
        display: 'smart phone-like user interface',
        memory: null,
        scanFeatures: ['mobile printing', 'WiFi direct'],
        additionalFeatures: [
          'Print preview on user interface',
          'Two network interfaces',
          'Annotation/stamp',
          'Universal print from Microsoft',
          'Native print from Chrome OS',
          'Remote assistant on home UI',
        ],
      },
    },
    {
      id: 4,
      name: 'Toshiba e-STUDIO 5526/6526AC',
      imageSrc: `https://toshibasa.co.za/wp-content/uploads/toshiba-estudio-3025AC-1.webp`,
      color: true,
      functions: ['copy', 'print', 'scan'],
      specs: {
        printSpeed: '55/65ppm colour',
        paperSize: 'A4/A3',
        display: null,
        memory: '6GB RAM with 128GB SSD',
        scanFeatures: ['single pass dual scan @ 240spm'],
        additionalFeatures: [
          'Thick paper support 300gsm',
          'Cloud-based device management',
          'Anti-malware',
          'Remote services via “Remote Assistant” APP',
        ],
      },
    },
    {
      id: 5,
      name: 'Toshiba e-STUDIO 6526/7527AC',
      imageSrc: `https://toshibasa.co.za/wp-content/uploads/toshiba-estudio-3025AC-1.webp`,
      color: true,
      functions: ['copy', 'print', 'scan'],
      specs: {
        printSpeed: '65/75ppm full colour, 85/95ppm B&W',
        paperSize: 'A4/A3',
        display: null,
        memory: null,
        scanFeatures: ['network scan @ 120spm 300dpi'],
        additionalFeatures: [
          'True 1200x1200dpi',
          'PCL6/e/c, PS3, XPS universal print',
          'High compression & secure PDF scan',
          'Low power consumption',
          'Airprint/Mopria',
        ],
      },
    },
  ];
  protected housingLocationList2: HousingLocation[] = [
    {
      id: 6,
      name: 'e-STUDIO 409S',
      imageSrc: `https://toshibasa.co.za/wp-content/uploads/toshiba-estudio-409S-3.webp`,
      color: false,
      functions: ['copy', 'print', 'scan', 'fax'],
      specs: {
        printSpeed: '40ppm',
        paperSize: 'A4',
        display: 'Colour touchscreen interface',
        memory: '512MB',
        scanFeatures: [
          'dual scan',
          'single pass document feed',
          'scan to and print from USB',
        ],
        additionalFeatures: [
          'PCL5e/PCL6/PS3 emulation',
          '1GHz DualCore processor',
          'Email/FTP/Windows network folder',
        ],
      },
    },
    {
      id: 7,
      name: 'e-STUDIO 2822AF',
      imageSrc: `https://toshibasa.co.za/wp-content/uploads/toshiba-estudio-2822AF-4.webp`,
      color: false,
      functions: ['copy', 'print', 'scan', 'fax'],
      specs: {
        printSpeed: '28ppm',
        paperSize: 'A4/A3',
        display: null,
        memory: '512MB',
        scanFeatures: [
          'dual scan',
          'reverse document feed',
          'scan to USB/email/folder',
        ],
        additionalFeatures: [
          'ID Copy',
          'Security/User/Device Management',
          'Duplex print',
        ],
      },
    },
    {
      id: 8,
      name: 'e-STUDIO 2329',
      imageSrc: `https://toshibasa.co.za/wp-content/uploads/toshiba-estudio-2329A-4.webp`,
      color: false,
      functions: ['copy', 'print', 'scan'],
      specs: {
        printSpeed: '23ppm',
        paperSize: 'A4',
        display: null,
        memory: '512MB',
        scanFeatures: ['scan to and print from USB'],
        additionalFeatures: [
          'Department code & device control',
          'Optional reverse document feeder',
          'Duplex print',
          '2:1/4:1 reduce paper consumption',
          'Large paper supply (Option)',
        ],
      },
    },
    {
      id: 9,
      name: 'e-STUDIO 2528A/4528A',
      imageSrc: `https://toshibasa.co.za/wp-content/uploads/toshiba-estudio-2528A_3528A_4528A_1.webp`,
      color: false,
      functions: ['copy', 'print', 'scan'],
      specs: {
        printSpeed: '25/30/35/45ppm',
        paperSize: 'A4/A3',
        display: '26cm interactive user interface',
        memory: '112GB SSD',
        scanFeatures: ['mobile printing', 'WiFi direct'],
        additionalFeatures: [
          'Embedded OCR',
          'Scan and fax preview',
          'Cloud-ready and secure',
          'Remote assistance and diagnostics',
        ],
      },
    },
    {
      id: 10,
      name: 'e-STUDIO 5528A/6529A',
      imageSrc: `https://toshibasa.co.za/wp-content/uploads/toshiba-estudio-2528A_3528A_4528A_1.webp`,
      color: false,
      functions: ['copy', 'print', 'scan'],
      specs: {
        printSpeed: '55/65ppm',
        paperSize: 'A4/A3',
        display: '26cm interactive user interface',
        memory: '112GB SSD',
        scanFeatures: ['single pass dual scan @ 240spm'],
        additionalFeatures: [
          'Automatic motion sensor',
          'Cloud-based device management',
          '300gsm paper',
          'Environmental toner recycling',
        ],
      },
    },
    {
      id: 11,
      name: 'e-STUDIO 7529A/9029A',
      imageSrc: `https://toshibasa.co.za/wp-content/uploads/toshiba-estudio-9029A-2.webp`,
      color: false,
      functions: ['copy', 'print', 'scan'],
      specs: {
        printSpeed: '75/90ppm',
        paperSize: 'A4/A3',
        display: null,
        memory: null,
        scanFeatures: ['single pass dual scan @ 240spm'],
        additionalFeatures: [
          'Up to 8020 paper capacity',
          'Versatile finishing options',
          'User codes with reporting',
          'Environmental toner recycling',
        ],
      },
    },
    {
      id: 12,
      name: 'e-STUDIO e-STUDIO 220CS',
      imageSrc: `https://toshibasa.co.za/wp-content/uploads/toshiba-eS220CS_1.webp`,
      color: false,
      functions: ['copy', 'print', 'scan'],
      specs: {
        printSpeed: '22ppm',
        paperSize: 'A4',
        display: '2.8" Touch screen',
        memory: "(Std/Max) 512MB / 512MB",
        scanFeatures: ['single pass dual scan @ 240spm'],
        additionalFeatures: [
          '251 paper capacity',
          'Versatile finishing options',
          'User codes with reporting',
          'Environmental toner recycling',
        ],
      },
    },
  ];
  getAllHousingLocations(): HousingLocation[] {
    return this.housingLocationList;
  }
  getAllHousingLocations2(): HousingLocation[] {
    return this.housingLocationList2;
  }
  getHousingLocationById(id: number): HousingLocation | undefined {
    if (id > 5) {
      return this.housingLocationList2.find(
        (housingLocation) => housingLocation.id === id
      );
    }
    return this.housingLocationList.find(
      (housingLocation) => housingLocation.id === id
    );
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`
    );
  }
}
